var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'Lucid Dreams');
var globalConfig = {
    w: 800,
    h: 600,
    mode: "AUTO",
    scaleMode: "NO_SCALE", //SHOW_ALL, EXACT_FIT
    splash: { //The "Loading" page for your game
        loadingScreen: "./assets/gui/splash.png", //splash background
        loadingBar: {
            fullBar: "./assets/gui/loadingbar.png",
            position: { x: 111, y: 462 }
        }
    },
    logChoices: false,
    fonts: "./assets/gui/fonts.css",
    guiConfig: "./story/GUI.yaml",
    storySetup: "./story/Setup.yaml",
    //as many story text files as you want
    storyText: [
        "./story/vn01.yaml"
    ],
}

var VN01 = {
    init: function () {
        if (globalConfig.i18n) {
            return;
        }
        if (!(globalConfig.scaleMode == "EXACT_FIT")) {
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;
        }
        game.scale.scaleMode = Phaser.ScaleManager[globalConfig.scaleMode];
        game.scale.refresh();
    },

    preload: function () {
        game.load.image('splash', preparePath(globalConfig.splash.loadingScreen));
        if (globalConfig.splash.loadingBar) {
            game.load.image('loading', preparePath(globalConfig.splash.loadingBar.fullBar));
        }
        game.load.script('preload', './RenJS/Preload.js');
    },

    create: function () {

        game.state.add('preload', preload);
        game.state.start('preload');

    }

};


game.state.add('VN01', VN01);
game.state.start('VN01');
