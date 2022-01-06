import {connectToDatabase} from '../../../lib/db'
import { hashPassword } from '../../../lib/auth';

export default async function handler(request, response){
    if(request.method === 'POST'){
        const data = request.body;
        const {name, email, password} = data;

        if(!name || !email || !email.includes('@') || !password || password.trim().length < 7){
            response.status(422).json({message: 'Invalid Input - password should also be at least 7 characters!'});
            return ;
        }

        const hashedPassword = await hashPassword(password);
        const client = await connectToDatabase();
        const db = client.db();

        const existingUser = await db.collection('users').findOne({email: email});
        if(existingUser){
            response.status(422).json({message: 'User already exists with the same email'});
            client.close();
            return;
        }

        const result = await db.collection('users').insertOne({
            name: name,
            email: email,
            password: hashedPassword
        });
        console.log(result);
        response.status(201).json({message: 'User Created Successfully!'});
        client.close();
    }
    
}

