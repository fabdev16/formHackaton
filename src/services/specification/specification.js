const specification = 
    {
        "camioneta":{
            "specifications": [
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
                    "name": "description",
                    "description": "Descripción",
                    "label": "Descripción",
                    "required": true,
                    "type": "string",
                    "rule": "",
                    "typeInput": "textarea",
                    "class": "input-description",
                    "placeholder": "Ej. Descripción",
                    "maxLength": 50,
                    "helpText": "Ingresa el modelo de la camioneta."
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
            ]
        }
    }


export default specification;