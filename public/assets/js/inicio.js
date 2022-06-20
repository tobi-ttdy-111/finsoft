
const url = 'https://finsoft.herokuapp.com';
const errorsDiv = document.querySelector( '#errors' );
const successDiv = document.querySelector( '#success' );


// errorsMsg
const errorsMsg = ( errors ) => {
    errorsDiv.innerHTML = '';
    errors.forEach( error => {
        errorsDiv.innerHTML += `
            <span>${ error.msg }</span>
        `;
    });
    errorsDiv.style.display = '';
    setTimeout(() => {
        errorsDiv.innerHTML = '';
        errorsDiv.style.display = 'none';
    }, 5000);
};


// successMsg
const successMsg = ( msg ) => {
    successDiv.style.display = '';
    successDiv.innerHTML = `<span>${ msg }</span>`;
    setTimeout(() => {
        successDiv.innerHTML = '';
        successDiv.style.display = 'none';
    }, 5000);
};

// registrarse
const correo = document.querySelector( '#correo' );
const nombre = document.querySelector( '#nombre' );
const usuarioEtiqueta = document.querySelector( '#usuarioEtiqueta' );
const contraseña = document.querySelector( '#contraseña' );
const confirmarContraseña = document.querySelector( '#confirmarContraseña' );
const registrarse = document.querySelector( '#registrarse' );

// registrarseFetch
registrarse.addEventListener( 'click', async( e ) => {
    e.preventDefault();
    await fetch( `${ url }/usuario`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'correo': correo.value,
            'nombre': nombre.value,
            'contraseña': contraseña.value,
            'confirmarContraseña': confirmarContraseña.value,
            'usuarioEtiqueta': usuarioEtiqueta.value
        })
    })
    .then( res => res.json() )
    .then( data => {
        ( data.errors )
            ? errorsMsg( data.errors )
            : ( successMsg( 'Cuenta creada correctamente' ), iniciarSesionComp() )
    });
});


// iniciarSesion
const correoS = document.querySelector( '#correoS' );
const contraseñaS = document.querySelector( '#contraseñaS' );
const iniSesion = document.querySelector( '#iniSesion' );


// iniciarSesionFetch
iniSesion.addEventListener( 'click', async( e ) => {
    e.preventDefault();
    await fetch( `${ url }/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'correo': correoS.value,
            'contraseña': contraseñaS.value,
        })
    })
    .then( res => res.json() )
    .then( data => {
        ( data.errors )
            ? errorsMsg( data.errors )
            : ( localStorage.setItem( 'tokensito', data.token ), window.location = './' )
    });
});


