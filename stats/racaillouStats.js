export let racaillouStats = {
    name : "Racaillou",
    level : 5,
    type : "rock",
    logo : "images/logos/fight.png",
    image : "./images/racaillou.png",
      weakness : {
        name : "Faiblesse",
        logoWater : "images/logos/water.png",
        logoFight : "images/logos/fight.png",
        logoPlant : "images/logos/plant.png",
      },
      resistance : {
        name : "Résistance",
        firstLogo: "images/logos/coloreless.png",
        secondLogo : "images/logos/fire.png",
        thirdLogo : "images/logos/poison.png",
        fourthLogo : "images/logos/electric.png",
      },
    firstAttack : {
      name : "Charge",
      logo : "images/logos/coloreless.png",
      type: "normal",
      resume : "Une attaque de base",
      strength : 35,
      precision : 95
    },
    secondAttack : {
      name : "Jet-Pierres",
      logo : "images/logos/fight.png",
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