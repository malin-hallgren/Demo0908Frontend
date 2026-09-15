import {useState} from 'react';
import {loginWithCookie} from '../services/AuthService'

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        console.log(password)
        await loginWithCookie(email, password);
        console.log("Logged in!");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value) } placeholder="Password" />

            <button type="submit">Login</button>
        </form>
    )
}