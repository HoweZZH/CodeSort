"use strict"
/** @module */
// @cwu: To be reviewed

// chai is an assertion library for Node.js "assert" and browser  
let chai = require('chai');
// Extends Chai with a fluent language for asserting facts about promises  
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
// local alias for chai 
let expect = chai.expect
// local alias for assert 
let assert = require('assert');
// local alias for Protracto library of canned expected conditions 
let EC = protractor.ExpectedConditions;

let dataImportFromFile = new (require('../../page-objects/dataimport-pages/DataImportFromFile.js'))();

let { When, Then } = require('cucumber');

let path = require('path');
let { promiseWithTimeout } = require('./../base/StepUtilities.js');

Then(/^Create custom data page should show$/, async function () {
    let el = await dataImportFromFile.selectClipboardPage;
    await browser.wait(EC.presenceOf(el));
    await expect(el.isPresent()).become(true);
});

Then(/^Data Import Wizard should show "([^"]*)"$/, async function(filename) {
    let el = await dataImportFromFile.getFilesDropboxElement(filename);
    await browser.wait(EC.presenceOf(el));
    await expect(el.isPresent()).become(true);
});

Then(/^Data Import Wizard should show Choose files Button$/, async function() {
    let el = await dataImportFromFile.chooseFileButton;
    await browser.wait(EC.presenceOf(el));
    await expect(el.isPresent()).become(true);
});

Then(/^Data Import Wizard should show Upload URL textbox$/, async function () {
    let el = await dataImportFromFile.uploadURLTextbox;
    await browser.wait(EC.presenceOf(el));
    await expect(el.isPresent()).become(true);
});

Then(/^Data Import Wizard should show Upload your files area$/, async function () {
    let el = await dataImportFromFile.uploadYourFilesDropBox;
    await browser.wait(EC.presenceOf(el));
    await expect(el.isPresent()).become(true);
});

Then(/^Error message should contains "([^"]*)"$/, { timeout: -1 }, async function (msg) {
    let seconds = 10;

    let isContainsText = async (msg) => {
        dataImportFromFile.getTextOnErrorWindow().then((txt) => {
            expect(txt).to.contain(msg)
        });
    };

    await promiseWithTimeout(isContainsText(msg), undefined, (seconds) * 1000, `Could finish operation in ${seconds} seconds`);
});

Then(/^File Samples Window should show$/, async function () {
    let el = await dataImportFromFile.getCurrentDataImportWindow('File Samples');
    await browser.wait(EC.presenceOf(el));
    await expect(el.isPresent()).become(true);
});

Then(/^Import file should show Worksheet selector$/, async function () {
    let el = await dataImportFromFile.worksheetSelectorDialog;
    await browser.wait(EC.presenceOf(el));
    await expect(el.isPresent()).become(true);
});

Then(/^It should show Data Import Wizard window$/, async function () {
    let el = await dataImportFromFile.dataImportWizardForm;
    await browser.wait(EC.presenceOf(el));
    await expect(el.isPresent()).become(true);
});

Then(/^Preview page should show$/, async function () {
    let el = await dataImportFromFile.selectPreviewPage;
    await browser.wait(EC.presenceOf(el));
    await expect(el.isPresent()).become(true);
});

Then(/^The dataset panel should not have dataset "([^"]*)"$/, async function (datasetName) {
    let el = await dataImportFromFile.getDatasetElement(datasetName);
    await browser.wait(el.isPresent(), 2000);
    await expect(el.isPresent()).become(false);  
});

Then(/^The error window should pop up$/, async function () {
    let el = await dataImportFromFile.selectErrorPage;
    await browser.wait(EC.presenceOf(el));
    await expect(el.isPresent()).become(true);
});

Then(/^The worksheet "([^"]*)" should be selected$/, async function (worksheet) {
    let isSelected = await dataImportFromFile.isWorkSheetSelected(worksheet);
    assert.equal(isSelected, true);
});

Then(/^The worksheet "([^"]*)" should not be selected$/, async function (worksheet) {
    let isSelected = await dataImportFromFile.isWorkSheetSelected(worksheet);
    assert.equal(isSelected, false);
});

Then(/^Upload URL list should show "([^"]*)"$/, { timeout: browser.params.cucumberStepMaxTimeout }, async function (url) {
    let urlListElement = await dataImportFromFile.getUploadURLListElement(url);
    // Validate if svg files and taskproc are finished. (it could be near 30 seconds)
    let timesToPoll = 30;
    let secondBetweenPoll = 1;
    for (let poll = 1; poll < timesToPoll; poll++) {
        try {  
            await dataImportFromFile.clickOnElement(dataImportFromFile.uploadURLAddButton);
            await browser.wait(EC.presenceOf(urlListElement), secondBetweenPoll * 1000, `Poll ${poll} unsuccesfull;`);
            break;
        } catch (er) { }
    }
    await browser.wait(EC.presenceOf(urlListElement));
    await expect(urlListElement.isPresent()).become(true);
});

Then(/^Upload your files area should show "([^"]*)"$/, async function (filename) {
    let el = await dataImportFromFile.getFilesDropboxElement(filename);
    await browser.wait(EC.presenceOf(el));
    await expect(el.isPresent()).become(true);
});

When(/^I add to upload URL "([^"]*)"$/, async function (url) {
    await dataImportFromFile.addUploadURL(url);
});

When(/^I click Select button on select worksheet page$/,  async function() {
    await dataImportFromFile.clickWorksheetSelectorSelectButton();
});

When(/^I deselect all worksheets$/,  async function() {
    await dataImportFromFile.deselectAllWorksheets();
});

When(/^I finish editing cube preview$/, async function () {
    await dataImportFromFile.clickFinishOnPreview();
});

When(/^I finish import from clipboard$/, async function() {
    await dataImportFromFile.clickButtonOnClipboard("Finish");
});

When(/^I finish importing file and an error window pop up$/, async function () {
    await dataImportFromFile.clickFinishOnUploadFileWithError();
});

When(/^I finish importing file with worksheets from disk in (\d+) seconds$/, { timeout: -1 }, async function (seconds, table) {
    let rowsArray = table.hashes();

    let filename = rowsArray[0]['filename'];
    let filenameCurr, worksheet, worksheetNames = [];
    for (let dbInIx in rowsArray) {
        filenameCurr = rowsArray[dbInIx]['filename'];
        worksheet = rowsArray[dbInIx]['worksheetName'];

        worksheetNames.push(worksheet);
        
        if (filename !== filenameCurr) {
            throw 'file name should be same!'
        }
    }

    await promiseWithTimeout(dataImportFromFile.clickFinishOnUploadFileWithWorksheet(filename, worksheetNames) , true, (seconds) * 1000, `Could not add files in ${seconds} seconds`);

});

When(/^I finish selecting worksheets$/, async function () {
    await dataImportFromFile.clickWorksheetSelectorSelectButton();
});

When(/^I finish upload data from URL$/, async function () {
    await dataImportFromFile.clickFinishUpload();
});

When(/^I finish upload data from disk$/, async function() {
    await dataImportFromFile.finishUploadingYourFiles();
});

When(/^I finish upload your files$/, async function () {
    await dataImportFromFile.clickFinishLocalFileButton();
});

When(/^I import data from clipboard in (\d+) seconds$/, { timeout: -1 }, async function(seconds, table) {
    let rowsArray = table.hashes();

    // 2-d Array
    let data = [];    
    for (let dbInIx in rowsArray) {
        let currRow = rowsArray[dbInIx]['data'].split(',').map(x => x.trim());
        data.push(currRow);
    }
    
    await promiseWithTimeout(dataImportFromFile.importFromClipboard(data), true, (seconds) * 1000, `Could not add files in ${seconds} seconds`);
});

When(/^I import data from multiple files on disk$/, async function (table) {
    let rowsArray = table.hashes();

    let filenames = [];
    for (let dbInIx in rowsArray) {
        let absFilename = path.resolve(protractor.basePath, 'test-data/file-from-disk/', rowsArray[dbInIx]['filename']);
        filenames.push(absFilename);
    }

    await dataImportFromFile.importFileFromDisk(filenames);
});

When(/^I import data from multiple files on url$/, async function (table) {
    let rowsArray = table.hashes();

    let urls = [];
    for (let dbInIx in rowsArray) {
        urls.push(rowsArray[dbInIx]['url']);
    }

    await dataImportFromFile.importFileFromURL(urls);
});

When(/^I import data from multiple sample files$/, async function (table) {
    let rowsArray = table.hashes();

    let filenames = [];
    for (let dbInIx in rowsArray) {
        filenames.push(rowsArray[dbInIx]['filename']);
    }

    await dataImportFromFile.importFromSampleFile(filenames);
});

When(/^I import file from disk "([^"]*)"$/, async function(filename) {
    let absFilename = path.resolve(protractor.basePath, 'test-data/file-from-disk/', filename);
    await dataImportFromFile.importFileFromDisk(absFilename);
});

When(/^I import file from sample file "([^"]*)"$/, async function(filename) {
    await dataImportFromFile.importFromSampleFile(filename);
});

When(/^I import file from url "([^"]*)"$/, async function(url) {
    await dataImportFromFile.importFileFromURL(url);
});

When(/^I launch Clipboard$/, async function() {
    await dataImportFromFile.clickClipboardButton();
});  

When(/^I launch Data from URL$/, async function () {
    await dataImportFromFile.clickImportFromURLButton(); 
});

When(/^I launch File from Disk$/, async function() {
    await dataImportFromFile.clickFileFromDiskButton();
});

When(/^I launch Prepare Data tool on Data Import Wizard$/, async function () {
    await dataImportFromFile.clickPrepareDataButton()
});

When(/^I launch Sample Files$/,  async function() {
    await dataImportFromFile.clickImportFromSampleFilesButton();
})

When(/^I read details from error window in (\d+) seconds$/, { timeout: -1 }, async function (seconds) {
    await promiseWithTimeout(dataImportFromFile.clickErrorDetails(), undefined, (seconds) * 1000, `Could not finish operation in ${seconds} seconds`);
});

When(/^I select "([^"]*)" on clipboard page$/, async function (buttonName) {
    await dataImportFromFile.clickButtonOnClipboard(buttonName);
});

When(/^I select "([^"]*)" on error window$/, async function (buttonName) {
    await dataImportFromFile.clickButtonOnErrorWindow(buttonName);
});

When(/^I select "([^"]*)" on preview page$/, async function (buttonName) {
    await dataImportFromFile.clickButtonOnPreview(buttonName);
});

When(/^I select "([^"]*)" on sample file page$/, async function (buttonName) {
    await dataImportFromFile.clickButtonOnSampleFilePage(buttonName);
});

When(/^I select "([^"]*)" on upload file page$/, async function (buttonName) {
    await dataImportFromFile.clickButtonOnUploadFilePage(buttonName);
});

When(/^I select "([^"]*)" on worksheet page with group option "([^"]*)"$/, { timeout: browser.params.cucumberStepMaxTimeout }, async function (buttonName, isGroupSelected) {
    isGroupSelected = isGroupSelected === "selected" ? true : false;
    await dataImportFromFile.clickButtonOnWorksheetPage(buttonName, isGroupSelected);
});

When(/^I select "([^"]*)" on worksheet page$/,  async function (buttonName) {
    await dataImportFromFile.clickButtonOnWorksheetPage(buttonName);
});

When(/^I select multiple worksheets$/, async function (table) {
    let rowsArray = table.hashes();

    let filename = rowsArray[0]['filename'];
    let filenameCurr, worksheet, worksheetNames = [];
    for (let dbInIx in rowsArray) {
        filenameCurr = rowsArray[dbInIx]['filename'];
        worksheet = rowsArray[dbInIx]['worksheetName'];

        worksheetNames.push(worksheet);
        
        if (filename !== filenameCurr) {
            throw 'file name should be same!'
        }
    }
    
    await dataImportFromFile.selectWorkSheet(filename, worksheetNames);
});

When(/^I select worksheet "([^"]*)" in file "([^"]*)"$/,  async function(worksheetName, filename) {
    await dataImportFromFile.selectWorkSheet(filename, worksheetName);
});

