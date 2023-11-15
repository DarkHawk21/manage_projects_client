import { useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskComponent from '../components/TaskComponent';

function ProjectDetailView() {
    let { proyectoId } = useParams();
    const [ showModalCrearTarea, setShowModalCrearTarea ] = useState(false);
    const [ showModalEditarTarea, setShowModalEditarTarea ] = useState(false);

    const buttonShowModalCreateClicked = () => {
        setShowModalCrearTarea(true);
    };

    const buttonCloseModalCreateClicked = () => {
        setShowModalCrearTarea(false);
    };

    const buttonSaveModalCreateClicked = () => {
        alert("Elemento nuevo guardado");
    };

    const buttonCloseModalEditClicked = () => {
        setShowModalEditarTarea(false);
    };

    const buttonSaveModalEditClicked = () => {
        alert("Elemento existente guardado");
    };

    const tareaAVista = () => {
        setShowModalEditarTarea(true);
    };

    return (
        <>
            {
                showModalCrearTarea
                ? <section className="modal_propio">
                        <div className="modal_container">
                            <form>
                                <h3 className='text-center mb-4'>Agregando tarea</h3>

                                <label>Nombre:</label>
                                <input className="form-control" type="text" />
        
                                <label>Responsable:</label>
                                <input className="form-control" type="text" />
        
                                <label>Descripción:</label>
                                <input className="form-control" type="text" />

                                <label>Estatus:</label>
                                <select className="form-control">
                                    <option value="">...</option>
                                    <option value="planeacion">En planeación</option>
                                    <option value="proceso">En proceso</option>
                                    <option value="finalizada">Finalizada</option>
                                </select>
        
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
                showModalEditarTarea
                ? <section className="modal_propio">
                        <div className="modal_container">
                            <form>
                                <h3 className='text-center mb-4'>Editando tarea</h3>

                                <label>Nombre:</label>
                                <input className="form-control" type="text" />
        
                                <label>Responsable:</label>
                                <input className="form-control" type="text" />
        
                                <label>Descripción:</label>
                                <input className="form-control" type="text" />

                                <label>Estatus:</label>
                                <select className="form-control">
                                    <option value="">...</option>
                                    <option value="planeacion">En planeación</option>
                                    <option value="proceso">En proceso</option>
                                    <option value="finalizada">Finalizada</option>
                                </select>
        
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
                <h1 className="title text-center">Nombre del proyecto { proyectoId }</h1>
                <h3 className="text-center">Enrique Carranza</h3>
                <h5 className="text-center mt-4 mb-4">80% completado</h5>
                <p>Aquí iría la descripción del proyecto.</p>
                <p><b>Total de tareas:</b> 10</p>
                <p><b>Tareas completadas:</b> 8</p>
                <p><b>Fecha de entrega:</b> 15 de Noviembre de 2023</p>

                <div className="text-center">
                    <button className="btn btn-success mt-4 mb-5 me-2" onClick={buttonShowModalCreateClicked}>Crear tarea</button>
                    <a href="/" className="btn btn-primary mt-4 mb-5">Regresar</a>
                </div>

                <div className="row">
                    <div className="col-4">
                        <TaskComponent tareaAVista={tareaAVista}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectDetailView;