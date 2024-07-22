// class Player {
//     constructor(startX, startY){
//         this.x = startX;
//         this.y = startY
//     }
//     move(dx, dy){
//         this.x += dx;
//         this.y += dy;
//     }
// }

// let player1 = new Player(0,0); //this creates the player

// player1.x; // starting position 0
// player1.y; // starting position 0
// player1.move(3, 4); //move method
// player1.x; // result position 3
// player1.y; // result position 4


// let player2 = new Player(2, 1);
// player2.x; // 2
// player2.x; // 1
// player2.move(5, 3);
// player2.x; // 7
// player2.x; // 4
// player1.x; 
// player1.y; 


class Actor {
    constructor(startX, startY){
        this.x = startX;
        this.y = startY;
    }

    move(dx, dy){
        this.x += dx;
        this.y += dy;
    }

    distanceTo(otherActor){
        let dx = otherActor.x - this.x;
        let dy = otherActor.y - this.y;
        return Math.hypot(dx, dy);
    }
}

class Player extends Actor {
    constructor(startX, startY){
        super(startX, startY)
        this.hp = 100;
    }
}

class Enemy extends Actor {
    attack(player){
        if (this.distanceTo(player) < 4){
            player.hp -= 10;
            return true;
        } else {
            return false;
        }
    }
}

let player = new Player(1, 2);
let enemy = new Enemy(3, 4);
console.log(player.hp); // 100
enemy.distanceTo(player); //2.8
enemy.attack(player); // true
player.hp; // 90
player.move(5, 5);
enemy.attack(player); // false
console.log(player.hp); //90

// function Cat(name){
//     this.name = name;
// }
// Cat.prototype.sayHello = function () {
//     console.log(`Meow! My name is ${this.name}.`);
// };

// let kiki = new Cat("Kiki");
// kiki.sayHello();
// // Meow! My name is Kiki

// class Dog {
//     constructor(name){
//         this.name = name;
//     }
//     sayHello(){
//         console.log(`Woof! My name is ${this.name}.`);
//     }
// }

// let felix = new Dog("Felix");
// felix.sayHello();

// let person = {name : "Nick", age: 39};

// let moona = new Cat("Moona");
// moona.sayHello = function(){
//     console.log(`Hello!!!! I'm ${this.name.toUpperCase()}!`);
// }

// moona.sayHello();

// let ruffman = new Dog("Ruff Ruffman");
// ruffman.sayHello = function (){
//     console.log(`Hi, my name is ${this.name}, and I host a show called Fetch with ${this.name}`);
// }

// ruffman.sayHello();
// felix.sayHello();



