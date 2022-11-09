(function() {
  'use strict';

  angular.module('ShoppingListCheck', [])
      .controller('ToBuyController', ToBuyController)
      .controller('BoughtController', BoughtController)
      .service('ShoppingListCheckService', ShoppingListCheckService);

  ToBuyController.$inject = ['ShoppingListCheckService'];
  function ToBuyController(ShoppingListCheckService) {
      var toBuyList = this;

      toBuyList.items = ShoppingListCheckService.getToBuyItems();

      toBuyList.buyItem = function(itemIndex) {
          ShoppingListCheckService.buyItem(itemIndex);
      };
  }

  BoughtController.$inject = ['ShoppingListCheckService'];
  function BoughtController(ShoppingListCheckService) {
      var bougthList = this;

      bougthList.items = ShoppingListCheckService.getBoughtItems();
  }

  function ShoppingListCheckService() {
      var service = this;
      var toBuyItems = [
          { name: "cake", quantity: 3 },
          { name: "cookies", quantity: 21 },
          { name: "soda", quantity: 4 },
          { name: "beer", quantity: 9 },
          { name: "apples", quantity: 17 }
      ];
      var boughtItems = [];

      service.buyItem = function(itemIndex) {
          var item = toBuyItems[itemIndex];

          boughtItems.push(item);
          toBuyItems.splice(itemIndex, 1);
      };

      service.getToBuyItems = function() {
          return toBuyItems;
      };

      service.getBoughtItems = function() {
          return boughtItems;
      };
  }
})();