
const warriors = [
  {
    name: 'Pinky',
    health: 5,
    gold: 0,
    level: 1,
    active: true,
    price: 0
  },
  {
    name: 'Gretchen',
    health: 8,
    gold: 0,
    level: 1,
    active: false,
    price: 30
  },
  {
    name: 'PapaSmurf',
    health: 3,
    gold: 3,
    level: 1,
    active: false,
    price: 50
  },
  {
    name: 'FantaClaws',
    health: 9,
    gold: -2,
    level: 1,
    active: false,
    price: 70
  },
]

const boss = {
  name: 'Lord Rupert the Destroyer',
  health: 10,
  maxHealth: 10,
  damage: 5,
  level: 1,
  isAlive: true
}

function attackBoss() {
  boss.health -= 1

  if (boss.health <= 0) {
    boss.health = 0
    giveGold()
    boss.isAlive = false
  }

  const bossHealthElement = document.getElementById('bossHealth')
  bossHealthElement.innerText = `HP: ${boss.health}`
}

function attackWarriors() {
  warriors.filter((warrior) => {
    if (warrior.active == true && boss.isAlive == true) {
      warrior.health -= boss.damage
    }
  })
  drawHealth()
}

function giveGold() {
  let multiplier = Math.floor(Math.random() * 10)
  let reward = multiplier * boss.level
  warriors.filter((warrior) => {
    if (warrior.active == true) {
      warrior.gold += reward
    }
    console.log(warrior.gold)
  })
  drawGold()
}

function buyWarrior() {
  for (let i = 0; i < warriors.length; i++) {
    if (warriors[0].gold >= warriors[i].price) {
      warriors[i].active = true
    }
    console.log(warriors[i].active);
  }
}

function drawWarriors() {
  warriors.filter((warrior) => {
    const warriorCard = document.getElementById(warrior.name)
    console.log(warriorCard);
    if (warrior.active == false) {
      warriorCard.classList.add("hidden")
    }
  })
}

function drawGold() {
  warriors.forEach((warrior) => {
    const warriorElement = document.getElementById(warrior.name)
    const warriorGoldElement = warriorElement.querySelector('.gold')
    console.log(warriorGoldElement);
    // @ts-ignore
    warriorGoldElement.innerText = `${warrior.gold}`
  })
}

function drawHealth() {
  warriors.forEach((warrior) => {
    const warriorElement = document.getElementById(warrior.name)
    const warriorHealthElement = warriorElement.querySelector('.health')
    // @ts-ignore
    warriorHealthElement.innerText = `${warrior.health}`
  })
}

drawGold()
drawHealth()
setInterval(attackWarriors, 5000)