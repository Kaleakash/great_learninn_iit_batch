// ES5 style 
var obj1  = new Promise(function(resolved,rejected){
    //resolved("done"),
    rejected("Error")
})

obj1.then(function(data){
    console.log("Then "+data)
}).catch(function(error){
    console.log("Error "+error)
});
//ES6 style 

let obj2 = new Promise((resolved,rejected)=> {
    rejected("Error Generated");
})

obj2.then(data=>console.log("then "+data)).catch(error=>console.log("Error "+error));