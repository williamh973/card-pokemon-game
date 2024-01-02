export let pikachuModel = {
    name : "Pikachu",
    level : 5,
    type : "electric",
    secondaryType : "none",
    logo : "./src/assets/images/logos/electric.png",
    image : "./src/assets/images/pikachu.png",
    primaryStatut : "normal",
    secondaryStatut : {
      isNormal : true,
      isConfused : false,
      isCursed : false,
      isScared : false
    },
      weakness : {
        name : "Faiblesse",
        firstLogo : "./src/assets/images/logos/ground.png"
      },
      resistance : {
        name : "Résistance",
        firstLogo : "./src/assets/images/logos/electric.png",
        secondLogo : "./src/assets/images/logos/steel.png",
        thirdLogo : "./src/assets/images/logos/flight.png"
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
        name : "Éclair",
        logo : "./src/assets/images/logos/electric.png",
        type: "electric",
        class : "special",
        resume : "Une décharge électrique tombe sur la cible, ce qui peut aussi la paralyser.",
        strength : 40,
        precision : 100,
        precisionMax : 100
      },
      stats : {
        attack : 55,
        defense : 40,
        specialAtt : 50,
        specialDef : 50,
        speed : 90,
        hp : 35,
        hpMax : 35
       }
    };
  

