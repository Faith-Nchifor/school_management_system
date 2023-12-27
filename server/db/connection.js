const {MongoClient} = require('mongodb')

const uri= `${process.env.uri}?retryWrites=true&w=majority`

async function main(){
    client = new MongoClient(uri)
    try{
        
        await client.connect()

        
    }
    catch (ex){
        console.log(ex);
    }
    finally{
        await client.close()
    }
   
}

// main.catch(console.error)


// main()