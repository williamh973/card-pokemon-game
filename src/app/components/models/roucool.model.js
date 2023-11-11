export let roucoolStats = {
    name : "Roucool",
    level : 5,
    type : "flight",
    typeLogo : "./src/assets/images/logos/coloreless.png",
    image : "./src/assets/images/roucool.png",
      weakness : {
        name : "Faiblesse",
        type : "electric",
        logo : "./src/assets/images/logos/electric.png"
      },
      resistance : {
        name : "Résistance",
        type : "null",
        logo : null
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
      logo : "./src/assets/images/logos/coloreless.png",
      type: "vol",
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
  
export default roucoolStats;