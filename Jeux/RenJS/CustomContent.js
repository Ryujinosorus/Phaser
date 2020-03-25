RenJS.customContent = {
	//put here your own functions
	loadLevel1: function () {
		window.location.href = "./Level1.html"
	},
	loadLevel2: function () {
		window.location.href = "./Level2.html"
	},
	helloworld: function (params) {
		console.log("helloworld function");
		console.log(params.param1 + " " +params.param2);
		RenJS.resolve();
	}
}

