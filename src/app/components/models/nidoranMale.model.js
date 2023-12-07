export let nidoranMaleStats = {
    name : "Nidoran♂",
    level : 5,
    type : "poison",
    secondaryType : "none",
    logo : "./src/assets/images/logos/poison.png",
    image : "./src/assets/images/nidoranM.png",
    primaryStatut : "normal",
    secondaryStatut : "normal",
      weakness : {
        name : "Faiblesse",
        firstLogo : "./src/assets/images/logos/psy.png",
        secondLogo : "./src/assets/images/logos/ground.png"
      },
      resistance : {
        name : "Résistance",
        firstLogo : "./src/assets/images/logos/insect.png",
        secondLogo : "./src/assets/images/logos/plant.png",
        thirdLogo : "./src/assets/images/logos/fight.png",
        fourthLogo : "./src/assets/images/logos/poison.png"
      },
      firstAttack : {
        name : "Dard-Venin",
        logo : "./src/assets/images/logos/poison.png",
        type: "poison",
        class : "physical",
        resume : "Un dard toxique transperce la cible et peut aussi l’empoisonner.",
        strength : 15,
        precision : 100,
        precisionMax : 10
      },
      secondAttack : {
        name : "Picpic",
        logo : "./src/assets/images/logos/flight.png",
        type: "flight",
        class : "physical",
        resume : "Le lanceur frappe la cible d’un bec acéré ou d’une corne pointue pour infliger des dégâts.",
        strength : 35,
        precision : 100,
        precisionMax : 100
      },
      stats : {
        attack : 57,
        defense : 40,
        specialAtt : 40,
        specialDef : 40,
        speed : 50,
        hp : 46,
        hpMax : 46
      }
    };
  