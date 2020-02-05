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

const food2 = {
  'Meat': {
    'Pork': {
      'Fruit': {
        'Red': {
          'Cherry': {
            'Beef': {
              'Pineapple': {
                'Banana': {
                  'Strawberry': {
                    'Cherry': {},
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

const tree = document.querySelector('#tree');
const title = document.createElement('h1');

title.innerHTML = 'Recursion object list';

document.body.append(title);

function createTree(element, data) {
  const list = document.createElement('ul');

  element.append(list);

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.innerHTML = key;
    list.append(listItem);

    if (Object.values(data[key]).length > 0) {
      createTree(listItem, data[key]);
    }
  };
};

createTree(tree, food);
createTree(tree, food2);
