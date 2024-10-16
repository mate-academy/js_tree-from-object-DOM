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
  // Create a <ul> element
  const ul = document.createElement('ul');

  // Iterate over each key in the data object
  Object.keys(data).forEach((key) => {
    // Create an <li> element for each key
    const li = document.createElement('li');

    li.textContent = key;

    // If the current key has nested objects, recursively create a nested list
    if (Object.keys(data[key]).length > 0) {
      createTree(li, data[key]);
    }

    // Append the <li> to the <ul>
    ul.appendChild(li);
  });

  // Append the <ul> to the passed DOM element
  element.appendChild(ul);
}

createTree(tree, food);
