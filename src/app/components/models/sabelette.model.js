export let sabeletteStats = {
    name : "Sabelette",
    level : 5,
    type : "ground",
    logo : "./src/assets/images/logos/coloreless.png",
    image : "./src/assets/images/sabelette.png",
      weakness : {
        name : "Faiblesse",
        firstLogo : "./src/assets/images/logos/water.png",
      },
      resistance : {
        name : "Résistance",
        firstLogo: "./src/assets/images/logos/electric.png"
      },
    firstAttack : {
      name : "Griffe",
      logo : "./src/assets/images/logos/coloreless.png",
      type: "normal",
      resume : "Le lanceur donne un coup de griffe",
      strength : 40,
      precision : 100
    },
    secondAttack : {
      name : "Boul'Armure",
      logo : "./src/assets/images/logos/coloreless.png",
      type: "bonus",
      resume : "Le lanceur s’enroule pour cacher ses points faibles, ce qui augmente sa Défense.",
      strength : 0,
      precision : 100
    },
    stats : {
      attack : 75,
      defense : 85,
      specialAtt : 20,
      specialDef : 30,
      speed : 40,
      hp : 50 
    }
  };
  
export default sabeletteStats;