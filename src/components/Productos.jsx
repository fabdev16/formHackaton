import React from 'react';

function Products() {
    return (
        <>
            <div class="input-group rowCustom">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Nombre</span>
                </div>
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="input-group rowCustom">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Marca</span>
                </div>
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </>
    );
}

export default Products;
