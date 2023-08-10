const inquirer = require('inquirer');
require('colors');

const menuPausa = [
    {
        type: 'input',
        name: 'pausa',
        message: `Presione ${'ENTER'.random} para continuar`
    }
]
const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea Hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tareas'
            },
            {
                value: '3',
                name: '3. Listar Tareas completadas'
            },
            {
                value: '4',
                name: '4. Listar Tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar Tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar Tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
];


const inquiererMenu = async () => {
    console.clear();
    console.log("===================================".green);
    console.log("  Seleccione una opción  ".yellow);
    console.log("===================================\n".green);

    const { opcion } = await inquirer.prompt(menuOpts)

    return opcion;
}


const pausa = async () => {

    const opt = await inquirer.prompt(menuPausa)

    return opt;
}


module.exports = {
    inquiererMenu,
    pausa
}