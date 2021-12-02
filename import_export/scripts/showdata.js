//logical reusibility

//1. getData (fetch,url) => get the data
//2. appendData (data,location) => append data in location

//electronics,jewellery (url will vary)

//use promice to get result fast
async function getData(url){

    try{
        let res = await fetch(url)

        let data = await res.json();
        return data
        }


        catch(err){
            console.log("err: ",err)
        }
    }

function appendData(data, location){
    data.forEach((el)=>{
        let div = document.createElement("div");
        let p = document.createElement("p");
        let img = document.createElement("img");

        img.src = el.image;
        p.innerText = el.title;
        div.append(img,p);
        location.append(div)
    });
}

//object=>{}
//u can also export var num obj etc
export {getData,appendData}