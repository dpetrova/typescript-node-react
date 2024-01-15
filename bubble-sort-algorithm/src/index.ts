import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"

// sort array of numbers
const numberCollection = new NumbersCollection([10, 3, -5, 0])
numberCollection.sort()
console.log(numberCollection.data)

// sort string
const charactersCollection = new CharactersCollection("ZaДaybГd")
charactersCollection.sort()
console.log(charactersCollection.data)

// sort linked list
const linkedList = new LinkedList()
linkedList.add(250)
linkedList.add(-7)
linkedList.add(11)
linkedList.add(0)
linkedList.sort()
linkedList.print()