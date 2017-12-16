# IonicUnitAndE2ETests02
Ionic tabs project with unit and e2e tests

Based on...

git clone https://github.com/ionic-team/ionic-unit-testing-example.git

https://leifwells.github.io/2017/08/27/testing-in-ionic-configure-existing-projects-for-testing/

To use with VSCode, add these configurations:
//from corodva config
{
    "name": "Serve to the browser (ionic serve)",
    "type": "cordova",
    "request": "launch",
    "platform": "serve",
    "cwd": "${workspaceRoot}",
    "devServerAddress": "localhost",
    "sourceMaps": true,
    "ionicLiveReload": true
},
//to run and debug e2e tests. BEFORE running this do ionic serve in a separate terminal window
{
    "type": "node",
    "request": "launch",
    "name": "run e2e",
    "runtimeExecutable": "npm",
    "runtimeArgs": [
        "run",
        "e2e",
        "debug"
    ],
    "port": 9229
}