// Il software deve generare casualmente le statistiche di gioco di 100 giocatori
// di basket per una giornata di campionato.
// In particolare vanno generate per ogni giocatore le seguenti informazioni,
// facendo attenzione che il numero generato abbia senso:
// - Codice Giocatore Univoco (formato da 3 lettere maiuscole casuali e 3 numeri)
// - Numero di punti fatti
// - Numero di rimbalzi
// - Falli
// - Percentuale di successo per tiri da 2 punti
// - Percentuale di successo per tiri da 3 punti
// Tutti i giocatori verranno visualizzati tramite il loro codice (in una select, una lista, …).
// Una volta cliccato sul codice giocatore, nel corpo principale verranno visualizzate
// le statistiche corrispondenti.

$(document).ready(function(){

  //creo array alfabeto
  var array_alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

  //array codice Giocatore
  var codice_1 = [];

  for (var i = 0; i < 3; i++) {
    var lettera = array_alfabeto[Math.floor(Math.random()*array_alfabeto.length)];

    if (codice_1.includes(lettera) == false){
      codice_1.push(lettera);
    }
  }

  //console.log(codice_1.join(''));

  var codice_2 = [];

  for (var i = 0; i < 3; i++) {
    //creo var per generare numeri
    var num_random = Math.floor(Math.random()*9);

    if (codice_2.includes(num_random) == false){
      codice_2.push(num_random);
    }
  }

  //console.log(codice_2.join(''));

  var lettere_3 = codice_1;
  var numeri_3 = codice_2;

  var codice_univoco = lettere_3.join('')+numeri_3.join('');

  //console.log(codice_univoco);

  //creo funzione per generare numeri casuali
  function random(min, max){
    var random_number = Math.floor(Math.random()*(max-min+1)+min);
    return random_number;
  }

  $('.oggetti').append('<li><a href="#">' + codice_univoco + '</a></li>');

  var codice_univoco = {
      'punti fatti': random(0, 200),
      'rinbalzi': random(0, 500),
      'falli': random(0, 100),
      'tiri da 2 punti(%)': (Math.random()*100).toFixed(1),
       'tiri da 3 punti(%)': (Math.random()*100).toFixed(1)
    };


  //console.log(codice_univoco);

  $('a').click(function(){
    var stampa = '';
    for (var field in codice_univoco) {
      stampa += codice_univoco[field] + '<br>';
    }
    $('.proprieta').append(stampa);

  });











});
