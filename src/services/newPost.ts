/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

interface CompanyData {
    company: string;
    description: string;
    image: string;
    country: string;
    city: string;
    experience: string;
    questions: string[];
}


export const postCompany = async (companyData: CompanyData) => {
    const userString = window.localStorage.getItem('user');

    if (!userString) {
        throw new Error('Token no está definido. Asegúrate de llamar a setToken antes de realizar la solicitud.');
    }

    const { token } = JSON.parse(userString);
    console.log(JSON.stringify(companyData))

    if (!token) {
        throw new Error('Token no está definido. Asegúrate de llamar a setToken antes de realizar la solicitud.');
    }

    const response = await fetch('https://devq-backend.onrender.com/devq/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(companyData)
    });

    if (!response.ok) {
        throw new Error('Error en la petición');
    }

    const responseData = await response.json();

    return responseData;
}