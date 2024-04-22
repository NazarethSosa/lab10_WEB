import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';

function tareasPendientes() {
  const [tareas, setTareas] = useState([]);
  const [entradaTarea, setEntradaTarea] = useState('');

  const manejarCambioEntradaTarea = (event) => {
    setEntradaTarea(event.target.value);
  };

  const manejarAgregarTarea = () => {
    if (entradaTarea.trim() !== '') {
      setTareas([...tareas, entradaTarea]);
      setEntradaTarea('');
    }
  };

  const manejarEliminarTarea = (index) => {
    const tareasActualizadas = tareas.filter((_, i) => i !== index);
    setTareas(tareasActualizadas);
  };

  return (
    <Container className="text-center bg-success text-white">
        <h1>MINI TASK DASHBOARD</h1>
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              value={entradaTarea}
              onChange={manejarCambioEntradaTarea}
              placeholder="Enter a task"
            />
          </Form.Group>
          <Button variant="info text-white fw-bold mt-2" onClick={manejarAgregarTarea}>
            ADD TASK
          </Button>
        </Form>
        
      <br />
      <ListGroup>
        {tareas.map((tarea, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <span>{tarea}</span>
            <Button variant="warning text-white fw-bold" onClick={() => manejarEliminarTarea(index)}>
              DELETE
            </Button>
        </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default tareasPendientes;