/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
interface Credentials {
    username: string;
    password: string;
}

const login = async (credentials: Credentials) => {
    try {
        const res = await fetch(`https://devq-backend.onrender.com/devq/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        });

        if (!res.ok) {
            throw new Error('Error en la petición');
        }

        const data = await res.json();
        return data;

    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default login;
