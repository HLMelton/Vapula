import express, {Request, Response} from 'express';
import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const connectionString = process.env.DATABASE_URL || '';
const connection = mysql.createConnection(connectionString);
connection.connect();

app.get('/api/items', (req: Request, res: Response) =>{
    const query = 'SELECT * FROM Items';
    connection.query(query, (err, rows) => {
        if(err) throw err;
        
        return res.send(rows);
    })
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("App running")
}) 
