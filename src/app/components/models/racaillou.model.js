export let racaillouStats = {
    name : "Racaillou",
    level : 5,
    type : "rock",
    logo : "./src/assets/images/logos/fight.png",
    image : "./src/assets/images/racaillou.png",
      weakness : {
        name : "Faiblesse",
        logoWater : "./src/assets/images/logos/water.png",
        logoFight : "./src/assets/images/logos/fight.png",
        logoPlant : "./src/assets/images/logos/plant.png",
      },
      resistance : {
        name : "Résistance",
        firstLogo: "./src/assets/images/logos/coloreless.png",
        secondLogo : "./src/assets/images/logos/fire.png",
        thirdLogo : "./src/assets/images/logos/poison.png",
        fourthLogo : "./src/assets/images/logos/electric.png",
      },
    firstAttack : {
      name : "Charge",
      logo : "./src/assets/images/logos/coloreless.png",
      type: "normal",
      resume : "Une attaque de base",
      strength : 35,
      precision : 95
    },
    secondAttack : {
      name : "Jet-Pierres",
      logo : "./src/assets/images/logos/fight.png",
      type: "rock",
      resume : "Le lanceur soulève une pierre et la lance sur la cible.",
      strength : 50,
      precision : 90
    },
    stats : {
      attack : 80,
      defense : 100,
      specialAtt : 30,
      specialDef : 30,
      speed : 20,
      hp : 40 
    }
  };
  
