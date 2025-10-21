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

const div = document.createElement('div');

div.innerHTML = '<h1>Food Tree</h1><div id="tree"></div>';
document.body.appendChild(div);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // Guard against non-objects and empty objects: render nothing
  if (!data || typeof data !== 'object') {
    return;
  }

  const keys = Object.keys(data);

  if (keys.length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  keys.forEach((key) => {
    const li = document.createElement('li');

    li.textContent = key;

    const child = data[key];

    if (child && typeof child === 'object' && Object.keys(child).length > 0) {
      createTree(li, child);
    }

    ul.appendChild(li);
  });

  // Append only if we actually added items
  if (ul.childElementCount > 0) {
    element.appendChild(ul);
  }
}

createTree(tree, food);
