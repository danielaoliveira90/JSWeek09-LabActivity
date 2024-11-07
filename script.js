// Q1:

function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function(num) {
  this.points += num;
  while (this.points >= 10) {
    this.lvl += 1;
    this.points -= 10;
  }
};

Player.prototype.describe = function() {
  return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
};

let player1 = new Player('Bob');
let player2 = new Player('Alice');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

console.log(player1.describe()); // Bob is level 2 with 6 experience points
console.log(player2.describe()); // Alice is level 2 with 3 experience points

// Q2:

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log(`User ${this.name} with email ${this.email} is viewing website data.`);
  }
}

const user1 = new User('Daniela', 'daniela@college.com');
user1.viewData(); 

// Q3:

class Admin extends User {
  editData() {
    console.log(`Admin ${this.name} with email ${this.email} is editing website data.`);
  }
}

const admin1 = new Admin('Bob', 'bob@college.com');
admin1.editData(); 


