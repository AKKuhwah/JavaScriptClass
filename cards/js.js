let dealerSum = 0;
let yourSum = 0;

let dealerAceCount = 0;
let yourAceCount = 0;

let hidden;
let deck = [];

let canHit = true;

let potSize = document.getElementById('pot-size').innerHTML;
let totalMoney = 500;
let betAmount = 0;

//blackjack
let blackjack = false;

window.onload = () => {
    buildDeck();
    shuffleDeck();
    startGame();
}

//betting
let betting = () => {
    let userBet = parseInt(prompt("How much would you like to bet from $2-$500?"));
    if (isNaN(userBet)){
        alert('Please enter a number!')
        return userDeckQuestion();
    } else if(userBet> 500 || userBet < 2){
        alert("please enter a number between 2 and 500!")
        return userDeckQuestion();
    } else {
        totalMoney-=userBet;
        document.getElementById('pot-size').innerText = totalMoney;
        return userBet;
    }
}


//building deck
const buildDeck = () => {
    let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let types = ['C', 'D', 'H', 'S']
    let userDeckQuestion = () =>{
        let userAnswer = parseInt(prompt("From 3-7 deck, how many would you want?"));
        if (isNaN(userAnswer)){
            alert('Please enter a number!')
            return userDeckQuestion();
        } else if(userAnswer > 7 || userAnswer < 3){
            alert("please enter a number between 3 and 7!")
            return userDeckQuestion();
        } else {
            return userAnswer;
        }
    }
    let userAnswer = userDeckQuestion();
    
    let numOfDeck = 0;

    while(numOfDeck < userAnswer){
        for (let i = 0; i < types.length; i++){
            for (let j = 0; j < values.length; j++){
                deck.push(values[j] + '-' + types[i]);
            }
        }
        numOfDeck += 1;
    }
}


//shuffle deck
const shuffleDeck = () => {
    for (let i = 0; i < deck.length; i++){
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp; 
    }
    console.log(deck);
}

const startGame = () => {
    betAmount = betting();
    function distributeCard () {
        setTimeout(() => {
            giveYouCard();
            setTimeout(() => {
                giveDealerCard();
                setTimeout(() => {
                    giveYouCard();
                    if (yourSum === 21){
                        blackjack = true;
                    }
                    setTimeout(() => {
                        giveHiddenCard();
                    }, 500);
                }, 500);
            }, 500);
        }, 500);
    };

    distributeCard();

    //double down
    document.getElementById('double-down').addEventListener('click', doubleDown);
    document.getElementById('hit').addEventListener('click', hit);
    document.getElementById('stay').addEventListener('click', stay);
    document.getElementById('new-game').addEventListener('click', newgame);
}

// doubledown
let doubleDown = () => {
    betAmount*=2;
    let double_down = document.getElementById('double-down');
    double_down.remove();
    console.log(betAmount);
}


//function for giving out cards
let giveYouCard = () => {
    let cardImg = document.createElement('img');
    let card = deck.pop();
    // let card;
    // if (yourSum < 1){
    //     card = 'A-D';
    // } else {
    //     card = '10-D';
    // }
    cardImg.src = "./cards/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById('your-cards').append(cardImg);
}

let giveDealerCard = () => {
    cardImg = document.createElement('img');
    card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    dealerSum += getValue(card);
    dealerAceCount += checkAce(card);
    document.getElementById('dealer-cards').append(cardImg);
}

let giveHiddenCard = () => {
    hidden = deck.pop();
    dealerSum += getValue(hidden);
    dealerAceCount += checkAce(hidden);
    cardImg = document.createElement('img');
    cardImg.setAttribute('id', 'hiddenCard')
    cardImg.src = './cards/BACK.png';
    document.getElementById('dealer-cards').append(cardImg);
}

//Stay
function stay(){

    //dealer turn
    function dealerTurn (callback) {
        hiddenCard = document.getElementById('hiddenCard');
        hiddenCard.src = "./cards/" + hidden + ".png";
        
        function giveDealerMoreCard(){
            if (dealerSum < 17){
                giveDealerCard();
                setTimeout(giveDealerMoreCard, 1000);
            } else if (dealerAceCount >= 1 && dealerSum === 17){
                softSeventeen();
                giveDealerMoreCard();
                setTimeout(giveDealerMoreCard, 1000);
            }
            else {
                if (callback) callback();
            }
        }
        setTimeout(giveDealerMoreCard, 1000);
    }


    dealerTurn(() => {
        dealerSum = reduceAce(dealerSum, dealerAceCount);
        yourSum = reduceAce(yourSum, yourAceCount);

        canHit = false;
        if (blackjack == true){
            betAmount = (betAmount * 3) / 2
        }

        let message = '';
        if (yourSum > 21){
            message = 'You Lose';
        }
        else if (dealerSum > 21){
            message = 'You Win';
            totalMoney = totalMoney + (betAmount*2)
        }
        else if (yourSum == dealerSum){
            message = 'Tie';
        }
        else if (yourSum > dealerSum){
            message = 'You Win';
            totalMoney = totalMoney + (betAmount*2);
        }
        else if (dealerSum > yourSum){
            message = 'You Lose';
        }
    
        document.getElementById('dealer-sum').innerText = dealerSum;
        document.getElementById('your-sum').innerText = yourSum;
        document.getElementById('result').innerText = message;
        document.getElementById('pot-size').innerText = totalMoney;

        //double down
        let double_down = document.getElementById('double-down');
        if (double_down !== null){
            double_down.remove();
        }

        if (deck.length <= 75){
            deck.length = 0;
            buildDeck();
            shuffleDeck();
        }
    })
}

//hit
function hit(){
    if (!canHit){
        return;
    }
    let cardImg = document.createElement('img');
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById('your-cards').append(cardImg);

    if(reduceAce(yourSum, yourAceCount) > 21){
        canHit = false;
        let colorChange = document.getElementById('hit').classList.add('colorChange');
    }

    //double down
    let double_down = document.getElementById('double-down');
    if (double_down !== null){
        double_down.remove();
    }
}

const getValue = (card) => {
    let data = card.split('-');
    let value = data[0];

    if (isNaN(value)){
        if (value =="A"){
            return 11;
        }
        return 10
    }

    return parseInt(value);
}

const checkAce = (card) => {
    if (card[0] == 'A'){
        return 1
    }
    return 0;
}

const softSeventeen = () => {
    dealerSum -= 10;
    dealerAceCount -= 1;
}

function reduceAce(playerSum, playerAceCount){
    while (playerSum > 21 && playerAceCount > 0){
        playerSum -=10;
        playerAceCount -= 1;
    }
    return playerSum;
}


//new game
function newgame(){
    dealerSum = 0;
    yourSum = 0;
    dealerAceCount = 0;
    yourAceCount = 0;
    canHit = true;

    //remove picture
    let dealer_cards = document.getElementById("dealer-cards");
    dealer_cards.innerHTML = '';
    let dealer_sum = document.getElementById("dealer-sum");
    dealer_sum.innerHTML = '';
    let your_sum = document.getElementById("your-sum");
    your_sum.innerHTML = '';
    let your_cards = document.getElementById("your-cards");
    your_cards.innerHTML = '';
    let webpage_result = document.getElementById("result");
    webpage_result.innerHTML = '';

    //doubledown
    let doubleDownButton = document.createElement('button');
    doubleDownButton.setAttribute('id', 'double-down');
    doubleDownButton.classList.add('myButton');
    doubleDownButton.textContent = 'Double Down';
    document.getElementById('buttonSpot').appendChild(doubleDownButton);
    doubleDownButton.addEventListener('click', doubleDown);

    //color change
    document.getElementById('hit').classList.remove('colorChange');

    startGame();
}

