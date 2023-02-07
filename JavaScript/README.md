# fullStack.cafe JavaScript Interview questions

1. What is typeof operator?
JavaScript provides a typeof operator that can examine a value and tell you what type it is:
JS datatypes are: undefined, string, number, boolean, object(object, array, date), null, symbol, bigint. 


2. What is the Object type?
It refers to a compound value where you can set properties that each hold their own values of any type. 
```
var obj = {
	a: "hello world", // property
	b: 42,
	c: true
};

obj.a;		// "hello world", accessed with doted notation
obj.b;		// 42
obj.c;		// true

obj["a"];	// "hello world", accessed with bracket notation
obj["b"];	// 42
obj["c"];	// true
```
Bracket notaion is also useful if you want to access a property/key pair.

3. Explain arrays in JS
An array is an object that holds values of any type not particelarly in named property/key, but rather in numarically indexed positions: 

```
var arr = [
	"hello world",
	42,
	true
];

arr[0];			// "hello world"
arr[1];			// 42
arr[2];			// true
arr.length;		// 3

typeof arr;		// "object" 
```
Arrays are used to store multiple values in a single variable.

4. What is Scope in JS?
There are two pyte of scopes; local and global.
a scope refers to the current context of code, which determines the accessibility of variables to JS. 

Scope determines the accessiblity of variables, objects ,and functions from different parts of the scope. 

5. Explain equality in JS
Strict comparison (===); checks the value equality without allowing coercion

Abstract comparion (==); checks the value equality with allowing coercion
```
var a = "42";
var b = 42;

a == b;			// true
a === b;		// false
```

6. Explain what is Binary Search in JS?
Binary search : Half-interval search, Logarithmic search.

Binary search is used for any element in a sorted array. Its much faster than linear search. 
```
var binarySearch = function(array, value) {
    var guess,
        min = 0,
        max = array.length - 1;	

    while(min <= max){
        guess = Math.floor((min + max) /2);
	if(array[guess] === value)
	    return guess;
	else if(array[guess] < value)
	    min = guess + 1;
	else
	    max = guess - 1;	
     }
	
     return -1;
}
```

7. What is Linear Search and when may we use one?
this is the most basic search algorithm. Given a data structure, for example an array, 
we search for an item by looking at all the elements, until we find it. 
```
function linearSearch(array, toFind){
  for(let i = 0; i < array.length; i++){
    if(array[i] === toFind) return i;
  }
  return -1;
}
```

8. Explain Values and Types in JS
JS has 5 data types that are passed by values: boolean, null, undefined, string, and number. 
JS has 3 data types that are passed by reference: array, function, and object.

9. What is let keyworld in Js?
Let allows us to declare variables that are limited to the scope of a block statement.
It is a block declaration method, unlike var which is a global declaration method

10. Explain null and undefined in JS
Null; an empty value and also a primitive type in js. the variable which has been assigned as null contains no value. 
something is corrently unavaible.

Undefined; means the variable has been declared, but its value has not been assigned. 
something has not been initialized.

11. What is Strict mode? 
Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.
```
// Non-strict code...

(function(){
  "use strict";

  // Define your library strictly...
  
})();

// Non-strict code...
```

11. 