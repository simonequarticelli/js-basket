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

  function player(){

  //array alfabeto
  var array_alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

  //array dove fare il push delle 3 lettere
  var codice_1 = [];

  for (var i = 0; i < 3; i++) {
    //creo var per generare lettere
    var lettera = array_alfabeto[Math.floor(Math.random()*array_alfabeto.length)];
    //controllo che non ci siano doppioni di lettere e faccio il push
    if (codice_1.includes(lettera) == false){
      codice_1.push(lettera);
    }
  }

  //console.log(codice_1.join(''));

  //array dove fare il push dei 3 numeri
  var codice_2 = [];

  for (var i = 0; i < 3; i++) {
    //creo var per generare numeri
    var num_random = Math.floor(Math.random()*9);
    //controllo che non ci siano doppioni di numeri e faccio il push
    if (codice_2.includes(num_random) == false){
      codice_2.push(num_random);
    }
  }

  //console.log(codice_2.join(''));

  var codice_univoco = codice_1.join('') + codice_2.join('');

  //console.log(codice_univoco);
  var giocatore = {
    'nome': codice_univoco,
    'punti_fatti': random(0, 40),
    'rinbalzi': random(0, 200),
    'falli': random(0, 5),
    'tiri_da_2_punti': (Math.random()*100).toFixed(1),
    'tiri_da_3_punti': (Math.random()*100).toFixed(1)
  };

  return giocatore;
}


  //creo funzione per generare numeri casuali
  function random(min, max){
    var random_number = Math.floor(Math.random()*(max-min+1)+min);
    return random_number;
  }

  var test = [];

  var prova = player();

  var code = prova.nome;

  for (var i = 0; i < 3; i++) {

    //preparo variabile per poi applicarla
    var context = {
      'code': code,
      'indice': i,
    }
    //console.log(context);

    //PREPARAZIONE TEMPLATE

    //salvo il template dentro a una variabile
    var template__codici = $('#template__code').html();
    //console.log(template__codici);

    //richiamo il compile
    var template__function = Handlebars.compile(template__codici);
    //console.log(template__function);

    var html = template__function(context);
    //console.log(html);

    $('.oggetti').append(html);

    var prova = player();

    var code = prova.nome;

    /////////////////////////////////////////////////////////////////////////////////////////////
    // $('.oggetti').appen('<li><a data-numero = "' + i + '" href="#">' + prova.nome + '</a></li>');
    /////////////////////////////////////////////////////////////////////////////////////////////

    test.push(prova);

  }

    //console.log(codice_univoco);

  $('a').click(function(){

    var numero_dat = $(this).attr('data-numero'); //<-- indice del giocatore all'interno dell'array test
    var giocatore = test[numero_dat];
    var stampa = '';
    for (var field in giocatore) {
      stampa += giocatore[field];

    }

    //PREPARAZIONE TEMPLATE

    //salvo il template dentro a una variabile
    var template__numeri = $('#template__number').html();
    //console.log(template__codici);

    //richiamo il compile
    var template__function = Handlebars.compile(template__numeri);
    //console.log(template__function);

    //preparo variabile per poi applicarla
    var context = {
      'data': numero_dat,
      'statistiche_1': giocatore.nome,
      'statistiche_2': giocatore.punti_fatti,
      'statistiche_3': giocatore.rinbalzi,
      'statistiche_4': giocatore.falli,
      'statistiche_5': giocatore.tiri_da_2_punti,
      'statistiche_6': giocatore.tiri_da_3_punti,
    }
    console.log(context);

    var html = template__function(context);
    //console.log(html);

    $('.proprieta').html(html);

    ///////////////////////////////////////////////////
    // $('.proprieta').html(stampa).css('color', 'orange');
    ///////////////////////////////////////////////////
  });

});
