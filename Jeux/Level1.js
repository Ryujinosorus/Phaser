var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'Lucid Dreams');

var Level1 = {
    preload: function () {
        communLoad();
    },

    create: function () {

        //Extend the actual canvas
        game.world.setBounds(0, 0, 5000, 1400);
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        game.input.onDown.add(gofull, this);

        //Get input
        cursors = game.input.keyboard.createCursorKeys()

        //Parralax background
        game.add.sprite(0, 20, 'back').scale.set(2, 2.5);
        game.add.sprite(1650, 20, 'back').scale.set(2, 2.5);

        //Generate Player
        generatePlayer();

        //Initialize groups
        initializeGroups();

        //Generate map
        generateMap(map1);

        //Generate the portail
        generatePortal(portal['position'][0]);

        //Generate coins
        generateCoin(coinMap1)

        //Genrerate spike
        generateSpike(spikeMap1);
        //ATH
        makeAth();

        //Ennemy
        generateEnnemy(ennemyMap1);
    },
    update: function () {

        //Check all the collision
        if (game.physics.arcade.collide(Player["sprite"], mapCollisionGroup)) {
        }

        if (game.physics.arcade.collide(Player["sprite"], mapCoinGroup, collisionOnCoin, returnTrue, this)) {
        }

        if (game.physics.arcade.collide(Player["sprite"], mapEnnemyGroup, collisionOnEnnemy, returnTrue, this)) {
        }

        if (game.physics.arcade.collide(Player["sprite"], mapSpikeGroup, collisionOnEnnemy, returnTrue, this)) {
        }

        if (game.physics.arcade.collide(Player["sprite"], portal['sprite'], Level1.checkForWin, returnTrue, this)) {
        }

        moovePlayer();
        Level1.updateDemence();
    },
    updateDemence: function () {
        //Up demence of player 
        if (Date.now() > Player['demence']['lastUpdate'] + 1000) {
            Player['demence']['actual'].scale.set(Player['demence']['actual'].scale.x + 0.001, 0.06);
            Player['demence']['lastUpdate'] = Date.now();
        }
        else if (Player['demence']['actual'].scale.x > 0.331) {
            Level1.death();
        }
    },
    death: function () {
        game.add.audio('die').play();
        Player['lookR'] = true;
        game.state.start('Level1');
    },
    win: function () {
        window.location.href = "./VN02.html";
    },
    checkForWin: function () {
        if ((parseInt(Player['nbCoin'].text)) == 3)
            Level1.win();
        else if (portal['text'] == null || portal['text'].alpha == 0) {
            let pos = Player['sprite'].body.position;
            portal['text'] = game.add.text(pos.x, pos.y, 'aaaaaaaaaaaaaaaaaa', { font: "26px Arial", fill: "#DC143C", align: "center" });
            game.add.tween(portal['text']).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);
        }
    }


};


game.state.add('Level1', Level1);
game.state.start('Level1');
