// to simplify promises we use asyn await

let newPromise = new Promise( (resolve, reject)=>{
    let dataRecieved = true;
    if(dataRecieved){
        resolve("Data Fetched Successfully")
    }
    else{
        throw new Error( "Failure" )
    }
}  )

// when using await use async function
async function executePromise(){
    try{
        let message = await newPromise;
        console.log( message );
        
    }
    catch(error){
        console.log( error.message  );
    }
    finally{
        console.log( "End" );  
    }
}

executePromise();
console.log( "Last" );
/* always async functions executted only 
after normal synchronous codes executted */