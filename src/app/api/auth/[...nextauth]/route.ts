import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider( {
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const res = await fetch('https://www.melivecode.com/api/login',{
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: { 'Content-Type' : 'application/json'}
                })
                const response = await res.json()


                if (response.status === 'ok' ){
                    response.user.image = response.user.avatar
                    response.user.name = response.user.fname
                    return response.user
                }

                return null

            }
        }),
    ],
    pages: {
        signIn: 'signin'
    }
})

export {handler as GET , handler as POST }