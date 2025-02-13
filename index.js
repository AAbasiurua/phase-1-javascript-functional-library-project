// Notes 
// What is a callback function ? = it’s function that is passed as an argument to another function + it allows the first function to "call back" the second function at a later point in time : this is usually after the first function has completed its task
// What is my collection? = It’s an object or an array
// What is Array.isArray() ? = It’s a built-in JavaScript method that returns true if the argument passed to it is an array, and false if not.
// What is hasOwnProperty()? = It’s an objects method that checks if the object itself (not its prototype) has the specified property! This is used to filter out properties that might be inherited from the object's prototype (such as default methods or properties).


// my function taking in/passing thru a collection and a callback function
function myEach(collection, callback) {

// I’m checking to see if my “collection“ is an array
// if it is an array then I want to loop through my collection and access my callback function
  if (Array.isArray(collection)) {
  // creating a “for loop” to go through/iterate through the collection 
 // [initialization] let i = 0 —> (defines and initializes a variable i to 0 : the starting point of the loop : “i” will represent current index of the array/ collection)
 // [conditional] i < collection.length —> (loop will continue to run as long as “i” is less than collection.length)
 // [increment] i++ —> (After each iteration of the loop, “i” is increased by 1 (i++ is shorthand for i = i + 1)
    for (let i = 0; i < collection.length; i++) {
 // call a function named callback and passing three arguments to it: (1. collection at the i’th index, 2. “i” 3. collection )
      callback(collection[i], i, collection);
    }
// if it is NOT an array, its an object so 
  } else {
// I want to loop over the keys (property names) of my “collection” object 
    for (let key in collection) {
// checking to confirm that the key belongs directly to the collection object and is not inherited from its prototype chain
      if (collection.hasOwnProperty(key)) {
// execute the callback function and pass three arguments to it => collection at the value of key’s index, the value of key, my collection object
        callback(collection[key], key, collection);
      }
    }
   }
// of course, return collection (array or object) 
  return collection;
}

function myMap(collection, callback) {
  let result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i, collection));
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        result.push(callback(collection[key], key, collection));
      }
    }
  }
  return result;
}

function myReduce(collection, callback, accumulator) {
  let isArray = Array.isArray(collection);
  if (accumulator === undefined) {
    accumulator = isArray ? collection[0] : collection[Object.keys(collection)[0]];
    collection = isArray ? collection.slice(1) : Object.values(collection).slice(1);
  }

  for (let i = 0; i < collection.length; i++) {
    accumulator = callback(accumulator, collection[i], collection);
  }
  return accumulator;
}

function myFind(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i], i, collection)) {
        return collection[i];
      }
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && callback(collection[key], key, collection)) {
        return collection[key];
      }
    }
  }
  return undefined;
}

function myFilter(collection, callback) {
  let result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (callback(collection[i], i, collection)) {
        result.push(collection[i]);
      }
    }
  } else {
    for (let key in collection) {
      if (collection.hasOwnProperty(key) && callback(collection[key], key, collection)) {
        result.push(collection[key]);
      }
    }
  }
  return result;
}

function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}

function myFirst(collection, n = 1) {
  if (Array.isArray(collection)) {
    return n === 1 ? collection[0] : collection.slice(0, n);
  }
  return undefined;
}

function myLast(collection, n = 1) {
  if (Array.isArray(collection)) {
    return n === 1 ? collection[collection.length - 1] : collection.slice(-n);
  }
  return undefined;
}

function myKeys(obj) {
  return Object.keys(obj);
}

function myValues(obj) {
  return Object.values(obj);
}
