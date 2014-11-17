InputCtrl = function () {
	UAM.EventEmitter.call(this);
		var f = function() {console.log('ok')};
	UAM.EventEmitter.prototype.on("addElement",f,ic);
};

var ic = new InputCtrl();

UAM.utils.inherits(UAM.EventEmitter, InputCtrl);
