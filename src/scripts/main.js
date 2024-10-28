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

const treeContainer = document.getElementById('treeContainer');

function createTree(element, data) {
  // If there's no data, stop the recursion
  if (!data) {
    return;
  }

  // Create a new <ul> element to hold the nested structure
  const ul = document.createElement('ul');

  // Loop through each key in the data object
  for (const key in data) {
    // Create a new <li> element for the current key
    const li = document.createElement('li');

    li.textContent = key;

    // Append the <li> to the current <ul>
    ul.appendChild(li);

    // If the value is an object, recurse to add a nested list
    if (typeof data[key] === 'object') {
      createTree(li, data[key]); // Pass li as the new parent element
    }
  }

  // Append the generated <ul> to the provided element
  element.appendChild(ul);
}

// Render the tree structure using the food object
createTree(treeContainer, food);
