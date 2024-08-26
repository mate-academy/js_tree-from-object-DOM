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
  const ul1Lvl = document.createElement('ul');

  element.append(ul1Lvl);

  for (const key1 in data) {
    const li1Lvl = document.createElement('li');
    const ul2Lvl = document.createElement('ul');

    li1Lvl.textContent = key1;
    ul1Lvl.append(li1Lvl);
    li1Lvl.append(ul2Lvl);

    for (const key2 in data[key1]) {
      const li2Lvl = document.createElement('li');
      const ul3Lvl = document.createElement('ul');

      ul2Lvl.append(li2Lvl);
      li2Lvl.textContent = key2;

      if (li2Lvl.textContent !== 'Wine' && li2Lvl.textContent !== 'Schnaps') {
        li2Lvl.append(ul3Lvl);
      }

      for (const key3 in data[key1][key2]) {
        const li3Lvl = document.createElement('li');

        li3Lvl.textContent = key3;
        ul3Lvl.append(li3Lvl);
      }
    }
  }
}

createTree(tree, food);
