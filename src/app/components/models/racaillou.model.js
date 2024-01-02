export let racaillouModel = {
    name : "Racaillou",
    level : 5,
    type : "rock",
    secondaryType : "ground",
    firstLogo : "./src/assets/images/logos/rock.png",
    secondLogo : "./src/assets/images/logos/ground.png",
    image : "./src/assets/images/racaillou.png",
    primaryStatut : "normal",
    secondaryStatut : {
      isNormal : true,
      isConfused : false,
      isCursed : false,
      isScared : false
    },
      weakness : {
        name : "Faiblesse",
        firstLogo : "./src/assets/images/logos/water.png",
        secondLogo : "./src/assets/images/logos/fight.png",
        thirdLogo : "./src/assets/images/logos/plant.png",
      },
      resistance : {
        name : "Résistance",
        firstLogo: "./src/assets/images/logos/flight.png",
        secondLogo : "./src/assets/images/logos/coloreless.png",
        thirdLogo : "./src/assets/images/logos/fire.png",
        fourthLogo : "./src/assets/images/logos/poison.png",
      },
    firstAttack : {
      name : "Charge",
      logo : "./src/assets/images/logos/coloreless.png",
      type: "normal",
      class : "physical",
      resume : "Une attaque de base",
      strength : 35,
      precision : 95,
      precisionMax : 95
    },
    secondAttack : {
      name : "Jet-Pierres",
      logo : "./src/assets/images/logos/rock.png",
      type: "rock",
      class : "physical",
      resume : "Le lanceur soulève une pierre et la lance sur la cible.",
      strength : 50,
      precision : 90,
      precisionMax : 90
    },
    stats : {
      attack : 80,
      defense : 100,
      specialAtt : 30,
      specialDef : 30,
      speed : 20,
      hp : 40,
      hpMax : 40
    }
  };
  
