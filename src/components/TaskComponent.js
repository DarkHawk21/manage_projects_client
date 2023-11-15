function TaskComponent({ tareaAVista }) {
    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title text-center">Nombre de la tarea</h5>
                <h6 className="text-center">Enrique Carranza</h6>
            </div>

            <div className="card-body">
                <p className="card-text">Aquí iría la descripción de la tarea</p>
                <p className="card-text"><b>Estatus:</b> Finalizada</p>
                <p className="card-text"><b>Fecha de entrega:</b> 15 de Noviembre de 2023</p>
            </div>

            <div className="card-footer text-center p-3">
                <button className="btn btn-primary me-2" onClick={() => tareaAVista()}>Editar</button>
                <a href="/" className="btn btn-danger">Eliminar</a>
            </div>
        </div>
    );
}

export default TaskComponent;