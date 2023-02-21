'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // create an unordered list element
  const ul = document.createElement('ul');

  // loop through each key in the object
  for (const key in data) {
    // create a list item element for the key
    const li = document.createElement('li');

    li.innerText = key;

    // if the value of the key is an object, call the function recursively
    if (typeof data[key] === 'object') {
      li.appendChild(createTree(element, data[key]));
    }

    // append the list item to the unordered list
    ul.appendChild(li);
  }

  // append the unordered list to the given DOM element
  element.appendChild(ul);

  // return the unordered list
  return ul;
}

createTree(tree, food);
