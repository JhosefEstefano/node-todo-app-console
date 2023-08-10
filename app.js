require('colors');

const { inquiererMenu, pausa } = require('./helpers/inquierer');

const main = async () => {
    // console.log('Hola mundo');

    let opt = '';

    do {
        opt = await inquiererMenu();
        console.log({ opt });
        await pausa();

    } while (opt !== '0')

    // pausa();
}


main();