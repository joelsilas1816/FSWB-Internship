// console.log("Message");
// console.warn("Warning");
// console.error("HO");

// var a = ["abc" , "good" , 1 , -3.12]

// console.log("Hello " + typeof a);

var arr=["one","two","three"]

var list = document.querySelector("#uni")

for (var i = 0; i<arr.length ; i++){
    var listitem = document.createElement('li');
    var txt = document.createElement(arr[i]);
    listitem.appendChild(txt);
//     list.appendChild(listitem);
}

console.log(arr)
console.log(list)
console.log(listitem)
console.log(txt)
// console.log(typeof arr)
// console.log(typeof list)
// console.log(typeof listitem)
// console.log(typeof txt)



