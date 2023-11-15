export let roucoolStats = {
    name : "Roucool",
    level : 5,
    type : "flight",
    logo : "./src/assets/images/logos/flight.png",
    image : "./src/assets/images/roucool.png",
      weakness : {
        name : "Faiblesse",
        firstLogo : "./src/assets/images/logos/electric.png",
        secondLogo : "./src/assets/images/logos/rock.png",
        thirdLogo : "./src/assets/images/logos/ice.png",
      },
      resistance : {
        name : "Résistance",
        firstLogo : "./src/assets/images/logos/fight.png",
        secondLogo : "./src/assets/images/logos/insect.png",
        thirdLogo : "./src/assets/images/logos/plant.png",
        fourthLogo : "./src/assets/images/logos/ground.png"
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
      name : "Tornade",
      logo : "./src/assets/images/logos/flight.png",
      type: "flight",
      resume : "Le lanceur bat des ailes pour générer une bourrasque qui blesse la cible",
      strength : 40,
      precision : 100
    },
    stats : {
      attack : 45,
      defense : 40,
      specialAtt : 35,
      specialDef : 35,
      speed : 56,
      hp : 40 
    }
  };
  
