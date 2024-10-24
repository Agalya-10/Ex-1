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

      // form
      function MyButton(event) {
        event.preventDefault(); 
        let userName = document.getElementById('userName').value;
        let password = document.getElementById('password').value;
        console.log("Username: ", userName);
        console.log("Password: ", password);

        // displyed UI page
        let outputText = `<h2>Details</h2>
        <p><b>Username:</b> ${userName}</p>
        <p><b>Password:</b> ${password}</p>`;
        document.getElementById('output').innerHTML = outputText;
        output.style.paddingLeft="15rem";
      }


      

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
