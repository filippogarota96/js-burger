var nameBurger = document.getElementById('burger-name');
var calculate = document.getElementById('calculate');

calculate.addEventListener('click',
 function() {
   // verifico che il nome sia stato inserito
   if (nameBurger != '') {
    // creo una variabile per gli ingredienti
    var ingredienti = document.getElementsByClassName('ingredients')
    // scorro gli ingredienti e sommo quelli selezionati
    var somma = 50;
    for (var i = 0; i < ingredienti.length; i++) {
      if (ingredienti[i].checked == 1) {
        somma += parseInt(ingredienti[i].value);
      }
    }
    console.log(somma);
  } else {
    alert("Attenzione, inserire il nome dell'Hamburger!!");
  }
}
);
