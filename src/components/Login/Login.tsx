import loginService from "../../services/login";
import { useState } from "react";
import { useAuth } from "../../useContext/AuthProvider";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { user, login } = useAuth()

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
        <form
            onSubmit={handleLogin}
            className="max-w-sm mx-auto mt-20 p-8 rounded-lg shadow-lg border-solid border-[1px] border-[#121212b0]"
        >
            <fieldset className="mb-4">
                <label className="block text-white font-semibold mb-2">Nombre de usuario</label>
                <input
                    className="w-full px-3 py-2 rounded border-[1.5px] border-gray-600 bg-[#121212] text-white"
                    type="text"
                    value={username}
                    name="Username"
                    placeholder="Nombre de usuario"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setUsername(e.target.value);
                    }}
                />
            </fieldset>
            <fieldset className="mb-4">
                <label className="block text-white font-semibold mb-2">Contraseña</label>
                <input
                    className="w-full px-3 py-2 rounded border-[1.5px] border-gray-600 bg-[#121212] text-white"
                    type="password"
                    value={password}
                    name="Password"
                    placeholder="Contraseña"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPassword(e.target.value);
                    }}
                />
            </fieldset>
            <button
                type="submit"
                className="w-full py-2 bg-[#0d363f] text-white font-semibold rounded-full transform transition-transform hover:scale-105"
            >
                Iniciar sesión
            </button>
        </form>

    )

    return (
        <>
            {!user && renderLoginForm()}
        </>
    );
};

export default Login;