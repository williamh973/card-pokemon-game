export let ectoplasmaModel = {
    name : "Ectoplasma",
    level : 32,
    type : "spectrum",
    secondaryType : "poison",
    firstLogo : "./src/assets/images/logos/spectrum.png",
    secondLogo : "./src/assets/images/logos/poison.png",
    image : "./src/assets/images/ectoplasma.png",
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
      name : "Hypnose",
      logo : "./src/assets/images/logos/psy.png",
      type: "psy",
      class : "statut",
      resume : "Le lanceur hypnotise la cible pour la plonger dans un profond sommeil.",
      strength : 0,
      precision : 60,
      precisionMax : 60
    },
    secondAttack : {
      name : "Dévorêve",
      logo : "./src/assets/images/logos/psy.png",
      type: "psy",
      class : "special",
      resume : "Le lanceur mange le rêve de la cible endormie et récupère en PV la moitié des dégâts infligés.",
      strength : 100,
      precision : 100,
      precisionMax : 100
    },
    stats : {
      attack : 65,
      defense : 60,
      specialAtt : 130,
      specialDef : 75,
      speed : 110,
      hp : 60,
      hpMax : 60 
    }
  };
  
