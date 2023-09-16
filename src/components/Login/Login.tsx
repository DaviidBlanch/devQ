/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import loginService from "../../services/login";
import { useEffect, useState } from "react";
import { useAuth } from "../../useContext/AuthProvider";
import Profile from "../Profile/Profile";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { user, login } = useAuth()

    useEffect(() => {
        const user = window.localStorage.getItem('user')
        if (user) {
            login(JSON.parse(user))
        }
    }, [])

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const usuario = await loginService({
                username,
                password
            })

            window.localStorage.setItem('user', JSON.stringify(usuario))

            login(usuario)
            setUsername('');
            setPassword('');
        } catch (e) {
            console.log(e)
        }
    }

    const renderLoginForm = () => (
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
    )

    return (
        <>
            {
                user
                    ? <Profile/>
                    : renderLoginForm()
            }
        </>
    );
};

export default Login;