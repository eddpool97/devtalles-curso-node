
const { getUserById } = require('./js-foundation/03-callbacks');


getUserById( 1, ( error, user)=>{
    if( error )throw new Error( 'No se encontro el usuario' );


    console.log( user );
} );