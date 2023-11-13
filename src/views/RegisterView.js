function RegisterView() {
    return (
        <main className="auth-main">
            <section className="container p-5 d-flex justify-content-center align-items-center">
                <div className="border border-light rounded p-5">
                    <form>
                        <div className="text-center mb-4">
                            <h2 className="text-white">Crear cuenta</h2>
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label text-white" htmlFor="inputName">Nombre</label>
                            <input type="text" id="inputName" className="form-control" />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label text-white" htmlFor="inputEmail">Correo electrónico</label>
                            <input type="email" id="inputEmail" className="form-control" />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label text-white" htmlFor="inputPassword">Contraseña</label>
                            <input type="password" id="inputPassword" className="form-control" />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label text-white" htmlFor="registerRepeatPassword">Repetir contraseña</label>
                            <input type="password" id="registerRepeatPassword" className="form-control" />
                        </div>

                        <div className="form-outline text-center mb-4">
                            <button type="submit" className="btn btn-success">Crear cuenta</button>
                        </div>

                        <div className="text-center">
                            <p className="text-white">¿Ya tienes una cuenta? <a href="#" className="text-white"><strong>Inicia sesión</strong></a></p>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default RegisterView;