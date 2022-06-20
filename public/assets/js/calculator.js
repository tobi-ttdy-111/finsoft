
const resultCalculator = document.querySelector( '#resultCalculator' );
const selectMode = document.querySelector( '#selectMode' );
const montoUser = document.querySelector( '#montoUser' );
const calculate = document.querySelector( '#calculate' );
let mode = '1';

selectMode.addEventListener( 'change', ( e ) => { mode = e.target.value });
calculate.addEventListener( 'click', ( e ) => {
    e.preventDefault();
    switch ( mode ) {
        case '1':
            const monto8 = parseInt( montoUser.value );
            if ( monto8 >= 0 ) {
                const iva = ( monto8 * 8 ) / 100;
                resultCalculator.innerHTML = `
                    <p>Cantidad sin iva: $${ monto8 } <br>Iva: $${ iva } <br> Resultante: $${ monto8 + iva } </p>
                `;
            } else { resultCalculator.innerHTML = `<p>Introduce el monto</p>` }
        break;
        case '2':
            const monto16 = parseInt( montoUser.value );
            if ( monto16 >= 0 ) {
                const iva = ( monto16 * 16 ) / 100;
                resultCalculator.innerHTML = `
                    <p>Cantidad sin iva: $${ monto16 } <br>Iva: $${ iva } <br> Resultante: $${ monto16 + iva } </p>
                `;
            } else { resultCalculator.innerHTML = `<p>Introduce el monto</p>` }
        break;
        case '3':
            const isr = parseInt( montoUser.value );
            if ( isr >= 0 ) {
                const iva = ( isr * 16 ) / 100;
                resultCalculator.innerHTML = `
                    <p>Cantidad sin iva: $${ isr } <br>Iva: $${ iva } <br> Resultante: $${ isr + iva } </p>
                `;
            } else { resultCalculator.innerHTML = `<p>Introduce el monto</p>` }
        break;
    };
});