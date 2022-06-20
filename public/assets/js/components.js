
const title = document.querySelector( '#title' );
const inicio = document.querySelector( '#inicio' );
const nosotros = document.querySelector( '#nosotros' );
const registrarme = document.querySelector( '#registrarme' );
const iniciarSesion = document.querySelector( '#iniciarSesion' );
const registro = document.querySelector( '#registro' );
const monto = document.querySelector( '#monto' );
const añadir = document.querySelector( '#añadir' );
const editar = document.querySelector( '#editar' );
const calculator = document.querySelector( '#calculator' );
const blog = document.querySelector( '#blog' );
const articles1 = document.querySelector( '#articles1' );
const articles2 = document.querySelector( '#articles2' );
const articles3 = document.querySelector( '#articles3' );

console.clear();

const inicioComp = () => {
    inicio.style.display = '';
    nosotros.style.display = 'none';
    registrarme.style.display = 'none';
    iniciarSesion.style.display = 'none';
    title.innerHTML = 'Inicio';
    inicioA.classList.add( 'active-link' );
    nosotrosA.classList.remove( 'active-link' );
    registrarseA.classList.remove( 'active-link' );
    iniciarSesionA.classList.remove( 'active-link' );
};
const nosotrosComp = () => {
    inicio.style.display = 'none';
    nosotros.style.display = '';
    registrarme.style.display = 'none';
    iniciarSesion.style.display = 'none';
    title.innerHTML = 'Nosotros';
    inicioA.classList.remove( 'active-link' );
    nosotrosA.classList.add( 'active-link' );
    registrarseA.classList.remove( 'active-link' );
    iniciarSesionA.classList.remove( 'active-link' );
    console.clear();
};
const registrarmeComp = () => {
    inicio.style.display = 'none';
    nosotros.style.display = 'none';
    registrarme.style.display = '';
    iniciarSesion.style.display = 'none';
    title.innerHTML = 'Registrarse';
    inicioA.classList.remove( 'active-link' );
    nosotrosA.classList.remove( 'active-link' );
    registrarseA.classList.add( 'active-link' );
    iniciarSesionA.classList.remove( 'active-link' );
};
const iniciarSesionComp = () => {
    inicio.style.display = 'none';
    nosotros.style.display = 'none';
    registrarme.style.display = 'none';
    iniciarSesion.style.display = '';
    title.innerHTML = 'Iniciar sesión';
    inicioA.classList.remove( 'active-link' );
    nosotrosA.classList.remove( 'active-link' );
    registrarseA.classList.remove( 'active-link' );
    iniciarSesionA.classList.add( 'active-link' );
};
const registroComp = () => {
    registro.style.display = '';
    monto.style.display = 'none';
    añadir.style.display = 'none';
    editar.style.display = 'none';
    calculator.style.display = 'none';
    blog.style.display = 'none';
    articles1.style.display = 'none';
    articles2.style.display = 'none';
    articles3.style.display = 'none';
    registroA.classList.add( 'active-link' );
    montoA.classList.remove( 'active-link' );
    añadirA.classList.remove( 'active-link' );
    blogA.classList.remove( 'active-link' );
    title.innerHTML = 'Registro';
};
const montoComp = () => {
    registro.style.display = 'none';
    monto.style.display = '';
    añadir.style.display = 'none';
    editar.style.display = 'none';
    calculator.style.display = 'none';
    blog.style.display = 'none';
    articles1.style.display = 'none';
    articles2.style.display = 'none';
    articles3.style.display = 'none';
    registroA.classList.remove( 'active-link' );
    montoA.classList.add( 'active-link' );
    añadirA.classList.remove( 'active-link' );
    blogA.classList.remove( 'active-link' );
    title.innerHTML = 'Monto';
};
const añadirComp = () => {
    registro.style.display = 'none';
    monto.style.display = 'none';
    añadir.style.display = '';
    editar.style.display = 'none';
    calculator.style.display = 'none';
    blog.style.display = 'none';
    articles1.style.display = 'none';
    articles2.style.display = 'none';
    articles3.style.display = 'none';
    registroA.classList.remove( 'active-link' );
    montoA.classList.remove( 'active-link' );
    añadirA.classList.add( 'active-link' );
    blogA.classList.remove( 'active-link' );
    title.innerHTML = 'Añadir';
};
const editarComp = () => {
    registro.style.display = 'none';
    monto.style.display = 'none';
    añadir.style.display = 'none';
    editar.style.display = '';
    calculator.style.display = 'none';
    blog.style.display = 'none';
    articles1.style.display = 'none';
    articles2.style.display = 'none';
    articles3.style.display = 'none';
    registroA.classList.add( 'active-link' );
    montoA.classList.remove( 'active-link' );
    añadirA.classList.remove( 'active-link' );
    blogA.classList.remove( 'active-link' );
    title.innerHTML = 'Editar';
};
const calculatorComp = () => {
    registro.style.display = 'none';
    monto.style.display = 'none';
    añadir.style.display = 'none';
    editar.style.display = 'none';
    calculator.style.display = '';
    blog.style.display = 'none';
    articles1.style.display = 'none';
    articles2.style.display = 'none';
    articles3.style.display = 'none';
    registroA.classList.remove( 'active-link' );
    montoA.classList.remove( 'active-link' );
    añadirA.classList.remove( 'active-link' );
    blogA.classList.remove( 'active-link' );
    title.innerHTML = 'Calculadora';
};
const blogComp = () => {
    registro.style.display = 'none';
    monto.style.display = 'none';
    añadir.style.display = 'none';
    editar.style.display = 'none';
    calculator.style.display = 'none';
    blog.style.display = '';
    articles1.style.display = 'none';
    articles2.style.display = 'none';
    articles3.style.display = 'none';
    registroA.classList.remove( 'active-link' );
    montoA.classList.remove( 'active-link' );
    añadirA.classList.remove( 'active-link' );
    blogA.classList.add( 'active-link' );
    title.innerHTML = 'Blog';
};
const articles1Comp = () => {
    registro.style.display = 'none';
    monto.style.display = 'none';
    añadir.style.display = 'none';
    editar.style.display = 'none';
    calculator.style.display = 'none';
    blog.style.display = 'none';
    articles1.style.display = '';
    articles2.style.display = 'none';
    articles3.style.display = 'none';
    registroA.classList.remove( 'active-link' );
    montoA.classList.remove( 'active-link' );
    añadirA.classList.remove( 'active-link' );
    blogA.classList.add( 'active-link' );
    title.innerHTML = 'Blog';
};
const articles2Comp = () => {
    registro.style.display = 'none';
    monto.style.display = 'none';
    añadir.style.display = 'none';
    editar.style.display = 'none';
    calculator.style.display = 'none';
    blog.style.display = 'none';
    articles1.style.display = 'none';
    articles2.style.display = '';
    articles3.style.display = 'none';
    registroA.classList.remove( 'active-link' );
    montoA.classList.remove( 'active-link' );
    añadirA.classList.remove( 'active-link' );
    blogA.classList.add( 'active-link' );
    title.innerHTML = 'Blog';
};
const articles3Comp = () => {
    registro.style.display = 'none';
    monto.style.display = 'none';
    añadir.style.display = 'none';
    editar.style.display = 'none';
    calculator.style.display = 'none';
    blog.style.display = 'none';
    articles1.style.display = 'none';
    articles2.style.display = 'none';
    articles3.style.display = '';
    registroA.classList.remove( 'active-link' );
    montoA.classList.remove( 'active-link' );
    añadirA.classList.remove( 'active-link' );
    blogA.classList.add( 'active-link' );
    title.innerHTML = 'Blog';
};

const inicioA = document.querySelector( '#inicioA' );
const nosotrosA = document.querySelector( '#nosotrosA' );
const registrarseA = document.querySelector( '#registrarseA' );
const iniciarSesionA = document.querySelector( '#iniciarSesionA' );
const registroA = document.querySelector( '#registroA' );
const montoA = document.querySelector( '#montoA' );
const añadirA = document.querySelector( '#añadirA' );
const calculatorA = document.querySelector( '#calculatorA' );
const blogA = document.querySelector( '#blogA' );

if ( inicioA ) {
    inicioA.addEventListener( 'click', () => inicioComp() );
    nosotrosA.addEventListener( 'click', () => nosotrosComp() );
    registrarseA.addEventListener( 'click', () => registrarmeComp() );
    iniciarSesionA.addEventListener( 'click', () => iniciarSesionComp() );
};

if ( registroA ) {
    registroA.addEventListener( 'click', () => registroComp() );
    montoA.addEventListener( 'click', () => montoComp() );
    añadirA.addEventListener( 'click', () => añadirComp() );
    calculatorA.addEventListener( 'click', () => calculatorComp() );
    blogA.addEventListener( 'click', () => blogComp() );
};


const article1A = document.querySelector( '#article1A' );
const article2A = document.querySelector( '#article2A' );
const article3A = document.querySelector( '#article3A' );

article1A.addEventListener( 'click', () => articles1Comp() );
article2A.addEventListener( 'click', () => articles2Comp() );
article3A.addEventListener( 'click', () => articles3Comp() );

