import React from 'react';
import {Container, Row, Form, Table} from 'react-bootstrap';
// import Form from './Form';
import logo from '../src/assets/brouillon (2).png'

function TodoList() {

    //Assignation de valeur initiale des champs et fonctions permettant de mettre à jour les données
    const [tasks, setTasks] = React.useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    const [inputPrenom, setInputPrenom] = React.useState("");
    const [inputNom, setInputNom] = React.useState("");
    const [inputAge, setInputAge] = React.useState("");
    const [inputEmail, setInputEmail] = React.useState("");
    const [inputModule, setInputModule] = React.useState("");
    const [inputStatut, setInputStatut] = React.useState("");

    const [editingTaskIndex, setEditingTaskIndex] = React.useState(null);


    //Stockage des données dans LocalStorage
    const saveTasksToLocalStorage = (tasks) => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };


    //Ajout de données d'un étudiant
    const addTask = () => {
        const newTask = {
            firstName: inputPrenom,
            lastName: inputNom,
            old: inputAge,
            email: inputEmail,
            module: inputModule,
            status: inputStatut
        };

        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
        saveTasksToLocalStorage(newTasks);
        setInputPrenom("");
        setInputNom("");
        setInputAge("");
        setInputModule("");
        setInputStatut("");
        setInputEmail("");
    };

    //Suppression de données sur le tableau
    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
        saveTasksToLocalStorage(newTasks);
    };

    //Recuperation des données à modifier selon leur index
    const startEditingTask = (index) => {
        setEditingTaskIndex(index);
        setInputPrenom(tasks[index].firstName);
        setInputNom(tasks[index].lastName);
        setInputAge(tasks[index].old);
        setInputEmail(tasks[index].email);
        setInputModule(tasks[index].module);
        setInputStatut(tasks[index].status);
    };


    //Enregistrer les modifications
    const saveEditedTask = () => {
        const newTasks = [...tasks];
        newTasks[editingTaskIndex] = {
            firstName: inputPrenom,
            lastName: inputNom,
            old: inputAge,
            email: inputEmail,
            module: inputModule,
            status: inputStatut
        };
        setTasks(newTasks);
        saveTasksToLocalStorage(newTasks);
        setEditingTaskIndex(null);
        setInputPrenom("");
        setInputNom("");
        setInputAge("");
        setInputModule("");
        setInputStatut("");
        setInputEmail("");
    };

    //Annuler les modifications
    const cancelEditingTask = () => {
        setEditingTaskIndex(null);
        setInputPrenom("");
        setInputNom("");
        setInputAge("");
        setInputModule("");
        setInputStatut("");
        setInputEmail("");
    };

    


  return (
    <Container className='pt-5'>
        <Row className='d-flex justify-content-center'>
            <div className=' border pb-5 mb-5 w-75 rounded formulaire'>
                <div className='title d-flex w-100 pb-2 pt-3 justify-content-center'>
                    <div className='mx-3 d-flex justify-content-center align-items-center'>
                        <h1 className=''>TodoList React</h1>
                    </div>
                    <div>
                        <img src={logo} alt="img" className='img-fluid' />
                    </div>
                </div>
                <div className='row form d-flex g-2 justify-content-center flex-wrap'>
                    <Form.Floating className="pb-3 col-md-5">
                        <Form.Control
                        id="prenom"
                        type="text"
                        value={inputPrenom}
                        onChange={(e) => setInputPrenom(e.target.value)}
                        required
                        />
                        <label htmlFor="floatingInputCustom">Prénom</label>
                    </Form.Floating>
                    <Form.Floating className='pb-3 col-md-5'>
                        <Form.Control
                        id="nom"
                        type="text"
                        value={inputNom}
                        onChange={(e) => setInputNom(e.target.value)}
                        required
                        />
                        <label htmlFor="">Nom</label>
                    </Form.Floating>
                    <Form.Floating className='pb-3 col-md-5'>
                        <Form.Control
                        id="age"
                        type="number"
                        value={inputAge}
                        onChange={(e) => setInputAge(e.target.value)}
                        required
                        />
                        <label htmlFor="">Age</label>
                    </Form.Floating>
                    <Form.Floating className='pb-3 col-md-5'>
                        <Form.Control
                        id="email"
                        type="email"
                        value={inputEmail}
                        onChange={(e) => setInputEmail(e.target.value)}
                        required
                        />
                        <label htmlFor="">Email</label>
                    </Form.Floating>
                    <Form.Floating className='pb-3 col-md-5'>
                        <Form.Control
                        id="module"
                        type="text"
                        value={inputModule}
                        onChange={(e) => setInputModule(e.target.value)}
                        required
                        />
                        <label htmlFor="">Module</label>
                    </Form.Floating>
                    <Form.Floating className='col-md-5'>
                        <Form.Select aria-label="" value={inputStatut} onChange={(e) => setInputStatut(e.target.value)} required>
                            <option>Statut</option>
                            <option value="1" className='bg-success text-light'>Terminé</option>
                            <option value="2" className='bg-warning text-light'>En cours...</option>
                        </Form.Select>
                    </Form.Floating>
                    <div className='bouton'>
                        <button className='btn w-25' onClick={addTask}>Ajouter</button>
                    </div>
                </div>
            
            </div>
        </Row>
        <Row className='px-3'>
            <Table responsive>
                    <thead className='table-info'>
                        <tr className='border'>
                            <th className='text-start'>Prénom</th>
                            <th>Nom</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Module</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { tasks.map((task, index) => (
                            task.status === "2" ?
                            (<tr key={index} className='table-light'>
                                <td className='text-start'>
                                    {editingTaskIndex === index ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={inputPrenom}
                                            onChange={(e) => setInputPrenom(e.target.value)}
                                        />
                                    ) : (
                                        task.firstName
                                    )}
                                </td>
                                <td>
                                    {editingTaskIndex === index ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={inputNom}
                                            onChange={(e) => setInputNom(e.target.value)}
                                        />
                                    ) : (
                                        task.lastName
                                    )}
                                </td>
                                <td>
                                    {editingTaskIndex === index ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={inputAge}
                                            onChange={(e) => setInputAge(e.target.value)}
                                        />
                                    ) : (
                                        task.old
                                    )}
                                </td>
                                <td>
                                    {editingTaskIndex === index ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={inputEmail}
                                            onChange={(e) => setInputEmail(e.target.value)}
                                        />
                                    ) : (
                                        task.email
                                    )}
                                </td>
                                <td>
                                    {editingTaskIndex === index ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={inputModule}
                                            onChange={(e) => setInputModule(e.target.value)}
                                        />
                                    ) : (
                                        task.module
                                    )}
                                </td>
                                <td>
                                    {editingTaskIndex === index ? (
                                        <div className='d-flex flex-nowrap'>
                                            <button className="btn btn-success" onClick={saveEditedTask}>Enregistrer</button>
                                            <button className="btn btn-danger" onClick={cancelEditingTask}>Annuler</button>
                                        </div>
                                    ) : (
                                        <div>
                                            <i className="bi bi-x-circle-fill text-danger fs-3 px-2" onClick={() => deleteTask(index)}></i>
                                            <i className="bi bi-pencil-square fs-3" onClick={() => startEditingTask(index)}></i>
                                        </div>
                                    )}
                                </td>   
                            </tr>) : (
                                
                                <tr key={index} className='table-secondary' id='finish'>
                                <td className='text-start'>
                                    {editingTaskIndex === index ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={inputPrenom}
                                            onChange={(e) => setInputPrenom(e.target.value)}
                                        />
                                    ) : (
                                        task.firstName
                                    )}
                                </td>
                                <td>
                                    {editingTaskIndex === index ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={inputNom}
                                            onChange={(e) => setInputNom(e.target.value)}
                                        />
                                    ) : (
                                        task.lastName
                                    )}
                                </td>
                                <td>
                                    {editingTaskIndex === index ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={inputAge}
                                            onChange={(e) => setInputAge(e.target.value)}
                                        />
                                    ) : (
                                        task.old
                                    )}
                                </td>
                                <td>
                                    {editingTaskIndex === index ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={inputEmail}
                                            onChange={(e) => setInputEmail(e.target.value)}
                                        />
                                    ) : (
                                        task.email
                                    )}
                                </td>
                                <td>
                                    {editingTaskIndex === index ? (
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={inputModule}
                                            onChange={(e) => setInputModule(e.target.value)}
                                        />
                                    ) : (
                                        task.module
                                    )}
                                </td>
                                <td>
                                    Terminé
                                </td>   
                            </tr>    
                            )
                        ))}
                </tbody>
            </Table>
        </Row>
    </Container>
  )
}

export default TodoList