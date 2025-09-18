'use strict';

const food = {
  Drink: { Wine: {}, Schnaps: {} },
  Fruit: {
    Red: { Cherry: {}, Strawberry: {} },
    Yellow: { Banana: {}, Pineapple: {} },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (!element || !data || typeof data !== 'object') {
    return;
  }

  element.innerHTML = '';

  function buildList(obj) {
    const keys = Object.keys(obj); 

    if (keys.length === 0) {
      return null; 
    }

    const list = document.createElement('ul');

    for (const key of keys) {
      const li = document.createElement('li');
      li.textContent = key;

      const child = buildList(obj[key]);
      if (child) li.appendChild(child);

      list.appendChild(li);
    }

    return list;
  }

  const built = buildList(data);
  if (built) element.appendChild(built);
}

if (tree) {
  createTree(tree, food);
}
