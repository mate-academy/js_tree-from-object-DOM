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
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      const subTree = document.createElement('ul');

      createTree(subTree, data[key]);
      subTree.style.display = 'none';
      li.appendChild(subTree);
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

createTree(tree, food);

tree.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const subTree = e.target.querySelector('ul');

    if (subTree) {
      if (subTree.style.display === '' || subTree.style.display === 'none') {
        subTree.style.display = 'block';
      } else {
        subTree.style.display = 'none';
      }
    }
  }
});
