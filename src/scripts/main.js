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

let tr = document.createElement('div');
tr.id = 'tree';

document.body.insertAdjacentElement('afterbegin', tr)
const tree = document.querySelector('#tree');



function createTree(element, data) {
  let keys = Object.keys(data);
  if (keys.length === 0){
    return;
  }

  let list = document.createElement('ul');

  for (let n of keys) {
    let li = document.createElement('li')
    li.textContent = n;
    list.insertAdjacentElement('beforeend', li);
    createTree(li, data[n]);
  }

  element.insertAdjacentElement('beforeend', list);
}

createTree(tree, food);
