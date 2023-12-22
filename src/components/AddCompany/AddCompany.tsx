import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postCompany } from "../../services/newPost";
import { PlusIcon } from "../../assets/Icons";
import { countries } from "../countries.d";
import { cities } from "../cities.d";

interface CompanyData {
    company: string;
    description: string;
    image: string;
    country: string;
    city: string;
    experience: string;
    questions: string[];
}

function AddCompany() {

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: postCompany,
        onMutate: async (newCompany) => {
            await queryClient.cancelQueries(['companies'])
            const previousCompany = queryClient.getQueryData(['companies'])
            await queryClient.setQueryData(['companies'], (oldData?: CompanyData[]) => {
                if (oldData == null) return [newCompany]
                return [...oldData, newCompany]
            })
            return { previousCompany }
        },
        onError: (context) => {
            if (context?.previousCompany !== null) {
                queryClient.setQueryData(['companies'], context?.previousCompany)
            }
        },
        onSettled: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['companies']
            })
        }
    })

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        if (mutation.isLoading) return
        if (mutation.isError) return (<div>An error occurred</div>)

        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const company = formData.get('company')?.toString() ?? ''
        const description = formData.get('description')?.toString() ?? ''
        const image = formData.get('image')?.toString() ?? ''
        const country = formData.get('country')?.toString() ?? ''
        const city = formData.get('city')?.toString() ?? ''
        const experience = formData.get('experience')?.toString() ?? ''
        const questions = formData.get('questions')?.toString() ?? ''

        if (company !== '' && description !== '' && image !== '' && country !== '' && city !== '' && experience !== '' && questions !== ''
        ) {
            mutation.mutate({ company, description, image, country, city, experience, questions: [questions] });
        }
    };

    return (
        <form
            className="max-w-sm mx-auto p-8 rounded-lg shadow-lg border-solid border-[1px] border-[#121212b0]"
            onSubmit={handleSubmit}
        >
            <fieldset className="mb-4">
                <label className="block text-white font-semibold mb-2">Empresa</label>
                <select
                    name="company"
                    className="w-full px-3 py-2 rounded border-[1.5px] border-gray-600 bg-[#121212] text-white"
                >
                    <option value="Capgemini" defaultChecked>Capgemini</option>
                    <option value="NttData">NttData</option>
                    <option value="Amazon">Amazon</option>
                    <option value="Google">Google</option>
                </select>
            </fieldset>
            <fieldset className="mb-4">
                <label className="block text-white font-semibold mb-2">Descripción</label>
                <textarea
                    rows={4}
                    cols={43}
                    className="w-full px-3 py-2 rounded border-[1.5px] border-gray-600 bg-[#121212] text-white"
                    name="description"
                    placeholder="Breve descripción de la empresa"
                />
            </fieldset>
            <fieldset className="mb-4">
                <label className="block text-white font-semibold mb-2">Imagen</label>
                <input
                    className="w-full px-3 py-2 rounded border-[1.5px] border-gray-600 bg-[#121212] text-white"
                    type="text"
                    name="image"
                    placeholder="Imagen"
                />
            </fieldset>
            <fieldset className="mb-4">
                <label className="block text-white font-semibold mb-2">País</label>
                <select
                    name="country"
                    className="w-full px-3 py-2 rounded border-[1.5px] border-gray-600 bg-[#121212] text-white"
                >
                    {countries.map((country) => (
                        <option key={country.code} value={country.label}>{country.label}</option>
                    ))}
                </select>
            </fieldset>
            <fieldset className="mb-4">
                <label className="block text-white font-semibold mb-2">Ciudad</label>
                <select
                    name="city"
                    className="w-full px-3 py-2 rounded border-[1.5px] border-gray-600 bg-[#121212] text-white"
                >
                    {
                        cities.map((city) => (
                            <option key={city.id} value={city.name}>{city.name}</option>
                        ))
                    }
                </select>
            </fieldset>
            <fieldset className="mb-4">
                <label className="block text-white font-semibold mb-2">Experiencia</label>
                <select
                    name="experience"
                    className="w-full px-3 py-2 rounded border-[1.5px] border-gray-600 bg-[#121212] text-white"
                >
                    <option value="Junior" defaultChecked>Junior</option>
                    <option value="Mid">Mid</option>
                    <option value="Senior">Senior</option>
                </select>
            </fieldset>
            <fieldset className="mb-4">
                <label className="block text-white font-semibold mb-2">Preguntas</label>
                <input
                    className="w-full px-3 py-2 rounded border-[1.5px] border-gray-600 bg-[#121212] text-white"
                    type="text"
                    name="questions"
                    placeholder="1ra pregunta"
                />
            </fieldset>
            <div className="flex justify-center">
                <button
                    className="mb-4 p-2 bg-[#121212] text-white font-semibold rounded-full transform transition-transform hover:scale-105"
                    type="button"
                >
                    <PlusIcon />
                </button>
            </div>
            <button
                disabled={mutation.isLoading || mutation.isError}
                type="submit"
                className="w-full py-2 bg-[#0d363f] text-white font-semibold rounded-full transform transition-transform hover:scale-105"
            >
                {mutation.isLoading ? 'Enviando...' : 'Crear post'}
            </button>
        </form >
    )
}

export default AddCompany;