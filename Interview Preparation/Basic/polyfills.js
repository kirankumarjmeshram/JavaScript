//map polyfill
let array = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (cb) {
    let temp = [];
    for(let i=0;i<this.length;i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp;
}
let newArray = array.myMap((el)=>el*2) ;
console.log(newArray);//[ 2, 4, 6, 8, 10 ]

// filter polyfill
Array.prototype.myFilter = function(cb) {
    let temp = [];
    for(let i=0; i< this.length ; i++) {
        if(cb(this[i],i,this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

let newFilterArray = array.myFilter((el)=>el>3) ;
console.log(newFilterArray);//[ 4, 5 ]

// reduce polyfill
Array.prototype.myReduce = function(cb,initialValue) {
    let accumulator = initialValue;
    for(let i=0; i< this.length; i++){
        accumulator = accumulator?cb(accumulator,this[i], i , this) : this[i]
    }
    return accumulator;
}


let newReduceArray = array.myReduce((a,b)=> a+ b, 0) ;
console.log(newReduceArray);//15