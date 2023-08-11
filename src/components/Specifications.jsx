import React, { useState, useEffect } from 'react';

function App() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        const newRows = [];
        const specifications = [
            {
                "name": "brand",
                "description": "Marca de la camioneta",
                "label": "Marca",
                "required": true,
                "type": "string",
                "rule": "",
                "typeInput": "dropdown",
                "class": "input-brand",
                "options": ["Toyota", "Ford", "Chevrolet", "Nissan", "Dodge"],
                "helpText": "Selecciona la marca de la camioneta."
            },
            {
                "name": "model",
                "description": "Modelo de la camioneta",
                "label": "Modelo",
                "required": true,
                "type": "string",
                "rule": "",
                "typeInput": "text",
                "class": "input-model",
                "placeholder": "Ej. Tacoma",
                "maxLength": 50,
                "helpText": "Ingresa el modelo de la camioneta."
            },
            {
                "name": "manufactureYear",
                "description": "Año de fabricación",
                "label": "Año de Fabricación",
                "required": true,
                "type": "number",
                "rule": "",
                "typeInput": "number",
                "class": "input-year",
                "placeholder": "Ej. 2020",
                "helpText": "Ingresa el año de fabricación de la camioneta."
            },
            {
                "name": "numberOfDoors",
                "description": "Número de puertas",
                "label": "Número de Puertas",
                "required": true,
                "type": "number",
                "rule": "",
                "typeInput": "number",
                "class": "input-doors",
                "placeholder": "Ej. 4",
                "helpText": "Ingresa el número de puertas de la camioneta."
            },
            {
                "name": "traction",
                "description": "Tipo de tracción",
                "label": "Tracción",
                "required": true,
                "type": "string",
                "rule": "",
                "typeInput": "dropdown",
                "class": "input-traction",
                "options": ["4x2", "4x4"],
                "helpText": "Selecciona el tipo de tracción de la camioneta."
            },
            {
                "name": "color",
                "description": "Color de la camioneta",
                "label": "Color",
                "required": true,
                "type": "string",
                "rule": "",
                "typeInput": "text",
                "class": "input-color",
                "placeholder": "Ej. Rojo",
                "maxLength": 30,
                "helpText": "Ingresa el color de la camioneta."
            },
            {
                "name": "numberOfCylinders",
                "description": "Número de cilindros del motor",
                "label": "Número de Cilindros",
                "required": true,
                "type": "number",
                "rule": "",
                "typeInput": "number",
                "class": "input-cylinders",
                "placeholder": "Ej. 6",
                "helpText": "Ingresa el número de cilindros del motor."
            },
            {
                "name": "plateNumber",
                "description": "Número de placa",
                "label": "Placa",
                "required": true,
                "type": "string",
                "rule": "",
                "typeInput": "text",
                "class": "input-plate",
                "placeholder": "Ej. ABC-123",
                "maxLength": 10,
                "helpText": "Ingresa el número de placa de la camioneta."
            },
            {
                "name": "fuelType",
                "description": "Tipo de combustible",
                "label": "Combustible",
                "required": true,
                "type": "string",
                "rule": "",
                "typeInput": "dropdown",
                "class": "input-fuel",
                "options": ["Gasolina", "Diésel", "Híbrido", "Eléctrico"],
                "helpText": "Selecciona el tipo de combustible de la camioneta."
            },
            {
                "name": "transmission",
                "description": "Tipo de transmisión",
                "label": "Transmisión",
                "required": true,
                "type": "string",
                "rule": "",
                "typeInput": "dropdown",
                "class": "input-transmission",
                "options": ["Manual", "Automática"],
                "helpText": "Selecciona el tipo de transmisión de la camioneta."
            }
        ];

        specifications.forEach((specification, i) => {
            if (specification.typeInput === "dropdown") {
                newRows.push(
                    <div class="input-group rowCustom" key={i}>
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <span>{specification.description}</span>
                            </div>
                        </div>
                        <div className="options">
                            {specification.options.map((option) => (
                                <div key={option} className="option"><input type="checkbox" aria-label="Checkbox for following text input" /><span className='optionName'>{option}</span></div>
                            ))}
                        </div>
                    </div>
                );
            }
            else if (specification.typeInput === "number") {
                newRows.push(
                    <div class="input-group rowCustom" key={i}>
                        <div class="input-group-prepend">
                            <span class="input-group-text">{specification.description}</span>
                        </div>
                        <input type="number" class="form-control" placeholder={specification.placeholder} aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                );
            }
            else if (specification.typeInput === "text") {
                newRows.push(
                    <div class="input-group rowCustom" ikey={i}>
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">{specification.description}</span>
                        </div>
                        <input type="text" class="form-control" placeholder={specification.placeholder} aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                );
            }
            else if (specification.typeInput === "textarea") {
                newRows.push(
                    <div class="input-group rowCustom" key={i}>
                        <div class="input-group-prepend">
                            <span class="input-group-text">{specification.description}</span>
                        </div>
                        <textarea class="form-control" aria-label="With textarea"></textarea>
                    </div>
                );
            }
        });
        setRows(newRows);
    }, []);

    return (
        <>
            {rows}
        </>
    );
}

export default App;