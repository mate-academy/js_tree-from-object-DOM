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

const isEmptyObject = object => Object.keys(object).length === 0;

function createTree(element, data) {
  const ul = document.createElement('ul');

  element.append(ul);

  Object.entries(data).forEach(key => {
    const li = document.createElement('li');
    const ulSecond = document.createElement('ul');

    li.innerText = key[0];
    li.append(ulSecond);

    Object.entries(key[1]).forEach(el => {
      const liSecond = document.createElement('li');
      const ulThird = document.createElement('ul');

      liSecond.innerText = el[0];

      if (!isEmptyObject(el[1])) {
        liSecond.append(ulThird);
      };

      ulSecond.append(liSecond);

      Object.entries(el[1]).forEach(elem => {
        const liThird = document.createElement('li');

        liThird.innerText = elem[0];
        ulThird.append(liThird);
      });
    });

    ul.append(li);
  });
};

createTree(tree, food);
