import {createConnection} from 'typeorm';
import path from 'path' 

export async function connectDatabase() {
    await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'db_grphql',
        entities:[
            path.join(__dirname, '../entity/**/**.ts')
        ],
        synchronize: true
    });

    console.log('Database is connected...');
}