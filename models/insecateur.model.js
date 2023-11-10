export let insecateurStats = {
    name : "Insécateur",
    level : 5,
    type : "insect",
    logo : "./assets/images/logos/plant.png",
    image : "./assets/images/insecateur.png",
      weakness : {
        name : "Faiblesse",
        firstLogo : "./assets/images/logos/fire.png",
      },
      resistance : {
        name : "Résistance",
        firstLogo: "./assets/images/logos/plant.png"
      },
    firstAttack : {
      name : "Hâte",
      logo : "./assets/images/logos/coloreless.png",
      type: "normal",
      resume : "Augmente la Vitesse du lanceur de 2 points",
      strength : 0,
      precision : 100
    },
    secondAttack : {
      name : "Tranche",
      logo : "./assets/images/logos/coloreless.png",
      type: "normal",
      resume : "Le lanceur donne un coup de griffe ou de faux. Taux de critiques élevé.",
      strength : 70,
      precision : 100
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
  
export default insecateurStats;