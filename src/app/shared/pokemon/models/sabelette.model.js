export let sabeletteModel = {
  name: "Sabelette",
  level: 5,
  type: "ground",
  secondaryType: "none",
  logo: "./src/assets/images/types-logo/ground.png",
  image: "./src/assets/images/pokemons/sabelette/sabelette.png",
  primaryStatut: "normal",
  secondaryStatut: {
    isNormal: true,
    isConfused: false,
    isCursed: false,
    isScared: false,
  },
  weakness: {
    name: "Faiblesse",
    firstLogo: "./src/assets/images/types-logo/water.png",
    secondLogo: "./src/assets/images/types-logo/plant.png",
    thirdLogo: "./src/assets/images/types-logo/ice.png",
  },
  resistance: {
    name: "Résistance",
    firstLogo: "./src/assets/images/types-logo/electric.png",
    secondLogo: "./src/assets/images/types-logo/rock.png",
    thirdLogo: "./src/assets/images/types-logo/poison.png",
  },
  firstAttack: {
    name: "Griffe",
    logo: "./src/assets/images/types-logo/coloreless.png",
    type: "normal",
    class: "physical",
    resume: "Le lanceur donne un coup de griffe",
    strength: 40,
    precision: 100,
    precisionMax: 100,
  },
  secondAttack: {
    name: "Boul'Armure",
    logo: "./src/assets/images/types-logo/coloreless.png",
    type: "normal",
    class: "status",
    resume:
      "Le lanceur s’enroule pour cacher ses points faibles, ce qui augmente sa Défense.",
    strength: 0,
    precision: 100,
    precisionMax: 100,
  },
  stats: {
    attack: 75,
    defense: 85,
    specialAtt: 20,
    specialDef: 30,
    speed: 40,
    hp: 50,
    hpMax: 50,
  },
};
