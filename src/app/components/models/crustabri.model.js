export let crustabriStats = {
    name : "Crustabri",
    level : 5,
    type : "water",
    secondaryType : "ice",
    firstLogo : "./src/assets/images/logos/water.png",
    secondLogo : "./src/assets/images/logos/ice.png",
    image : "./src/assets/images/crustabri.png",
    primaryStatut : "normal",
    secondaryStatut : "normal",
      weakness : {
        name : "Faiblesse",
        firstLogo : "./src/assets/images/logos/fight.png",
        secondLogo : "./src/assets/images/logos/electric.png",
        thirdLogo : "./src/assets/images/logos/plant.png",
        fourthLogo : "./src/assets/images/logos/rock.png"
      },
      resistance : {
        name : "Résistance",
        firstLogo: "./src/assets/images/logos/water.png",
        secondLogo : "./src/assets/images/logos/ice.png"
      },
    firstAttack : {
      name : "Laser Glace",
      logo : "./src/assets/images/logos/ice.png",
      type: "ice",
      class : "special",
      resume : "Un rayon de glace frappe la cible, ce qui peut aussi la geler.",
      strength : 90,
      precision : 100,
      precisionMax : 100
    },
    secondAttack : {
      name : "Abri",
      logo : "./src/assets/images/logos/coloreless.png",
      type: "normal",
      class : "status",
      resume : "Protège le lanceur de la plupart des attaques pendant un tour.",
      strength : 0,
      precision : 100,
      precisionMax : 100
    },
    stats : {
      attack : 95,
      defense : 180,
      specialAtt : 85,
      specialDef : 45,
      speed : 70,
      hp : 50,
      hpMax : 50 
    }
  };
  
