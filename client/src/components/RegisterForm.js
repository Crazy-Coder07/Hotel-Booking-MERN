const registerForm = ({
    handleSubmit,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
}) => {
    return (
        <form onSubmit={handleSubmit} className='mt-3'>

            <div className="form-group mb-3">
                <label className='form-label'>Your Name</label>
                <input
                    type="text"
                    className='form-control'
                    placeholder='Enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group mb-3">
                <label className='form-label'>Enter Email</label>
                <input
                    type="email"
                    className='form-control'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="form-group mb-3">
                <label className='form-label'>Enter Password</label>
                <input
                    type="password"
                    className='form-control'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button 
               className='btn btn-primary'
               disabled={!name || !email||!password}
             >
                Submit
            </button>

        </form>
    )
};
export default registerForm;