export let evoliStats = {
    name : "Évoli",
    level : 5,
    type : "Normal",
    typeLogo : "images/logos/coloreless.png",
    image : "./images/evoli.png",
      weakness : {
        name : "Faiblesse",
        type : "fight",
        logo : "images/logos/fight.png"
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
        name : "Vive-Attaque",
        logo : "images/logos/coloreless.png",
        type: "normal",
        resume : "Le lanceur fonce sur la cible si rapidement qu’on parvient à peine à le discerner. Frappe en priorité.",
        strength : 40,
        precision : 100
      },
      stats : {
        attack : 55,
        defense : 50,
        specialAtt : 45,
        specialDef : 65,
        speed : 55,
        hp : 55
      }
    };
  
export default evoliStats;