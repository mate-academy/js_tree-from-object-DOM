'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
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
  const dataArr = (obj) => Object.entries(obj);
  const createItem = (param) => {
    const li = document.createElement('li');

    li.setAttribute('id', `item${param}`);
    li.innerHTML = `<p>${param}</p>`;

    return li;
  };

  if (!document.getElementById('mainList')) {
    const mainList = document.createElement('ul');

    mainList.setAttribute('id', `mainList`);
    element.insertAdjacentElement('beforeend', mainList);
  }

  const rootList = element.querySelector('ul');

  dataArr(data)
    .forEach(item => {
      if (dataArr(item[1]).length) {
        const ul = document.createElement('ul');
        const ulId = item[0].toLowerCase();

        ul.setAttribute('id', ulId);

        rootList.insertAdjacentElement('beforeend',
          createItem(item[0]));

        const root = document.getElementById(`item${item[0]}`);

        root.insertAdjacentElement('beforeend',
          ul);

        createTree(root, item[1]);
      } else {
        rootList.insertAdjacentElement('beforeend',
          createItem(item[0]));
      }
    });
}

createTree(tree, food);
