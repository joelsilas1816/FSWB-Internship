//creating objects by the literal notation

console.log(this) //points to the parent object

let age = 12

let obj = {
    name : "JOel" ,
    age : 21 ,
    func1 : () => {
        console.log("Hello World")
        return this
    } ,

    func2 : function () {
        console.log(name + " " + age)
    }
    ,

    func3 : function () {
        console.log(this.name ,  this.age)  //works
    }
    ,

    func6 : () =>{
    //  /*2 , Now */   let age = 99;     //1st searches within its own scope and then global scope outside the object
     /*1*/   console.log("My age is " , age)      //prints 12 and not 21 since it searches for the variable firstly within its own scope and if not found it searches outside its current object
    }
 ,

 func7 : () =>{
       console.log("My age is " , obj.age)    //works | prints the value of the key age of the obj object 
       console.log("My age is " , this.age)       
    }
 ,
    func4 : function(x,y,z){
        console.log(x + y + " " + x + y + " " + (x + y) + z)     //Same as println in java
        return this
    },

    func5 : function(){
        console.log(this) //this refers to the current onject ie. obj object
        return this
    }
}

console.log(obj.name)
console.log(obj.age)
obj.func1()

console.log("on return " , obj.func1())
// obj.func2();    // not allowed to access name and age
// obj.func3();  // not allowed to access name and age
obj.func4(2,3, "test");

console.log(obj.func4(-1,-1, "retrun this from not the last function definition"))

console.log("separation")
console.log(obj) 

obj.func5() 
console.log(obj.func5())

obj.func6()
obj.func7()

obj.func3()