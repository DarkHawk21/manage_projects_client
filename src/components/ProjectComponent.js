function ProjectComponent() {
    return (
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
                <a href="/" className="btn btn-primary me-2">Editar</a>
                <a href="/" className="btn btn-success">Ver detalle</a>
                <a href="/" className="btn btn-danger ms-2">Eliminar</a>
            </div>
        </div>
    );
}

export default ProjectComponent;