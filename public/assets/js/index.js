
const url = 'https://finsoft.herokuapp.com';
const errorsDiv = document.querySelector('#errors');
const successDiv = document.querySelector('#success');

const tokensito = localStorage.getItem('tokensito');
if (!tokensito) { window.location = './inicio.html' };
let montos;
let edit;
let cuando = 'semana';

// errorsMsg
const errorsMsg = (errors) => {
    errorsDiv.innerHTML = '';
    errors.forEach(error => {
        errorsDiv.innerHTML += `
            <span>${error.msg}</span>
        `;
    });
    errorsDiv.style.display = '';
    setTimeout(() => {
        errorsDiv.innerHTML = '';
        errorsDiv.style.display = 'none';
    }, 5000);
};


// successMsg
const successMsg = (msg) => {
    successDiv.style.display = '';
    successDiv.innerHTML = `<span>${msg}</span>`;
    setTimeout(() => {
        successDiv.innerHTML = '';
        successDiv.style.display = 'none';
    }, 5000);
};


// añadirMonto
const tipo = document.querySelector('#tipo');
const montoVal = document.querySelector('#montoVal');
const fecha = document.querySelector('#fecha');
const descripcion = document.querySelector('#descripcion');
const añadirBtn = document.querySelector('#añadirBtn');


// añadirFetch
añadirBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const dia = getDia();
    const fechaFin = new Date( dia ).getTime();
    const fechaInicio = new Date( `${ fecha.value }` ).getTime();
    if ( fechaInicio > fechaFin ) {errorsMsg([ { msg: 'Escribe una fecha que no pase del día de hoy' } ]); return;}
    const diferencia = ( (fechaFin - fechaInicio)/(1000*60*60*24) );
    if ( diferencia > 31 ) { errorsMsg([ { msg: 'Solo se permiten fechas con un maximo de 31 días de antiguedad' } ]); return; }
    let valor;
    if (tipo.value == 'gasto') { valor = montoVal.value * -1 } else { valor = montoVal.value };
    await fetch(`${url}/monto`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'tokensito': localStorage.getItem('tokensito') },
        body: JSON.stringify({
            'valor': valor,
            'fecha': fecha.value,
            'descripcion': descripcion.value,
        })
    })
        .then(res => res.json())
        .then(data => {
            (data.errors)
                ? errorsMsg(data.errors)
                : (successMsg('Monto agregado'), registroComp(), getMontos())
        });
});


// getMontos
const getMontos = async () => {
    await fetch(`${url}/montos`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'tokensito': localStorage.getItem('tokensito') }
    })
        .then(res => res.json())
        .then(data => {
            (data.errors)
                ? window.location = './inicio.html'
                : (renderMontos(data.montos), montos = data.montos, renderRegistrosTiempo());
        });
}; getMontos();


// validarMontos
const validarMontos = (monto) => {
    if (monto < 0) {
        const cadena = String(monto);
        const cut = cadena.substring(1);
        return `- $${cut}`
    } else {
        return `+ $${monto}`;
    };
};


// renderMontos
const montosDiv = document.querySelector('#montos')
const renderMontos = (montos) => {
    montosDiv.innerHTML = '';
    montos.forEach(monto => {
        montosDiv.innerHTML += `
            <article class="product__card">
                <small>${monto.descripcion || '---'}</small>
                    <h3 class="product__title">${monto.fecha}</h3>
                <span class="product__price">${validarMontos(monto.valor)}</span>
                <button class="button--flex product__button2 deleteMontoBtn" id="${monto._id}">
                    <i class="ri-delete-bin-line"></i>
                </button>
                <button class="button--flex product__button editMontoBtn" id="${monto._id}">
                    <i class="ri-pencil-line"></i>
                </button>
            </article>
        `;
    });
    addEventsbtns();
};


const addEventsbtns = () => {
    const deleteMontoBtn = document.querySelectorAll('.deleteMontoBtn');
    const editMontoBtn = document.querySelectorAll('.editMontoBtn');
    deleteMontoBtn.forEach(btn => {
        btn.addEventListener('click', async () => {
            await fetch(`${url}/monto/${btn.id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json', 'tokensito': localStorage.getItem('tokensito') }
            })
                .then(res => res.json())
                .then(data => {
                    (data.errors)
                        ? window.location = './inicio.html'
                        : getMontos();
                });
        });
    });
    editMontoBtn.forEach(btn => {
        btn.addEventListener('click', async () => {
            await fetch(`${url}/monto/${btn.id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'tokensito': localStorage.getItem('tokensito') }
            })
                .then(res => res.json())
                .then(data => {
                    (data.errors)
                        ? window.location = './inicio.html'
                        : ( renderMonto( data.monto ), editarComp(), edit = btn.id );  // renderDataMonto, charge edit
                });
        });
    });
};


// editarMonto
const tipoE = document.querySelector('#tipoE');
const montoValE = document.querySelector('#montoValE');
const fechaE = document.querySelector('#fechaE');
const descripcionE = document.querySelector('#descripcionE');
const editarBtn = document.querySelector('#editarBtn');


// renderMonto
const renderMonto = (monto) => {
    if ( monto.valor < 0 ) {
        tipoE.value = 'gasto';
    } else { tipoE.value = 'ingreso' };
    montoValE.value = monto.valor;
    fechaE.value = monto.fecha;
    descripcionE.value = monto.descripcion;
};


// editarFetch
editarBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    let valor;
    if (tipoE.value == 'gasto') { valor = montoValE.value * -1 } else { valor = montoValE.value };
    await fetch(`${url}/monto/${ edit }`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'tokensito': localStorage.getItem('tokensito') },
        body: JSON.stringify({
            'valor': valor,
            'fecha': fechaE.value,
            'descripcion': descripcionE.value,
        })
    })
        .then(res => res.json())
        .then(data => {
            (data.errors)
                ? errorsMsg(data.errors)
                : (successMsg('Monto editado'), registroComp(), getMontos())
        });
});


const cerrarSesion = document.querySelector( '#cerrarSesion' );
cerrarSesion.addEventListener( 'click', () => {
    localStorage.removeItem( 'tokensito' );
    window.location = './inicio.html'
});



// nowDay
const getDia = () => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1;
    const year = date.getFullYear()
    if(month < 10){ return `${year}-0${month}-${day}`; }else{ return `${year}-${month}-${day}`};
};

const ingresosRegDate = document.querySelector( '#ingresosRegDate' );
const gastosRegDate = document.querySelector( '#gastosRegDate' );
const totalRegDate = document.querySelector( '#totalRegDate' );


const renderRegistrosTiempo = () => {
    const dia = getDia();
    const fechaFin = new Date( dia ).getTime();
    let ingresos = 0;
    let gastos = 0;
    montos.forEach( monto => {
        const fechaInicio = new Date(`${ monto.fecha }`).getTime();
        const diferencia = ( (fechaFin - fechaInicio)/(1000*60*60*24) );
        switch ( cuando ) {
            case 'semana':
                if ( diferencia <= 7 ) { if ( monto.valor < 0 ) { gastos += monto.valor } else { ingresos += monto.valor } }
            break;
            case 'quincena':
                if ( diferencia <= 15 ) { if ( monto.valor < 0 ) { gastos += monto.valor } else { ingresos += monto.valor } }
            break;
            case 'mes':
                if ( diferencia <= 30 ) { if ( monto.valor < 0 ) { gastos += monto.valor } else { ingresos += monto.valor } }
            break;
        };
    });
    const total = ingresos + gastos;
    ingresosRegDate.innerHTML = `${ validarMontos( ingresos ) }`;
    gastosRegDate.innerHTML = `${ validarMontos( gastos ) }`;
    totalRegDate.innerHTML = `${ validarMontos( total ) }`;
};

const registroTiempo = document.querySelector( '#registroTiempo' );
registroTiempo.addEventListener( 'change', ( e ) => {
    cuando = e.target.value;
    renderRegistrosTiempo();
});