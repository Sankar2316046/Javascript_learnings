//api are used to get data from server via endpoint(url)
//json => javascript object notation is an array of objects

//using promise

fetch("https://fakestoreapi.com/users")// fetch from endpoint "users"
  .then((response) => { // if response is found
    if( !response.ok ){ // check endpoint is valid
        throw new Error( "Data Not Found" )
    }
    return response.json();// return json data of response
  })
  .then((data) => {
    console.log(data);//print json
  })
  .catch( (error)=>{  
    console.log( error.message );
   } )

//using async-await

async function fetchData(){

    try{

       let responce = await fetch("https://fakestoreapi.com/users")

       if( !responce.ok ){
          throw new Error( "Data Not found" )
       }
        let data = await responce.json()   
        console.log("First data from api =>");
        console.log( data[0] ); //printing first data     
    }
    catch(error){
        console.log( error.message );
        
    }

}
fetchData()