/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

function AddCompany() {

    return (
        <form
            className="text-black"
        >
            <select name="company">
                <option value="">--Please choose an option--</option>
                <option value="Capgemini">Capgemini</option>
                <option value="NttData">NttData</option>
                <option value="Amazon">Amazon</option>
                <option value="Google">Google</option>
            </select>
            <textarea placeholder="Description" name="description" rows={4} cols={43} />
            <input
                className="text-black"
                type="text"
                name="image"
                placeholder="Image"
            />
            <select name="country">
                <option value="">--Please choose an option--</option>
                <option value="España">España</option>
                <option value="Francia">Francia</option>
                <option value="Italia">Italia</option>
                <option value="Dinamarca">Dinamarca</option>
            </select>
            <select name="city">
                <option value="">--Please choose an option--</option>
                <option value="Valencia">Valencia</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Madrid">Madrid</option>
                <option value="Aarhus">Aarhus</option>
            </select>
            <select name="experience">
                <option value="">--Please choose an option--</option>
                <option value="Junior">Junior</option>
                <option value="Mid">Mid</option>
                <option value="Senior">Senior</option>
            </select>
            <textarea placeholder="Questions" rows={4} cols={43} />
            <button type="submit">Crear post</button>
        </form >
    )
}

export default AddCompany;