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
  // Base case: Check if the data is not an object or is an empty object
  if (typeof data !== 'object' || data === null || Object.keys(data).length === 0) {
    return;
  }

  // Create a new <ul> for the current level
  let ul = document.createElement('ul');

  // Iterate over each key in the data object
  for (let key in data) {
    // Create a new <li> for each key
    let li = document.createElement('li');
    li.textContent = key;  // Set the key as the text of the <li>

    // Check if the value of the current key is an object
    if (typeof data[key] === 'object' && data[key] !== null) {
      // If it's an object, recursively create nested <ul> under this <li>
      createTree(li, data[key]);
    }

    // Append the <li> to the current <ul> (it could either be the top-level <ul> or nested ones)
    ul.appendChild(li);
  }

  // Append the <ul> to the provided element (top-level or nested)
  element.appendChild(ul);
}

createTree(tree, food);
