function AddCompany() {
    return (
        <form>
            <input
                className="text-black"
                type="text"
                value='usuario'
                name="Username"
                placeholder="Username"
            />
            <input
                className="text-black"
                type="password"
                value='password'
                name="Password"
                placeholder="Password"
            />
            <button type="submit">Crear post</button>
        </form >
    )
}

export default AddCompany;