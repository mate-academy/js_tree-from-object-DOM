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
  const mainArray = Object.keys(data);

  const mainUl = document.createElement('ul');

  for (const key of mainArray) {
    const firstLevelLi = document.createElement('li');

    firstLevelLi.id = key;
    firstLevelLi.textContent = key;
    mainUl.append(firstLevelLi);

    const firstArray = Object.keys(data[key]);
    const innerUl = document.createElement('ul');

    firstArray.map(item => {
      const li = document.createElement('li');

      li.id = item;
      li.textContent = item;
      innerUl.append(li);
    });

    firstLevelLi.append(innerUl);
  }

  element.append(mainUl);

  const groups = Object.values(data);

  groups.map(group => {
    const secondArray = Object.entries(group);

    secondArray.map(item => {
      if (Object.keys(item[1]).length > 0) {
        const parentLi = document.getElementById(item[0]);
        const innerUl = document.createElement('ul');
        const entries = Object.keys(item[1]);

        for (const product of entries) {
          const li = document.createElement('li');

          li.textContent = product;
          innerUl.append(li);
        }
        parentLi.append(innerUl);
      }
    });
  });
}

createTree(tree, food);
