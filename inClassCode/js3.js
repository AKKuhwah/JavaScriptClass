const goToDinner = () => {
    const menu = [
        {
            dishName: "Beef Tenderloin",
            price: 14.75
        },
        {
            dishName: "Ribeye Steak",
            price: 17.50
        },
        {
            dishName: "Barbecue Chicken",
            price: 14.75
        },
    ]
    let menuList = "";
    for (let i = 0; i < menu.length; i++){
        menuList += `${i + 1}. ${menu[i].dishName}: ${menu[i].price.toFixed(2)}\n` 
    }
    let dinnerChoice = parseInt(prompt(
        `Please select your choice of meat:\n${menuList}\n`
    ));

    while (Number.isNaN(dinnerChoice) || dinnerChoice <= 0 || dinnerChoice > menu.length){
        console.log(`That is an invalid choice. Please try again.`)
        dinnerChoice = parseInt(prompt(
            `Please select your choice of meat:\n${menuList}\n`
        ));
    };
    console.log(`You have choesen the ${menu[dinnerChoice-1].dishName}`)

    const preTipTotal = menu[dinnerChoice -1].price;
    console.log(`The pre tip total is ${preTipTotal.toFixed(2)}`);
    const tipPercentage = .095;
    const tipCost = (preTip, tipPercent) => {
        const tipResult = (preTip*tipPercent);
        console.log(`The tip comes to ${Math.round(tipResult*100)/100}`);
        return Math.round(tipResult *100)/100;
    }
    const totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage);
    console.log(`Your total is ${totalBill}`);

};

goToDinner();