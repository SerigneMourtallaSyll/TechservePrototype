import React from 'react'

function Form() {
  return (
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
  )
}

export default Form