import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [surname, setSurname] = useState('');
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <select value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="AA">AA</option>
                        <option value="B">B</option>
                        <option value="CC">CC</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <input
                        type="text"
                        placeholder="Surname"
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
