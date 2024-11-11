let userName = "Francesco";
let isLogged = true;
let ageUser = 10;

stampaMessaggio("ciao giovanni");
stampaMessaggio(3890876789);

if (isLogged) {
  //STAMPO NOME UTENTE
  stampaMessaggio(userName);
  // AGGIORNO IL NOME DELL'UTENTE E L'ETA'
  updateUser("Giovanni", 32);
  //STAMPO IL NUOVO NOME DELL'UTENTE
  stampaMessaggio(userName);

  // FOR WHILE CICLI
  for (let i = 0; i <= 10; i++) {
    if (i == 7) {
      stampaMessaggio("Log out Ok");
    }
    stampaMessaggio(i);
  }
} else {
  stampaMessaggio("Log again");
}

function updateUser(x, y) {
  userName = x;
  ageUser = y;
}

function stampaMessaggio(topolino) {
  console.log(topolino);
}
