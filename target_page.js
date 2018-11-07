/**
     * @return {Promise<Element>} Button
     */
    get addNewEnvironmentConnectionButton() {
        // Library 'wd' fails to resolve two promises on the same line.
        // To expose locators as promise, we create an arrow function to resolve required promises.
        // its output will be the promise of the desired object.
        return (async () => {
            let button = await this._appDriver.elementByName('Add New Environment Connection');
            return button.elementByClassName('Button');
        })();
    }

    get availableEnvironmentsSection() {
        return this._appDriver.elementByName('Available Environments');
    }

    get connectionForm() {
        return this._appDriver.elementByName('Connection');
    }

    get connectToEnvironmentForm() {
        return this._appDriver.elementByName('Connect to Environment');
    }

    get defaultDossierWindowTitle() {
        return 'Untitled Dossier';
    }

    get defaultWorkstationTitle() {
        return 'MicroStrategy Workstation - Env...(Developer Mode)';
    }

    get dossierDebugger() {
        return this._dossierDebugger;
    }

    get dossiersPanelButton() {
        return this._appDriver.elementByName('Dossiers')
    }

    /**
     * @return {Promise<Element>} button
     */
    get connectionEnvironmentContinueButton() {
        return (async () => {
            let connection = await this.connectionForm;
            return connection.elementByName('Continue');
        })();
    }

    get connectionEnvironmentNameField() {
        return (async () => {
            let connection = await this.connectionForm;
            return connection.elementByName('Environment Name Field');
        })();
    }

    get connectionEnvironmentUrl() {
        return (async () => {
            let connection = await this.connectionForm;
            return connection.elementByName('Dossier Web Url Field');
        })();
    }

    /**
     * @return {Promise<Boolean>} if environment already exist
     */
    get connectionConnectToExistingEnvironmentMessageExist() {
        return (async () => {
            let found = false;
            try {
                let connection = await this.connectionForm;
                let dummy = await connection.elementByName('This environment name already exists. Please use a different one.');
                found = true;
            } catch (er) { }
            return found;
        })();
    }

    get connectionConnectToSameURLEnvironmentButton() {
        return (async () => {
            let connection = await this.connectionForm;
            return connection.elementByName('Please click here to connect to this environment.');
        })();
    }

    get connectionConnectToSameURLEnvironmentButtonExist() {
        return (async () => {
            let found = false;
            try {
                let connection = await this.connectionForm;
                let dummy = await connection.elementByName('Please click here to connect to this environment.');
                found = true;
            } catch (er) { }
            return found;
        })();
    }

    get connectionSelectApplicationsOkButton() {
        return (async () => {
            let connection = await this.selectApplicationsForm;
            return connection.elementByName('OK');
        })();
    }

    get connectToEnvironmentPasswordBox() {
        return (async () => {
            let connection = await this.connectToEnvironmentForm;
            return connection.elementByClassName('PasswordBox');
        })();
    }

    get connectToEnvironmentConnectButton() {
        return (async () => {
            let connection = await this.connectToEnvironmentForm;
            return connection.elementByName('Connect');
        })();
    }

    get connectToEnvironmentRememberMeCheck() {
        return (async () => {
            let connection = await this.connectToEnvironmentForm;
            return connection.elementByName('Remember Me');
        })();
    }

    get connectToEnvironmentUsernameField() {
        return (async () => {
            let connection = await this.connectToEnvironmentForm;
            return connection.elementByName('Username Field');
        })();
    }

    get enviromentsPanelButton() {
        return this._appDriver.elementByName('Environments')
    }

    get environmentRegisteredCount() {
        return (async () => {
            let envList = await this.availableEnvironmentsSection;
            let envRegistered = await envList.elementsByXPath('//*[@ClassName="ListBoxItem"]');
            if (Array.isArray(envRegistered)) {
                return envRegistered.length - 1;
            }
            return -1;
        })();
    }

    get newDossierButton() {
        return (async () => {
            let button = await this.dossiersPanelButton;
            return button.elementByClassName('Button');
        })();
    }

    get selectApplicationsForm() {
        return this._appDriver.elementByName('Select Applications');
    }

    async getConnectionEnvironmentAuthButton(authMode) {
        return (async () => {
            let connection = await this.connectionForm;
            return connection.elementByName(authMode);
        })();
    }

    async getSelectApplicationsCheckbox(applicationName) {
        return (async () => {
            let selectApp = await this.selectApplicationsForm;
            return selectApp.elementByName(applicationName);
        })();
    }

    async getEnvironmentButton(environmentName) {
        return (async () => {
            let envList = await this.availableEnvironmentsSection;
            return envList.elementByName(`${environmentName}\nRestEnvironment`);
        })();
    }

    async isEnvironmentRegistered(environmentName) {
        let hasElement = false;
        try{
            let element = await this.getEnvironmentButton(environmentName);
            hasElement = this.hasElement(element);
        } catch (er){ }
        return hasElement;
    }

    async isEnvironmentConnected(environmentName) {
        let isConnected = false;
        try{
            let envButton = await this.getEnvironmentButton(environmentName);
            let dummy = await envButton.elementByName('Connected');
            isConnected = true;
        } catch (er){ }
        return isConnected;
    }

    get isConnectToEnvironmentFormDisplayed() {
        return (async () => {
            let hasElement =  await this.hasElement(this.connectToEnvironmentForm);
            return hasElement;
        })();
    }

    /**
     * Register a new environment into workstation.
     * Precondition: The Add new enviroment form is displayed.
     * Instead of polling for a new object being displayed, we use sleep() after events.
     * @throws if the environment already exist.
     * @param {String} environmentName
     * @param {String} environmentUrl Library server URL
     * @param {String} authenticationMode Option to select. This shoudl match the string from the option group. Currently only 'Standard' is supported
     */
    async addNewEnvironment(environmentName, environmentUrl, authenticationMode) {
        let envName = await this.connectionEnvironmentNameField;
        await envName.type(environmentName);
        await this.sleep(1);

        let environmentExist = await this.connectionConnectToExistingEnvironmentMessageExist;
        if (environmentExist) {
            throw `Environment with name "${environmentName}" already exist`;
        }

        let envUrl = await this.connectionEnvironmentUrl;
        await envUrl.type(environmentUrl);
        await this.sleep(1);
        let envAuthStdButton = await this.getConnectionEnvironmentAuthButton(authenticationMode);
        await this.appDriver.clickElement(envAuthStdButton);
        await this.sleep(1);

        let continueButton = undefined;
        let newEnvCreated = false;
        let sameUrlButtonExist = await this.connectionConnectToSameURLEnvironmentButtonExist;

        if (sameUrlButtonExist) {
            continueButton = await this.connectionConnectToSameURLEnvironmentButton;
        } else {
            continueButton = await this.connectionEnvironmentContinueButton;
            newEnvCreated = true;
        }
        await this.appDriver.clickElement(continueButton);
        await this.sleep(1);
        return newEnvCreated;
    }

    /**
     * Launches a new Dossier editor minimized, used to attach Chrome debugger by the automated test
     * Precondition: the Dossier panel is selected.
     * Alias of the debugger in childWindows is 'dossier debugger'
     */
    async attachDossierDebugger() {
        // Reuse of exist
        if (typeof this._dossierDebugger !== 'undefined') {
            return this._dossierDebugger;
        }
        this._dossierDebugger = await this.launchNewChildWindow(this.newDossierButton, this.defaultDossierWindowTitle, 'dossier debugger', { minimize: true });
    }

    /**
     * Fills the Authentication form. Currently only supporting Standard and continues.
     * Precondition: Authentication form is displayed
     * @param {Object} authenticationOptions Supported options:
     * authenticationOptions.username {String}
     * authenticationOptions.password {String}
     * authenticationOptions.rememberMe {Boolean}
     */
    async authenticateIntoEnvironment(authenticationOptions) {
        let usernameField = await this.connectToEnvironmentUsernameField;
        await usernameField.type(authenticationOptions.username);
        await this.sleep(1);
        let passwordBox = await this.connectToEnvironmentPasswordBox;
        await passwordBox.type(authenticationOptions.password);
        await this.sleep(1);
        if (authenticationOptions.rememberMe == true) {
            let rememberMeCheck = await this.connectToEnvironmentRememberMeCheck;
            await this.appDriver.clickElement(rememberMeCheck);
            await this.sleep(1);
        }
        let connnectButton = await this.connectToEnvironmentConnectButton;
        await this.appDriver.clickElement(connnectButton);
        await this.sleep(1);
    }

    /**
     * Initiates connection to a remote environment by double clickcing on the Environment button.
     * Precondition: Environment panel is launched
     * @param {String} environmentName
     */
    async connectToEnvironment(environmentName){
        let envButton = await this.getEnvironmentButton(environmentName);
        await envButton.doubleclick();
    }

    /**
     * Changes Workstation to Dossiers panel
     */
    async launchDossiersPanel() {
        //Validate if already launched
        let button = await this.dossiersPanelButton;
        await this.appDriver.clickElement(button);
    }

    /**
     * Changes Workstation to Environment panel
     */
    async launchEnvironmentsPanel() {
        //Validate if already launched
        let button = await this.enviromentsPanelButton;
        await this.appDriver.clickElement(button);
    }

    /**
     * Launches a new Dossier Editor. This is added into childWindows collection.
     * Precondition: Dossier Panel is selected
     */
    async launchNewDossierEditor() {
        return this.launchNewChildWindow(this.newDossierButton, this.defaultDossierWindowTitle, 'new dossier');
    }

    /**
     * Launches Enviroenment form
     * Precondition: Environment panel is selected
     */
    async launchNewEnvironmentForm() {
        let launchNewEnvButton = await this.addNewEnvironmentConnectionButton;
        await this.appDriver.clickElement(launchNewEnvButton);
    }


    async openDossierAsLocal(absDossierName) {
        let workstationApp = await this._appDriver.elementByClassName('Window');
        // let workstationApp = await this._appDriver.elementByName('MicroStrategy Workstation - Dos...(Developer Mode)');

        // the first elementByClassName may not working. but second call excuted as expected.
        let fileMenueEl = await workstationApp.elementByClassName("MenuItem").elementByName('File');
        await this.appDriver.clickElement(fileMenueEl);
        let openDossierEl = await this.appDriver.elementByClassName("MenuItem").elementByName("Open Local Dossier");
        await this.appDriver.clickElement(openDossierEl);

        let OpenDialog = await workstationApp.elementByName('Open');
        await OpenDialog.sendKeys(absDossierName);

        // redundant call is need to resolve a sequence promses whiling using wd library
        let openButton = await OpenDialog.elementByClassName('Button');
        openButton = await openButton.elementByName('Open');

        await workstationApp.sleep(2);
        await this.appDriver.clickElement(openButton);
    }

    /**
     * wait browsing objects animation to finish
     * @param {int} seconds time limit
     * @param {Object} app workstation app
     */
    async waitLoadingAnimationToFinish(seconds, app) {
        // wait for loading
        let loadingAnimation = await this.appDriver.elementByClassName("LoadingAnimationUserControl");
        let loadingAnimationImage = await loadingAnimation.elementByClassName("Image");
        let time = seconds;
        while (time > 0) {
            let needWait = await loadingAnimationImage.isDisplayed()
            if (!needWait) {
                break;
            }
            await app.sleep(1);
            time -= 1;
        }
    }

    /**
     * connect to environment if not
     * @param {Object} scenarioContext 'this' object passed from workstation_steps.step
     */
    async connectToEnvIfNot(scenarioContext) {
        console.log('[scenarioContext] '+ scenarioContext);
        console.log('[scenarioInfo] + ' + scenarioContext.scenarioInfo);
        console.log('[workstationApp] + ' + scenarioContext.scenarioInfo.workstationApp);
        let workstationApp = scenarioContext.scenarioInfo.workstationApp;
        await workstationApp.launchEnvironmentsPanel();
        let envRegistered = await workstationApp.environmentRegisteredCount;
        scenarioContext.scenarioInfo.environmentRegisteredNumber = envRegistered;

        // If Workstation is in Live mode, ensure we are connected
        if (browser.params.environment.workstationUseLiveMode){
            let isEnvConnected = false;
            let exist = await workstationApp.isEnvironmentRegistered(browser.params.environment.workstationDefaultEnvironmentName);
            if (exist) {
                isEnvConnected = await workstationApp.isEnvironmentConnected(browser.params.environment.workstationDefaultEnvironmentName);
                await workstationApp.sleep(3);
            }

            if (!isEnvConnected) {
                if (exist) {
                    await workstationApp.connectToEnvironment(browser.params.environment.workstationDefaultEnvironmentName);
                } else {
                    await workstationApp.launchNewEnvironmentForm();
                    await workstationApp.addNewEnvironment(browser.params.environment.workstationDefaultEnvironmentName, browser.params.environment.workstationLibraryServerUrl , browser.params.environment.mstrAuthenticationMode);
                }
                await workstationApp.sleep(3);

                exist = await workstationApp.isConnectToEnvironmentFormDisplayed;
                if (exist) {
                    await workstationApp.authenticateIntoEnvironment( { username: browser.params.environment.mstrUsername, password: browser.params.environment.mstrPassword, rememberMe: browser.params.environment.workstationAuthenticationRememberMe });
                    await workstationApp.sleep(5);
                }
                await workstationApp.selectProjectsFromEnvironment([browser.params.environment.mstrProject]);
                await workstationApp.sleep(3);
            }
        }
    }

    /**
     *
     * @param {Object} scenarioContext 'this' object passed from workstation_steps.step
     * @param {string} dossierName
     * @param {string} directoryPath
     * @param {string} mstrProjectName
     */
    async openDossierInEnvironment(scenarioContext, dossierName, directoryPath,mstrProjectName) {
        let workstationApp = scenarioContext.scenarioInfo.workstationApp;

        // connect to env is not
        await this.connectToEnvIfNot(scenarioContext);

        // click Applications to show projects
        let ApplicationsIconEl = await this._appDriver.elementByName('Applications');
        await this.appDriver.clickElement(ApplicationsIconEl);

        // click projects to open
        let ProjectEl = await this.appDriver.elementByName(mstrProjectName); // New MicroStrategy Tutorials
        await ProjectEl.doubleclick();

        // open directory
        let wd = require("wd");
        let arrDirectory = directoryPath.split('/');
        let serachBoxEl = await this.appDriver.elementByClassName("SearchBoxUserControl");
        let searchTextEl = serachBoxEl.elementByClassName("TextBox");
        let browsingObjects = await this.appDriver.elementByClassName("ObjectsBrowsingUserControl");
        for (let dirName of arrDirectory) {
            await this.waitLoadingAnimationToFinish(5, workstationApp);
            await serachBoxEl.click();
            await searchTextEl.type(dirName + wd.SPECIAL_KEYS['Enter']);

            // redundant call is need to resolve a sequence promses whiling using wd library
            let folderEl = await browsingObjects.elementByName(dirName);
            await folderEl.doubleclick()
        }

        // open dossier
        await searchTextEl.type(dossierName + wd.SPECIAL_KEYS['Enter']);
        await this.waitLoadingAnimationToFinish(5, workstationApp);
        let docEl = await browsingObjects.elementByName(dossierName);
        await docEl.doubleclick();
    }

    /**
     * Save the dossier as local file
     * Precondition: dossier editor is open
     * @param {String} dossierName New dossier name
     * @param {String} dossierApp BaseApp instance used for current Dossier window
     * @param {Number} environmentRegisteredNumber Allows handling the "Save to Environment" form.
     */
    async saveDossierAsLocal(dossierName, dossierApp, environmentRegisteredNumber) {
        let dossierWindowDriver = dossierApp.appDriver;
        let untitledDossierWindow = await dossierWindowDriver.elementByName(this.defaultDossierWindowTitle);

        // Handle case when at least one environment is registered: "Save to environment" form is displayed
        if (environmentRegisteredNumber > 0) {
            let saveDossierWindow = await untitledDossierWindow.elementByName('MicroStrategy Workstation');
            let browsePCButton = await saveDossierWindow.elementByName('Browse PC');
            let dummy = await dossierWindowDriver.clickElement(browsePCButton);
            await dossierApp.sleep(1);
            driver.getElement(popUp);
            this.sleep(2);
        }

        let saveAsPopUp = await untitledDossierWindow.elementByName('Save as Local');
        await saveAsPopUp.type(dossierName);
        await dossierApp.sleep(1);
        let saveButton = await saveAsPopUp.elementByName('Save');
        await dossierWindowDriver.clickElement(saveButton);
    }

    /**
     * Save the dossier into remote environment.
     * Precondition: dossier Editor is open
     * @param {String} dossierName New dossier name
     * @param {BaseApp} dossierApp Instance used for current Dossier windows
     * @param {String} environmentName Current environment name
     * @param {String} applicationName Current application (MSTR Project) name
     * @param {String} directoryPath Full MSTR directory path to save the Dossier (say "Public Objects/Reports/_sample_directory")
     */
    async saveDossierInEnvironment(dossierName, dossierApp, environmentName, applicationName, directoryPath) {
        let dossierWindowDriver = dossierApp.appDriver;
        let untitledDossierWindow = await dossierWindowDriver.elementByName(this.defaultDossierWindowTitle);
        let saveDossierWindow = await untitledDossierWindow.elementByName('MicroStrategy Workstation');

        //Browse into left panel nodes
        // First environment
        let envNameElement = await saveDossierWindow.elementByName(environmentName);
        await envNameElement.doubleclick();
        await dossierApp.sleep(1);

        // Second project
        let appNameElement = await envNameElement.elementByName(applicationName);
        await appNameElement.doubleclick();
        await dossierApp.sleep(1);
        let arrDirectory = directoryPath.split('/');
        let parentDirElement = appNameElement;

        // Iterate through directory
        let isThere;
        for (let dirName of arrDirectory) {
            let appDir = await parentDirElement.elementByName(dirName);
            isThere = await appDir.isDisplayed();

            let wd = require('wd');
            while (!isThere) {
                await appDir.type(wd.SPECIAL_KEYS["Down arrow"]);
                isThere = await appDir.isDisplayed();
                await dossierApp.sleep(1);
            }

            await appDir.doubleclick();
            await dossierApp.sleep(5);
            parentDirElement = appDir;
        }

        // Type dossier name
        let dossierNameField = await untitledDossierWindow.elementByName('Filename Field');
        await dossierNameField.clear();
        await dossierApp.sleep(1);
        await dossierNameField.type(dossierName);
        await dossierApp.sleep(1);

        let saveButton = await untitledDossierWindow.elementByName('Save');
        await dossierWindowDriver.clickElement(saveButton);
        await dossierApp.sleep(1);
    }

    /**
     * Selects project to connect to
     * Precondition: The user has just authenticated and the "Select Applications" form is displayed
     * @param {String|Array<String>} projectList Project name as String otherwise an array of Strings with project name
     */
    async selectProjectsFromEnvironment(projectList) {
        let projectArray = projectList;
        if (!Array.isArray(projectList)) {
            projectArray = [projectList];
        }
        for (let projectName of projectArray) {
            let projCheck = await this.getSelectApplicationsCheckbox(projectName);
            await this.appDriver.clickElement(projCheck);
            await this.sleep(1);
        }
        let okBu = await this.connectionSelectApplicationsOkButton;
        await this.appDriver.clickElement(okBu);
        await this.sleep(1);
    }

    async startWorkstation(winAppDriverUrl, wsFullPath, wsWorkingDirectory, cefPort) {
        await this.startApp(winAppDriverUrl, wsFullPath, wsWorkingDirectory, `-p ${cefPort}`, this.defaultWorkstationTitle);
    }