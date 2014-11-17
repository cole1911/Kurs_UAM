UAM.ListView = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.ListView.prototype.add = function (data) {};
UAM.ListView.prototype.update = function (id, data) {};