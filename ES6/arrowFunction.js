
function test(){
    console.log('Hello World');
}

let test = function () {
    console.log('Hello World');
}

//arrow function
let test = ()=>{
    console.log('Hello World');
}
//both are same
// double =(x)=>{
//     return x*2
// }

// function double(x){
//     return x*2
// }



//arrow functions are lightweight functions
//cannot acces this. property


// var myobj ={
//     i:10;
//     b:()=>console.log(this.i,this),//arrow functions
//     c:function(){
//         console.log(this.i,this);
//     }//normal function
// }

// myobj.b();//prints undefined, Window{...} (or the global object)
// myobj.c();//prints q0,Object{....}