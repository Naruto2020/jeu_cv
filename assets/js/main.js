// page accueil du jeu
var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");
canvas.style = "border:solid 1px black";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var fenCanvas = function () {
  if (canvas.width.innerHTML < window.innerWidth) {
    canvas.width.innerHTML = window.innerWidth;
  }
  if (canvas.height.innerHTML < window.innerHeight) {
    canvas.height.innerHTML = window.innerHeight;
  }
};

var pageC = function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // redimenssion canvas

  // joueur
  var jinn = new Image();
  jinn.src = "assets/images/jinn.gif";
  jinn.onload = function () {
    context.drawImage(jinn, 0, 0, 46, 40, 320, 80, 100, 100);
    context.drawImage(jinn, 0, 0, 40, 70, 680, 400, 100, 150);

    context.strokeStyle = "#fff";
    context.strokeRect(340, 90, 80, 90);
    context.imageSmoothingEnebled = false;
  };

  context.font = "bold 22pt Calibri,Geneva,Arial";
  context.fillStyle = "blue";
  context.fillText("STEVE KOUNGA", 460, 110);
  context.fillText("DEVELOPPEUR FULL STACK JS", 460, 140);
  context.fillText("93100 Montreuil ", 460, 170);
  context.fillText("06.34.01.16.50 ", 460, 200);
  context.fillText("stevefranck.kounga@gmail.com", 460, 230);
  context.fillText(
    "https://www.linkedin.com/in/steve-kounga-full-stack/",
    460,
    260
  );
  context.fillText(
    "https://github.com/Naruto2020https://github.com/Naruto2020",
    460,
    290
  );

  context.fillStyle = "gold";
  context.fillText(
    "APPUYEZ SUR LES TOUCHES FLECHES DE VOTRE CLAVIER ← → & ↑↓  POUR VOUS DEPLACER",
    200,
    340
  );

  var dessin = function () {
    var X = canvas.width;
    var Y = canvas.height;
    context.strokeStyle = "magenta";
    context.strokeText("APPUYEZ SUR  <<ESPACE>>  POUR CONTINUER", 500, 400);
  };
  dessin();

  window.onkeyup = function (e) {
    if (e.keyCode === 32) {
      canvas.style.display = "none";
    }
  };
};

var largEcran = window.innerWidth;
var hautEcran = window.innerHeight;

var fenetre = function () {
  if (largEcran.innerHTML < window.innerWidth) {
    largEcran.innerHTML = window.innerWidth;
  }
  if (hautEcran.innerHTML < window.innerHeight) {
    hautEcran.innerHTML = window.innerHeight;
  }
};

// page 2 du jeux  les varibles globales
var animation = function () {
  var largEcran = window.innerWidth;
  var hautEcran = window.innerHeight;
  var decorsB = 30;

  // score
  var affichage = document.getElementById("cube14");
  var score = 0;
  const pointJsBox = 100;

  // joueur
  var divs = document.querySelectorAll("div");
  var joueur = divs[0];
  var xPos = 0;
  var yPos = 300;
  var larg = 45;
  var haut = 57;

  var joueurL = parseFloat(joueur.style.left);
  var joueurR = joueurL + larg;
  var joueurT = parseFloat(joueur.style.top);
  var joueurB = joueurT + haut;

  var deplacementX = 6;
  var deplacementY = 6;

  // cube JS couleur grise
  var divs = document.querySelectorAll("div");
  var cube5 = divs[5];
  let mouv5X = 10;

  var bloc5W = 70;
  var bloc5H = 80;
  var bor5L = parseFloat(cube5.style.left);
  var bor5R = bor5L + bloc5W;
  var bor5T = parseFloat(cube5.style.top);
  var bor5B = bor5T + bloc5H;

  // cube JS couleur or
  var divs = document.querySelectorAll("div");
  var cube6 = divs[6];

  var bloc6W = 70;
  var bloc6H = 80;
  var bor6L = parseFloat(cube6.style.left);
  var bor6R = bor6L + bloc6W;
  var bor6T = parseFloat(cube6.style.top);
  var bor6B = bor6T + bloc6H;

  // cube JS couleur bleu
  var divs = document.querySelectorAll("div");
  var cube7 = divs[7];

  var mouv7Y = 10;

  var bloc7W = 70;
  var bloc7H = 80;
  var bor7L = parseFloat(cube7.style.left);
  var bor7R = bor7L + bloc7W;
  var bor7T = parseFloat(cube7.style.top);
  var bor7B = bor7T + bloc7H;

  // cube JS couleur violette
  var divs = document.querySelectorAll("div");
  var cube8 = divs[8];

  var mouv8Y = 10;

  var bloc8W = 70;
  var bloc8H = 80;
  var bor8L = parseFloat(cube8.style.left);
  var bor8R = bor8L + bloc8W;
  var bor8T = parseFloat(cube8.style.top);
  var bor8B = bor8T + bloc8H;

  // cube affiche regles du jeu
  var divs = document.querySelectorAll("div");
  var cube9 = divs[9];

  // cube affiche victoire
  var divs = document.querySelectorAll("div");
  var cube15 = divs[15];
  cube15.style.display = "none";

  // cube affiche défaite
  var divs = document.querySelectorAll("div");
  var cube12 = divs[12];
  cube12.style.display = "none";

  // bouton close masque regle du jeu
  var buttons = document.querySelectorAll("button");
  var btnClose = buttons[0];

  // bouton start 1
  var buttons = document.querySelectorAll("button");
  var btnStart = buttons[1];
  btnStart.addEventListener("click", function () {
    window.location.reload();
  });

  // bouton start 2
  var buttons = document.querySelectorAll("button");
  var btnStart1 = buttons[2];
  btnStart1.addEventListener("click", function () {
    window.location.reload();
  });

  // redimenssion de la fenetre

  // déplacement du joueur et gestion des collisions
  btnClose.addEventListener("click", function () {
    cube9.style.display = "none";

    window.onkeydown = function (event) {
      finGame();
      var code = event.keyCode;

      switch (code) {
        case 37:
          var joueurL = parseFloat(joueur.style.left);
          if (joueurL + deplacementX <= 0) {
            deplacementX = 0;
          } else {
            deplacementX = 6;
          }

          joueur.style.left = joueurL - deplacementX + "px";

          break;
        case 38:
          var joueurT = parseFloat(joueur.style.top);
          if (joueurT + deplacementY <= 32) {
            deplacementY = 0;
          } else {
            deplacementY = 6;
          }

          if (joueurT + deplacementY <= bor5B) {
            score += pointJsBox;
            affichage.innerHTML.display;
            cube5.style.display = "none";
          } else {
            deplacementY = 6;
          }

          joueur.style.top = joueurT - deplacementY + "px";

          break;
        case 39:
          var joueurL = parseFloat(joueur.style.left);
          var joueurR = joueurL + larg;
          if (joueurR + deplacementX >= largEcran) {
            deplacementX = 0;
          } else {
            deplacementX = 6;
          }

          if (joueurR + deplacementX > bor8L) {
            score += pointJsBox;
            cube8.style.display = "none";
          }

          if (joueurR + deplacementX > bor6L) {
            score += pointJsBox;
            cube5.style.display = "none";
            cube6.style.display = "none";
            cube7.style.display = "none";
            cube8.style.display = "none";
            cube15.style.display = "block";
          } else {
            deplacementX = 6;
          }

          joueur.style.left = joueurL + deplacementX + "px";

          break;
        case 40:
          var joueurT = parseFloat(joueur.style.top);
          var joueurB = joueurT + haut;
          if (joueurB + deplacementY >= hautEcran - decorsB) {
            deplacementY = 0;
          } else {
            deplacementY = 6;
          }

          if (joueurB + deplacementY > bor7T) {
            score += pointJsBox;
            cube7.style.display = "none";
          }
          joueur.style.top = joueurT + deplacementY + "px";

          break;
      }
      afficheScore();
    };
  });

  // fonction affiche score

  var afficheScore = function () {
    var message = "Score : " + score;
    affichage.innerHTML = message;
  };

  //cube couleur terre

  var divs = document.querySelectorAll("div");
  var cube1 = divs[1];
  cube1.style.backgroundColor = "rgb(68, 49, 30)";
  var mouv1X = 5;
  var mouv1Y = 20;

  btnClose.addEventListener("click", function () {
    cube9.style.display = "none";
    var intervalID;
    intervalID = window.setInterval(function () {
      finGame();
      var bloc1W = 50;
      var bloc1H = 35;
      var bor1L = parseFloat(cube1.style.left);
      var bor1R = bor1L + bloc1W;
      var bor1T = parseFloat(cube1.style.top);
      var bor1B = bor1T + bloc1H;
      cube1.style.borderRadius =
        parseFloat(cube1.style.borderRadius) + 0.2 + "px";

      if (bor1L + mouv1X <= 560 || bor1R + mouv1X >= largEcran - bloc1W - 8) {
        mouv1X = -mouv1X;
      } else if (
        bor1T + mouv1Y <= 40 + bloc1H ||
        bor1B + mouv1Y >= hautEcran - decorsB - 343
      ) {
        mouv1Y = -mouv1Y;
      } else {
        cube1.style.left = bor1L + mouv1X + "px";
        cube1.style.top = bor1T + mouv1Y + "px";
      }
    }, 60);
  });

  // cube  couleur viollete
  var divs = document.querySelectorAll("div");
  var cube2 = divs[2];
  var mouv2X = 5;
  var mouv2Y = 20;

  btnClose.addEventListener("click", function () {
    cube9.style.display = "none";
    var intervalID1;
    intervalID1 = window.setInterval(function () {
      finGame();
      var bloc2W = 50;
      var bloc2H = 50;
      var bor2L = parseFloat(cube2.style.left);
      var bor2R = bor2L + bloc2W;
      var bor2T = parseFloat(cube2.style.top);
      var bor2B = bor2T + bloc2H;

      cube2.style.borderRadius =
        parseFloat(cube2.style.borderRadius) + 0.2 + "px";
      if (bor2L + mouv2X <= 0 || bor2R + mouv2X >= largEcran - 450) {
        mouv2X = -mouv2X;
      } else if (
        bor2T + mouv2Y <= 390 ||
        bor2B + mouv2Y >= hautEcran - decorsB - 69
      ) {
        mouv2Y = -mouv2Y;
      } else {
        cube2.style.left = bor2L + mouv2X + "px";
        cube2.style.top = bor2T + mouv2Y + "px";
      }
    }, 60);
  });

  // cube transparent
  var divs = document.querySelectorAll("div");
  var cube3 = divs[3];
  cube3.style.backgroundColor = " rgba(64, 0, 64, 0.5)";
  let mouv3X = 20;
  let mouv3Y = 10;

  btnClose.addEventListener("click", function () {
    cube9.style.display = "none";
    var intervalID2;
    intervalID2 = window.setInterval(function () {
      finGame();
      var bloc3W = 50;
      var bloc3H = 50;
      var bor3L = parseFloat(cube3.style.left);
      var bor3R = bor3L + bloc3W;
      var bor3T = parseFloat(cube3.style.top);
      var bor3B = bor3T + bloc3H;

      //cube3.style.borderRadius =
      // parseFloat(cube3.style.borderRadius) + 0.2 + "px";
      if (bor3L + mouv3X <= 250 || bor3R + mouv3X >= largEcran - 250) {
        mouv3X = -mouv3X;
      } else if (
        bor3T + mouv3Y <= 150 ||
        bor3B + mouv3Y >= hautEcran - decorsB
      ) {
        mouv3Y = -mouv3Y;
      } else {
        cube3.style.left = bor3L + mouv3X + "px";
        cube3.style.top = bor3T + mouv3Y + "px";
      }
    }, 60);
  });

  // cube argenté
  var divs = document.querySelectorAll("div");
  var cube4 = divs[4];
  cube4.style.backgroundColor = " rgb(64, 0, 0)";
  let mouv4X = 8;
  let mouv4Y = 4;

  btnClose.addEventListener("click", function () {
    cube9.style.display = "none";
    var intervalID3;
    intervalID3 = window.setInterval(function () {
      finGame();
      var bloc4W = 80;
      var bloc4H = 80;
      var bor4L = parseFloat(cube4.style.left);
      var bor4R = bor4L + bloc4W;
      var bor4T = parseFloat(cube4.style.top);
      var bor4B = bor4T + bloc4H;

      cube4.style.borderRadius =
        parseFloat(cube4.style.borderRadius) + 0.2 + "px";
      if (bor4L + mouv4X <= 150 || bor4R + mouv4X >= largEcran - 500) {
        mouv4X = -mouv4X;
      } else if (
        bor4T + mouv4Y <= 150 ||
        bor4B + mouv4Y >= hautEcran - decorsB
      ) {
        mouv4Y = -mouv4Y;
      } else {
        cube4.style.left = bor4L + mouv4X + "px";
        cube4.style.top = bor4T + mouv4Y + "px";
      }
    }, 60);
  });

  // étoile fillante
  var divs = document.querySelectorAll("div");
  var cube10 = divs[10];
  cube10.style.backgroundColor = "gold";

  let mouv10X = 13;
  let mouv10Y = 6;

  btnClose.addEventListener("click", function () {
    cube9.style.display = "none";
    var intervalID4;
    intervalID4 = window.setInterval(function () {
      finGame();
      var bloc10W = 20;
      var bloc10H = 5;
      var bor10L = parseFloat(cube10.style.left);
      var bor10R = bor10L + bloc10W;
      var bor10T = parseFloat(cube10.style.top);
      var bor10B = bor10T + bloc10H;

      cube10.style.borderRadius =
        parseFloat(cube10.style.borderRadius) + 0.2 + "px";
      if (bor10L + mouv10X <= 0 || bor10R + mouv10X >= largEcran) {
        mouv10X = -mouv10X;
      } else if (
        bor10T + mouv10Y <= 30 ||
        bor10B + mouv10Y >= hautEcran - decorsB
      ) {
        mouv10Y = -mouv10Y;
      } else {
        cube10.style.left = bor10L + mouv10X + "px";
        cube10.style.top = bor10T + mouv10Y + "px";
      }
    }, 20);
  });

  // cube gameball
  var divs = document.querySelectorAll("div");
  var cube11 = divs[11];
  cube11.style.backgroundColor = "gold";

  var mouv11X = 3;
  var mouv11Y = 7;
  var intervalID5;

  btnClose.addEventListener("click", function () {
    cube9.style.display = "none";

    intervalID5 = window.setInterval(function () {
      finGame();
      var bloc11W = 30;
      var bloc11H = 30;
      var bor11L = parseFloat(cube11.style.left);
      var bor11R = bor11L + bloc11W;
      var bor11T = parseFloat(cube11.style.top);
      var bor11B = bor11T + bloc11H;
      cube11.style.borderRadius =
        parseFloat(cube11.style.borderRadius) + 0.1 + "px";
      if (bor11R + mouv11X >= largEcran) {
        clearInterval(intervalID5);
        cube12.style.display = "block";
      } else if (
        bor11T + mouv11Y <= 33 ||
        bor11B + mouv11Y >= hautEcran - decorsB
      ) {
        mouv11Y = -mouv11Y;
      } else {
        cube11.style.left = bor11L + mouv11X + "px";
        cube11.style.top = bor11T + mouv11Y + "px";
      }
    }, 60);
  });

  // avant demarer jeux

  var debutGame = function () {
    // joueurL.style.left = 0;
    // joueurT.style.left = 0;

    mouv1X = 0;
    mouv1Y = 0;

    mouv2X = 0;
    mouv2Y = 0;

    mouv3X = 0;
    mouv3Y = 0;

    mouv4X = 0;
    mouv4Y = 0;

    mouv10X = 0;
    mouv10Y = 0;

    mouv11X = 0;
    mouv11Y = 0;

    window.onkeyup = function (e) {
      if (e.keyCode === 32) {
        canvas.style.display = "none";

        // joueurL.style.left += deplacementX;
        //joueurT.style.left += deplacementY;

        mouv1X = 5;
        mouv1Y = 20;

        mouv2X = 5;
        mouv2Y = 20;

        mouv3X = 20;
        mouv3Y = 10;

        mouv4X = 8;
        mouv4Y = 4;

        mouv10X = 13;
        mouv10Y = 6;

        mouv11X = 5;
        mouv11Y = 8;
      }
    };
  };

  // game over arret des annimations si on gagne ou si on perd

  var finGame = function () {
    if (cube15.style.display == "block" || cube12.style.display == "block") {
      joueurL.style.left = 0;
      joueurT.style.left = 0;

      mouv1X = 0;
      mouv1Y = 0;

      mouv2X = 0;
      mouv2Y = 0;

      mouv3X = 0;
      mouv3Y = 0;

      mouv4X = 0;
      mouv4Y = 0;

      mouv10X = 0;
      mouv10Y = 0;

      mouv11X = 0;
      mouv11Y = 0;
    }
  };
};

$(function () {
  pageC();
  animation();
  $(window).resize(function () {
    fenCanvas();
    fenetre();
  });
});
