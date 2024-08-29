const headerElement = document.getElementById("page-banner");
console.log(headerElement);
const divElements = document.getElementsByTagName("div");
console.log(divElements);
const cursiveElements = document.getElementsByClassName('cursive');
console.log(cursiveElements);
const cursiveDiv2Element = document.querySelector("main > p");
console.log(cursiveDiv2Element);
const allChildrenOfMainElements = document.querySelector("main > *");
console.log(allChildrenOfMainElements);

const firstDiv = divElements[0];
const secondDive = divElements.div2

const totalDivs = divElements.length;
console.log(totalDivs);

// for (const item of colletion) {
//     statements (the code you to use to manipulate the items)
// }

for (const d of divElements){
    console.log(d.id);
}

// traversing

const bodyChildElements = document.body.children;
console.log(bodyChildElements);

const content = document.getElementById("page-content");
const firstContentChildNode = content.firstChild;
console.log(firstContentChildNode);
const firstContentChildElement = content.firstElementChild;
console.assert(firstContentChildElement);
const para = document.querySelector("main > p");
const lastParaChildNode = para.lastChild;
console.log(lastParaChildNode);
const lastParaChildElement = para.lastElementChild;
console.log(lastParaChildElement);

const childElement = document.querySelector("h1");
const h1ParentElement = childElement.parentNode;
console.log(h1ParentElement);

//previous element
const currentElement1 = document.querySelector("main");
const prevSib = currentElement1.previousElementSibling;
console.log(prevSib);

// next element
const currentElement2 = document.querySelector("header");
const nextSib = currentElement2.nextElementSibling;
console.log(nextSib);

// to add an element to the page, three steps
// 1. create an object for the type of element you wnat to add
// 2. add the new object from step 1 as a child element of an existing element
// 3. insert some text and tags into the new object from step 1

//document.createElement(elementName)

const newArticle = document.createElement("article");

// parent.append(child)
// parent.prepend(child)
// child.after(sibling)
// child.before(sibling)

document.querySelector("main").append(newArticle);

const newNav = document.createElement("nav");
document.querySelector("main").prepend(newNav);

const newDiv = document.createElement("div");
document.getElementById("div2").after(newDiv);

// element.innerHTML = text
newNav.innerHTML = "<h2>Navigation</h2>";

// insertAdjacentText()
// element.insertAdjacentText(location, text)

// insertAdjacentHTML()
// element.insertAdjacentHTML(location, data)

// beforebegin, afterbegin, beforeend, afterend

document.querySelector("main").insertAdjacentHTML("beforebegin", "<section>I am a section!</section>")

document.querySelector('h2').insertAdjacentText('beforeend', ' - Main');

// element.remove()
console.log('is div1 still here?');
for (const d of divElements) {
    console.log(d.id);
}

document.getElementById('div1').remove();
for (const d of divElements){
    console.log(d.id);
}

const pageTitle = document.querySelector('h1');
pageTitle.style.fontSize = '64px';
pageTitle.style.color = 'maroon';
pageTitle.style.textAlign = 'center';
pageTitle.style.border = '1px solid black';

// element.classList

// element.classList.add('class1, class2, class3');

document.querySelector('h2').classList.add('nav-heading');

// element.classList.remove(class)
document.getElementById('div2').classList.remove('cursive');

// element.classList.toggle(class)
document.querySelector('p').classList.toggle('cooking');

console.log('we toggled a class on the p element');

document.querySelector('p').classList.toggle('cooking');

const kaleImage = document.getElementById('kale-image');
console.log(kaleImage.id);
console.log(kaleImage.src);
console.log(kaleImage.alt);

// element.getAttribute()
const srcKaleImage = kaleImage.getAttribute('src');
console.log(srcKaleImage);

// element.setAttribute(attribute, value)
const div3Element = document.getElementById('div3');
div3Element.setAttribute('id', 'div4');

for (d of divElements) {
    if (!d.id){
        d.setAttribute('id', 'div3');
    }
}

// element.removeAttribute(attribute)
const mainElement = document.getElementById('page-content');
mainElement.removeAttribute('id');

// Event Listener
// callback function

// element.addEventListern(even, callback)
const myButton = document.getElementById('my-button');
myButton.addEventListener('click', () => {
    const myDiv = document.getElementById('my-div');
    myDiv.innerHTML = '<h2>Yay, you clicked it!</h2>';
})

const myButton2 = document.getElementById('my-button2');
const addTextOnClick = () => {
    myButton2.insertAdjacentHTML('afterend', '<h2>Hey, you clicked the second one too!</h2>')
}
myButton2.addEventListener('click', addTextOnClick);

document.addEventListener('DOMContentLoaded', function () {
    console.log("we are loaded");
} )

myButton2.addEventListener('click', addTextOnClick);

// properties of Event object
// target
// which
// pageX
// pageY
// metaX
// shiftKey

