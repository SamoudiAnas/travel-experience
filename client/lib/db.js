import { MongoClient } from 'mongodb';

export async function connectToDatabase(){
    const client = await MongoClient.connect('mongodb+srv://amine_elkhalidy:z0lvuIc7H5LYxzt2@cluster-0.tq4ve.mongodb.net/authenticationDatabase?retryWrites=true&w=majority');
    return client;
}