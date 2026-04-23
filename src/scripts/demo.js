'use strict';
import { createTree } from './main.js';

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

if (tree) {
  createTree(tree, food);
}
