function AddItem (ProductID,ProductName, Description, Price, Quantity, StoreID){
    var UserID = $("#hiddenUserID").val(); //e.g. = 1
    var ProductDate = $("#hiddenDateField").val(); //e.g. = 2014/05/01
      ShoppingCartItems.push({
         "ProductID": ProductoID,
         "ProductName": ProductName,
         "Description": Description,
         "Price": Price,
         "Quantity": Quantity,
         "StoreID": StoreID,
         "UserID": UserID, //this will change later
         "ProductDate": ProductDate //this will change if the buyer choose another day
     })
}
// loop through items in cart
for ( var i = 0; i < ShoppingCartItems.length; i++ ) {

    // if product ID, user ID, and date are the same
    if ( ShoppingCartItems[i].ProductID   == newItemObj.ProductID &&
         ShoppingCartItems[i].UserID      == newItemObj.UserID &&
         ShoppingCartItems[i].ProductDate == newItemObj.ProductDate ) {

      // add the quantity of the new obj to the old one
      ShoppingCartItems[i].Quantity += newItemObj.Quantity;

      // if two items are merged, set a flag
      merged = true;
    }
  };
  // if no merge happened, just add the item normally
  if ( !merged ) {
    ShoppingCartItems.push( newItemObj );
  }
