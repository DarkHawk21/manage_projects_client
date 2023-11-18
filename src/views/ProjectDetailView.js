import Moment from 'react-moment';
import 'moment/locale/es-mx';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TaskComponent from '../components/TaskComponent';

function ProjectDetailView() {
    const navigate = useNavigate();
    let { proyectoId } = useParams();
    const [ proyecto, setProyecto ] = useState({});
    const [ tareas, setTareas ] = useState([]);
    const [ showModalCrearTarea, setShowModalCrearTarea ] = useState(false);
    const [ showModalEditarTarea, setShowModalEditarTarea ] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token-manage-projects');

        if (!token) {
            navigate('/login');
        }

        obtenerDetalleProyecto();
    }, [navigate]);

    const obtenerDetalleProyecto = async () => {
        const url = `http://localhost:8000/api/proyectos/${proyectoId}`;

        const response = await fetch(url);
        const detalleResponse = await response.json();
        setProyecto(detalleResponse);
        setTareas(detalleResponse.tareas);
    };

    const buttonShowModalEditClicked = () => {
        setShowModalEditarTarea(true);
    };

    const buttonDeleteTareaClicked = () => {};

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
                <h1 className="title text-center">{proyecto.nombre}</h1>
                <h3 className="text-center">{proyecto.responsable?.name}</h3>
                <h5 className="text-center mt-4 mb-4">
                    {
                        proyecto.tareas_resumen?.total > 0
                            ? Math.round((proyecto.tareas_resumen?.finalizadas * 100) / proyecto.tareas_resumen?.total)
                            : 0
                    }% completado
                </h5>
                <p>{proyecto.descripcion}</p>
                <p><b>Total de tareas:</b> {proyecto.tareas_resumen?.total}</p>
                <p><b>Tareas completadas:</b> {proyecto.tareas_resumen?.finalizadas}</p>
                <p><b>Fecha de entrega:</b> <Moment format='LL' locale="es">{proyecto.fecha_entrega}</Moment></p>

                <div className="text-center">
                    <button className="btn btn-success mt-4 mb-5 me-2" onClick={buttonShowModalCreateClicked}>Crear tarea</button>
                    <a href="/" className="btn btn-primary mt-4 mb-5">Regresar</a>
                </div>

                <div className="row">
                    { 
                        tareas.map(tarea => {
                            return <div className="col-4" key={tarea.id}>
                                <TaskComponent
                                    tarea={tarea}
                                    buttonShowModalEditClicked={buttonShowModalEditClicked}
                                    buttonDeleteTareaClicked={buttonDeleteTareaClicked}
                                />
                            </div>;
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default ProjectDetailView;