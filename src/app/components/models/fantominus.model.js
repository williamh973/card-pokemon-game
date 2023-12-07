export let fantominusStats = {
    name : "Fantominus",
    level : 28,
    type : "spectrum",
    secondaryType : "poison",
    firstLogo : "./src/assets/images/logos/spectrum.png",
    secondLogo : "./src/assets/images/logos/poison.png",
    image : "./src/assets/images/fantominus.png",
    primaryStatut : "normal",
    secondaryStatut : "normal",
      weakness : {
        name : "Faiblesse",
        firstLogo : "./src/assets/images/logos/psy.png",
        secondLogo : "./src/assets/images/logos/ground.png",
        thirdLogo : "./src/assets/images/logos/spectrum.png",
        fourthLogo : "./src/assets/images/logos/dark.png"
      },
      resistance : {
        name : "Résistance",
        firstLogo: "./src/assets/images/logos/fairy.png",
        secondLogo : "./src/assets/images/logos/insect.png",
        thirdLogo : "./src/assets/images/logos/plant.png",
        fourthLogo : "./src/assets/images/logos/poison.png"
      },
    firstAttack : {
      name : "Léchouille",
      logo : "./src/assets/images/logos/spectrum.png",
      type: "spectrum",
      class : "physical",
      resume : "Un grand coup de langue qui inflige des dégâts à la cible et peut aussi la paralyser.",
      strength : 30,
      precision : 100,
      precisionMax : 100
    },
    secondAttack : {
      name : "Ombre Nocturne",
      logo : "./src/assets/images/logos/spectrum.png",
      type: "spectrum",
      class : "physical",
      resume : "Inflige des dégâts équivalents au niveau du lanceur.",
      strength : 1,
      precision : 100,
      precisionMax : 100
    },
    stats : {
      attack : 35,
      defense : 30,
      specialAtt : 100,
      specialDef : 35,
      speed : 80,
      hp : 30,
      hpMax : 30 
    }
  };
  
