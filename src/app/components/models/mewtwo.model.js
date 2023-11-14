export let mewtwoStats = {
    name : "Mewtwo",
    level : 5,
    type : "psy",
    logo : "./src/assets/images/logos/psy.png",
    image : "./src/assets/images/mewtwo.png",
      weakness : {
        name : "Faiblesse",
        firstLogo : "./src/assets/images/logos/insect.png",
        secondLogo : "./src/assets/images/logos/spectrum.png",
        thirdLogo : "./src/assets/images/logos/dark.png"
      },
      resistance : {
        name : "Résistance",
        firstLogo: "./src/assets/images/logos/fight.png",
        secondLogo : "./src/assets/images/logos/psy.png"
      },
    firstAttack : {
      name : "Soin",
      logo : "./src/assets/images/logos/coloreless.png",
      type: "bonus",
      resume : "Un soin qui permet au lanceur de récupérer jusqu’à 10% des pv max.",
      strength : 0,
      precision : 100
    },
    secondAttack : {
      name : "Psyko",
      logo : "./src/assets/images/logos/psy.png",
      type: "psy",
      resume : "Une puissante force télékinétique frappe la cible, ce qui peut aussi faire baisser sa Défense Spéciale.",
      strength : 90,
      precision : 100
    },
    stats : {
      attack : 110,
      defense : 90,
      specialAtt : 154,
      specialDef : 90,
      speed : 140,
      hp : 130,
      hpMax : 130 
    }
  };
  
export default mewtwoStats;