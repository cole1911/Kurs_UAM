UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
	this.selectedItems = [];

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

UAM.Store.prototype.add = function (element) {
	this.data.push(element);
	this.emit("elementAdded",element);
};
UAM.Store.prototype.updateFooter = function (el) {
	var isElementActive = this.checkItem(el);
	this.emit("elementChecked",isElementActive,el);
	this.emit("updateFooterView");
};
