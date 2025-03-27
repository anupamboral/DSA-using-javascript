//* Data Structure:-  A data structure is a specific way of organizing storing and accessing data.
// * Algorithm:-  A set of instructions that tells a computer how to do something or you can fulfil step by step solution of the problem is called algorithm
//* By learning data structure and algorithm we can become great problem solver
//* How can we tell if the code we write is good code or bad code?Or, what is space complexity ond time complexity of your code?Or, what is the Big O of your code?
//* So the answer of all of the above questions is "Big O Notation" .
//* Big O Notation:- Big O notation helps us to understand how much time an algorithm will take to run or how much memory it will need as the amount of data it handles grows.
//* here the first tells about the time complexity and second part tell;s about the space complexity.
//* Time complexity:-Time complexity helps us to understand how much time an algorithm will take to run .
//*Space complexity:-Space complexity helps us to understand  how much memory it will need as the amount of data it handles grows
//* and by combining both of this terms it becomes the Big O Notation
//* In simple language , We have giant mess to clean ,Big O Nation is like saying how the cleaning time grows as the mess gets bigger.
//* So the first Big O Notation we are gonna discuss is O(n)- we call it O of n.
//* O(n)- It signifies that the execution time of the algorithm grows linearly in proportion to the size of the input data(n).
//* in simple word, as the number of items in the input data increases , the time it takes for the algorithm to run increases correspondingly.
//* Imagine you have a list of groceries, to find specific items like milk, you might need to scan through the entire list but if the list has five items it takes relatively short time but if the list has 500 items it will take considerably longer time this is the essence of linear time complexity O(n).
//* ["eggs","Bread","Strawberry","Milk","Bananas"];
//* Suppose the list of groceries is above array so when the algorithm is trying to find the item from this list let's say we're trying to find milk Then when the algorithm will run first it will go to the The zeroth index when it will not find milk then it will go to the first index then it will go to the third second Index then when it will go to the third index and it will find milk then it will return it so the programme was trying to find milk from this array and as this was a list of five items it took some time to find that item but it would take so much more time if the list would have 5000 items or 5,00,000 items and that's why the big of this code is O(n), Because as the input data increases the algorithm running time also increases correspondingly.
//* lets understand it using some code.
//* so we have an list of items(an array), and we will write an algorithm(a function), which will take the item as argument and loop over the array and find that item from the array.
/*
const groceries = ["eggs", "Bread", "Strawberry", "Milk", "Bananas"];

//* algorithm to find the item(milk)
//* O(n)
const searchForItem = (item) => {
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item) {
      console.log(`${item} found at ${i}th index `);
    }
  }
};
searchForItem("Milk");
*/
//* the big O of above algorithm is O(n) , because if we would  have more items in the array like 5000 items then it would take more time to loop over the array and find that item so as the input data size gets bigger the execution time increases correspondingly/linearly.

//* ⁡⁣⁢⁣Dropping the constants⁡
/*
const groceries = ["eggs", "Bread", "Strawberry", "Milk", "Bananas"];

//* algorithm to find the item(milk and strawberry)
const searchForItem = (item1, item2) => {
  //*O(n)
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === item1) {
      console.log(`Item 1 :-${item1} found at ${i}th index `);
    }
  }
  //*O(n)
  for (let j = 0; j < groceries.length; j++) {
    if (groceries[j] === item2) {
      console.log(`Item 2 - ${item2} found at ${j}th index `);
    }
  }
  //*above we have 2 for loops which are using the same array, and big O of both loops are O(n).
  //* n + n = 2n => O(2n) => after dropping the constant => O(n)
  //* so whenever we have a condition like O(2n) we drop the constant and we say the big O of above code if O(n).
};
searchForItem("Milk", "Strawberry");
*/
//*above we have 2 for loops which are using the same array, and big O of both loops are O(n).
//* n + n = 2n => O(2n) => after dropping the constant => O(n)
//* so whenever we have a condition like O(2n) we drop the constant and we say the big O of above code if O(n).

//* ⁡⁣⁢⁣O(1)⁡
//* O(1) or constant time :- It signifies that the execution time of an algorithm remains constant regardless of the input size.
//* Let's understand it using an example so imagine you have a box filled with items and you know exactly where each item is located and to get a specific item you go directly to its location taking the same amount of time in respect of how many items are in the box so that is the essence of constant time complexity or O(1).
//* let's understand it using code
/*
const numbers = [13, 233, 32, 42, 53];

//* algorithm to find the item
//* 0(1)
const getElement = (array, index) => console.log(array[index]);
getElement(numbers, 4);*/
//* In the above algorithm  we are trying to find a particular number from there array but as we know that on which index the number is located that is why it does not matter how much items the array has we can easily find that number immediately (very few milliseconds which is constant) doesn't matter how much , so irrespective of the size of input data the execution time of the algorithm remains constant and this is the essence of the constant time complexity O(1).

//* ⁡⁣⁢⁣O(n^2) ( we say it O n to the power 2)⁡
//* O(n^2):- It signifies that the algorithms execution time grows quadratically with the size of input data(n).
//* In simple words imagine you have a box of items and you want to compare each item with every other item to find specific pairs and as the number of items(n) increases, the number of comparisons(n^2) grows much faster
/*
const numbers = [1, 2, 3, 4, 5];
//* algorithm to find pairs for each item
//* O(n^2)
function findPair(arr) {
  for (let index = 0; index < arr.length; index++) {
    for (let j = index + 1; j < arr.length; j++) {
      console.log(`Pair: ${arr[index]} ${arr[j]}`);
    }
  }
}
findPair(numbers);
*/
//* So in the above algorithm the function takes an array and loop that array and for each item it loops again to make the pair so basically we have a loop inside another loop, And that's why as the input data size increases the execution time of the algorithm will increase quadratically Basically so much faster because in the above algorithm it is a nested loop so a loop inside another loop so that's why this will take so much time and this is the essence of O(n^2) .

//* removing the non-dominant term

const numbers = [1, 2, 3, 4, 5];
//* algorithm to find pairs for each item AND also printing all items
function findPair(arr) {
  //* O(n^2)
  for (let index = 0; index < arr.length; index++) {
    for (let j = index + 1; j < arr.length; j++) {
      console.log(`Pair: ${arr[index]} ${arr[j]}`);
    }
  }

  //* O(n)
  for (let q = 0; q < arr.length; q++) {
    console.log(`....${arr[q]}`);
  }
  //* If we combine all the "O" operation above it become O(n^2 + n)
  //* (n^2) is dominant here because it will consume more time
  //* "n" is non-dominant term here, as it will consume less time
  //* So in ths kind of condition , while explaining our code   we remove the non-dominant term and we are left with O(n^2)
  //* So even technically it is O(n^2 + n) but still we will say the big O of above code is O(n^2)
}
// findPair(numbers);
//*   //* If we combine all the "O" operation above it become O(n^2 + n)
//* (n^2) is dominant here because it will consume more time
//* "n" is non-dominant term here, as it will consume less time
//* So in ths kind of condition , while explaining our code   we remove the non-dominant term and we are left with O(n^2)
//* So even technically it is O(n^2 + n) but still we will say the big O of above code is O(n^2)

//* ⁡⁣⁢⁣O(log n)⁡
//*  O(log n) time complexity Refers to an algorithm's runtime close logarithmically with the size of Input Data(n). In simple terms as the input size increases the time it takes for the algorithm to run increases slowly.
//* lets we are trying to find 1 from below list
//* 1,2,3,4,5,6,7,8
//* ⁡⁣⁢⁣1,2,3,4⁡  --  5,6,7,8,
//* ⁡⁣⁢⁣1,2⁡  -- 3,4
//* ⁡⁣⁢⁣1 ⁡-- 2  --> 1
//* in each step it break the list into half and only took that half where 1 exist. So it took three steps to find 1.
//*  log_2 8 = ?
//* above question is 2 to the what power equals 8 . so how many time we have to multiply 2 to get 8
//* the answer is 3.
//* So 2 to the 3 is equal to 8
//* that what we did in above example

//* ⁡⁣⁢⁣DSA Arrays
//* Array data structure - Data structure array is an ordered collection of elements that can be accessed using numerical index.
//* example - ["a",1,true,"b",false,2]
//*  now we will make our custom array, using classes.
//* so we will create a class named MyArray and inside tit will will write the constructor function and inside it we have to write our initial values for our array , so initially we will set this.length = 0 ; and then this data = {}; because we need some place to push our items.
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(item) {
    this.data[this.length] = item; //* while creating first instance it will set the zeroth index value to this item.
    // console.log(this.data);
    //* now after adding a item we have to increment the length
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }
  pop() {
    const lastItem = this.data[this.length - 1]; //* to get last item
    //*deleting the item
    delete this.data[this.length - 1];
    console.log(this.data);
    //* decrementing the length
    this.length--;
    //* returning so we can know which item we deleted
    return lastItem;
  }
  shift() {
    //* selecting the first item
    const firstItem = this.data[0];

    //* re-indexing the items (lets say the items were 2,3,4,5 in the array and after deleting the first number 2 which index was 0 , now 3 's index should be 0 and 4 's index should be 1 and so on)
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1]; //* setting each index's value to its next index's value
      console.log(this.data[i]);
    }
    delete this.data[this.length - 1]; //* as we are setting every item's value equals to next item value so the last item value will become undefined .that's why we are deleting it
    this.length--; //* as deleted first element so we are decreasing the length.
    return firstItem;
  }

  deleteByIndex(index) {
    const item = this.data[index];
    //* reIndexing
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}
//* creating a instance using MyArray class, and saving its value into a variable
const myNewArray = new MyArray();
// console.log(myNewArray);
//* now we will define our own algorithms inside this MyArray;
//* so first algorithm we are create is push method
myNewArray.push("apple"); //*{0: 'apple'}
myNewArray.push("grape");
myNewArray.push("banana");
myNewArray.push("mango");
// console.log(myNewArray);

//* now let's build our get algorithm here we have to pass the index and it will return the value of that index

// console.log(myNewArray.get(2)); //* banana
//* now let's build th pop method , it will delete the last item from the data and also return it.
// myNewArray.pop();

//* Now we will create our algorithm for shift method which removes the first item from the array and also return the removed item.
// console.log(myNewArray);
// console.log(myNewArray.shift());
// console.log(myNewArray);
//* Now we will create an algorithm name deleteByIndex which will take a index number as argument and delete that index
// console.log(myNewArray);
// console.log(myNewArray.deleteByIndex(1));
// console.log(myNewArray);
//////
//*   reversing a string
//* steps
//* 1. converting it a array (we used split for that with "" it split it after every letter)
//* 2. then reverse the array (we used reverse method)
//* 3. converting to string from array (we used join method with "" to join it from every letter)
function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString("production"));

/////
//* make a function which will tell if the string is a palindrome or not.
//* if the reverse string is equal to the original one then that word is a palindrome
//* example cddc => cddc👍🏻
//* abba => abba 👍🏻
//* anupam => mapuna❌ not a palindrom
//* =>
//* steps we taken
//* 1. converting it a array (we used split for that with "" it split it after every letter)
//* 2. then reverse the array (we used reverse method)
//* 3. converting to string from array (we used join method with "" to join it from every letter)
//* comparing the original string with the reversed string.
const palindrome = (str) => str.split("").reverse().join("") === str;
console.log(palindrome("abba")); //* true
console.log(palindrome("cddc")); //*true
console.log(palindrome("anupam")); //* false
