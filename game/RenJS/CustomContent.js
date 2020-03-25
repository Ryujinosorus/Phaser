RenJS.customContent = {
	//put here your own functions
	test: function () {
		game.state.start('Level1');
	},
	loadLevel2: function () {
		game.state.start('Level2');
	},
	helloworld: function (params) {
		console.log("helloworld function");
		console.log(params.param1 + " " +params.param2);
		RenJS.resolve();
	}
}

