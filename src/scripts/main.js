'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  for (const key in data) {
    // Create a <li> element for each key
    const li = document.createElement('li');

    li.textContent = key; // Set the key as the list item's text

    // If the value is a non-empty object, recursively create a tree
    if (Object.keys(data[key]).length > 0) {
      createTree(li, data[key]); // Add nested list
    }

    // Append the <li> to the <ul>
    ul.appendChild(li);
  }

  // Append the <ul> to the given element
  element.appendChild(ul);
}

createTree(tree, food);
