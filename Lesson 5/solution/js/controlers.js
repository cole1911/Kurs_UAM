InputCtrl = function (inputView, store) {

    var add = function(element) {
        store.add(element);

    };
    inputView.on("addElement",add);

};

ListCtrl = function (listView, store) {

    var callback = function (err, response) {
        if (err) {

        } else {
            console.log(response);
        }
    };

    var getDataFromServer = function() {
        UAM.Http.request('/api/todos', 'GET',null,callback);
    };

    getDataFromServer();

    var addElementToList = function(el) {
        var objToSend = {id:1,value:"ss"};
        var array = [];
        array.push(objToSend);
        UAM.Http.request('/api/todos', 'POST',array,callback);
        listView.addElement(el);
    };

    var updateFooter = function(element) {
        store.updateFooter(element);
    };

    var updateActiveElement = function(active,element) {
        listView.toogleElement(active,element);
    };

    store.on("elementAdded", addElementToList);
    store.on("elementChecked",updateActiveElement);
    listView.on("updateFooterSelectedItems", updateFooter);

};


FooterCtrl = function (footerView,store) {

    var update = function() {
        footerView.updateSelectedItems(store.selectedItems.length);
    };
    store.on("updateFooterView",update);

    var updateAllItemsOnFooter = function() {
        footerView.updateAllItems(store.data.length);
    };
    store.on("elementAdded",updateAllItemsOnFooter);
};
