var nameBurger = document.getElementById('burger-name');
var calculate = document.getElementById('calculate');
var coupon = document.getElementById('discount-coupon')
calculate.addEventListener('click',
 function() {
   // verifico che il nome sia stato inserito
   if (nameBurger.value != '') {
    // creo una variabile per gli ingredienti
    var ingredienti = document.getElementsByClassName('ingredients')
    // scorro gli ingredienti e sommo quelli selezionati
    var somma = 50;
    var i = 0
    while (i < ingredienti.length ) {
      if (ingredienti[i].checked == 1) {
        somma += parseInt(ingredienti[i].value);
      }
      i++;
    }
    // creo un array di coupons
    var couponList = ["garo20", "456ABC", "buger20"]
    for (var j = 0; j < couponList.length; j++) {
      if (coupon.value == couponList[j]) {
        somma -= somma * 0.2;
      }
    }
    console.log(somma);
  } else {
    alert("Attenzione, inserire il nome dell'Hamburger!!");
  }

}
);
