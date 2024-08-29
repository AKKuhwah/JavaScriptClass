// For homework 1-3
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

class Mage extends Actor{
    constructor(startX, startY){
        super(startX, startY)
        this.hp = 100;
    }
    teleport(mage){
        this.x += Math.round(Math.random()*10);
        this.y += Math.round(Math.random()*10);
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

class Orc extends Enemy{
    attack(player){
        if (this.distanceTo(player) < 4){
            player.hp -= 20;
            return true;
        } else {
            return false;
        }
    }
}

class Npc extends Actor {
    dialog(player){
        if (this.distanceTo(player) <= 1 && player.hp < 100){
            console.log("Drink this!");
            player.hp += 5;
            return true;
        } else {
            return false;
        }
    }
}

let player = new Player(1, 2);
let mage = new Mage(1,2)
let enemy = new Enemy(3, 4);
let npc = new Npc(6, 6);
let orc = new Orc(10, 10)

console.log(player.hp);
player.move(9, 8);
orc.attack(player);
console.log(player.hp);

console.log(player.distanceTo(mage));
mage.teleport();
console.log(player.distanceTo(mage));

console.log(player.hp)
enemy.attack(player);
console.log(player.hp);
player.move(5,5);
console.log(player.hp);
console.log(npc.distanceTo(player));
npc.dialog(player);
console.log(player.hp);


// 4

function isNotInteger(num){
    try {
        if (!Number.isInteger(num)){
            throw new error();
        } else {
            console.log("This is an integer")
        }
    } catch (e){
        console.error("This number is not an integer")
    }
}

isNotInteger(11);

// 5

function rangeError(){
    try {
        array.length = -1;
    } catch {
        console.log("This number isn't in the index")
    }
}

let array = [];

rangeError();





// 5
function justExecute(num){
    try {
        const y = num;
        console.log(y += 12);
    } catch (e) {
        console.log("this is wrong");
    } finally {
        console.log("This executes anyways");
    }
}

justExecute(12);



