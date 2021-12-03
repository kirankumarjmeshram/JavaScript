//get details of any perticular result
//1. userName (argument)
//2. api call to github


async function getData(user){

    try{
        let response = await fetch(`https://api.github.com/${user}`);
        let  data =await response.json()
        return data;
    

    }
    catch(err){
console.log("err: ",err)
    }
}

export default getData