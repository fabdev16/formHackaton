import React from 'react';

function App() {
    return (
        <>
            <div class="input-group rowCustom">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Inventario</span>
                </div>
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group rowCustom">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Warehouse</span>
                </div>
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group rowCustom">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Precio</span>
                </div>
                <input type="number" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </>
    );
}

export default App;
