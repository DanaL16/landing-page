
// DO NOT DELETE ANY OF THE EXISTING CODE IN THIS FILE

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM has been fully loaded");
  console.table(animals);
  //Your code here
  //Change the text color of all nav links to red

  let links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    link.style.color = "red";
  });

  //Select the cards container div by its class
  let cardContainer = document.querySelector(".cards-container");

  //Iterate over the array of animal data and for each animal, use DOM manipulation to create a card that meets the following requirements:

  //The card's contents are contained by a parent div element with a class attribute of card as well as a style attribute that sets the card's width to 18rem

  //Card has an image element with attributes, including a class of card-img-top, src of the animal's image url

  //Card has a child div with a class of card-body

  //In the card's body, there is a heading element with a class of card-title and the animal's name as text

  //Below the card title, there is a paragraph element that displays the animal's description

  animals.forEach((animal) => {
    cardContainer.insertAdjacentElement("beforeend", createCard(animal));
  });

  function createCard(animal) {
    //create parent div wrapper
    let card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";

    //create img elem
    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.setAttribute("src", animal.image);

    //create div, body wrapper
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    // create body content, h2 + p elem
    let h2 = document.createElement("h1");
    h2.classList.add("card-title");
    h2.textContent = animal.name;
    let p = document.createElement("p");
    p.textContent = animal.description;

    //append all element's together  ( card > img + (card-body > h2 + p) )
    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(h2);
    cardBody.appendChild(p);

    return card;
  }
});