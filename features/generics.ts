/* class that hold numbers */
class HoldNumber {
    data: number;
}
const number = new HoldNumber()
number.data = 123


/* class that hold strings */
class HoldString {
    data: string;
}
const str = new HoldString()
str.data = '123'


/* generic class that hold anything */
class HoldAnything<T> {
    data: T;

    add(a: T): T {
        return a
    }
}
const holdNumber = new HoldAnything<number>()
holdNumber.data = 123
holdNumber.add(10)
const holdString = new HoldAnything<string>()
holdString.data = '123'
holdString.add('4')