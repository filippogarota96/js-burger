var nameBurger = document.getElementById('burger-name');
var calculate = document.getElementById('totale');

calculate.addEventListener('click',
 function() {
   // verifico che il nome sia stato inserito
   if (nameBurger != '') {
    // creo una variabile per gli ingredienti
    var ingredienti = document.getElementsByClassName('ingredients')

   } else {
     alert('Attenzione, inserire il nome dell'Hamburger);
   }
 }
);
