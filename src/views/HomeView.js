import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function HomeView() {
    const navigate = useNavigate();
    const [showModalCrearProyecto, setShowModalCrearProyecto] = useState(false);
    const [showModalEditarProyecto, setShowModalEditarProyecto] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token-manage-projects');

        if (!token) {
            navigate('/login');
        }
    }, []);

    const buttonShowModalCreateClicked = () => {
        setShowModalCrearProyecto(true);
    };

    const buttonCloseModalCreateClicked = () => {
        setShowModalCrearProyecto(false);
    };

    const buttonSaveModalCreateClicked = () => {
        alert("Elemento nuevo guardado");
    };

    const buttonShowModalEditClicked = () => {
        setShowModalEditarProyecto(true);
    };

    const buttonCloseModalEditClicked = () => {
        setShowModalEditarProyecto(false);
    };

    const buttonSaveModalEditClicked = () => {
        alert("Elemento existente guardado");
    };

    return (
        <>
            {
                showModalCrearProyecto
                    ? <section className="modal_propio">
                        <div className="modal_container">
                            <form>
                                <h3 className='text-center mb-4'>Agregando proyecto</h3>

                                <label>Nombre:</label>
                                <input className="form-control" type="text" />

                                <label>Responsable:</label>
                                <input className="form-control" type="text" />

                                <label>Descripción:</label>
                                <input className="form-control" type="text" />

                                <label>Fecha de entrega:</label>
                                <input className="form-control" type="date" />

                                <div className="modal_footer mt-2">
                                    <button type="button" className="btn btn-success me-2" onClick={buttonSaveModalCreateClicked}>Agregar</button>
                                    <button type="button" className="btn btn-danger" onClick={buttonCloseModalCreateClicked}>Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </section>
                    : ''
            }

            {
                showModalEditarProyecto
                    ? <section className="modal_propio">
                        <div className="modal_container">
                            <form>
                                <h3 className='text-center mb-4'>Editando proyecto</h3>

                                <label>Nombre:</label>
                                <input className="form-control" type="text" />

                                <label>Responsable:</label>
                                <input className="form-control" type="text" />

                                <label>Descripción:</label>
                                <input className="form-control" type="text" />

                                <label>Fecha de entrega:</label>
                                <input className="form-control" type="date" />

                                <div className="modal_footer mt-2">
                                    <button type="button" className="btn btn-success me-2" onClick={buttonSaveModalEditClicked}>Guardar</button>
                                    <button type="button" className="btn btn-danger" onClick={buttonCloseModalEditClicked}>Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </section>
                    : ''
            }

            <div className="container p-5">
                <h1 className="title text-center">Proyectos</h1>

                <div className="text-center">
                    <button className="btn btn-success mt-4 mb-5" onClick={buttonShowModalCreateClicked}>Crear proyecto</button>
                </div>

                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title text-center">Nombre del proyecto</h5>
                                <h6 className="text-center">Enrique Carranza</h6>
                            </div>

                            <div className="card-body">
                                <h5 className="text-center mt-4 mb-4">80% completado</h5>
                                <p className="card-text">Aquí iría la descripción del proyecto.</p>
                                <p className="card-text"><b>Total de tareas:</b> 10</p>
                                <p className="card-text"><b>Tareas completadas:</b> 8</p>
                                <p className="card-text"><b>Fecha de entrega:</b> 15 de Noviembre de 2023</p>
                            </div>

                            <div className="card-footer text-center p-3">
                                <button className="btn btn-primary me-2" onClick={buttonShowModalEditClicked}>Editar</button>
                                <a href="/proyecto/2" className="btn btn-success">Ver detalle</a>
                                <a href="/" className="btn btn-danger ms-2">Eliminar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeView;