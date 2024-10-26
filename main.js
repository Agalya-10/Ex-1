// Arithmetic operator
var a=20;
var b= 5;

// add
let result1=a+b;
console.log(result1)
// sub
let result2=a-b;
console.log(result2)
// multi
let result3=a*b;
console.log(result3)
// divi
let result4=a/b;
console.log(result4)
// modulo
let result5=a%b;
console.log(result5)
// expo
let result6=a**b;
console.log(result6)
  
  //  increment
      var a=20;
      ++a;
      console.log(a);
    
      var a=20;
      b=a++;
      console.log(b);

    //   decrement
      var a=60;
      b=--a;
      console.log(b);

      // Assignment operator
       var x=25;
       var y=10;
        
      //  add
       var result=(x+=y);
       console.log(result)
      //  sub
      var result=(x-=y);
      console.log(result)
      // multi
      var result=(x*=y);
      console.log(result)
      // divi
      var result=(x/=y);
      console.log(result)
      // modulo
      var result=(x%=y);
      console.log(result)
      // expo
      var result=(x**=y);
      console.log(result)

    //  Comparison operator
      var a =50;
      var b=35;

      // greaterthan
      var tValue=(a>b);
      console.log(tValue)
      //  lessthan
      var Value=(a<b);
      console.log(Value)
      // greaterthan or equalto
      let value1 =(20>=15);
      console.log(value1)
        // lessthan or equalto
        let value2 =(20<=15);
        console.log(value2)
  
        var a=10;
        var b='10';
  
        // double equal to
        var total = (a==b);
        console.log(total)
  
        // ===
         var totalValue =(a===b)
         console.log(totalValue)

        //  not equalto
        var value3 = (10!==10);
        console.log(value3)
  
// logical operator
// And
 var and =(10>5)&&(10<5)
 console.log(and)

 var and =(10>5)&&(2<5)
 console.log(and)

//  or
var or =(10>5)||(10<5)
console.log(or)

// not
var not = !(5<10);
console.log(not)

    // if  else
  var rain=false
  if (rain)
  {
      console.log("take an umbrella")
  }
  else{
      console.log("enjoy the sunshine")
      }


      var score = 60;

      if (score < 50) {
          console.log("You need to improve");
      } else if (score <= 70) {
          console.log("Good job");
      } else if (score > 70) {
          console.log("Excellent performance");
      }
      else{
        console.log("fail");
      }

      // DataTypes
      // String
      var name="agalya";
      console.log(typeof(name));
      // number
      var num="10"+5;
      console.log(num);

      var num=10+5;
      console.log(num);

      // boolean
      var boolean=(100==100);
      console.log(boolean)

      // undefined
      var z;
      console.log(z)

      // null

      var val= null;
      console.log(val)

      // Array Desturucturing

      // let Name= ["Agalya", "Sowmiya", "Nila", "Keerthi", "Tamil"];
      // const[first,second,third,fourth,fifth]=Name;
      // console.log(first);


      // for loop

      for(count=1;count<=20;count=count+1)
        {
            console.log("agalya")
        }
        // reverse number

      for(let count=15;count >= 1;count--)
        {
            console.log(count)
        }
    


//Array  Destructuring Method:

const fruits = ['Apple', 'Banana', 'Cherry'];
const [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit); 
console.log(secondFruit); 
console.log(thirdFruit); 
 

 //for loop
 for(let i=0;i<5;i++)
  console.log(i);

 //for in loop
//  object method:
 const person = {name: 'Agalya', age: 20, place: 'Thanjavur' };
for (let key in person) {
  //concat method
    console.log(key + ': ' + person[key]);
}

// //Array Method:
let colors = ['red','green','black'];

for(let key in colors){
  console.log(colors [key]);
}

// for of method:
// for(let color of colors){
//   console.log("color:"+ color);
// }

//while loop
let i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

//do while
// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);


//break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
      break; 
  }
  console.log(i);
}

//continue
for (let i = 0; i < 5; i++) {
  if (i === 2) {
      continue; 
  }
  console.log(i);
}

// Bitwise operators
var a =5;
var b= 3;

// And&
var resadd=a & b;
console.log(resadd);

// or|
var resor=a | b;
console.log(resor);

// not ~
var resnot=~(a>b);
console.log(resnot);

// Xor ^
var resxor=a ^ b;
console.log(resxor);

// left shift <<
var num1=5;
var num2=1;
var lshift=num1<<num2;
console.log(lshift);

// Right shift >>
var num1=5;
var num2=1;
var Rshift=num1>>num2;
console.log(Rshift);

// zero-fill right shift >>>
var num1=5;
var num2=1;
var Zrshift=num1>>>num2;
console.log(Zrshift);

// Array methods

//  Array Values
let vegetables =["carrot","onion","chilly","cabbage"]
console.log(vegetables[0]);

// Array length
var veg1=["carrot","onion","chilly","cabbage"]
console.log(veg1.length);

// Array Reverse
var veg1=["carrot","onion","chilly","cabbage"]
var reversedVeg=veg1.reverse();
console.log(reversedVeg);

// Array sort
var veg1=["carrot","onion","chilly","cabbage"]
var sortedVeg=veg1.sort();
console.log(sortedVeg);

// Array at
var veg1=["carrot","onion","chilly","cabbage"]
var atVeg=veg1.at(2);
console.log(atVeg);

// Array fill
var veg1=["carrot","onion","chilly","cabbage"]
veg1.fill("potato", 2, 4); 
console.log(veg1);  

// Array from
const nums = [1, 2, 3, 4];
const squared = Array.from(nums, x => x * x);
console.log(squared); 

// Array join
    var veg1 = ["Carrot", "Onion", "Cabbage"];
    var vegString = veg1.join("*");
    console.log(vegString);

//  Array tostring
 var numbers = ["Agalya"];
 var numstring = numbers.toString();
 console.log(numstring);

// Array pop
    var veg2 = ["Carrot", "Onion", "chilly","Cabbage"];
    var vegpop = veg2.pop();
    console.log(veg2);

    // Array push
    var vegpush = ["Carrot", "Onion", "chilly","Cabbage"];
    var vegpush1 = vegpush.push("tomato");
    console.log(vegpush);

    // Array shift
    var veg3 = ["Carrot", "Onion", "chilly","Cabbage"];
    var vegshift = veg3.shift("");
    console.log(veg3);

    // Array unshift
    var veg4= ["Carrot", "Onion", "chilly","Cabbage"];
    var vegunshift= veg4.unshift("ginger");
    console.log(veg4);

    // Array forEach
    var vegetable= ["Carrot", "Onion", "chilly","Cabbage"];
    vegetable.forEach(function(veg){
      console.log(veg);
    });

    // Array copyWithIn
    let arrnum = [1, 2, 3, 4, 5];
    arrnum.copyWithin(2,4);
    console.log(arrnum);

    // Array concat
    var vegetable1= ["Carrot", "Onion", "chilly","Cabbage"];
    var vegetable2= ["beetroot", "tomato", "potato"];
    var vegetablesadd=vegetable1.concat(vegetable2);
    console.log(vegetablesadd);

    // Array splice
    var vegetable1= ["Carrot", "Onion", "chilly","Cabbage"];
    vegetable1.splice(2, 0, "tomato", "potato");
    console.log( vegetable1); 

    // Array some
    let some=[1,2,3,4,5,6,7,8,9];
    let someresult = some.some (num=>num > 3);
    console.log(someresult);

    // Array slice
    var vegetable1= ["Carrot", "Onion", "chilly","Cabbage"];
    vegetable1.splice(2,4);
    console.log( vegetable1); 

    // Array flat
    var vegetable1= ["Carrot", ["Onion", "chilly"],[ "tomato", "potato"],"Cabbage"];
    let flatvegetables =  vegetable1.flat();
    console.log( flatvegetables); 

    // Array lastIndexOf
    var vegetable1= ["Carrot", "Onion", "chilly","onion","Cabbage"];
    let lastIndex =vegetable1.lastIndexOf("onion");
    console.log(lastIndex);

    // Array of
    let singleElementArray = Array.of("Agalya");
    console.log(singleElementArray); 

    // Array every
    let ages = [19, 18, 20,13];
    let ageresult = ages.every(function(age) {
    return age >= 18;
  });
  console.log(ageresult); 

  // Array findIndex
  var vegetable1= ["Carrot", "onion", "chilly","onion","Cabbage"];
  let longIndex = vegetable1.findIndex(function(findveg) {
    return findveg.length > 6;
});
console.log(longIndex); 

// Array find
var vegetable1= ["Carrot", "onion", "chilly","onion","Cabbage"];
let findIndex = vegetable1.find(function(findveg) {
  return findveg.length > 5;
});
console.log(findIndex); 

// Array includes

var veginclude= ["Carrot", "onion", "chilly","Cabbage"];
let val1 =  veginclude.includes("onion");
console.log(val1); 

let val2 = veginclude.includes("ginger");
console.log(val2); 

// Array entries
var arrent= ["Carrot", "onion", "chilly","Cabbage"];
let iterator = arrent.entries();
for (let [index, element] of iterator) {
    console.log(index, element);
}

// Array reduce
let arrreduce = [1, 2, 3, 4];
let sum = arrreduce.reduce(function(accumulator, currentValue) {
   return accumulator + currentValue;
}, 0);
console.log(sum); 

// Array reduceRight

var words= ["Carrot", "onion", "chilly","Cabbage"];
let sentence = words.reduceRight(function(accumulator, currentValue) {
    return accumulator + " " + currentValue;
});
console.log(sentence); 

// Array filter
let arrfilter= [1, 2, 3, 4, 5, 6];
let evenNumbers = arrfilter.filter(function(num) {
    return num % 3 === 0; 
});
console.log(evenNumbers); 

// Array isArray
let notArray = ["This is a string"];
console.log(Array.isArray(notArray)); 

// Array map
let arrmap = [1, 2, 3, 4];
let squares = arrmap.map(function(nummap) {
    return nummap * nummap; 
});
console.log(squares); 

// Array keys
let animals = ["dog", "cat", "fish","cow", "goat", "lion"];
let keys = Array.from(animals.keys());
console.log(keys); 















  

