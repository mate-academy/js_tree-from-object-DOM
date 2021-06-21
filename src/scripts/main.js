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
  // WRITE YOUR CODE HERE

  function createUl(elem, parentUl) {
    for (const key in elem) {
      const li = document.createElement('li');
      const ulNested = document.createElement('ul');

      if (Object.keys(elem[key]).length === 0) {
        li.innerHTML = key;
        parentUl.append(li);

        continue;
      }

      li.innerHTML = key;
      li.append(ulNested);
      parentUl.append(li);
      createUl(elem[key], ulNested);
    }
  }

  const ul = document.createElement('ul');

  for (const k in data) {
    const ulNested = document.createElement('ul');
    const li = document.createElement('li');

    li.innerHTML = k;
    li.append(ulNested);
    ul.append(li);
    createUl(food[k], ulNested);
  }

  element.append(ul);
}

createTree(tree, food);
