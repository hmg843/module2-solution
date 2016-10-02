(function(){
  'ue strict';

  angular.module('ShoppingListCheckOff', [])
         .controller('ToBuyShoppingController', ToBuyShoppingController)
         .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
         .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtShoppingController.$inject= ['ShoppingListCheckOffService'];

  function ToBuyShoppingController(ShoppingListCheckOffService)
  {
    var ItemsToBuy = this;
    ItemsToBuy.BuyItem = function(index)
    {
        ShoppingListCheckOffService.BuyItem(index);
    }
    ItemsToBuy.ShoppingListEmpty = function()
    {
      return ShoppingListCheckOffService.ItemsToBuyCount() <= 0;
    }
    ItemsToBuy.ShoppingList = function()
    {
      return ShoppingListCheckOffService.ItemsToBuy;
    }
  };

  function AlreadyBoughtShoppingController(ShoppingListCheckOffService)
  {
    var ItemsBought = this;
    ItemsBought.PurchasedItemsEmpty= function()
    {
      return ShoppingListCheckOffService.ItemsBoughtCount() <= 0;
    }
    ItemsBought.PurchasedList = function()
    {
      return ShoppingListCheckOffService.ItemsBought;
    }
  }

  function ShoppingListCheckOffService()
  {
    var service = this;
    service.ItemsBought = [];
    service.ItemsToBuy  = [
      { name: "cookies",     quantity: 10 },
      { name: "crackers",    quantity: 3 },
      { name: "Coke",        quantity: 7 },
      { name: "Beef Jerkey", quantity: 12 },
      { name: "Hot Dog",     quantity: 5 },
    ];
    service.BuyItem = function(index)
    {
      service.ItemsBought.push(service.ItemsToBuy[index]);
      service.ItemsToBuy.splice(index, 1);
    }
    service.ItemsToBuyCount = function()
    {
      return service.ItemsToBuy.length;
    }
    service.ItemsBoughtCount = function()
    {
      return service.ItemsBought.length;
    }
  }
})();
