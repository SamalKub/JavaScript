// console.log(parseInt("11.2abc", 2))
// console.log(parseFloat('11.2avf'))
// console.log(+'11.1')

// console.log("hello".length)
// console.log('hello'.charAt(0))
// console.log('hello, world!'.replace('hello', 'goodbye'))
// console.log('hello'.toUpperCase())

// console.log(Boolean(''))
// console.log(Boolean(NaN))
// console.log(Boolean(null))
// console.log(Boolean(0))
// console.log(Boolean(undefined))

// for (let myLetVariable = 0; myLetVariable < 5; myLetVariable++){
//     console.log(myLetVariable)
// }
// console.log(myLetVariable)

// const Pi = 3.14;
// Pi = 3;

// console.log(myVarVariable); // undefined
// for (var myVarVariable = 10; myVarVariable < 15; myVarVariable++){
//     console.log(myVarVariable) // 10, ..., 14
// }
// console.log(myVarVariable) //15

// if (10){
//     var name = 'Bob' //let, const block struck
//     console.log(name)
// }
// console.log(name)
//
// console.log('hello ' + 'world' + '!')
// console.log('' + '4' + 3 + 3) //433
// console.log('' + 3 + 4) //34
// console.log(3 + 3 + '') //6
// console.log(3 + 3.3 + '4') //6.34

// console.log(1 == true)
// console.log(1 == '1')
// console.log(123 == '123')
//
// console.log(1 === true)
// console.log(1 === '1')
// console.log(123 === '123')
// console.log(true===true)

// console.log(1 != 2)
// console.log(1 != '1') //false
// console.log(1 !== '1') //true

// var name = 'kittens';
// var name = 'puppies'
// var name = 'pets'
// if (name == 'puppies') {
//     name += '!';
// } else if (name == 'kittens') {
//     name += '!!';
// } else {
//     name += '! ' + name;
// }
// console.log(name)
// name = 'kittens!!'
// console.log(name)

// let val = 0;
// while (val < 5) {
//     console.log(val);
//     val++;
// }

// var num = 5;
// do {
//     console.log(num);
//     num++;
//     console.log(num);
// } while (num < 6)

// for (var i = 0; i < 10; i+=2) {
//     console.log(i);
// }
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// var o = null;
// var name = o && o.getName();
// var o = NaN; // 0, null
// var name = o || 'default';
// console.log(name)

// var age = 20; //10
// var allowed = (age > 18) ? 'yes' : 'no';
// console.log(allowed);

var action = 'eat';
// switch (action) {
//     case 'do something':
//         console.log('doing something ...');
//         break;
//     case 'eat':
//         console.log('eating ...');
//         break;
//     default:
//         console.log('do nothing.');
// }

// var a = 1;
// switch (a) {
//     case 1: // fallthrough
//     case 2:
//         console.log('a...');
//         break;
//     default:
//         console.log('default');
// }

// switch (2 + 2) {
//     case 1 + 3:
//         console.log('yes')
//         break;
//     default:
//         console.log('no')
// }

// var obj = new Object();
// console.log(obj);

// var obj = {};
// console.log(obj);

// var obj = {
//     name: 'Bob',
//     age: 43,
//     job: {
//         name: 'Data scientist',
//         level: 'Senior',
//     }
// }
// console.log(obj.name);
// console.log(obj.job.name);
// console.log(obj['job']['level']);

// var Simon = {
//     name: 'Simon',
//     for: 'Elise'
// }
// console.log(Simon.name);
// console.log(Simon.for);
// Simon.name = 'Simon Klark';
// console.log(Simon.name);
// Simon.for = 'Elise Clark';
// console.log(Simon.for); // bad use because of ES > 5, did not work
// console.log(Simon['for']);

// var a = Array();
// a[0] = 0;
// a[1] = 1;
// a[2] = 2;
// console.log(a.length);

// var a = [0, 1, 2];
// console.log(a.length);

// var a = [0, 1, 2];
// a[100] = 12;
// console.log(a.length);
// console.log(typeof a[90]);

// var a = [0, 2, 4, 6, 8];
// for (var i = 0; i < a.length; i++) {
//     a[i] += 3;
// }
// console.log(a)

// var a = [0, 2, 4, 6, 8];
// for (const currentVal of a) {
//     console.log(currentVal);
// }

// var a = [0, 2, 4, 6, 8];
// a.forEach(function (currentVal, index, array){
//     console.log(currentVal);
//     console.log(index);
//     console.log(array);
// })

// var a = [0, 2, 4, 6, 8];
// a.push(10);
// console.log(a);

// function add(x, y) {
//     var total = x + y;
//     return total;
// }
// console.log(add(2,2));

// function add() {
//     var sum = 0;
//     for (var i = 0, j = arguments.length; i < j; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(add(1, 2, 3, 4, 6));

function avg() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum/arguments.length
}
console.log(avg(1, 2, 3, 4, 5, 6, 7, 8, 9))
