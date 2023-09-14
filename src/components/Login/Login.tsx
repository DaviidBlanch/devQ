/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CloseIcon } from "../../assets/Icons";
import loginService from "../../services/login";
import { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState([]);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const usuario = await loginService({
                username,
                password
            })
            setUser(usuario)
            setUsername('');
            setPassword('');
        } catch (e) {
            console.log(e)
        }
    }

    console.log(user)

    return (
        <>
            <button
            >
                <CloseIcon />
            </button>
            <form onSubmit={handleLogin} >
                <input
                    className="text-black"
                    type="text"
                    value={username}
                    name="Username"
                    placeholder="Username"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value) }}
                />
                <input
                    className="text-black"
                    type="password"
                    value={password}
                    name="Password"
                    placeholder="Password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }}
                />
                <button type="submit">Login</button>
            </form >
        </>
    );
};

export default Login;