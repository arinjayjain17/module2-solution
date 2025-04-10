(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController);

    // Service
    ShoppingListCheckOffService.$inject = [];
    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items to buy
        var toBuyItems = [
            { name: "cookies", quantity: 10 },
            { name: "milk", quantity: 2 },
            { name: "apples", quantity: 6 },
            { name: "bananas", quantity: 5 },
            { name: "bread", quantity: 1 }
        ];

        // List of already bought items
        var boughtItems = [];

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };

        service.buyItem = function (itemIndex) {
            var item = toBuyItems.splice(itemIndex, 1)[0];
            if (item) {
                boughtItems.push(item);
            }
        };
    }

    // To Buy Controller
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;

        toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

        toBuyList.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    // Already Bought Controller
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;

        boughtList.items = ShoppingListCheckOffService.getBoughtItems();
    }

})();
