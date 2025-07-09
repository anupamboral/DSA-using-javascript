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

// console.log(reverseString("production"));

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
// console.log(palindrome("abba")); //* true
// console.log(palindrome("cddc")); //*true
// console.log(palindrome("anupam")); //* false

//* Reversing integers(Numbers)
//* steps we taken
//* 1. converting it to string,then  converting it a array (we used split for that with "" it split it after every letter)
//* 2. then reverse the array (we used reverse method)
//* 3. converting to string from array (we used join method with "" to join it from every letter)
//* 4. converting it back to number
function reverseInteger(number) {
  const reversedString = String(number).split("").reverse().join("");
  // console.log(reversedString);
  return parseInt(reversedString); //* we can also use Number() or + to convert it.
}
// console.log(reverseInteger(4233));

//* capitalizing first letters of every word
//* steps
//* converting everything to lowerCase
//* splitting it from the space " "
//* iterating using map and then capitalizing the first letter and then adding the rest part using slice(1)
//* then join it again with space" ".

const capitalize = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
// console.log(capitalize("dj bravo")); //* Dj Bravo
// console.log(capitalize("LION KING")); //* Lion King

//* creating a FizzBuzz function
//* 1. print numbers from 1 to n
//* 2. If number is divisible by 3 , print , "Fizz"
//* 3. If number is divisible by 5 , print , "Buzz"
//* 4. If number is divisible by 3 and 5 , print , "FizzBuzz"
//* 5. Else print the number

//* =>
//* first we loop the number
//* then check if it divisible by 3 and 5 , with this if (i % 3 === 0 && i % 5 === 0) and the other steps see below
const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
// fizzBuzz(15);

//* Max Profit challenge
//* Imagine you are buying and selling stocks throughout the year your job is to find biggest profit you could make by buying low and selling high only once.
//* stock prices in each day of a week - 7,1,5,3,6,4
//* now find the answer of below
//* The difference between the cheapest price you could have bought the stock and the most expensive price you could have sold it later on.
const maxProfit = (prices) => {
  let minPrice = prices[0]; //* assuming the first day is the cheapest day to buy
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];

    //* update minimum price if the lower price is found
    minPrice = Math.min(minPrice, currentPrice);

    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);

    // console.log(maxProfit);
  }
  return maxProfit;
};
const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
// console.log("maximum profit - " + profit);

//* array chunk challenge
//* write a function  that takes an array and a chunk size as input.The function should return a new array where the original array is split into chunks of the specialized size.
//* For example if this was the input - chunk([1,2,3,4,5,6,7,8], 3 ), then the output should be [[1,2,3],[4,5,6],[7,8,9]]
//* Next example, chunkArray([1,2,3,4,5],2) ====> output =>  [[1,2],[3,4]]
//* => steps : Create an empty array to hold the chunks then set up a starting index to keep track of where we are in the original array then loop to the original array as long as the index has not reached the end then extract a chunk of the desired size from the original array and then add the extracted chunk to the `chunked` array then Remove the index forward by Chunk size to get the next term and then return the final array of chunks
const chunk = (array, size) => {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    const chunkSlice = array.slice(index, index + size);
    chunked.push(chunkSlice);
    // index = index + size;
    index += size; //* easier way of writing above
  }

  return chunked;
};

// console.log(chunk([5, 9, 8, 98, 79, 46, 4, 78], 4));

//* Two sum challenge
//* Imagine you have a list of numbers and a target number and your job is to find two numbers in that list that add up to the target number you also need to tell which position or indexes those two numbers are at in the list
//* For example if the list is[2,7,11,15] And Target is 9 then the answer would be [0,1] Because 2(at the index 0) plus 7 (at the index 1) equals

const twoSum = (nums, target) => {
  //* this is not the best solution because its big is O(n^2)
  //* loop through every number in the list
  for (let i = 0; i < nums.length; i++) {
    //* then for each number check the rest if the list
    for (let j = i; j < nums.length; j++) {
      //* if the current number and the one we are checking add up to a target then return their indexes
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  //* if we cant's find it then return just empty array
  return [];
};
// console.log(twoSum([2, 7, 23, 42], 9)); //*[0,1]
// console.log(twoSum([20, 70, 30, 60], 100)); //*[1,2]

//* Linked list Masterclass
//* A linked list is a linear data structure where elements, called nodes, are not stored contiguously in spread each rule contains data and a reference or link , to the next node in the sequence
//* see the image - linked-list-image.png in images folder.
//* 1 => 2 => 3=> 4=> null
//* above every number represent a node, and a linked list is a combination of these nodes,every node is pointing to another node and when we don't have another node then it will point to null.
//* every node is a object which has two properties.the data and the reference. so data can be any type of data like - string , number , undefined anything.and second thing is referencing which is basically referencing to another node.and when there is no other node then it will reference to null.
//* then first node is called Head and the last node is called Tail.
//* in the image (linked-list-image.png) it is singly linked list 1.35

//* now let's create a node
//* so a node is  a object which contains data property and its value can be anything and second property is "next" which we will initially set to null, because initially we will have just one node

//* to create a node we will use class.inside the class, in the constructor function we will receive the value as parameter, and we will create this.value and it value is the parameter we mentioned, and another is this.next it is the reference of next node, and as we know its value will be null initially.
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}
//* and now we will create a linked list using the above node creating class, and to create linked list we will also use class.
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    //* initially as we only have one node so head and tail both will pint to same node.
    this.tail = this.head;
    this.length = 1; //* to track how many nodes we have inside the linked list
    // console.log(this.head);
  }
  push(value) {
    //*creating a new node
    const newNode = new Node(value);

    //* if we don't have any node initially then we have to first set head and tail both equals to this new node to create first node though in the constructor function we already created the first node in the linked list constructor function but this like a precaution so this method can also work if there no nodes.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    //* at this point as we have not added the new node to the linked list so this.tail is still equals to the previous node basically this.head because initially the head and the tail was same node. and its next property pointing to null , so as we are adding new node , so then the next property need to have the reference of the node , and that is what we are doing, we are adding the reference of new node inside previous node's next property.
    this.tail.next = newNode;
    //* and now we are adding the new node by changing the tail node value to the new node
    this.tail = newNode;
    //* increasing the length
    this.length++;
  }

  pop() {
    //* initially if there is no node inside the Linked List we will return undefined;
    if (!this.head) return undefined; //* though we should have a node initially because of the linked list constructor class which already sets the first node.

    //* if we only had one node then as this method removes last node , so that one node will be also deleted, that's why we will set both head and tail equals to null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    let current = this.head;
    let previous = this.head;

    //* this loop should run until we find the node which next property pointing to null; so below loop will run until our below loops current property reaches to the tail(last) node
    while (current.next) {
      //* at this point current and previous both pointing to head, in each iteration we are moving the previous variable at the current node position  and then moving the current variable to next node.
      previous = current;
      //* moving current variable to next node
      current = previous.next;
    }
    //* at this point our current is reached to the last node because of the above loop and previous is at one node before the last one, now we will set the tail node to this previous variable as we want to delete the last node, so we will shift the tail to this previous and also remove the reference of the last node from this new tail node, so now the linked list will no longer have the last node as we moved the tail to its previous node and also set the next property reference to null so it does not contain the reference of that last node.
    this.tail = previous;
    this.tail.next = null;
    //* decreasing the length
    this.length--;

    //* returning the current variable to see what node we removed
    return current;
  }

  unshift(value) {
    //* creating a new node
    const newNode = new Node(value);
    //* if by chance , initially this linkedList is empty then we will just just add this new node , so just we need to set both head and tail equals to this newNode, though it should have one node initially because of the linked list constructor class
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    //*this.head which is right now the first so we should take its reference and  the new node's next property should point to old this.head's reference, because now it will be the second node
    newNode.next = this.head;

    //* setting this newNode to first position by changing the this.head
    this.head = newNode;
    //* increasing the length
    this.length++;
  }
  shift() {
    //* in case we have no nodes initially we will return undefined
    if (!this.head) {
      return undefined;
    }

    //*  this.head.next already have the reference of the next node so as we want remove the first node so this using the reference of the next node we will set this.head equals to the next node
    this.head = this.head.next; //* even if we had only one node the because of this this.head head will become null
    //* decreasing the length
    this.length--;

    //* if we just had one node inside the linked list then after removing that we will have no nodes then as because of above code this.head will already become null so we just need to set this.tail = null
    if (this.length === 0) {
      this.tail = null;
    }
  }

  getFirst() {
    return this.head;
  }
  getLast() {
    return this.tail;
  }
  get(index) {
    //* to keep track of the present index as we don't have indexes here
    let counter = 0; //* as indexes start from 0 so we also start this counter from 0

    //* to have reference of the current node, we have to create a current variable initially it will be the this.head
    let current = this.head;

    while (current) {
      //*  when our counter and the index is same the return that node
      if (counter === index) return current;

      //* if counter and index is not same then increase the counter by 1 and set the current node to its next node
      counter++;

      current = current.next;
    }

    //* if we won't able to find that index then just return null.
    return null;
  }
  set(index, updatedValue) {
    //* to keep track of the present index as we don't have indexes here
    let counter = 0; //* as indexes start from 0 so we also start this counter from 0

    //* to have reference of the current node, we have to create a current variable initially it will be the this.head
    let current = this.head;
    //* until we have any nodes we will iterate it
    while (current) {
      //*  when our counter and the index is same then we will change the value of that node and return the node.
      if (counter === index) {
        current.data = updatedValue;
        return current;
      }
      //* if counter and index is not same then increase the counter by 1 and set the current node to its next node
      counter++;

      current = current.next;
    }
    //* if we won't able to find that index then just return null.
    return null;
  }

  insert(value, index) {
    //* if user want to put the new node at the beginning of the linked list then we will just use unshift method we already created
    if (index === 0) {
      this.unshift(value);
      return true; //* so below code does not execute
    }
    //*  if user want to put the new node at the end of the linked list then we will just use push method we already created and remember at this point we have not increased the length so we don't need to write this.length-1
    if (index === this.length) {
      this.push(value);
      return true; //* so below code does not execute
    }
    //* if user want to insert the new node anywhere between;
    //* create a new node
    const newNode = new Node(value);
    //*using get method to find the node right before the desired position(index-1) because the previous node has the reference of next node which should be now its next node, and also after getting the reference of the new node and we will change the next property's reference of the previous node to this new node
    const previousNode = this.get(index - 1);

    newNode.next = previousNode.next;

    previousNode.next = newNode;
    this.length++;
    return true;
  }
  size() {
    let counter = 0; //* in each iteration we will increase this

    let current = this.head; //* to keep track of every node
    //* we will iterate it until we reach at the last node
    while (current) {
      //* increasing the counter
      counter++;
      //* moving the current variable to next node
      current = current.next;
    }
    return counter;
  }
  clear() {
    //* to empty the linked list
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  reverse() {
    //* getting the first node
    let current = this.head;
    //* reversing head to tail
    this.head = this.tail;
    //* reversing tail to head
    this.tail = current;
    //* another variable initially pointing to head
    let next = current;
    //* another variable pointing to null
    let prev = null;
    //* looping the linked list
    for (let i = 0; i < this.length; i++) {
      //* moving the next (initially head) to the next node
      next = current.next;
      //* changing the arrow direction , current node point to its previous node(null initially) to reverse it.
      current.next = prev;
      //* moving the previous node to current node
      prev = current;
      //* moving the current node to next node
      current = next;
    }
    return this;
  }
}
const myLinkedList = new LinkedList(1); //* we are passing 1 to set data property value
// console.log(myLinkedList);

//* now inside linkedList constructor class , we will add a push method,and this will allow us to add a new node at the end of our linkedList
//* so our first step is to create a new node, because before pushing the node inside our linked list we have to create the node.
//*  at this point as we have not added the new node to the linked list so this.tail is still equals to the previous node basically this.head because initially the head and the tail was same node. and its next property pointing to null , so as we are adding new node , so then the next property need to have the reference of the node , and that is what we are doing, we are adding the reference of new node inside previous node's next property.(this.tail.next = newNode;)

//* adding new node
//* and now this new node will become the tail node , as it is located at the end, ( this.tail = newNode;)
//*  increasing the length as we added a new node (this.length++;)
//* and this new node finally point towards null (see image - "push method linked-list.jpg" inside images folder)
myLinkedList.push(12);
myLinkedList.push(22);
myLinkedList.push(8);
// console.log(myLinkedList);
//* now using this push method we can add as many nodes as we want.

//* pop method
//*  it will remove the last item from the entire linked list
//* we may think that we just need remove the last node and point the tail to the previous node, but actually its not that easy.
//* So actually we have to iterated the whole linked list then go to the last node, then comeback to its previous node then pointing tail to this previous node and then remove the last node
//* so to do it we will create two variables , "current" and and "previous" , initially both will point to wards the first node this.head then using while loop we will iterate it , so let's assume the linked list has four nodes, so while iterating , when current will move to second node and as the first node still the previous of this node so it will not move, current will try to find is it the last node or not, using the next property, if it is last then next property value should be null, but it will see it is not the last then it will move to third node and the previous will move to second node, again the current will find that third node is not the last node, so it will move further and as the current reaches to fourth node and the previous reaches to third node , current will find that the last node, then we will remove the last node and using the pervious we will set the tail equals to this node (previous) and now it will point to null as this is the new tail node.
//* to see more details go inside the method and check comments
// const removedNode = myLinkedList.pop(); //* it will remove the last node
// console.log(removedNode);
// console.log(myLinkedList);

//* unshift method
//* adding a new node at the beginning of our linked list
//* so we have to create a new node , then this.head which is right now the first so we should take its reference and  the new node's next property should point to old this.head's reference, because now it will be the second node; and now we can set this.head = new node because this new node should be the first one.
// myLinkedList.unshift(33);
// console.log(myLinkedList);

//* shift method
//* deletes the beginning the node from the linked list
//* when we have more than one node in that this.head.next already have the reference of the next node so as we want remove the first node so this using the reference of the next node we will set this.head equals to the next node
// myLinkedList.shift();
// console.log(myLinkedList);

//* getFirst method
//*  it will give us the first node
// console.log(myLinkedList.getFirst());

//* getLast method
//* it will give us the last node
// console.log(myLinkedList.getLast());

//* get method(by index)
//* it will return us the node according to the index we pass as argument.
//* to keep track of the present index we have to create a counter variable as we don't have indexes here
//* as indexes start from 0 so we also start this counter from 0
//* to have reference of the current node, we have to create a current variable initially it will be the this.head
//*  when our counter and the index is same the return that node
//* if counter and index is not same then increase the counter by 1 and set the current node to its next node
//* if we won't able to find that index then just return null.

// console.log(myLinkedList.get(1));
// console.log(myLinkedList);
//*set method
//* it will take index and the value, and set the value(data) of that node which we mentioned using index.
//* to keep track of the present index we have to create a counter variable as we don't have indexes here
//* as indexes start from 0 so we also start this counter from 0
//* to have reference of the current node, we have to create a current variable initially it will be the node
//*  when our counter and the index is same change the value(data) of that node and the return that node
//* if counter and index is not same then increase the counter by 1 and set the current node to its next node
//* if we won't able to find that index then just return null.
// console.log(myLinkedList.set(3, 10));
// console.log(myLinkedList);
//*insert method
//* it will take the index where we want to add the new node and also the value of the at new node
//* if user want to put the new node at the beginning of the linked list then we will just use unshift method we already created
//*  if user want to put the new node at the end of the linked list then we will just use push method we already created
//* if user want to insert the new node anywhere between;
//* create a new node
//*using get method to find the node right before the desired position(index-1) because the previous node has the reference of next node which should be now its next node, and also after getting the reference of the new node and we will change the next property's reference of the previous node to this new node
// console.log(myLinkedList.insert(97, 3));
// console.log(myLinkedList);
//* size method
//* it will tell us how many node we have inside our linked list
//* to build this method first  we will create a counter variable, and set its initial value to 0 , then we will create a current variable to keep track of the current element and its value will be this.head because it is the first node, then using while loop we will iterate it until we reach to the last node , inside the loop we will increase the counter by 1 in each iteration, and also set the current variable referent to its next node using the next property.
//* and at last we will return the counter
// console.log(myLinkedList.size());
// console.log(myLinkedList);
//* clear method
//* it will empty our linked list
//* to build we will just set head and tail both values to null and and set the length 0.as we are not returning anything from this so after calling if we directly console log it it will give undefined because we returned nothing nothing from this, so we can just call this method and after that we can console og our linkedList to see if it worked or not;
// myLinkedList.clear();
// console.log(myLinkedList);
//* doubly linked list
//* so the main difference between a singly linked list and doubly linked list is insides the nodes
//* so in the doubly linked list node , it will have a extra property which is called the previous property so beside the data and the next property it will also have the "prev" property.(See image - doubly linked-list.jpg inside images folder)

//* creating node constructor class in doubly linked list
class DoublyLinkedListNode {
  constructor(value) {
    this.data = value;
    this.next = null;
    this.previous = null;
  }
}
//* Doubly linked list constructor class
class DoublyLinkedList {
  constructor(value) {
    const newNode = new DoublyLinkedListNode(value);
    //* initially as we will have only one node so both head and tail point to this new node. and as we added one node so length will be set to 1
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    //* creating a new node
    const newNode = new DoublyLinkedListNode(value);

    //* in case , our linked list is empty, we will point both head and tail to the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    //* right now tail is still pointing to thr previous last node so now this.tail.next which was the previous last node it should point to this new node
    this.tail.next = newNode;
    //* at this point we have not moved the tail to the new node , so tail is still pointing to previous last node , so using it we can set newNode.previous property to the previous last node
    newNode.previous = this.tail;
    //* now we can move the tail to the new node
    this.tail = newNode;
    //* increasing the length
    this.length++;
    //* returning the updated linked list
    return this;
  }

  pop() {
    //* in case there is no node we will return undefined
    if (this.length === 0) {
      return undefined;
    }
    //* in case the linked list only have one node then we just need to set both head and tail to null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    //* accessing last node
    let lastNode = this.tail;

    //* moving the tail to its previous node
    this.tail = this.tail.previous;
    //* setting tail.next to null so we can break the connection with the previous last node
    this.tail.next = null;
    //* finally in the previous last node we set previous property to null, to also break the connection.
    lastNode.previous = null;
    //* decreasing the length
    this.length--;
    //* returning the removed node
    return lastNode;
  }
  unshift(value) {
    //*create a node
    const newNode = new DoublyLinkedListNode(value);
    //* in case we don't have any node then we will point both head and tail to this new node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    //* this new node's next property should now point to the previous previous first node (this.head)
    newNode.next = this.head;
    //* at this point we have not changed this.head so it is still the previous beginning node so , so this previous node will become the second node so its previous property should point to newNode
    this.head.previous = newNode;
    //*  moving the head to the newNode
    this.head = newNode;
    //* increasing the length
    this.length++;
  }
  shift() {
    //* in case there is no node we will return undefined
    if (!this.head) {
      return undefined;
    }
    //* in case the linked list only have one node then we just need to set both head and tail to null
    if (this.length === 1) {
      this.head = this.tail = null;
    }
    //* selecting the node we will delete
    let previousStartingNode = this.head;
    //* moving the head to the next node because at this point the head is still pointing the previous beginning node
    this.head = this.head.next;
    //* now after we changed our head to the next node , we have to set it's previous property to null to break the connection with the deleted node
    this.head.previous = null;
    //* from the deleted node we will remove the connection by setting its next  property to null;
    previousStartingNode.next = null;
    //* decreasing th length
    this.length--;
    //* returning the deleted node
    return previousStartingNode;
  }
}

//* push method(to see the image go back to the video)
//* this method will add one node at the ending
//* in case , our linked list is empty, we will point both head and tail to the new node
// if (!this.head) {
//   this.head = newNode;
//   this.tail = this.head;
// }
//* right now tail is still pointing to thr previous last node so now this.tail.next which was the previous last node it should point to this new node
// this.tail.next = newNode;
//* at this point we have not moved the tail to the new node , so tail is still pointing to previous last node , so using it we can set newNode.previous property to the previous last node
// newNode.previous = this.tail;
//* now we can move the tail to the new node
// this.tail = newNode;
//* increasing the length
// this.length++
//* returning the updated linked list
//   return this;

const myDoublyLinkedList = new DoublyLinkedList(5);

// console.log(myDoublyLinkedList.push(9));
// console.log(myDoublyLinkedList.push(11));
// console.log(myDoublyLinkedList.push(12));

//* pop method
//* to remove thw last node from the linked list
//* in case there is no node we will return undefined
// if (this.length === 0) {
//   return undefined;
// }
//* in case the linked list only have one node then we just need to set both head and tail to null
// if (this.length === 1) {
//   this.head = null;
//   this.tail = null;
// }
//* accessing last node
// let lastNode = this.tail;

//* moving the tail to its previous node
// this.tail = this.tail.previous;
//* setting tail.next to null so we can break the connection with the previous last node
// this.tail.next = null;
//* finally in the previous last node we set previous property to null, to also break the connection.
// lastNode.previous = null;
//* decreasing the length
// this.length--;
//* returning the removed node
// return lastNode;

// console.log(myDoublyLinkedList.pop());
// console.log(myDoublyLinkedList);
//* unshift method
//* this method will add an node at the beginning of our linked list
//*create a node
// const newNode = new DoublyLinkedListNode(value);
//* in case we don't have any node then we will point both head and tail to this new node
// if (!this.head) {
//   this.head = newNode;
//   this.tail= this.head
// }
//* this new node's next property should now point to the previous previous first node (this.head)
// newNode.next = this.head;
//* at this point we have not changed this.head so it is still the previous beginning node so , so this previous node will become the second node so its previous property should point to newNode
// this.head.previous = newNode;
//*  moving the head to the newNode
// this.head = newNode;
//* increasing the length
// this.length++

//* shift method
//* this method will remove the first node from the linked list
//* in case there is no node we will return undefined
//  if (!this.head) {
//   return undefined;
// }
//* in case the linked list only have one node then we just need to set both head and tail to null
// if (this.length === 1) {
//   this.head = this.tail = null;
// };
//* selecting the node we will delete
// let previousStartingNode = this.head;
//* moving the head to the next node because at this point the head is still pointing the previous beginning node
// this.head = this.head.next;
//* now after we changed our head to the next node , we have to set it's previous property to null to break the connection with the deleted node
// this.head.previous = null;
//* from the deleted node we will remove the connection by setting its next  property to null;
// previousStartingNode.next = null;
//* decreasing the length
// this.length--;
//* returning the deleted node
// return previousStartingNode;

// console.log(myDoublyLinkedList.shift());
// console.log(myDoublyLinkedList);

//*Reversing a linked list(singly linked list)
//* first we have to switch the head and tail
//* reverse the arrows

//* getting the first node
//  let current = this.head;
//* reversing head to tail
//  this.head = this.tail;
//* reversing tail to head
//  this.tail = current;
//* another variable initially pointing to head
//  let next = current;
//  * another variable pointing to null
//  let prev = null;
//* looping the linked list
//  for (let i = 0; i < this.length; i++) {
//* moving the next (initially head) to the next node
//  next = current.next;
//* changing the arrow direction , current node point to its previous node(null initially) to reverse it.
//  current.next = prev;
//* moving the previous node to current node
//  prev = current;
//* moving the current node to next node
//  current = next;
//  }
//  return this;
// console.log(myLinkedList.reverse());

//? Stack data structure
//* definition - A stack is a linear data structure  that follows LIFO(Last in first out) principle.
//* for example think about a stack of books , kept one on another, lets's say we have five books, so stack is just like a box, so get the first book which is at the end , we can't get it directly, first we have to take our the last fifth book because its is on the top. then 4,then3, then 2, and now we can get the first book, that's way we can say it follow the last in first out principle.

//* here we don't have head and tail, instead we have top/first and bottom/last , so the top will point to the last node(like the book on the top). and the bottom will be the first node.see stacks.png from images folder to understand.
//* and similar to singly linked list . every node here also contains data and the reference so the next property.
//* so to create stack first we have to create nodes .
//* constructor class for creating nodes
class StackNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

//* constructor class to create stack
class Stack {
  constructor(value) {
    //* creating new node
    const newNode = new StackNode(value);
    //* set the first node value to this newNode
    this.first = newNode;
    //* setting the length to 1
    this.length = 1;
  }
  push(value) {
    //* creating a new node
    const newNode = new StackNode(value);
    //* in case our stack is empty (there is no node then we will simply set this.first to this new node)
    if (this.length === 0) {
      this.first = newNode;
    }
    //* if there is already one or more than one nodes present in the stack
    //* at this point this.first is still pointing to the previous node , so we will use it to set newNode's next property
    newNode.next = this.first;
    //* now this newNode will become the first node
    this.first = newNode;
    //* increasing the length
    this.length++;
    //* returning the updated stack(here this is pointing to the Stack class)
    return this;
  }
  pop() {
    //* creating current variable to keep track of the previous first node
    const current = this.first;
    //* in case stack is empty we will return undefined
    if (this.length === 0) return undefined;
    //* in case there is only one node present in the stack
    if (this.length === 1) {
      this.first = null;
    }
    //*  moving first property to the next node as we are removing the previous first node
    this.first = current.next;
    //* as we are removing the previous node so we will remove the reference of the next node from the previous first node
    current.next = null;
    //* decreasing the length
    this.length--;
    //* returning the removed node
    return current;
  }

  minValue() {
    //* if the stack is empty then it will return undefined
    if (this.length === 0) return undefined;

    //* to track the minimum value wew ill create two variables , first is current ,it is initially set to this.first and second is minValue and its initial value is current.data(this.first)
    let current = this.first;
    let minValue = current.data;

    //* we will iterate the stack till current.next value is null(which happens at the end)
    while (current.next) {
      //* in each iteration we are setting current to its next node
      current = current.next;
      //* here we are checking if the current node's value is lower than the minValue(initially set to this.first/current.data) and if it is lower then we are setting minValue to current.data(the new minimum value)
      if (current.data < minValue) {
        console.log(current.data, minValue);
        minValue = current.data;
      }
    }
    //* returning the minimum value
    return minValue;
  }
}
//* creating a stack instance using our Stack constructor class
const theStack = new Stack(3);
// console.log(theStack);
//* push method (pushing new node in the stack)
//* see the problem and image description in the video (time stamp - stack push method)
//* creating a new node
// const newNode = new StackNode(value);
//* in case our stack is empty (there is no node then we will simply set this.first to this new node)
// if (this.length === 0) {
// this.first = newNode;
// return this;
// }
//* if there is already one or more than one nodes present in the stack
//* at this point this.first is still pointing to the previous node , so we will use it to set newNode's next property
// newNode.next = this.first;
//* now this newNode will become the first node
// this.first = newNode;
//* increasing the length
// this.length++;
//* returning the updated stack(here this is pointing to the Stack class)
// return this;

theStack.push(4);
theStack.push(5);
console.log(theStack.push(6));

//* pop method (to remove the top node)
//* creating current variable to keep track of the previous first node
// const current = this.first;
//* in case stack is empty we will return undefined
// if (this.length === 0) return undefined;
//* in case there is only one node present in the stack
// if (this.length === 1) {
// this.first = null;
// }
//*  moving first property to the next node as we are removing the previous first node
// this.first = current.next;
//* as we are removing the previous node so we will remove the reference of the next node from the previous first node
// current.next = null;
//* decreasing the length
// this.length--;
//* returning the removed node
// return current;
console.log(theStack.pop());
console.log(theStack);

//* minValue method(at 3.9.36 sec)
//* this method will help to find the minimum value among the nodes from the stack
//* if the stack is empty then it will return undefined
// if (this.length === 0) return undefined;

//* to track the minimum value wew ill create two variables , first is current ,it is initially set to this.first and second is minValue and its initial value is current.data(this.first)
// let current = this.first;
// let minValue = current.data;

//* we will iterate the stack till current.next value is null(which happens at the end)
// while (current.next) {
//* in each iteration we are setting current to its next node
// current = current.next;
//* here we are checking if the current node's value is lower than the minValue(initially set to this.first/current.data) and if it is lower then we are setting minValue to current.data(the new minimum value)
// if (current.data < minValue) {
// console.log(current.data, minValue);
// minValue = current.data;
// }
// }
//* returning the minimum value
// return minValue;
console.log(theStack.minValue());

//*? Queue Data Structure
//* A queue is a linear data structure that functions like a waiting line.It follows the fifo (first in first out) principal, meaning the element that enters the queue first will be the first one to be removed. this data structure look very similar to the linked list. it has nodes , every node has data and next property. and instead of head we have first and instead of tail we have last property inside queue.
//* For example 4 people are entering in a shop to buy some coffee the person who enters first will be first in the queue and by the drink first then come out of the store then the second person who entered he will buy the coffee then come out of the store and so on S basically they are following the first in first out principle so the person who is going first inside the same person will be come out first so this Queue is basically the opposite of stack because stack  follow the lifo principle but Queue is following the Fifo principle.
//* see image -(queue.png)
//* node constructor class for queue
class QueueNode {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

//* queue constructor class
class Queue {
  constructor(value) {
    const node = new QueueNode(value);
    //* initially both first and the last node point to the same newNode
    this.first = node;
    this.last = node;
    this.length = 1;
  }

  enqueue(value) {
    //* creating a new node
    const newNode = new QueueNode(value);
    //* in case , the queue is initially empty
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    //* when there is one or more nodes present
    //* at this point last property still pointing to the previous last node, so noe the previous last node should point to this new node.
    this.last.next = newNode;
    //* moving last property to this new node
    this.last = newNode;
    //* this new node's next property should point towards null
    this.last.next = null;
    //* increasing the length
    this.length++;
    //* returning queue
    return this;
  }
  dequeue() {
    //* initially if there is no node inside the Linked List we will return undefined;
    if (!this.first) return undefined; //* though we should have a node initially because of the linked list constructor class which already sets the first node.

    //* if we only had one node then as this method removes last node , so that one node will be also deleted, that's why we will set both head and tail equals to null
    if (this.length === 0) {
      this.first = null;
      this.last = null;
    }

    let current = this.first;
    let previous = this.first;

    //* this loop should run until we find the node which next property pointing to null; so below loop will run until our below loops current property reaches to the tail(last) node
    while (current.next) {
      //* at this point current and previous both pointing to first, in each iteration we are moving the previous variable at the current node position  and then moving the current variable to next node.
      previous = current;
      //* moving current variable to next node
      current = previous.next;
    }
    //* at this point our current is reached to the last node because of the above loop and previous is at one node before the last one, now we will set the tail node to this previous variable as we want to delete the last node, so we will shift the tail to this previous and also remove the reference of the last node from this new tail node, so now the linked list will no longer have the last node as we moved the tail to its previous node and also set the next property reference to null so it does not contain the reference of that last node.
    this.last = previous;
    this.last.next = null;
    //* decreasing the length
    this.length--;

    //* returning the current variable to see what node we removed
    return current;
  }
}

//* creating the a queue instance
const myQueue = new Queue(3);
console.log(myQueue);

//* enqueue
//* it is same as we push a new node in linked list(for reference we can see the image -(push method linked-list.png))
//* creating a new node
// const newNode = new QueueNode(value);
//* in case , the queue is initially empty
// if (this.length === 0) {
// this.first = newNode;
// this.last = newNode;
// }
//* when there is one or more nodes present
//* at this point last property still pointing to the previous last node, so noe the previous last node should point to this new node.
// this.last.next = newNode;
//* moving last property to this new node
// this.last = newNode;
//* this new node's next property should point towards null
// this.last.next = null;1
//* increasing the length
// this.length++;
//* returning queue
// return this;
console.log(myQueue.enqueue(4));
console.log(myQueue.enqueue(5));

//* dequeue
//* similar to pop method of linked list
//* initially if there is no node inside the Linked List we will return undefined;
// if (!this.first) return undefined; //* though we should have a node initially because of the linked list constructor class which already sets the first node.

//* if we only had one node then as this method removes last node , so that one node will be also deleted, that's why we will set both head and tail equals to null
// if (this.length === 0) {
// this.first = null;
// this.last = null;
// }
//
// let current = this.first;
// let previous = this.first;

//* this loop should run until we find the node which next property pointing to null; so below loop will run until our below loops current property reaches to the tail(last) node
// while (current.next) {
//* at this point current and previous both pointing to first, in each iteration we are moving the previous variable at the current node position  and then moving the current variable to next node.
// previous = current;
//* moving current variable to next node
// current = previous.next;
// }
//* at this point our current is reached to the last node because of the above loop and previous is at one node before the last one, now we will set the tail node to this previous variable as we want to delete the last node, so we will shift the tail to this previous and also remove the reference of the last node from this new tail node, so now the linked list will no longer have the last node as we moved the tail to its previous node and also set the next property reference to null so it does not contain the reference of that last node.
// this.last = previous;
// this.last.next = null;
//* decreasing the length
// this.length--;

//* returning the current variable to see what node we removed
// return current;
console.log(myQueue.dequeue());
console.log(myQueue);

//* isValidParenthesis method
//* this method will take some input like "()","{}","[]", "(){}[]","(]](", and tell us if writing parenthesis is right or wrong..
const isValidParenthesis = (str) => {
  //* creating our own stack using [] because it has all of the necessary methods like push ,pop.
  const stack = [];
  //* we will use this stack to store opening brackets only
  //* in the below bracket object we have written the right pattern we want
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  //* now are iterating all of the characters we are receiving as arguments
  for (let char of str) {
    //* here we are checking if it is the opening brackets then we will push only that opening bracket into the stack
    if (brackets[char]) {
      stack.push(char);
    } else {
      //* if it is a closing bracket we have check if it matches the top of the stack
      //* stack.pop give us the top of the stack
      const top = stack.pop();
      //* if it is not the opening or closing then we will return false
      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
console.log(isValidParenthesis("()")); //* true
console.log(isValidParenthesis("{}")); //* true
console.log(isValidParenthesis("{()}")); //* true
console.log(isValidParenthesis("{(}]")); //* false
console.log(isValidParenthesis("{}()[]")); //* true
console.log(isValidParenthesis("{)[]")); //* false

//* reversing string using stack

function reverseString(str) {
  //* creating a stack
  const stack = [];
  //* iterating the received input's characters and and then one by one into the stack
  for (let char of str) {
    stack.push(char);
  }
  //* variable to sto9re the reversed string
  let reversedString = "";

  //* if stacks length is more than 0 then we will pop characters from the stack and one by one add then into the the reversedString variable
  while (stack.length > 0) {
    reversedString += stack.pop();
  }
  //* returning the reversed string
  return reversedString;
}
console.log(reverseString("anupam")); //*mapuna

//? Hash Tables
//* hash tables use to store key-value pairs
//* like in javascript, we have key-value pairs in objects
//* but we will not use this built in objects as hash tables instead we will make our own hash table

//* suppose we want to store a phone numbers in hash tables.
//* like - john: 3432434423, alex:4353243443,luci:93247908347

//* to solve this problem and to create our own hash table we will be using "hash functions"
//* Hash function : Acts like a translator, taking an input of any size(key) and converting it into a fixed-size value (hash code) that can be used as an index within the hash tables's internal array .This process of mapping arbitrary keys to fixed-length indices is called hashing.

//* to understand the above hash function working process in more detail we can understand it step by step we can see below (not necessary to to remember below one above definition is enough, it is just for better understanding)
//*1  input- you feed any kind of data into the hash function, like your name,a sentence,or a whole file.

//*2 hashing process - the function performs series of mathematical operations on the input data, essentially scrambling it up in a unique way.

//*3 fixed-size input- regardless of input size, the hash function always spits out a fixed-size value, like a short string of characters or a number.

//* actual process of how hash function put the data into hash table(see image -hash table.png)
//* first it takes some data as input like john:367587687 ,we also call this input as key, so first it will give the key a unique identifier/index like 2 , which is basically the location to store the data. then at second step it puts the data(key) inside [[]] double brackets like [[ john:367587687]] then put this key at the second index inside the hash table.(see image hash table.png)

//* let's create our own custom hash table using class

class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size); //* this.kepMap property's value is new Array because we are converting our data into array and also we are passing the size .and we have also provided the default value 5 for size.
  }

  //* custom hash function
  _hashFunction(key) {
    //* this function will take the key as input and this function will hash it
    let sum = 0; //*this variable is for storing the hash value

    //* for prime number
    const PRIME_NUMBER = 31;
    //* it will iterate thorough each character of the key(param) but only upto the maximum of 100 characters . this is for ensuring that the function don't take much longe keys
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      //  *     The code const charCode = key.charCodeAt(0) - 96; converts a lowercase letter to its corresponding position in the alphabet (1-26). It works by:
      //* key.charCodeAt(0):
      // This part retrieves the Unicode (UTF-16) value of the character at index 0 of the string key. If key is a single lowercase letter, this will return its Unicode value. For example, the Unicode value of 'a' is 97, 'b' is 98, and so on.
      //* - 96:
      //* This subtracts 96 from the Unicode value. Since 'a' has a Unicode value of 97, subtracting 96 results in 1. Similarly, 'b' (Unicode 98) becomes 2, and so on. This effectively maps 'a' to 1, 'b' to 2, ..., 'z' to 26.
      //* Therefore, after execution, charCode will hold the numerical position of the lowercase letter within the alphabet. If key is not a lowercase letter, the result might not be meaningful in this context.
      const charCode = key.charCodeAt(0) - 96;
      //* hashing logic(to know more just search below code in google)
      sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
    }
    return sum;
  }
  set(key, value) {
    const index = this._hashFunction(key); //* this will return the index
    console.log(index);
    console.log(!this.keyMap[index]); //* we will get true because there is no empty array already available inside that specific index.

    //* so if there is no empty array in that specific index then we will create an empty array.
    if (!this.keyMap[index]) this.keyMap[index] = [];
    //* if there is already an array then we just need to push our data(key and ,value) to that specific index
    this.keyMap[index].push([key, value]);
    return this;
  }
  get(key) {
    //* using the key first we will get the index
    const index = this._hashFunction(key);

    //* then we will check if any data present in that specific index or not inside the hash table.
    if (this.keyMap[index]) {
      //* if any data is present in that specific index then we will iterate that data
      for (let i = 0; i < this.keyMap[index].length; i++) {
        //* if the the data is present in that specific index, then we will try to find the matching key,so data inside that inside should look like this([[john,2321313],[harry,4356436]]), below first to go to that specific index we are writing this.keyMap[index] then as we are iterating the array and accessing each index(each array inside the array) that why we are writing this.keyMap[index][i] , and then inside the child array we are trying to find the key like-john that why are finding the 0 th index,like this - this.keyMap[index][i][0], and finally we are comparing it with the received key.
        if (this.keyMap[index][i][0] === key) {
          //* if both matches then we will just return the value of the key located at the first index.
          return this.keyMap[index][i][1];
        }
      }
    }
    //* if no data is present inside that specific index then we will just return undefined
    return undefined;
  }

  getAllKeys() {
    const keys = []; //* container for storing all the keys

    //* iterating the hash table
    for (let i = 0; i < this.keyMap.length; i++) {
      //*checking if there any in data in any index or not
      if (this.keyMap[i]) {
        //* iterating the parent array data
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //* pushing every key data into keys array container
          keys.push(this.keyMap[i][j][0]); //* keyMap[i] to access index inside hash table , the [j] to access child arrays inside parent array, then [0] to access the keys inside the child arrays
        }
      }
    }
    return keys;
  }
  getAllValues() {
    const values = []; //* container for storing values

    //* iterating the hash table  checking if there is in data in any index or not
    for (let i = 0; i < this.keyMap.length; i++) {
      //*checking if there is any data in any index or not
      if (this.keyMap[i]) {
        //* iterating the parent array
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //* pushing all the values of the the keys into the values array
          values.push(this.keyMap[i][j][1]); //* keyMap[i] to access index inside hash table , the [j] to access child arrays inside parent array, then [1] to access the values of the keys inside the child arrays
        }
      }
    }
    return values;
  }
  getAllKeyValuePairs() {
    const keyValuePairs = []; //* container for storing keyValuePairs

    //* iterating the hash table  checking if there is in data in any index or not
    for (let i = 0; i < this.keyMap.length; i++) {
      //*checking if there is any data in any index or not
      if (this.keyMap[i]) {
        //* iterating the parent array
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //* pushing all the keyValuePairs into the keyValuePairs array
          keyValuePairs.push(this.keyMap[i][j]); //* keyMap[i] to access index inside hash table , the [j] to access child arrays of keyValuePairs inside parent array,
        }
      }
    }
    return keyValuePairs;
  }
}
//* set method
//* Now let's create set method in our hash table ,it will first take the key and its value and put that into the hash function then hash function will give some id of index,then inside the hash table we will go to that index, and check if some kind array already present at that index or not, if any array is present then inside that array we will put our data and if there is no array then we will just create two array[[]] one inside another then put our data inside that.

const phoneBook = new HashTable(); //* creating an instance
console.log(phoneBook.set("john", 798089898));
phoneBook.set("nobita", 5675766889);
phoneBook.set("anupam", 7904759099);
//* get method
//* this method will take an property and hash that after hashing it will give an index based on theta property, then inside then inside hash table we will go to that index, and check if any data already present in that index or not, if present then we will just iterate that data(array of arrays) like-```[[john,2321313],[harry,4356436]]``` and if we get the key matching to the property we are trying to find then we will just return the key's value, but if we don't have any data in that index then we will return just undefined.

console.log(phoneBook.get("john")); //* it will give us the john's number
console.log(phoneBook.get("shawn")); //*undefined, because it is not present inside our hashTable's instance.

//* getAllKeys method
//* it will give us all the keys from the hash table.
//* first we will iterate the whole hash table and check each index if any data present or not.when we find any index where any data is present then, from that index , we will iterate the array of array, then from each of the child array we will get all of the keys and store  in another array and finally return that.so we can get all the keys from the hash table.
console.log(phoneBook.getAllKeys()); //*["john","nobita","anupam"]

//* getAllValues method
//* it will give us all the values of the keys from the hash table.
//* first we will iterate the whole hash table and check each index if any data present or not.when we find any index where any data is present then, from that index , we will iterate the parent array of arrays, then from each of the child array we will get all of the values  of the keys and store in another array and finally return that.so we can get all the values of the keys from the hash table.
console.log(phoneBook.getAllValues());

//* keyValuePairs method
//* it will give us all the keyValuePairs from the hash table.
//* first we will iterate the whole hash table and check each index if any data present or not.when we find any index where any data is present then, from that index , we will iterate the parent array of arrays, and each iteration will give the child arrays which are keyValuePairs, we will push those child arrays into keyValuePairs array.and return that keyValuePairs array.
console.log(phoneBook.getAllKeyValuePairs());

//* wordCounter function
//* this function will take a sentence as parameter like "Hello my name name name is anupam" and tell us that how many times a specific word is written.like-{hello:1,my:1,name:3,is:1,anupam:1};

function wordCounter(text) {
  const lowerText = text.toLowerCase(); //* converting text to lower case

  //* hash table/object for saving the results
  const wordMap = {};

  const words = lowerText.split(" "); //* splitting based on sapc\space

  //* iterating words array
  for (const word of words) {
    //* checking if any word is already present inside the wordMap or not
    if (word in wordMap) {
      //*if any word is already present inside the wordMap then we will just increase the count by 1
      wordMap[word]++;
    } else {
      //* if the word is not present then we will for adding first one we will set the count to 1.
      wordMap[word] = 1;
    }
  }
  return wordMap;
}
console.log(wordCounter("Hello my name name name is anupam")); //* name :3, another words :1

//* two sum refactor problem was not understandable.3h.50m

//? Tree data structure
//* A DS tree is a fundamental hierarchical data structure. it represents a collection of elements(data) called nodes,connected by edges(links),forming a tree like structure.(see image - Tree data structure.png)

//*root node -  the top node of all nodes is called root node,
// * parent node- any parent of child nodes is called parent node,
//*sibling node - two children at same level are called sibling nodes of each other,
//*leaf node-  if any children node doesn't have further children of them then those children nodes are called leaf nodes
//* full tree - when each node either has no children(leaf node) or exactly two children.(see image- full tree)
//* perfect tree(full + balance)
//* all the leaf nodes are at the same depth(distance from the root).this means the tree is completely filled with no gaps at any level.(see image - perfect tree)
//* Complete tree
//*almost full levels - all levels excepts possibly the last one are completely filled with nodes.
//* left leaning last level:- the last level is filled with nodes from the left side as much as possible.(see image - complete tree)

//*? Binary search tree(BST)
//* A binary search tree is a special kind of binary tree used to organize data in a sorted way.It works like a filling cabinet where you can efficiently search, add , remove items.

//* important note while working with binary search tree
//* go left if you value is smaller than the current branch. Go right if your value is bigger.( to under stand better watch the video at 3 h 56 m)

//* node creator class
class BSTNode {
  constructor(value) {
    this.value = value; //* value /data of the node
    //* each node can have two pointer left and right so initially we will set them to null
    this.left = null;
    this.right = null;
  }
}
//* BST creator class
class BST {
  constructor() {
    //* inside the BST ,first  we have the root at the top level, initially we will set it to null
    this.root = null;
  }
  insert(value) {
    //* creating new new node
    const newNode = new BSTNode(value);

    //* initially we set root node's value to null, so now first we will set the root's value to this newNode if root's value is null
    if (this.root === null) {
      this.root = newNode;
      return this; //* in this case , the received value is used to create the root node so we can immediately return
    }

    //* creating a temporary variable to keep track of the root node
    let temp = this.root;
    // console.log(temp.value);
    //* we are using the while loop and true value inside the condition because we don't know how many time we will use this insert method and how many nodes we will insert using this.
    while (true) {
      //* if newNode's value and temp's(root node) value is same then there is no meaning of adding that value because that value will b a duplicate so we will return undefined in that case.
      if (newNode.value === temp.value) {
        return undefined;
      }

      //* now we will check if newNode's value is less than root node, then according to the rule , we should add the newNode at the left pointer
      if (newNode.value < temp.value) {
        //* then first we have to check the left pointer is empty or not , if it is empty that means it is null
        if (temp.left === null) {
          temp.left = newNode;
          //* returning the BST
          return this;
        } else {
          //* finally that is not the case so if the left pointer is not empty then we will set temp's value to temp.left (left pointer)
          temp = temp.left;
        }
      } else {
        //* in this case newNode's value will be more than the root node so it should be added to the right pointer
        //* first we will check if the right pointer is empty
        if (temp.right === null) {
          temp.right = newNode;
          return this; //*returning the BST
        } else {
          //* finally that is not the case so if the right pointer is not empty then we will set temp's value to this.right (right pointer)
          temp = temp.right;
        }
      }
    }
  }

  includes(value) {
    //* initially we will check if there is any root node or not to ensure that we have a tree
    if (!this.root) {
      return false; //* f there is not root that means there is no tree because root node is the first node so in that case we will return false.
    }

    //* creating a temp variable to compare with value when it will match we will return true. initially we will set this variable's value to the root node , because we will start to check from the top node of the BST.
    let temp = this.root;

    //* looping the tree using while(temp) because without temp there is no meaning of looping the tree as this temp is initially the root node, if there is no root node that means there is no tree
    while (temp) {
      if (value < temp.value) {
        //* if the value we are finding is less than the temp.value then we will move temp variable to the left child node of that specific node.
        temp = temp.left;
      } else if (value > temp.value) {
        //* if the value we are finding is greater than the temp.value then we will move temp variable to the right child node of that specific node.
        temp = temp.right;
      } else {
        //* when temp.value is equal to value we trying to find that means we found our result so we can return true .
        return true;
      }
    }
    //* if the tree doesn't include the value we are trying to find then we can return false.
    return false;
  }

  breadthFirstSearch() {
    //* to keep track of the current node we will create a current var with the initial value of the root node
    let current = this.root;
    let queue = []; //* queue initially empty
    let data = []; //* data array initially empty

    //* pushing current node into queue
    queue.push(current);

    //* now we need to iterate our full tree to access all of the nodes but as we do not know how many nodes are inside the tree so we will not use for loop instead we will use while loop, so until there is something inside the queue it will continue to iterate
    while (queue.length) {
      current = queue.shift(); //* for removing the node from the queue to empty it and saving that as current's value
      //* pushing that current nodes value to data array
      data.push(current.value);

      //* if some node is present at the left pointer of the current node we will add that to the queue
      if (current.left) queue.push(current.left);

      //* if some node is present at the right pointer of the current node we will add that to the queue
      if (current.right) queue.push(current.right);
    }
    //* finally returning our data array
    return data;
  }
  dfsPreOrder(node = this.root, data = []) {
    //* initial value of the node is root node and data's initial value is empty array
    //* base case (if there is no node then just return data which is initially empty)
    if (node === null) return data;
    console.log(data);
    //* pushing the node value inside the data array
    data.push(node.value);

    //* if any data is present in the left pointer then we have to use recursion , so we will call the dfsPreOrder function here inside it with left pointer node and the data
    if (node.left) this.dfsPreOrder(node.left, data);

    //* if any data is present in the right pointer then we have to use recursion , so we will call the dfsPreOrder function recursively here inside it with right pointer node and the data
    if (node.right) this.dfsPreOrder(node.right, data);

    return data;
  }

  dfsPostOrder(node = this.root, data = []) {
    //* initial value of the node is root node and data's initial value is empty array
    //* base case (if there is no node then just return data which is initially empty)
    if (node === null) return data;
    // console.log(data);

    if (node.left) this.dfsPostOrder(node.left, data);

    if (node.right) this.dfsPostOrder(node.right, data);
    //* pushing the node value inside the data array (starting form the deepest left side leaf node then right leaf then parent then root at last)
    data.push(node.value);

    return data;
  }

  dfsInOrder(node = this.root, data = []) {
    //* initial value of the node is root node and data's initial value is empty array
    //* base case (if there is no node then just return data which is initially empty)
    if (node === null) return data;
    // console.log(data);

    if (node.left) this.dfsInOrder(node.left, data);

    //* pushing the node value inside the data array (starting form the deepest left side leaf node then its parent then root then right side deepest left leaf node then the parent and then the deepest right leaf node)
    data.push(node.value);

    if (node.right) this.dfsInOrder(node.right, data);

    return data;
  }
}

//* creating a instance of our BST m
const tree = new BST();

//* insert method
//* this will insert nodes into the BST
/* //* creating new new node
    const newNode = new BSTNode(value);

    //* initially we set root node's value to null, so now first we will set the root's value to this newNode if root's value is null
    if (this.root === null) {
      this.root = newNode;
      return this; //* in this case , the received value is used to create the root node so we can immediately return
    }

    //* creating a temporary variable to keep track of the root node
    let temp = this.root;
    //* we are using the while loop and true value inside the condition because we don't know how many time we will use this insert method and how many nodes we will insert using this.
    while (true) {
      //* if newNode's value and temp's(root node) value is same then there is no meaning of adding that value because that value will b a duplicate so we will return undefined in that case.
      if (newNode.value === temp.value) {
        return undefined;
      }

      //* now we will check if newNode's value is less than root node, then according to the rule , we should add the newNode at the left pointer
      if (newNode.value < temp.value) {
        //* then first we have to check the left pointer is empty or not , if it is empty that means it is null
        if (temp.left === null) {
          temp.left = newNode;
          //* returning the BST          return this;
        } else {
          //* finally that is not the case so if the left pointer is not empty then we will set temp's value to temp.left (left pointer)
          temp = temp.left;
        }
      } else {
        //* in this case newNode's value will be more than the root node so it should be added to the right pointer
        //* first we will check if the right pointer is empty
        if (temp.right === null) {
          temp.right = newNode;
          return this; //*returning the BST
        } else {
          //* finally that is not the case so if the right pointer is not empty then we will set temp's value to this.right (right pointer)
          temp = temp.right;
        }
      }*/

tree.insert(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(7);
tree.insert(9);

console.log(tree);

//* includes method of BST
//* it will help us to search a specific node using the value in our entire tree
console.log(tree.includes(7)); //* true
console.log(tree.includes(6)); //* false

//*? Recursion
//* Recursion is when a function when a function calls itself.But it does not calls itself exactly the same way each time.
//* go to 4h 17 min to under stand below three lines
//* the function makes the problem smaller be changing the input a bit.Like opening a smaller doll inside the bigger one.
//* there is simple case, that the function can solve without calling itself again.this is called the base case.(the smallest doll)
//* as long as, it is not the because, the function calls itself with the smaller problem

//* so lets create a recursive function
//* we will create a countdown function using recursion, we will pass 5 as argument and it will print till 0 then stop. we could have done it using loop but this time we will do it using recursion function. and obviously we have to write a base case to stop the function call at a particular point unless it will run into a infinite loop, also called stack overflow.
function countdown(number) {
  //* base case (it wil stop at 0)
  if (number === 0) {
    console.log(`we have finished the countdown 🥂🥂`);
    return;
  }
  //* every time it will less 1 from the number and call the function
  console.log(number);
  countdown(number - 1);
}

countdown(5);

//* let's create another function using recursion
//* this time we will create a function which will help us to calculate the factorial. example- factorial of 5! = 5*4*3*2*1

function factorial(number) {
  //* base case
  if (number === 0) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(5)); //*120

//? Tree traversal (Breadth first search - BFS)
//* a tree traversal just simply means that we are going to be accessing each item inside the tree and we are going to be storing them in some sort of array
// *  there are a lot of ways we can do that  but first of all let us talk about the first one which is called the bfs or you can say the breadth first search.
// *  we are going to be 1st of all starting from the root node and we are going to be providing that node to our queue(array) so we are going to be creating our own queue not our own queue but array so yeah we're going to be taking our item from our root which will be the first item , we're going to be placing  in that queue, the next thing that we have to do is that we have to take this data from this queue and we have to pass  inside our data array so we are going to be providing the entire node to queue and we are going to be only taking the data from that node and we are going to be passing that to this data array,now before going to the next child level , always we have to clean the queue so remove the root node but we don't need to clean the data array.
//* see image - (images\breadth first search.jpg)
// * now the next thing that we have to do is that we have to search for the left pointer node and also So the right pointer node and why is that? because we are now providing this entire node , so as the root has a pointer of the left and also to the right . so we will be adding the left pointer node(3) and the right pointer node(8) to the queue and also add the data 3,8 to the data array.
//* now again clean the queue, right now queue - [], data array =[5,3,8]
//* see image - (images\breadth first search.jpg)

//* now we will go one level down, first from 3 's left node we will add 1 valued node to the queue and and also add 1 to the data array then again clean the queue.
//* now in the right 8 valued node has two child nodes 7,9. we will add both nodes to the queue and 7,9 to the data array.
//* then again clean the queue
//* now the queue(array) is empty and data array - [5,3,8,1,7,9]

//* So let's go inside our binary search tree and write this breadth first search method their.
console.log(tree.breadthFirstSearch()); //*[5,3,8,1,7,9] as we expected

//*? Tree traversal -- Depth first search(Pre-order) -- DFS
//*Depth-First Search (DFS) is a method used to explore all the nodes in a tree by going as deep as possible along each branch before moving to the next one. It starts at the root node and visits every node in the tree.

//*Depth-First Search (DFS) can be classified into three main types based on the order in which the nodes are visited:
//* go to this sight for better understanding - https://www.geeksforgeeks.org/dsa/dfs-traversal-of-a-tree-using-recursion/

//*Pre-order Traversal (see image- dfs pre-order.jpg): Visits the root node first, then recursively explores the left and right subtrees.here we start at root node then add it value to the array then its left child and add that's value then the left of that child we will add it value and it leaf node then we will go to right leaf node ad that's value then finally the right pointer side of the root node and add the first child's value to the array then the left child (leaf) and then the right child(leaf).

//*In-order Traversal: Explores the left subtree first, then visits the root, and finally the right subtree.
//*Post-order Traversal: Explores the left and right subtrees first, then visits the root node.

console.log(tree.dfsPreOrder()); //*[5,3,1,8,7,9] //* first root , then check all left nodes then right, see the method and the video,4h35m

//* Depth first search(post-order)(see image- dfs post-order.jpg):- it starts from the root node but doesn't add the root node in the array at first, first it goes to the deepest leaf node in the left and add that leaf node's value to the data array then again come to one level up so to the parent of that leaf node then go to the right leaf node and add this right leaf nodes value and then the parent of those leaf node and then add that parent's value then comes back to the root but doesn't add the root value , now it goes to right pointer of the root node then from this right pointer it reaches to the deepest left leaf node of that right pointer side and add that leaf node's value to the array then again come one level up then goes to the right and add that right leaf node's value and the parent's value so the right pointer's value of root's node it adds then at last it adds the root node value. basically it starts from the deepest left side leaf node then right side leaf node then the upper nodes and at last the root node value will be added to the array.

//* Depth first search ( in-order) (see image - dfs in-order.jpg):- in this method we start from the root but does not add the root node's value to the data array at first , at first we start from the root and in the left side we go as deep as possible so we reach to the deepest leaf node at the left side then we add this left side deepest node value to the array and then go back to it's parent and add it's value to the array and finally go back to the root node and add the root node's value to the array and finally at we go to thr right pointer side of the root and try to go as deep as possible in the left side of this right side pointer node then add it value then go back one level up and add the parent node's value then finally again go to the right child  of this parent and add it's value to the array.
console.log(tree.dfsInOrder());

//? Graph
//*A graph is a non-linear data structure that models relationship between objects.It consists of two two components - Vertices(Nodes) & Edges.
//* Vertices :- These represent the individual entities within the graph.Vertex is singular for and vertices are plural.
//* Edges :- These connect vertices, signifying a relationship or connection between them
//* to represent graphs we have two common ways:-
//* 1. Adjacency Matrix (see image- images\adjacency matrix.jpg)
//* 2. Adjacency List (see image - images\adjacency list.jpg)
//* these help us to understand the connections of different edges with the nodes/vertices

//* Initially we will use adjacency list to understand the graph , so let's create a graph first

class Graph {
  constructor() {
    this.adjacencyList = {}; //* our graph will have this adjacency list which will point to a empty object initially
  }

  addVertex(vtx) {
    //* checking for the duplicate values(if the same vertex is not present inside the adjacent list)
    if (!this.adjacencyList[vtx]) {
      //* creating the vertex inside the adjacent list when there is no duplicate already present
      this.adjacencyList[vtx] = []; //* initially its value will be this empty array, later we will save the edges/connections this this array;
      //* to confirm that we have successfully added the vertex we will return true
      return true;
    }

    //* incase the vtx ius already present then because of the duplicate value we will return false,
    return false;
  }
  //* connection
  addEdges(vtx1, vtx2) {
    //* at first it will check vtx1, vtx2 is already present inside the graph or not , and if present then only we will add both inside each other's edges/connection arrays.
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1].push(vtx2); //* adding vtx2 in vtx1's array
      this.adjacencyList[vtx2].push(vtx1); //* adding vtx1 in vtx2's array
      return true; //* after successfully creating the connection we will return true
    }

    //* if the vertices are not present inside the Graph's adjacent list then we will return false
    return false;
  }
  removeEdges(vtx1, vtx2) {
    //* at first it will check vtx1, vtx2 is already present inside the graph or not
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      //* below filtration means , vertex1's value(array) should contain other values , but not the value of of vertex2
      this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
        (v) => v !== vtx2
      );
      //* below filtration means , vertex2's value(array) should contain other values , but not the value of of vertex1
      this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
        (v) => v !== vtx1
      );
      //* after success return true
      return true;
    }
    //* incase it's successful then return false
    return false;
  }
  removeVertex(vtx) {
    //* the vertex is already not present then we will return undefined
    if (!this.adjacencyList[vtx]) return undefined;

    //* every vertex has the list of its connections (like A :[B,E]) , we iterating the connections/ neighbors array , so we can access all the other vertices connected with this specific vertex, and then from those neighbor's/connection's arrays we are removing the specific vertex.So after removing the vertex other vertices doesn't contain its link in their connection arrays.
    for (const neighbor of this.adjacencyList[vtx]) {
      this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(
        (v) => v !== vtx
      );
    }

    //* deleting the vertex
    delete this.adjacencyList[vtx];

    //* returning the graph
    return this;
  }
}

//* creating a instance of our graph
const g = new Graph();
console.log(g);

//* after creating graph instance , now we have to define our vertex/node/property inside the object we created. every property/vertex will have the edges/connections as their value.
//* So to add a vertex/property/node we will create a addVertex  method in our graph class
//* addVertex method
//* implementation of the method
/* addVertex(vtx) {
    
    //* checking for the duplicate values(if the same vertex is not present inside the adjacent list)
    if (!this.adjacencyList[vtx]) {
      //* creating the vertex inside the adjacent list when there is no duplicate already present
      this.adjacencyList[vtx] = []; //* initially its value will be this empty array, later we will save the edges/connections this this array;
      //* to confirm that we have successfully added the vertex we will return true
      return true;
    };

    //* incase the vtx ius already present then because of the duplicate value we will return false,
    return false;
  }*/

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
console.log(g); //*Graph{adjacencyList:{ "A": [], "B": [], "C": [], "D": [], "E": []}};

//* now we have the vertices/nodes.but the nodes doesn't have the data of their connections/edges. in their array.
//* now let's add a method to add edges in the vertex arrays.

//* addEdges methods
//* implementation of the method
/*addEdges(vtx1, vtx2) {
    //* at first it will check vtx1, vtx2 is already present inside the graph or not , and if present then only we will add both inside each other's edges/connection arrays.
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1].push(vtx2);//* adding vtx2 in vtx1's array
      this.adjacencyList[vtx2].push(vtx1);//* adding vtx1 in vtx2's array
      return true;//* after successfully creating the connection we will return true
    };

    //* if the vertices are not present inside the Graph's adjacent list then we will return false
    return false;
  }*/

g.addEdges("A", "B");
g.addEdges("B", "C");
g.addEdges("C", "D");
g.addEdges("D", "E");
g.addEdges("E", "A");
console.log(g); //*{ "A": ["B","E"], "B": ["A","C" ], "C": ["B","D" ], "D": [     "C","E" ], "E": ["D","A" ]}

//* removeEdges method
//* implementation of the method
/*removeEdges(vtx1, vtx2) {
    //* at first it will check vtx1, vtx2 is already present inside the graph or not
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      //* below filtration means , vertex1's value(array) should contain other values , but not the value of of vertex2
      this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
        (v) => v !== vtx2
      );
      //* below filtration means , vertex2's value(array) should contain other values , but not the value of of vertex1
      this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
        (v) => v !== vtx1
      );
      //* after success return true
      return true;
    }
    //* incase it's successful then return false
    return false;
  }*/

//* removing connections between A,B.
g.removeEdges("A", "B"); //*{ "A": ["E"], "B": ["C"], "C": ["B","D"], "D": ["C","E"], "E": ["D","A"]}

//* removeVertex method
//* implementation of the method
/* removeVertex(vtx) {
    //* the vertex is already not present then we will return undefined
    if (!this.adjacencyList[vtx]) return undefined;

    //* every vertex has the list of its connections (like A :[B,E]) , we iterating the connections/ neighbors array , so we can access all the other vertices connected with this specific vertex, and then from those neighbor's/connection's arrays we are removing the specific vertex.So after removing the vertex other vertices doesn't contain its link in their connection arrays.
    for (const neighbor of this.adjacencyList[vtx]) {
      this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(
        (v) => v !== vtx
      );
    }

    //* deleting the vertex
    delete this.adjacencyList[vtx];

    //* returning the graph
    return this;
  }*/
g.removeVertex("D");
console.log(g);

//? bubble sort
//* Among many types of sorting algorithms bubble sort is one , simply it sort numbers in smaller to bigger order, like if we have - [4,2,3,1,5,6], then in this sorting algo will loop over the array and in each iteration , it will compare a number with the next one , and place the bigger number in the right and smaller in the left and finally it will give us a result like - [1,2,3,4,5,6].
//* so lets implement bubble sort

function bubbleSort(arr) {
  //* first loop is for iterating the array
  for (let i = arr.length - 1; i > 0; i--) {
    //* second loop is for swapping the values
    for (let j = 0; i > j; j++) {
      //* if the first value is greater than the second value only then we will swap the values
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]; //* this temp is for having the reference of the first value , because in the next line we changed the first value with the second one.
        arr[j] = arr[j + 1];
        //* now using the temp we can change the second one's value with first one.
        arr[j + 1] = temp;
      }
    }
  }
  //* returning the array
  return arr;
}

let myArr = [4, 2, 3, 1, 6, 5];

console.log(bubbleSort(myArr));
