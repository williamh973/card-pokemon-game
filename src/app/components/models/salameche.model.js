export let salamecheStats = {
    name : "Salamèche",
    level : 5,
    type : "fire",
    logo : "./src/assets/images/logos/fire.png",
    image : "./src/assets/images/salameche.png",
    primaryStatut : "normal",
    secondaryStatut : "normal",
      weakness : {
        name : "Faiblesse",
        firstLogo : "./src/assets/images/logos/water.png",
        secondLogo : "./src/assets/images/logos/rock.png",
        thirdLogo : "./src/assets/images/logos/ground.png"
      },
      resistance : {
        name : "Résistance",
        firstLogo: "./src/assets/images/logos/fire.png",
        secondLogo : "./src/assets/images/logos/steel.png",
        thirdLogo : "./src/assets/images/logos/insect.png",
        fourthLogo : "./src/assets/images/logos/fairy.png",
        fifthLogo : "./src/assets/images/logos/plant.png",
        sixthLogo : "./src/assets/images/logos/ice.png"
      },
    firstAttack : {
      name : "Rugissement",
      logo : "./src/assets/images/logos/coloreless.png",
      type: "normal",
      class : "status",
      resume : "Le lanceur pousse un cri pour tromper la vigilance de la cible et baisser son Attaque.",
      strength : 0,
      precision : 100,
      precisionMax : 100
    },
    secondAttack : {
      name : "Flammèche",
      logo : "./src/assets/images/logos/fire.png",
      type: "fire",
      class : "special",
      resume : "La cible est attaquée par une faible flamme qui peut aussi la brûler.",
      strength : 40,
      precision : 100,
      precisionMax : 100
    },
    stats : {
      attack : 52,
      defense : 43,
      specialAtt : 60,
      specialDef : 50,
      speed : 65,
      hp : 39,
      hpMax : 39 // 39
    }
  };
  
