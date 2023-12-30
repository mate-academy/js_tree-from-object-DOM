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
  const list = document.createElement('ul');

  element.append(list);

  for (const ch in data) {
    const item = document.createElement('li');

    item.textContent = ch;
    list.append(item);

    if (Object.keys(data[ch]).length > 0) {
      const newList = document.createElement('ul');

      item.append(newList);

      for (const k in data[ch]) {
        const newItem = document.createElement('li');

        newItem.textContent = k;
        newList.append(newItem);

        if (Object.keys(data[ch][k]).length > 0) {
          const newOneList = document.createElement('ul');

          newItem.append(newOneList);

          for (const m in data[ch][k]) {
            const newOneItem = document.createElement('li');

            newOneItem.textContent = m;
            newOneList.append(newOneItem);
          }
        }
      }
    }
  }
}

createTree(tree, food);
