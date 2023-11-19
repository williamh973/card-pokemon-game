export let insecateurStats = {
    name : "Insécateur",
    level : 5,
    type : "insect",
    logo : "./src/assets/images/logos/insect.png",
    image : "./src/assets/images/insecateur.png",
    statut : "normal",
      weakness : {
        name : "Faiblesse",
        firstLogo : "./src/assets/images/logos/flight.png",
        secondLogo : "./src/assets/images/logos/fire.png",
        thirdLogo : "./src/assets/images/logos/rock.png",
      },
      resistance : {
        name : "Résistance",
        firstLogo : "./src/assets/images/logos/fight.png",
        secondLogo : "./src/assets/images/logos/plant.png",
        thirdLogo : "./src/assets/images/logos/ground.png",
      },
    firstAttack : {
      name : "Hâte",
      logo : "./src/assets/images/logos/coloreless.png",
      type: "bonus",
      class : "status",
      resume : "Augmente la Vitesse du lanceur de 2 points",
      strength : 0,
      precision : 100,
      precisionMax : 100
    },
    secondAttack : {
      name : "Tranche",
      logo : "./src/assets/images/logos/coloreless.png",
      type: "normal",
      class : "physical",
      resume : "Le lanceur donne un coup de griffe ou de faux. Taux de critiques élevé.",
      strength : 70,
      precision : 100,
      precisionMax : 100
    },
    stats : {
      attack : 110,
      defense : 80,
      specialAtt : 55,
      specialDef : 80,
      speed : 105,
      hp : 70 
    }
  };
  
