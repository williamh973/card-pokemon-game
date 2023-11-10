export let racaillouStats = {
    name : "Racaillou",
    level : 5,
    type : "rock",
    logo : "./assets/images/logos/fight.png",
    image : "./assets/images/racaillou.png",
      weakness : {
        name : "Faiblesse",
        logoWater : "./assets/images/logos/water.png",
        logoFight : "./assets/images/logos/fight.png",
        logoPlant : "./assets/images/logos/plant.png",
      },
      resistance : {
        name : "Résistance",
        firstLogo: "./assets/images/logos/coloreless.png",
        secondLogo : "./assets/images/logos/fire.png",
        thirdLogo : "./assets/images/logos/poison.png",
        fourthLogo : "./assets/images/logos/electric.png",
      },
    firstAttack : {
      name : "Charge",
      logo : "./assets/images/logos/coloreless.png",
      type: "normal",
      resume : "Une attaque de base",
      strength : 35,
      precision : 95
    },
    secondAttack : {
      name : "Jet-Pierres",
      logo : "./assets/images/logos/fight.png",
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
  
export default racaillouStats;