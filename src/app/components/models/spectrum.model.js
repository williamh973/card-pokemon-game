export let spectrumModel = {
    name : "Spectrum",
    level : 5,
    type : "spectrum",
    secondaryType : "poison",
    firstLogo : "./src/assets/images/logos/spectrum.png",
    secondLogo : "./src/assets/images/logos/poison.png",
    image : "./src/assets/images/spectrum.png",
    primaryStatut : "normal",
    secondaryStatut : {
      isNormal : true,
      isConfused : false,
      isCursed : false,
      isScared : false
    },
      weakness : {
        name : "Faiblesse",
        firstLogo : "./src/assets/images/logos/psy.png",
        secondLogo : "./src/assets/images/logos/ground.png",
        thirdLogo : "./src/assets/images/logos/spectrum.png",
        fourthLogo : "./src/assets/images/logos/dark.png"
      },
      resistance : {
        name : "Résistance",
        firstLogo: "./src/assets/images/logos/fairy.png",
        secondLogo : "./src/assets/images/logos/insect.png",
        thirdLogo : "./src/assets/images/logos/plant.png",
        fourthLogo : "./src/assets/images/logos/poison.png"
      },
    firstAttack : {
      name : "Onde Folie",
      logo : "./src/assets/images/logos/spectrum.png",
      type: "spectrum",
      class : "statut",
      resume : "Une lumière étrange qui plonge la cible dans un état de confusion.",
      strength : 0,
      precision : 100,
      precisionMax : 100
    },
    secondAttack : {
      name : "Malédiction",
      logo : "./src/assets/images/logos/spectrum.png",
      type: "malus",
      class : "statut",
      resume : "Une capacité à l’effet différent selon que le lanceur est un Pokémon Spectre ou non.",
      strength : 0,
      precision : 100,
      precisionMax : 100
    },
    stats : {
      attack : 50,
      defense : 45,
      specialAtt : 115,
      specialDef : 55,
      speed : 95,
      hp : 45,
      hpMax : 45 
    }
  };
  
