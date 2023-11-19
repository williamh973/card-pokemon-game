export let scarabruteStats = {
    name : "Scarabrute",
    level : 5,
    type : "insect",
    logo : "./src/assets/images/logos/insect.png",
    image : "./src/assets/images/scarabrute.png",
    statut : "normal",
      weakness : {
        name : "Faiblesse",
        firstLogo : "./src/assets/images/logos/fire.png",
        secondLogo : "./src/assets/images/logos/rock.png",
        thirdLogo : "./src/assets/images/logos/flight.png"
      },
      resistance : {
        name : "Résistance",
        firstLogo: "./src/assets/images/logos/fight.png",
        secondLogo : "./src/assets/images/logos/plant.png",
        thirdLogo : "./src/assets/images/logos/ground.png"
      },
    firstAttack : {
      name : "Casse-Brique",
      logo : "./src/assets/images/logos/fight.png",
      type: "fight",
      class : "physical",
      resume : "Le lanceur attaque avec le tranchant de la main. Permet aussi de briser les barrières comme Mur Lumière et Protection.",
      strength : 75,
      precision : 100,
      precisionMax : 100
    },
    secondAttack : {
      name : "Puissance",
      logo : "./src/assets/images/logos/coloreless.png",
      type: "bonus",
      class : "status",
      resume : "Le lanceur prend une profonde inspiration et se concentre pour augmenter son taux de critiques.",
      strength : 0,
      precision : 100,
      precisionMax : 100
    },
    stats : {
      attack : 125,
      defense : 100,
      specialAtt : 55,
      specialDef : 70,
      speed : 85,
      hp : 65,
      hpMax : 65 
    }
  };
  
