
function showOffers(snapshot) {
  $("#prices").empty();
  
  // Log everything that's coming out of snapshot
  console.log("length:" + snapshot.offers.length);
  var vg = $("#prices");
  var newrow = $("<tr>");
  vg.append(newrow);
  vg.append("<td><strong>Game</strong></td><td><strong>Price</strong></td>");
  for (i = 0; i < snapshot.offers.length; i++) {
    // Create a new variable that will hold a "<th>" tag.
    
    
    var newrow = $("<tr>");
    
    newrow.append( "<td>" + snapshot.offers[i]["product-name"] + "</td>" + "<td>" + parseInt(snapshot.offers[i]["price"])/100 + "</td>"   );
   // if (!snapshot.offers[i].price) {
   // newrow.append("<td>"  + snapshot.offers[i].price + "</td>");
   // }

   vg.append(newrow);

    // Handle the errors
  }
}