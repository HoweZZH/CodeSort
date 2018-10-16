
    /**
     * the input element of Choose files on 'Upload your files' window(triggered by click 'File from Disk')
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    get chooseFilesInput() {
        return element(by.xpath(`//input[@class='mstrmojo-FileUploadBox-file' and @type='file']`));
    }

    /**
     * 'Choose files' button on 'Upload your files' window.
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    get chooseFileButton() {
        return element(by.xpath(`//*[text()[contains(.,'hackForNoFileChosenTooltip')]]`));
    }

    /**
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */  
    get groupCheckboxONGroupTablesPage() {
        return element(by.xpath("//div[contains(@class, 'mstrmojo-Editor mstrmojo-di-partitiongroup-dialog modal')]//div[contains(@class, 'scroll-container mstrmojo-scrollNode')]//div[contains(@class, 'item') and .//span[contains(text(), 'Group')]]"));
    }

    /**
     * data import wizard form('Connect to Your Data' window)
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    get dataImportWizardForm() { 
        return element(by.xpath(`//div[contains(@class,'mstrmojo-Box mstrmojo-di-sourceGrid')]`));
    }
    
    /**
     * 'File from Disk' Bttton on 'Connect to Your Data' window 
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    get fileFromDiskButton() { 
        return element(by.xpath(`//div[contains(@class,'mstrmojo-Box mstrmojo-di-sourceGrid')]//div[@class='mstrmojo-di-source-item ds_disk enabled']`));
    }
    
    /**
     * 'Data from URL' Bttton on 'Connect to Your Data' window 
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    get importFromURLButton() { 
        return element(by.xpath(`//div[contains(@class,'mstrmojo-Box mstrmojo-di-sourceGrid')]//div[@class='mstrmojo-di-source-item ds_url enabled']`));
    }

    /**
     * 'Finish' button on 'Upload your files' window
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    get diskFileFinishButton() {
        return element(by.xpath(`//div[contains(@class,'mstrmojo-Button mstrmojo-di-button mstrmojo-WebButton')]/div[contains(@class,'mstrmojo-Button-text') and text()='Finish']`));
    }

    /**
     * 'Prepare' button on 'Upload your files' window
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    get diskFilePrepareButton() {
        return element(by.xpath(`//div[contains(@class,'mstrmojo-Button mstrmojo-di-button mstrmojo-WebButton')]/div[contains(@class,'mstrmojo-Button-text') and text()='Prepare Data']`));
    }


    /**
     * 'Sample Files' button on 'Connect to your Data' window.
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    get sampleFileButton() {
        return element(by.xpath(`//div[contains(@class, 'mstrmojo-di-source-item ds_sample enabled')]//div[contains(@class, 'mstrmojo-di-source-name') and child::span[contains(text(), 'Sample Files')]]`));
    }

    /**
     * 'Clipboard' button on 'Connect to your Data' window.
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    get clipboardButton() {
        return element(by.xpath(`//div[contains(@class, 'mstrmojo-di-sourceGrid')]//div[contains(@class, 'ds_clipboard')]/descendant::span[text()='Clipboard']`));
    }
    
    /**
     * Clipboard('Create custom data') page.
     * @returns {Promise<ElementFinder>} Promise to ElementFinder.
     */
    get selectClipboardPage() {
        return element(by.xpath(`//div[contains(@class, 'mstrmojo-di-view')]`));
    }
    
    /**
     * Clipboard('Create custom data') page.
     * @returns {Promise<ElementFinder>} Promise to ElementFinder.
     */
    get selectClipboardTable() {
        return element(by.xpath(`//table[@class='mstrmojo-di-worksheet-main-table']`));
    }
    
    /**
     * Error page
     * getErrorWinElem() in Java
     */
    get selectErrorPage() {
        // return element(by.xpath(`//div[@class = 'mstrmojo-Editor mstrmojo-di-errorBox modal']`));

        // using alert window
        return element(by.xpath(`//div[@class = 'mstrmojo-Editor  mstrmojo-alert modal']`));
    }  

    /**
     * Error message page.
     * getTextOnErrorWindow() in Java
     */
    get selectErrorMsgPage() {
        // return element(by.xpath(`//div[@class = 'mstrmojo-Editor mstrmojo-di-errorBox modal']//div[@class = 'mstrmojo-Label cf mstrmojo-di-errorMessage-detail']`));
        return element(by.xpath(`//div[contains(@class, 'mstrmojo-error-content')]`));
    }
    
    /**
     * 'Preview' page
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    get selectPreviewPage() {
        return element(by.xpath(`//div[contains(@class,'mstrmojo-di-view mojo-theme-light mstrmojo-di-view-popup') and .//div[contains(text(), 'Preview')]]`));
    }
    
    /**
     * 'File Samples' page
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    get selectSmapleFilePage() {
        return element(by.xpath("//div[contains(@class,'mstrmojo-di-popup') and .//div[contains(text(), 'File Samples')]]"));
    }
    
    /**
     * 'Upload your files' page
     * @returns {Promise<ElementFinder>} Promise to ElementFinder.
     */
    get selectUploadFilePage() {
        return element(by.xpath("//div[contains(@class,'mstrmojo-di-popup') and .//div[contains(text(), 'Upload your files')]]"));
    }

    /**
     * 'Select Worksheets' page
     * @returns {Promise<ElementFinder>} Promise to ElementFinder.
     */
    get selectWorksheetPage() {
        return element(by.xpath(`//div[contains(@class,'mstrmojo-Editor mstrmojo-di-sheets-selection-dialog modal')]`));
    }

    /**
     * 'Group Tables' page
     * @returns {Promise<ElementFinder>} Promise to ElementFinder.
     */
    get selectGroupTablePage() {
        return element(by.xpath(`//div[contains(@class,'mstrmojo-Editor mstrmojo-di-partitiongroup-dialog modal')]`));
    }

    /**
     * the upload URL text box on 'Paste your URLs' window(triggered by click 'Data from URL')
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */ 
    get uploadURLTextbox() {
        return element(by.xpath(`//*[@class='mstrmojo-di-URLUpload-urlInput']//input[contains(@class,'mstrmojo-TextBox upload-url')]`));
    }

    /**
     * the Add button on 'Paste your URLs' window(triggered by click 'Data from URL')
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    get uploadURLAddButton() {
        return element(by.xpath(`//*[contains(@class,'mstrmojo-di-add-url-button')]`));
    }

    /**
     * the Finsh button on 'Paste your URLs' window(triggered by click 'Data from URL')
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    get uploadURLFinishButton() {
        return element(by.xpath(`//div[contains(@class,'mstrmojo-Button mstrmojo-di-button mstrmojo-WebButton')]/div[contains(@class,'mstrmojo-Button-text') and text()='Finish']`));
    }

    /**
     * the div element that includes all uploaded file boxes on 'Upload your files' window(triggered by click 'File from Disk')
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    get uploadYourFilesDropBox() {
        return $('.mstrmojo-di-fileHolder.drag-drop-box');
    }

    /**
     * 'Select Worksheets' dialog winow, which is triggered by click 'Finish' or 'Prepare' button when import a excel file with multiple worksheets.
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    get worksheetSelectorDialog() {
        return $(`.mstrmojo-Editor.mstrmojo-di-sheets-selection-dialog.modal`);
    }
    
    /**
     * 'Select' button on the 'Select Worksheets' pop up window.
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    get worksheetSelectFinishButton() {
        return element(by.xpath(`//div[contains(@class,'mstrmojo-Button mstrmojo-di-button mstrmojo-WebButton')]/div[contains(@class,'mstrmojo-Button-text') and text()='Select']`));
    }

    /**
     * 'Finish' button on the 'Preview' pop up window
     * @returns {Promise<ElementFinder>} Promise to ElementFinder.
     */
    get previewFinishButton() {
        return element(by.xpath(`//div[contains(@class,'mstrmojo-di-view mojo-theme-light mstrmojo-di-view-popup') and .//div[contains(text(), 'Preview')]]//*[contains(@class,'mstrmojo-Button-text') and text()='Finish' and parent::*[contains(@style,'block')]]`));
    }

    /**
     * get button web element by root web element and button name
     * @param {Promise<ElementFinder>} Promise to ElementFinder.
     * @param {string} buttonName button name
     * @returns {Promise<ElementFinder>} Promise to ElementFinder.
     */
    getButton(rootElement, buttonName) {
        // using css locator instead of xpath. 
        return rootElement.element(by.cssContainingText('.mstrmojo-Button-text', buttonName));
    } 

    /**
     * get current data import window using a given window name. For example, 'File Samples'.
     * @param {string} windowName 
     * @returns {Promise<ElementFinder>} Promise to ElementFinder.
     */
    getCurrentDataImportWindow(windowName) {
        return element(by.xpath(`//div[contains(@class, 'mstrmojo-di-header')]//div[contains(text(), '${windowName}')]`));
    }

    /**
     * get dataset element on the 'Datasets' panel
     * @param {string} datasetName dataset name
     * @returns {Promise<ElementFinder>} Promise to ElementFinder.
     */
    getDatasetElement(datasetName) { 
        return element(by.xpath(`//*[contains(@class,'mstrmojo-VIPanel docdataset-unitlist-portlet')]/div[@class='mstrmojo-VIPanel-titlebar' and  child::div/child::div[@class='title-text']/child::div[text()='${datasetName}']]`));
    }

    /**
     * return a file dropbox element on 'Upload your files' window using a given filename.
     * @param {string} filename  the name of uploaded file when importing file from disk.   
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */ 
    getFilesDropboxElement(filename) {
        return element(by.xpath(`//div[@class='mstrmojo-Label mstrmojo-FileDragDropBox-file-name' and text()='${filename}']`));
    }
    
    /**
	 * get the file element that on the left side of 'Select Worksheets' window using a given filename.
     * @param {string} filename file name. The file should have more than one worksheet.
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
	 */
    getFileItemOnSW(filename) {
        return element(by.xpath(`//div[contains(@class,'mstrmojo-Editor mstrmojo-di-sheets-selection-dialog modal')]//div[@class='mstrmojo-ListBase2 mstrmojo-di-ssd-file-list']//div[text()='${filename}']`));
    }

    /**
     * get sample file element that on the left side of 'File Samples' windows using sampleFileName.
     * @param {string} sampleFileName sample file name 
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    getSampleFileItem(sampleFileName) {
        let fileName = sampleFileName.replace(/ /g, '\u00a0');
        return element(by.xpath(`//div[(@class ='mstrmojo-di-popup' or @class='mstrmojo-Editor mstrmojo-di-homepage-editor modal') and .//div[text()='File Samples']]//label[contains(text(), '${fileName}')]`));
    }

    /**
     * get the already added url element on 'Paste your URLs' window using a given url
     * @param {string} url the url of a upload file
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */
    getUploadURLListElement(url) {
        return element(by.xpath(`//*[contains(@class,'mstrmojo-url-list')]//*[@class='mstrmojo-InlineEditBox urlItem-text-div']/*[contains(text(),'${url}')]`));
    }
    
    /**
     * get button across all UI
     * @param {string} buttonName 
     * @returns {Promise<ElementFinder>} Promise to ElementFinder.
     */
    getUIButton(buttonName) {
        return element(by.xpath(`//div[contains(@class, 'mstrmojo-Button-text') and text()='${buttonName}']`));
    }

    /**
     * get the work sheet element that on right side of 'Select Worksheets' window. 
     * @param {string} worksheetName worksheet name
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */ 
    getWorksheetItemOnSW(worksheetName) {
        return element(by.xpath(`//div[contains(@class,'mstrmojo-Editor mstrmojo-di-sheets-selection-dialog modal')]//div[contains(@class,'mstrmojo-ui-CheckList')]//div//span[text()='${worksheetName}']`));
    }

    /**
     * get the work sheet element that on right side of 'Select Worksheets' window if worksheet is selected(checked).
     * @param {string} worksheetName worksheet name
     * @returns {Promise<ElementFinder>} Promise to ElementFinder.
     */ 
    getWorksheetSelectedItemOnSW(worksheetName) {
        return element(by.xpath(`//div[contains(@class,'mstrmojo-Editor mstrmojo-di-sheets-selection-dialog modal')]//div[contains(@class,'mstrmojo-ui-CheckList')]//div[@class='item selected']//span[text()='${worksheetName}']`));
    }

    //Action Helpers

    // boolean 

    /**
	 * check whether the worksheet is selected 
	 * @param {worksheetName} worksheetName
	 * @returns {Promise<boolean>} Promise
	 */
    isWorkSheetSelected(worksheetName) {
        return this.getWorksheetSelectedItemOnSW(worksheetName).isPresent();
    } 

    //Actions
    
    /**
     * add file from disk 
     * @param {string} filename 
     */
    async addFileFromDisk(filename) {
        let elAddButton = await this.chooseFilesInput;
        await browser.wait(EC.presenceOf(elAddButton));
        await elAddButton.sendKeys(filename);
    }
    
    /**
     * add url to url input element on 'Paste your URLs' window
     * @param {string} url 
     */
    async addUploadURL(url) {
        let elText = await this.uploadURLTextbox;
        await browser.wait(EC.presenceOf(elText));
        await this.sendKeys(url, elText);
        await this.sleepForBrowser('Safari',3);
        let elAddButton = await this.uploadURLAddButton;
        await this.clickOnElement(elAddButton);
    }

    /**
     * click finish button on 'Paste your URLs' window
     */
    async clickFinishUpload() {
        let buttonElement = await this.uploadURLFinishButton;
        await this.clickOnElement(buttonElement);
    }
    
    /**
     * click 'Prepare Data' button on data import wizard(Upload your files)
     */
    async clickPrepareDataButton() {
        let buttonElement = await this.diskFilePrepareButton;
        await this.clickOnElement(buttonElement);
    }

    /**
     * click 'Finish' button on data import wizard(Upload your files)
     */                 
    async finishUploadingYourFiles() {
        let buttonElement = await this.diskFileFinishButton;
        await this.clickOnElement(buttonElement);
    }

    /**
     * click 'Choose files' button on 'Upload your files' window
     */
    async clickChooseFileButton() {
        let buttonElement = await this.chooseFileButton
        await this.clickOnElement(buttonElement);
    }

    /**
     * click 'Clipboard' button on 'Connect to Your Data' window
     */
    async clickClipboardButton() {
        let buttonElement = await this.clipboardButton;
        await this.clickOnElement(buttonElement);
    }
    
    /**
     * click 'File from Disk' icon on 'Connect to Your Data' window
     */
    async clickFileFromDiskButton() {
        let buttonElement = await this.fileFromDiskButton;
        await this.clickOnElement(buttonElement);
    }

    /**
     * click 'Data from URL' icon on 'Connect to Your Data' window
     */
    async clickImportFromURLButton() {
        let buttonElement = await this.importFromURLButton;
        await this.clickOnElement(buttonElement);
    }

    /**
     * click 'Sample Files' icon on 'Connect to Your Data' window
     */
    async clickImportFromSampleFilesButton() {
        let buttonElement = await this.sampleFileButton
        await this.clickOnElement(buttonElement);
    }

    /**
     * Finish select work sheet by clicing the "Select"(finish) button
     */ 
    async clickWorksheetSelectorSelectButton() {
        let buttonElement = await this.worksheetSelectFinishButton;
        await this.clickOnElement(buttonElement);
    }

    /**
     * click the file element that on left side of 'Select Worksheets' window using a given filename.
     * @param {string} filename file name 
     */
    async clickFileItemOnSW(filename) {
        let fileElement = await this.getFileItemOnSW(filename);
        await this.clickOnElement(fileElement);
    }
    
    /**
     * click the Finish button on preview page
     */
    async clickFinishOnPreview() {
        let buttonElement = await this.previewFinishButton;
        await this.clickOnElement(buttonElement);
    }

    /**
     * Finish data import from file with selecting worksheets
     * @param {string} filename 
     * @param {Array} worksheetNameList 
     * @param {boolean} isGroup 
     * @return {Promise<Boolean>} Promise of a boolean value
     */
    async clickFinishOnUploadFileWithWorksheet(filename, worksheetNameList) {
        try {
            // click 'Finih' button on Upload your files
            await this.clickButtonOnUploadFilePage('Finish');
                    
            // deselect worksheet if not
            await this.deselectAllWorksheets();

            // select worksheets 
            await this.selectWorkSheet(filename, worksheetNameList);
            
            // click 'Select' button to finsh selecting worksheets
            await this.clickButtonOnWorksheetPage('Select');

            //need revise
            await LoadingDialog.waitLoadingDataPopUpIsNotDisplayed(5);
        } catch(err) {
            throw err;
        }
            
        return true;
    }

    /**
     * generic method of waiting for the web element
     * @param {Promise<ElementFinder>} waitElement Promise to ElementFinder. 
     */
    async waitVisibility(waitElement) {
        await browser.wait(EC.presenceOf(waitElement));
    }


    /**
     * click finish on upload file when there's a expected error
     */
    async clickFinishOnUploadFileWithError() {
        await this.clickButtonOnUploadFilePage('Finish');
        
        // TODO waitVisibility(DIErrorWindow) need revise
        await this.waitVisibility(this.selectErrorPage);
    }
    
    /**
     * Click button on Clipboard('Create custom data') page.
     * @param {string} buttonName 
     */
    async clickButtonOnClipboard(buttonName) {
        let buttonElement = await this.getButton(this.selectClipboardPage, buttonName);
        await this.clickOnElement(buttonElement);
    }

    /**
     * click button on Error window
     * @param {string} buttonName 
     */
    async clickButtonOnErrorWindow(buttonName) {
        let buttonElement = await this.getButton(this.selectErrorPage, buttonName);
        await this.clickOnElement(buttonElement);
    }
 
     /**
     * Click button on preview page.
     * Note: the first of two element will be returned if buttonName = 'Finish'. Using clickFinishOnPreview() instead.
     * @param {string} buttonName button name
     */
    async clickButtonOnPreview(buttonName) {
        let buttonElement = await this.getButton(this.selectPreviewPage, buttonName)
        await this.clickOnElement(buttonElement);
    }

    /**
     * click button on 'File Samples' page
     * @param {string} buttonName button name 
     */
    async clickButtonOnSampleFilePage(buttonName) {
        let buttonElement = await this.getButton(this.selectSmapleFilePage, buttonName);
        await this.clickOnElement(buttonElement);
    }

    /**
     * click button on 'Upload your files' page
     * @param {string} buttonName 
     */
    async clickButtonOnUploadFilePage(buttonName) {
        let buttonElement = await this.getButton(this.selectUploadFilePage, buttonName);
        await this.clickOnElement(buttonElement);
    }

    /**
     * click button on 'Select Worksheets' page, group the partition tables by default
     * @param {string} buttonName 
     * @param {boolean} isGroup optional parameter, default is true
     * @return {Promise<Boolean>} Promise of a boolean value
     */
    async clickButtonOnWorksheetPage(buttonName, isGroup = true) {
        let buttonElement = await this.getButton(this.selectWorksheetPage, buttonName);
        await this.clickOnElement(buttonElement);

        try {
            await browser.wait(EC.presenceOf(this.selectGroupTablePage), 2000, 'Element taking too long to appear in the DOM');
        } catch (err){}

        let isGroupTablesExist = await this.selectGroupTablePage.isPresent();
        if (buttonName === 'Select' && isGroupTablesExist) {
            if (!isGroup) {  
                // when isGroup == false, deselect the group check box if already selected.
                let isSelected = await this.isGroupCheckboxONGroupTablesPageSelected();
                if (isSelected) {
                    await this.clickGroupCheckboxOnGroupTablesPage();
                }
            }  
            await this.clickContinueONGropuTablesPage();
        } 
        
        return true;
    }

    /**
     * click 'Continue' button on group table page
     */
    async clickContinueONGropuTablesPage() {
        let buttonElement = await this.getButton(this.selectGroupTablePage, 'Continue');
        await this.clickOnElement(buttonElement);
    }
    
    /**
     * click group check box on 'group tables' page
     */
    async clickGroupCheckboxOnGroupTablesPage() {
        let groupCheckboxElement = await this.groupCheckboxONGroupTablesPage;
        await this.clickOnElement(groupCheckboxElement);
    }
    
    /**
     * deselect all worksheets of current selected file if 'All worksheets' checkbox is checked
     */
    async deselectAllWorksheets() {
        let buttonElement = await element(by.xpath(`//div[contains(@class,'mstrmojo-Button select-all-button select-all')]//div[contains(@class,'mstrmojo-Button-text')]`));
        await this.clickOnElement(buttonElement);
    } 

    /**
     * click 'Show Details' on error window
     */
    async clickShowDetailsOnErrorWindow() {
        let toggleDetails = await element(by.xpath(`//div[contains(@class,'toggle-details-link')]`))
        await this.clickOnElement(toggleDetails);
    }
    
    /**
     * click 'Show Details' 
     */
    async clickErrorDetails() {
        // click 'Details' on error page
        await this.clickShowDetailsOnErrorWindow();   
    }

    /**
     * Get the detailed error message on the error window after clicking "Details"
     * @returns {Promise<string>} A promise that will be resolved with the element's visible text.
     */
    async getTextOnErrorWindow() {
        // get error message page
        let errorMsgPage = await this.selectErrorMsgPage;
        // return the text of message 
        return errorMsgPage.getText();
    }
    

    /**
     * Import File from disk. Action starts from the data import wizard panel.
     * @param {string | Array} filePath file path(s), accept string or an array of string.
     */
    async importFileFromDisk(filePath) {
        let filePaths;
        if (Array.isArray(filePath)) {
            filePaths = filePath
        } else if (typeof filePath === 'string') {
            filePaths = [filePath]
        } else {
            throw "Parameter filePath is not a string or array!";
        }
        
        for (let filePath of filePaths) {
            //await this.clickChooseFileButton(); // keep the choose file operation in background.
            await this.addFileFromDisk(filePath);
        }
    }  
    
    /**
     * Import File from URL. Action starts from the data import wizard panel.
     * @param {string | Array} urlPath url path(s), accept string or an array of string.
     */
    async importFileFromURL(urlPath) {
        let urlPaths;
        if (Array.isArray(urlPath)) {
            urlPaths = urlPath
        } else if (typeof urlPath === 'string') {
            urlPaths = [urlPath]
        } else {
            throw "Parameter is not a string or array!";
        }

        for (let urlPath of urlPaths) {
            await this.addUploadURL(urlPath);
        }
    }

    /**
     * Import from Clipboard and type in data
     * @param {Array} data Two-Dimensional Array
     */
    async importFromClipboard(data) {
        try {
            await this.clickClipboardButton();
            
            // await clipboard table show up
            await browser.wait(EC.presenceOf(this.selectClipboardTable))
            let table = await this.selectClipboardTable;
            
            //get table rows
            let rows = await table.all(by.tagName('tr'));

            for (let i = 0; i < data.length; i++) {
                    
                let row = rows[i];
                let cells = await row.all(by.tagName("td"));
                
                for (let j = 0; j < data[i].length; j++) {
                    let cell = await cells[j + 1].element(by.tagName("div"));  // ignore row header
                
                    await this.doubleClickOnElement(cell);
                    await cell.sendKeys(data[i][j]);
                }
            }   
        } catch (err) { 
            throw err;
        }

        return true;
    }
    
    /**
     * Import File from URL. Action starts from the data import wizard panel.
     * @param {string | Array} sampleFile sample file name(s), accept string or an array of string.
     */     
    async importFromSampleFile(sampleFile) {
        let sampleFiles;
        if (Array.isArray(sampleFile)) {
            sampleFiles = sampleFile
        } else if (typeof sampleFile === 'string') {
            sampleFiles = [sampleFile]
        } else {
            throw "Parameter is not a string or array!";
        }
        
        for (let filename of sampleFiles) {
            this.selectSampleFileItem(filename)
        }
    }     

    /**
	 * select multiple worksheets by file name and work sheet name
	 * @param {string} filename file name
	 * @param {string | Array} worksheetName worksheet name
	 */
    async selectWorkSheet(filename, worksheetName) {
        try {
            let worksheetNames;
            if (Array.isArray(worksheetName)) {
                worksheetNames = worksheetName
            } else if (typeof worksheetName === 'string') {
                worksheetNames = [worksheetName]
            }
            
            this.clickFileItemOnSW(filename);
            
            for(let worksheetName of worksheetNames) {
                if (!await this.isWorkSheetSelected(worksheetName)) {
                    let worksheetItem = await this.getWorksheetItemOnSW(worksheetName);
                    await this.clickOnElement(worksheetItem)
                } 
            }
        } 
        catch(err) {
            throw err;
        }
        
    }

    /**
     * select sample file on 'File Samples' window
     * @param {string} filename file name
     */
    async selectSampleFileItem(filename) {
        let buttonElement = await this.getSampleFileItem(filename);
        await this.clickOnElement(buttonElement);
    }

    /**
     * check whether the group checkbox on 'Group Tables' page is selected or not.
     * @returns {Promise<ElementFinder>} Promise to ElementFinder. 
     */  
    async isGroupCheckboxONGroupTablesPageSelected() {
        let groupCheckbox = await this.groupCheckboxONGroupTablesPage;
        await browser.wait(EC.presenceOf(groupCheckbox));
        
        return groupCheckbox.element(by.xpath("//div[contains(@class, 'selected')]")).isPresent();
    }

    /**
     * click continue button on group table page
     */ 
    async selectContinueONGropuTablesPage() {
        let buttonElement = await this.getButton(this.selectGroupTablePage, 'Continue');
        await this.clickOnElement(buttonElement);
    }