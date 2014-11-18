UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
	this.selectedItems = [];

	this.add = function (data,element) {
		this.data.push(element);
		this.emit("elementAdded",this.data);
	};
	this.add.bind(this); //przypisanie kontekstu do funkcji aby mógł zostać wykonany emit

	//true gdy element zostal dodany, false gdy usuniety
	this.checkItem = function(item) {
		if(this.selectedItems.indexOf(item) < 0) {
			this.selectedItems.push(item);
			return true;
		} else {
			this.selectedItems.splice(this.selectedItems.indexOf(item),1);
			return false;
		}
	};
	this.checkItem.bind(this);
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);


UAM.Store.prototype.update = function (id, data) {};
