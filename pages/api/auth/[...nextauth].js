import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
       CredentialsProvider({
            async authorize(credentials){
                const client = await connectToDatabase();
                const usersCollection = client.db().collection('users');
                const user = await usersCollection.findOne({email: credentials.email});
                
                if(!user){
                    client.close();
                    throw new Error('No user found!');
                }

                const isValid = await verifyPassword(credentials.password, user.password);
                if(!isValid){
                    client.close();
                    throw new Error('Wrong password');
                }

                client.close();


                return {email: user.email};
            }
        }),

        GoogleProvider({
            clientId: "881876138701-7dcu2mpq43ptstp8mnv570inoq03r6m0.apps.googleusercontent.com",
            clientSecret: "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",
            authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
        }),

        FacebookProvider({
            clientId: '3024242071225184',
            clientSecret: '6763e7808d62b62aeeead48efc1eab20',
        }),
    ],
    callbacks: {

        async jwt(token, account) {
    
          if (account ?.accessToken) {
    
            token.accessToken = account.accessToken
    
          }
          return token;
    
        }
    },
    redirect: async (url, _baseUrl)=>{

        if (url === '/user') {
          return Promise.resolve('/')
        }
  
        return  Promise.resolve('/')
  
      }
});