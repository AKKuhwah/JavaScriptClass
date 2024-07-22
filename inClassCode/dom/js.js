const headerElement = document.getElementById("page-banner");
console.log(headerElement);
const divElements = document.getElementsByTagName("div");
console.log(divElement);
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
console.assert.log(firstContentChildElement);
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
consolelog(nextSib);

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
document.querySelector("main").prepend("newNav");

const newDiv = document.createElement("div");
document.getElementById("div2").after(newDiv);

