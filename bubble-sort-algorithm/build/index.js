"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// sort array of numbers
const numberCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numberCollection.sort();
console.log(numberCollection.data);
// sort string
const charactersCollection = new CharactersCollection_1.CharactersCollection("ZaДaybГd");
charactersCollection.sort();
console.log(charactersCollection.data);
// sort linked list
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(250);
linkedList.add(-7);
linkedList.add(11);
linkedList.add(0);
linkedList.sort();
linkedList.print();
