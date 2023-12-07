export let krabbossStats = {
    name : "Krabboss",
    level : 5,
    type : "water",
    secondaryType : "none",
    logo : "./src/assets/images/logos/water.png",
    image : "./src/assets/images/krabboss.png",
    primaryStatut : "normal",
    secondaryStatut : "normal",
      weakness : {
        name : "Faiblesse",
        firstLogo : "./src/assets/images/logos/plant.png",
        secondLogo : "./src/assets/images/logos/electric.png"
      },
      resistance : {
        name : "Résistance",
        firstLogo: "./src/assets/images/logos/water.png",
        secondLogo : "./src/assets/images/logos/steel.png",
        thirdLogo : "./src/assets/images/logos/fire.png",
        fourthLogo : "./src/assets/images/logos/ice.png"
      },
    firstAttack : {
      name : "Abri",
      logo : "./src/assets/images/logos/coloreless.png",
      type: "normal",
      class : "status",
      resume : "Protège le lanceur de la plupart des attaques pendant un tour.",
      strength : 0,
      precision : 100,
      precisionMax : 100
    },
    secondAttack : {
      name : "Guillotine",
      logo : "./src/assets/images/logos/coloreless.png",
      type: "normal",
      class : "physical",
      resume : "Met K.O. en un coup. Les Pokémon ayant un niveau strictement supérieur sont immunisés.",
      strength : 1,
      precision : 30,
      precisionMax : 30
    },
    stats : {
      attack : 130,
      defense : 115,
      specialAtt : 50,
      specialDef : 50,
      speed : 75,
      hp : 55,
      hpMax : 55,
      hpMax : 55
    }
  };
  
