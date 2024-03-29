export let pikachuStats = {
    name : "Pikachu",
    level : 5,
    type : "electric",
    typeLogo : "images/logos/electric.png",
    image : "images/pikachu.png",
      weakness : {
        name : "Faiblesse",
        type : "ground",
        logo : "images/logos/electric.png"
      },
      resistance : {
        name : "Résistance",
        type : "null",
        logo : null
      },
      firstAttack : {
        name : "Charge",
        logo : "images/logos/coloreless.png",
        type: "normal",
        resume : "Une attaque de base",
        strength : 35,
        precision : 95
      },
      secondAttack : {
        name : "Éclair",
        logo : "images/logos/electric.png",
        type: "electric",
        resume : "Une décharge électrique tombe sur la cible, ce qui peut aussi la paralyser.",
        strength : 40,
        precision : 100
      },
      stats : {
        attack : 55,
        defense : 40,
        specialAtt : 50,
        specialDef : 50,
        speed : 90,
        hp : 3
       }
    };
  
export default pikachuStats;
