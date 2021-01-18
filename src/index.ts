
import 'reflect-metadata'
import { connectDatabase } from './config/typeorm';
import { startServer } from "./server";

async function main(){
    connectDatabase();
    const app  = await startServer();
    app.listen(3002);
    console.log('server on 3002');
}

main();
 
 