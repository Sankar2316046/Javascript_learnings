//a JavaScript Promise represents an action that will complete in the future. 

let newPromise = new Promise( (resolve, reject)=>{

    let dataRecieved = true;

    if(dataRecieved){// if datarecieved then resolve is called
        resolve( "Data Recieved" )
    }
    else{// if it is false then reject is called
        reject( "Data Not Recieved" )
    }

} )

// .then =>resolve function
// .catch =>reject function
// finally runs everytime
newPromise
.then( ( message )=>{
    console.log( "Succes: " + message  );
} )
.catch( (error)=>{
    console.log( "Failure: " + error );
} )
.finally( ()=>{
    console.log( "End" );
} )
