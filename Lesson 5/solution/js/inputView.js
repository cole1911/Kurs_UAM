UAM.InputView = function (inputView) {
	UAM.EventEmitter.call(this);
	this.inputView = inputView;
	this.listeners = {};
	var buttonAdd = document.querySelector('#btn');
	var input = document.querySelector('#inputValue');
	buttonAdd.addEventListener("click", function() {
		UAM.InputView.prototype.btnAddClicked();
		
	});
};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);


UAM.InputView.prototype.btnAddClicked = function() {
	UAM.InputView.prototype.emit("addElement");
};

