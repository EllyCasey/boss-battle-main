
const warriors = [
  {
    name: 'Pinky',
    health: 5,
    gold: 0,
    level: 1,
    active: true
  },
  {
    name: 'Gretchen',
    health: 8,
    gold: 0,
    level: 1,
    active: false
  },
  {
    name: 'Papa Smurf',
    health: 3,
    gold: 3,
    level: 1,
    active: false
  },
  {
    name: 'Fanta Claws',
    health: 9,
    gold: -2,
    level: 1,
    active: false
  },
]

const boss = {
  name: 'Lord Rupert the Destroyer',
  health: 10,
  maxHealth: 10,
  damage: 5,
  level: 1
}

function attackBoss() {
  boss.health -= 1

  if (boss.health <= 0) {
    boss.health = 0
    giveGold()
  }

  const bossHealthElement = document.getElementById('bossHealth')
  bossHealthElement.innerText = `HP: ${boss.health}`
}


function attackWarriors() {
  warriors.filter((warrior) => {
    if (warrior.active == true) {
      warrior.health -= boss.damage
    }
  })
  console.log('Doing damage');
}

function giveGold() {
  // SUP ELLY
  let multiplier = Math.floor(Math.random() * 10)
  let reward = multiplier * boss.level
  warriors.filter((warrior) => {
    if (warrior.active == true) {
      warrior.gold += reward
    }
    console.log(warrior.gold)
  })

}

function drawGold() {
  warriors.forEach((warrior) => {
    const warriorGoldElement = document.getElementById('gold')
    warriorGoldElement.innerText += `${warrior.gold}`
  })

}


setInterval(attackWarriors, 5000)