[![Coverage Status](https://coveralls.io/repos/github/ashili/jsCalc/badge.svg?branch=main&kill_cache=1)](https://coveralls.io/github/ashili/jsCalc?branch=main&service=github)


[![Build Status](https://travis-ci.com/ashili/jsCalc.svg?branch=main)](https://travis-ci.com/ashili/jsCalc)
# jsCalc
IS219 1st project

###Direction:

-1 Clone repo

in the terminal type:
~~~bash
git clone https://github.com/ashili/jsCalc.git
~~~

-2 cd into repo
~~~bash
cd jsCalc
~~~

-3 run "npm install"
~~~bash
npm install
~~~





**<h1 align="center"> OOP (Object-Oriented Programming) </h1>** 




Object-oriented programming is a programming paradigm centered around object rather than functions.
It has been around since the 70's. Many programming languages adopted OOP like c#, java, Python, Ruby... 
Even some frameworks are designed with oop concept in mind such us Angular.


As a developer oop consist a great tool that make him/her stands out in job interviews.
we use objects in coding without even noticing.



~~~javascript
const s = "Hello World";
console.log(s.toLowerCase());
console.log(typeof (s));


//even when s is a string (primitive), it is basically an object (implicitly)and toLowerCase() is a method of that object
~~~
output
~~~bash
hello world
string
~~~

to proof that, let us use string as an object explicitly

~~~javascript
const s = new String("Hello World");
console.log(s.toLowerCase())
console.log(typeof (s));
~~~
output
~~~bash
hello world
object
~~~

have you noticed that console is an object and .log() is a method of that console object as well?

OOP is based on 4 pillars:

<h3>1- Abstraction:</h3>

Imagine you bought a car to drive, and you press the brake to stop it at a red light, do you really need to know how the brake system is working or what the engine does while stopped at the red light?

in the cae of a calculator, there is a complex way to find a solution for square root of a number, but as a user, you don't care about the hidden details and just care about the correct result.
the encapsulation is hiding a form of trust between the creator and the user of the function.

Benefits of Abstraction:
* **Ease of use**: no need to know all the details of the functions to use them
* **Update Proof**: the object will behave the same even if the functions are refactored or updated

<h3>2- Encapsulation:</h3>


the term itself means to enclose things in a capsule. in other words, if you notice that many things can go together, you can encapsulate them in 1 enclosure.
in coding, if you notice that many variables and functions are related to a common bigger concept, you can add them all together in 1 object. the variable will become properties, and the functions will be called methods.


<p align="center" style="margin: 5px;">
  <img  src="./images/encapsulation.png" alt="encapsulation example" >
</p>
in the case of the code uin this repo, the calculator class will encapsulate all necessary and related methods and properties in it so when you create an instance of the calculator , you will have access to all related functions that are useful to you.

encapsulation will help create function that has no parameters as the parameters are simply  properties of the object instantiated.  as Robert Cecil Martin, colloquially called "Uncle Bob", said  
> > "The best functions are those with no parameters"



<h3>3- Inheritance:</h3>

inheritance allows us to avoid to type redundant code. 
it is basically a parent-child relation where the child class inherit from the parent class.

In our case the statistics calculator will inherit all the functionality of the basic calculator to add more features and functionality to it.

~~~javascript
class Calculator{
    
    constructor(a,b){
    }
    
    sum(){
        return this.a + this.b;
    }
}
~~~


~~~javascript
class StatCalculator extends Calculator {
    
    constructor (x,y) {
        super(x, y);
    }
}
~~~

In this case statCalculator class will inherit the sum function.



<h3>4- Polymorphism:</h3>


Poly means Many and Morph means shape. It allows us to get rid of long code and many if statement or switches in our code.
this feature is helpful in explicit and strongly typed languages (like C++, java...) that when you declare a variable, you need to preceded it with its type whether int, float, double, char...
let us assume the function sum () takes only integer so if I input a char or float , it will fail. polymorphism is a way to avoid that failure.



<h1 align="center"> S.O.L.I.D. </h1> 


<h3>1- S – Single Responsibility Principle:</h3>

each function should be responsible for one and only one responsibility.
in the code in this repo each simple operation like sum, product ... is in a separate function and even in a separate file.

~~~javascript
function Sum(a,b){
    return a + b;
}
~~~

sum is a very simple function which will make it error proof and easy to read or debug.
longer and complex functions are harder to maintain.
Solid design is shown in the naming of functions as the reading the name of the function should show no more than 1 responsibility. 



<h3>2- O – Open-Closed Principle:</h3>

Software elements (classes,modules,functions, etc...) should be open for extension but closed for modification.
it sounds confusing:confused:. I know.

this means that you can build classes in a way that you can extend them via inheritance and child classes, but the parent class that you have created should not be modified.

<h3>3- L – Liskov Substitution Principle:</h3>

this principle doesn't apply to all object-oriented languages like python or ruby but mainly has impact the languages that more of a statically typed languages like java.
Liskov Substitution Principle is the ability to replace any instance of a parent class with an instance of one of its child classes without negative side effects.

~~~javascript
class Calculator{
    calculationsLog = []
    
    constructor(a,b){
    }
    
    sum(){
        return this.a + this.b;
    }
}
~~~


~~~javascript
class StatCalculator extends Calculator {
    
    constructor (x,y) {
        super(x, y);
    }
}

~~~

in this case calculationsLogs is an array, but I can make it dictionary using the Liskov Substitution Principle.


    
<h3>4- I – Interface Segregation Principle:</h3>
what is an interface? An interface is a syntactical contract that an entity should conform to.

Code should not be forced to depend on the methods that it doesn't use.

when it inherits from a parent class,the child class should not inherit classes that it doesn't use. 







<h3>5- D – Dependency Inversion Principle:</h3>

it means that high level objects should not depend on low level implementation. In other words this principle is close to the facade pattern or adapter pattern where you create a wrapper that separate the high level code to do the job of low level code.
if you have an ecommerce site and what to use stripe API or paypal API , you can create a payment processor that takes care of the payment instead of adding that responsibility to you. so like that you separate the high code from doing low level code.



**<h1 align="center"> Design Patterns</h1>** 


They are general and reusable solutions to common problems, not a finished solution
They are not algorithms.

They started in architecture (buildings)
In coding, the famous GoF (Gang of Four) in 1994

###Benefits:

>- They give our profession a shared language.
>- Help avoid re0inventing constantly.
>- Provide a starting point for a solution.
>- Speed up production.
>- Improves system and application design.
