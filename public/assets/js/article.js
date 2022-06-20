
const title = document.querySelector( '#title' );
const descripcion = document.querySelector( '#descripcion' );
const img = document.querySelector( '#img' );
const content = document.querySelector( '#content' );

const articles = [
    [
        {
            title: 'La importancia sobre las finanzas',
            descripcion: 'Saber cuál es el valor del dinero y cómo administrarlo traen múltiples beneficios a lo largo de sus vidas',
            img: 'assets/img/1.1.jpg',
            content: `
                <h1>Buenas prácticas en las finanzas</h1><br>
                <p>Saber cuál es el valor del dinero y cómo administrarlo de manera conveniente a través de la práctica y de hábitos traen múltiples beneficios a lo largo de sus vidas. Ahorrar está enfocado en preservar el dinero, a metas cercanas y al acceso rápido del dinero. Buenas prácticas en las finanzas Es importante aprender a tomar decisiones. En este sentido, puedes aprovechar tu primera mesada o domingo para adquirir conocimientos sobre el ahorro. Al momento de dar a conocer las finanzas es fundamental hablar sobre la importancia de establecer objetivos, de esta manera, será más fácil aprender a administrar el dinero y saber cómo alcanzar esas metas.</p><br><br>
                <h1>¿Cómo fomentar el ahorro en los niños?</h1><br>
                <p>¿Cómo fomentar el ahorro en los niños? La cultura del ahorro es un elemento de suma importancia en la educación financiera de tus hijos. Descubre cómo enseñar a los niños a ahorrar y ayúdalos a construir hábitos que los beneficiarán por el resto de sus vidas. El ahorro se ha convertido en una necesidad actual, pues es imprescindible para alcanzar grandes metas de la vida cómo comprar una casa o un automóvil. Como consecuencia, es un hábito elemental dentro de la cultura financiera, y por lo mismo, muchos padres se plantean la misma pregunta: ¿Cómo fomentar el ahorro en los niños? Es importante proporcionar a los menores diferentes herramientas para fomentar la administración de su dinero. Entre antes comiencen a practicar, más grande será la posibilidad de que aprendan y lo utilicen para su bienestar en el futuro.
                1. Establece una paga semanal Es una buena forma de enseñarle a tus hijos que el dinero viene del trabajo. Establece alguna condición que te gustaría que cumplan cada semana para entregarles un poco de dinero.
                2. Pídeles que te cuenten qué quieren hacer con el dinero Además de sus compras a corto plazo, platiquen sobre salidas o productos que les gustaría realizar a mediano o largo plazo. Ayúdalos a calcular cuánto deberían guardar cada semana para alcanzar su meta de ahorro en el tiempo que ellos decidan.
                3. Una vez que tengan una meta de ahorro, planeen cómo lograrlo Esta es una manera didáctica de mostrarles que el dinero es limitado y en caso de gastarlo todo no podrán comprar otras cosas. Por otro lado, es bueno explicarles que no necesitan ahorrar absolutamente todo, pueden administrar una parte para comprar lo que quieren en el momento.
                4. Abre con ellos una cuenta de ahorro Al tener una cuenta de ahorro podrán conocer cómo funciona el mundo financiero, entenderán mejor los términos bancarios y tendrán la posibilidad de revisar su saldo mientras desarrollan el hábito del ahorro. Conoce las ventajas de una cuenta digital para niños.</p><br><br>
            `
        },
        {
            title: 'Consejos para el regreso a clases',
            descripcion: 'La recomendación es planificar con anticipación para así no llevarse sorpresas de último momento.',
            img: 'assets/img/1.2.jpg',
            content: `
                <h1>Considera estos consejos para el regreso a clases</h1><br>
                <p>Entre los consejos y tips para ahorrar en el regreso a clases, se encuentran:
                Compra con anticipación: Otro de los consejos importantes es tratar de no dejar para el último minuto la adquisición de los artículos escolares que serán necesarios. Si te das el tiempo de buscar con anticipación, podrás encontrar productos en distintos negocios, para así elegir el más conveniente.<br><br>
                El sueño es fundamental: Una vez que se terminan las vacaciones, hay que acostumbrarse a dormir más temprano. Este proceso puede ser un poco complicado al comienzo, pero es algo muy importante ya que deberán despertar aún más temprano.<br><br>
                Ahorra: Tal vez ya no alcanzaste a ahorrar para las compras de útiles proximas, pero mientras sigan en el colegio, deberás continuar gastando. Por eso, el consejo es establecer una meta de ahorro de forma constante y así lograr juntar dinero durante todo el año para afrontar con tranquilidad la próxima lista de útiles.<br><br>
                Ahorrar ayudará a tus hijos a administrar sus gastos para alcanzar sus metas financieras en la adultez, prevenir el sobreendeudamiento y tener un respaldo en caso de emergencia. ¿Cómo fomentar el ahorro en los niños? La cultura del ahorro es un elemento de suma importancia en la educación financiera de tus hijos. Descubre cómo enseñar a los niños a ahorrar y ayúdalos a construir hábitos que los beneficiarán por el resto de sus vidas. El ahorro se ha convertido en una necesidad actual, pues es imprescindible para alcanzar grandes metas de la vida cómo comprar una casa o un automóvil. Como consecuencia, es un hábito elemental dentro de la cultura financiera, y por lo mismo, muchos padres se plantean la misma pregunta: ¿Cómo fomentar el ahorro en los niños? Es importante proporcionar a los menores diferentes herramientas para fomentar la administración de su dinero. Entre antes comiencen a practicar, más grande será la posibilidad de que aprendan y lo utilicen para su bienestar en el futuro.</p><br><br>
            `
        },
        {
            title: 'Finanzas para los niños',
            descripcion: 'Es recomendable que el manejo del dinero para niños y niñas se inicie aprovechando una buena financiera.',
            img: 'assets/img/1.3.jpg',
            content: `
                <h1>Enseñanzas sobre el manejo del dinero para niños y niñas</h1><br>
                <p>La enseñanza sobre finanzas para niños y niñas les ayuda, desde temprana edad, a saber cuál es el valor del dinero y cómo administrarlo de manera conveniente a través de la práctica y de hábitos que traerán múltiples beneficios a lo largo de sus vidas.
                Por ello, es recomendable que el conocimiento del manejo del dinero para niños y niñas se inicie con pequeñas acciones aprovechando herramientas financieras.<br><br>
                <h1>¿Cómo fomentar el ahorro en los niños?</h1><br>
                <p>Hay aspectos básicos para entender cómo funciona el manejo del dinero para niños y niñas, los cuales son:<br>
                - En las finanzas es necesario explicar cuál es el valor de cada moneda y billete.<br>
                - Es esencial que los menores aprendan que el dinero se obtiene a cambio de un servicio.<br>
                Buenas prácticas en las finanzas<br>
                - Exponerles a los menores temas relacionados con las finanzas para niños y niñas les permite aprender a tomar decisiones.<br>
                - En este sentido, puedes aprovechar su primera mesada o domingo para brindarles conocimientos sobre el ahorro.<br>
                - Una vez que reciban este dinero enséñales prácticas sencillas que sean ideales para el manejo del dinero para niños y niñas.<br><br>
                Claro, no se trata de abrumarlos con conceptos, número y términos que les resulten aburridos, por el contrario, hay que abordar esos temas de forma casual y enseñarles con el ejemplo. De nada sirve hablar de finanzas y de la necesidad de construir y cuidar el patrimonio, si se actúa de manera contraria no controlando las deudas y realizando gastos superficiales, no planeados.
                Para iniciar la educación financiera desde temprano, se puede empezar por generar en los niños metas de ahorro y demostrar que el dinero debe cuidarse y no desperdiciarse o gastarse en lo primero que se desea.
                <br><br>
                Dato curioso: Visa ofrece el juego Fútbol financiero para promover el interés de los niños y jóvenes en temas financieros, el cual podrás jugarlo dando clic aquí.<br><br>
            `
        },
        {
            title: 'Los niños y las tarjetas de débito',
            descripcion: 'Muchos bancos cuentan con tarjetas de débito diseñadas exclusivamente para niños y adolescentes. En ellas podrán ir creando el hábito del ahorro.',
            img: 'assets/img/1.4.jpg',
            content: `
                <h1>Los niños y su primera tarjeta de débito</h1><br>
                <p>Como bien se dice, la educación comienza desde casa. Así que si tienes niños, desde pequeños incúlcales el valor del dinero, pues conforme vayan creciendo harán un uso responsable de éste, pero ¿cómo hacerlo? Muchas instituciones bancarias cuentan con tarjetas de débito que están diseñadas exclusivamente para niños y adolescentes. En ellas podrán guardar el dinero que reciban e irán creándose el hábito del ahorro.</p><br><br>
                <h1>Los atractivos</h1><br>
                <p>Se busca que los niños y adolescentes de hasta 17 años 11 meses, tengan los mismos beneficios que un adulto cuando está utilizando cualquier tipo de tarjeta bancaria. La cuenta estará a su nombre, tendrán su propio NIP y plástico, podrán realizar retiros y depósitos de efectivo en cajeros automáticos, sucursales bancarias y establecimientos autorizados y pagar con la tarjeta como cualquier otra. Según el banco y las características de las propias tarjetas, podrán participar en las diferentes promociones ofrecidas.</p><br><br>
                <h1>El trámite</h1><br>
                <p> El tutor: aunque sea una cuenta infantil, como padre o tutor, deberás acompañar al niño o adolescente a realizar el trámite.
                La documentación: la mayoría de las instituciones bancarias solicitan identificación oficial con fotografía, acta de nacimiento del menor y comprobante de domicilio, además de que se deberá firmar un contrato por el servicio. Ve preparado con los documentos.
                La apertura: los montos por apertura pueden variar según el banco, infórmate con cuánto dinero la puedes abrir y si además es necesario contar con una cantidad mínima en la cuenta.</p><br><br>
                <h1>Otras opciones</h1><br>
                <p>Si lo que estás buscando es que ahorren, hay cuentas bancarias especiales que pueden dar rendimientos. No es necesario abrirlas con grandes cantidades y se pueden realizar movimientos como cualquier otra cuenta. Acudan a la sucursal bancaria que más les interese a preguntar por los servicios a los que pueden acceder los pequeños de la familia.</p><br><br>
            `
        },
        {
            title: 'La necesidad de una educación financiera',
            descripcion: 'Por medio de la educación financiera se puede planificar de mejor manera el futuro.',
            img: 'assets/img/1.5.jpg',
            content: `
                <h1>La necesidad de una educación financiera</h1><br>
                <p>Dar una buena educación financiera a nuestros hijos consiste en enseñar conceptos, términos, productos financieros y estrategias útiles, con la finalidad de desarrollar las habilidades que se requieren en la toma de buenas decisiones, De esta forma, se construye el camino del éxito en las finanzas. La educación financiera facilita las elecciones, puesto que genera las estructuras mentales necesarias para evaluar riesgos y considerar las ganancias potenciales; es decir, para saber poner en una balanza las condiciones positivas y las negativas de una situación y decidir los pasos a seguir con bases sólidas. Por medio de la educación financiera se puede planificar el futuro, elegir los mejores instrumentos financieros, y estar siempre al tanto de lo que ocurre en el mundo que nos rodea.</p><br><br>
                <h1>¿Dónde/cómo/cuándo se aprende?</h1><br>
                <p>Empecemos por el dónde y el cómo. La educación financiera se adquiere de manera informal y formal (escolarizadamente), es decir, se aprende de muchos lugares diferentes, comenzando por: El hogar/la familia. El manejo de las finanzas en la familia se aprende tanto de manera consciente como inconsciente. La manera en que los padres y hermanos mayores manejan los aspectos económicos de sus vidas, deja una huella a los integrantes más pequeños de la familia. Si se inculca el ahorro, el cuidado del dinero, el disfrute de sus beneficios y se habla de las decisiones financieras en familia, en la mente de los hijos se genera un aprendizaje duradero. Una familia puede mantener sus finanzas sanas cuando establece comunicación entre sus miembros. En la escuela. Éste es el segundo lugar en donde los niños pueden y deben aprendee sobre educación financiera. Incluso si no se lleva una materia en específico que trate sobre los temas financieros, se enseña de otras formas; por ejemplo, cuando se organizan eventos para apoyar ciertas causas o cuando participan en actividades como cooperativas, kermeses, ferias, etcétera. Medios de comunicación. Lo que los niños ven en televisión, escuchan en radio o experimentan en Internet condiciona también su aprendizaje financiero. Por ello, es conveniente estar al tanto de los ejemplos que los medios masivos transmiten sobre el tema. Juegos. Como sucede con la educación en general, los juegos pueden resultar muy útiles para fomentar el aprendizaje, puesto que, si éste se hace de una manera divertida o casual, suele ser más efectivo. Existen sitios donde los niños pueden acceder a material didáctico lúdico formativo en esta materia, como es www.condusef.gob.mx, que pone a disposición de los usuarios, en su portal electrónico, un espacio para la educación financiera de niños, jóvenes, adultos, tercera edad y familias. Asimismo, en este mismo sitio electrónico, Hablemos ahora del cuándo es propicio iniciar esta educación en los niños. La educación financiera debe comenzarse a impartir desde la infancia, pues es en este período de la vida cuando la personalidad se conforma. Por lo anterior, resulta conveniente dar una buena educación en cuanto al manejo de los recursos a los hijos desde la primera infancia (cuatro o cinco años en adelante). </p><br><br>
            `
        },
    ],
    [
        {
            title: '¿Cuáles son los beneficios de ahorrar?',
            descripcion: 'A continuación aprenderásuna serie de ventajas de tener la disciplina del ahorro.',
            img: 'assets/img/2.1.jpg',
            content: `
                <h1>¿Cuáles son los beneficios de ahorrar dinero?</h1><br>
                <p>A continuación, veremos una serie de ventajas de tener la disciplina del ahorro. #1 Nos permite acumular riquezas para el futuro Las personas que ahorrar con disciplina desde una edad joven, pueden aspirar a un futuro financiero mejor. La riqueza se va acumulando a lo largo de los años, el dinero tiene un efecto multiplicador a lo largo plazo. Aunque el ahorro requiere de sacrificios a corto plazo, después de varios años de ahorro combinado con inversión y el efecto del interés compuesto, podremos disfrutar de mejores condiciones financieras en el futuro. #2 Alcanzar nuestros planes y metas Debemos determinar que metas son medibles y alcanzables así, una persona puede plantearse objetivos de ahorro de una manera mucho más sencilla y realista. Una de las principales ventajas de ahorrar, es que nos permite llevar a cabo muchos de nuestros planes y alcanzar nuestras metas, siempre que sean realistas. #3 No hay necesidad de endeudarse Todos sabemos que las entidades financieras ofrecen muchas opciones de compra y pago, también conocidas como préstamos. Sin embargo, una de las grandes ventajas del ahorro es que podemos pagar con dinero en efectivo, por lo que no tenemos que endeudarnos para conseguir nuestros objetivos. También nuestros ahorros nos van a servir para eliminar las posibles deudas que hayamos contraído. Pero si tenemos el buen hábito de ahorrar, en muchas ocasiones no será necesario contraer deudas. #4 Posibilidad de realizar inversiones Otra de las grandes ventajas de tener ahorros es, la posibilidad de destinar una parte a las inversiones y con ello conseguir hacer crecer nuestro patrimonio. Debemos tener especial cuidado dónde invertimos nuestro dinero, no tiene ningún sentido destinarlo a inversiones que desconocemos. Para aquellas personas que no desean correr riesgos con sus ahorros las cuentas remuneradas son una buena opción. #5 Emergencias Las emergencias y responsabilidad suceden con frecuencia en nuestras vidas, por lo que es necesario planificar y anticipar. También es importante estar preparado para posibles eventos que puedan suceder, una enfermedad, reparaciones, desempleo, etc. Al tener ahorros estos repentinos gastos no alterarán nuestra economía personal, sino que tendrás a dónde recurrir para solventar dichas emergencias.</p><br><br>
            `
        },
        {
            title: '¿Por qué es importante ahorrar?',
            descripcion: 'Obtén un colchón de seguridad, atrévete a ingeniar nuevos proyectos, esto cuando entiendas por qué es importante ahorrar.',
            img: 'assets/img/2.2.jpg',
            content: `
                <h1>¿Por qué es importante ahorrar?</h1><br>
                <p>¡Descubre diferentes razones de por qué es importante ahorrar! Prepárate para el futuro y administra mejor tus finanzas desde hoy. Puedes ser parte de la cultura del ahorro al crear buenos hábitos en tu manejo de las finanzas y que esto te traiga muchos beneficios para el futuro. Obtén un colchón de seguridad, atrévete a ingeniar nuevos proyectos, esto y más podrías conseguir cuando entiendas por qué es importante ahorrar. Entre antes comiences, mayores resultados son los que puedes llegar a obtener y así mantener una buena salud financiera en el tiempo.</p><br><br>
                <h1>¿Por qué deberías ahorrar dinero para el futuro?</h1><br>
                <p>Estas son 6 razones por las cuales deberías ahorrar dinero para el futuro:

                1. Facilita pagar los estudios: Ya sea los tuyos (cursar un diplomado, especialización o posgrado) como los de tus hijos o hijas. Por supuesto, depende de la institución y el grado académico que se cursará, recuerda que en el futuro, deberás invertir no solamente en la colegiatura, sino en recursos de estudio, materiales para proyectos y en los posteriores gastos de titulación. Contar con un fondo de ahorros previamente construido te ayudará a pagar los estudios, te quitarás un peso de encima y tendrás tranquilidad cuando lleguen las fechas de pago.
                2. Es un apoyo cuando quieres emprender: ¿Algún proyecto en mente? ¿Un emprendimiento que deseas concretar? Si tienes un fondo de ahorros destinado a este propósito, serás capaz de usarlo sin afectar las finanzas de tu hogar.
              Igualmente, existe la opción de pedir préstamos a entidades financieras, con tal de llevar a cabo aquel emprendimiento que tanto deseas. Eso sí, procura ir ahorrando poco a poco y recuerda que empezar un negocio desde cero requiere una inversión inicial y bastante esfuerzo.
                3. Puedes liquidar deudas: Deudas debido a las compras, así como los saldos de las tarjetas de crédito, impactan las finanzas y puede provocar una bola de nieve que vaya creciendo en el tiempo en caso de no puedas pagar tus compromisos en las fechas establecidas.
              Un fondo de ahorro que tengas disponible para utilizar en un determinado momento, es algo que te aportará mucho en tu economía personal, especialmente en caso de enfrentar alguna deuda.
                4. Previene contra imprevistos: ¿Cómo ahorrar para el futuro? Recuerda que no puedes predecir accidentes o emergencias médicas, pero sí puedes estar preparado en caso de que suceda.
              Tener un fondo de emergencias te ayudará a cubrir los gastos de un desperfecto mecánico en tu automóvil, las facturas del veterinario de tu mascota, medicamentos para un tratamiento médico e incluso una visita al hospital. De este modo, tus finanzas mensuales no serán afectadas por estos gastos imprevistos.
                5. Permite invertir en tu patrimonio: Ahorrar dinero con una meta clara, como la de construir una casa o adquirir un hogar propio, son grandes impulsores de la cultura del ahorro.
              Si deseas dejar de pagar renta mes con mes y sueñas con tener una vivienda propia, el primer paso es ahorrar pensando en un monto que puedas reunir para el enganche de una casa o departamento.
                6. Es una ayuda para el retiro: ¡Llegará eventualmente! Es posible que en tu empleo existan prestaciones de jubilación o que estés afiliado a instituciones de gobierno, las cuales te otorguen una pensión.
              No obstante, para mejorar tu calidad de vida durante esos años, un fondo de jubilación resultará crucial. Y es que resulta probable que todavía quieras realizar proyectos o completar sueños. Además, tener un monto extra de ahorro te permitirá invertirlo sin que afecte tu estilo de vida.</p><br><br>
            `
        },
        {
            title: 'Beneficios de la inversión',
            descripcion: 'Conoce cuáles son los beneficios de la inversión, para cuando lo hagas, lo hagas de la mejor forma.',
            img: 'assets/img/2.3.jpg',
            content: `
                <h1>¿Cuáles son los beneficios de la inversión?</h1><br>
                <p>Revisa esta información para que conozcas cuáles son los beneficios de la inversión, para que cuando inviertas, lo hagas de la mejor forma.
                El concepto de inversión no siempre se asocia con una actividad segura que sea del gusto de todos. Nuestra educación financiera convencional, no te dirá que realices inversiones a menos de que tengas un perfil arriesgado. Por el contrario, cualquier asesor de finanzas personales argumentará que las inversiones son esenciales en la búsqueda de la solvencia financiera. En la realidad, todo depende de tus metas a corto, mediano o largo plazo y de tu perfil como inversionista, pues existen diferentes planes diseñados para todos los tipos de inversión que se adaptan a casi cualquier situación financiera o preferencia.</h1><br>
                <p></p><br><br>
                <h1>Conoce cuáles son los beneficios de la inversión</h1><br>
                <p>Es importante que sepas cuál es la diferencia entre invertir y ahorrar. Para el caso de la salud financiera, ahorrar es sólo el primer paso, puesto que el dinero que no se ponga a trabajar pierde valor en el tiempo. La realidad es que es cierto debido a un factor macroeconómico llamado inflación, que resta valor a tu ahorro por el encarecimiento de los bienes o servicios. Tus ahorros, no pueden competir con ese aumento en el precio y por tanto pierde poder de compra con el tiempo. Las inversiones se encargan de hacer que ese dinero empiece a generar rendimientos que le ayudan a tus ahorros a seguir el ritmo de la inflación e incluso superarlo. Para conocer en concreto cuáles son los beneficios de la inversión, debes primero decidir de qué inversión estás hablando según el perfil de inversionista que tienes. A los que no quieren muchos riesgos y, por lo tanto, pocas ganancias, se le conoce como “conservadores”. Los “moderados” son los que buscan mejores rendimientos, pero con riesgos un poco más controlados y, finalmente, los perfiles más “arriesgados” son los que no temen invertir considerando un mayor riesgo sabiendo que pueden obtener mejores rendimientos que el resto.<br><br>
            `
        },
        {
            title: 'Cómo funciona una tarjeta de crédito?',
            descripcion: 'Conoce cuáles son los beneficios de la inversión, para cuando lo hagas, lo hagas de la mejor forma.',
            img: 'assets/img/2.4.jpg',
            content: `
                <h1>¿Cómo funciona una tarjeta de crédito?</h1><br>
                <p>Identifica cómo funciona una tarjeta de crédito y cuáles son las ventajas de los créditos revolventes.
                En el uso de diferentes métodos de pago, las tarjetas de crédito resultan ser una gran solución para financiar compras del día a día y facilitarte la vida. No obstante, antes de obtener una es vital que estés informado de los aspectos básicos de cómo funciona una tarjeta de crédito y conozcas lo que significa un crédito revolvente. Solo así podrás administrar tus finanzas de acuerdo con tus necesidades y evitar la creación de problemas económicos.</p><br><br>
                <h1>Primeros pasos</h1><br>
                <p>Lo primero que debes saber es que las tarjetas de crédito son emitidas por entidades financieras acreditadas y como tarjetahabiente, puedes comprar una variedad de productos y servicios en los miles de establecimientos que aceptan esta forma de pago sin la necesidad de disponer de efectivo.
                Para adquirir los bienes que deseas, solo es cuestión de que presentes tu tarjeta de crédito en el comercio, esta sea aceptada y firmes un voucher para autorizar tu operación. Básicamente, en este proceso el banco te presta el importe total de tu compra, el cual le está pagando al comercio, para que luego liquides tu deuda con la institución bancaria.
                Entonces ¿cómo saber cuánto dinero te puede prestar tu banco? Bien, todo este procedimiento es posible debido a que este te otorga una línea de crédito, es decir, una cantidad limitada de préstamo que dependerá principalmente de tu nivel de ingresos, tu capacidad de pago e historial crediticio. Claro, esta línea puede aumentarse poco a poco si pagas a tiempo y de manera responsable.
                Cabe mencionar que no puedes pasarte del límite de crédito que tienes disponible, y en este caso, las tarjetas de crédito se distinguen por su revolvencia.</p><br><br>
                <h1>¿Qué significa la revolvencia?</h1><br>
                <p>Se trata de un crédito que puedes utilizar repetidamente y el cual se relaciona directamente con tu línea de crédito, esto quiere decir que al momento de pagar con tu tarjeta, cada uno de tus gastos se descontarán de manera inmediata de tu línea. Pero al ir pagando tu deuda, ya sea en cuotas, automáticamente se vuelve a liberar esa cantidad del préstamo para que la utilices.
                En sí es un ciclo donde obtienes un préstamo, lo pagas y vuelves a tener ese mismo préstamo. Así de sencillo.</p><br><br>
                <h1>¿Qué debes tomar en cuenta?</h1><br>
                <p>Uno de los aspectos que no debes omitir es que al tratarse de un préstamo, tendrás que pagarlo de alguna u otra forma. Así que a través de tu tarjeta tienes la posibilidad de diferir tus pagos en mensualidades o hacer un solo pago total. Sin embargo, se pueden incorporar intereses o comisiones en el caso de elegir el esquema a mensualidades y, sobre todo si un mes dejas de pagar, lo que definitivamente te ocasionará el aumento de la deuda inicial.
                Por esta razón, es mejor que contemples la posibilidad de liquidar en un solo pago tu deuda o aprovechar las promociones de meses sin intereses en donde tu pago será diferido a los meses que elijas sin la preocupación de generar estos recargos.
                Asimismo, contempla que con tu tarjeta de crédito te llegará mensualmente tu Estado de Cuenta con el detalle de tus compras, intereses, comisiones, pagos efectuados y hasta disposición de efectivo. Por ello, te mencionamos algunos términos que son importantes conocer:
                Fecha de corte. Es el día que el banco determina para hacer el resumen de tus movimientos crediticios. Si en el Estado de Cuenta aparece como fecha de corte el día 9 de cada mes, entonces se hará un cálculo de tus operaciones mensuales a partir de los días 10 hasta el 9. Así que cualquier otro monto que se realice después de la fecha de corte, se reflejará en el siguiente Estado de Cuenta. Pago mínimo. Es la cantidad mínima que puedes pagar para estar al corriente en tu crédito. Por lo general, es un porcentaje determinado que varía entre un 5 a 10 por ciento de tu deuda total. Saldo al corte. Se refiere a la cantidad adeudada que tienes hasta la fecha de corte. CAT (Costo Anual Total). Cualquier costo que tendrás que pagar por utilizar tu tarjeta de crédito. Por ejemplo, intereses, comisiones o cuota anual. Teniendo en cuenta cómo funciona una tarjeta de crédito, serás capaz de ajustar y gestionar tus compras para el bien de tus finanzas.</p><br><br>
            `
        },
        {
            title: 'Recomendaciones para tus finanzas',
            descripcion: 'Presta atención a los siguientes consejos para mejorar tus finanzas y evitar gastos innecesarios.',
            img: 'assets/img/2.5.jpg',
            content: `
                <h1>Recomendaciones para mejorar tus finanzas</h1><br>
                <p>A pesar de probablemente no tener un gran ingreso de dinero mensualmente, puedes comenzar a aplicar estas recomendaciones y familiarizarte con un método que en el futuro te ayudará indudablemente. Presta atención a los siguientes consejos para mejorar tus finanzas y evitar gastos innecesarios. Recibir consejos sobre finanzas personales suele ser un poco confuso, pues se introducen términos que no son tan comunes. Por ello, la siguiente lista está enfocada en hacer las cosas más sencillas y obtengas las mejores claves para darle un buen manejo a tu dinero.<br>

                1. Define metas financieras: Es muy difícil llegar a un lugar si no sabes a dónde vas. El primer paso para dar un buen manejo a tu dinero es saber qué es lo que quieres lograr con él. Las metas deben ser a corto, mediano y largo plazo.<br>
                2. Identifica la totalidad de tus ingresos: Al identificar de dónde provienen tus ingresos podrás asignar un mejor valor a tu tiempo, de forma que le podrás dedicar especial atención a las actividades que te hacen obtener dinero.<br>
                3. Haz una lista con todos tus gastos: Hacer una lista de todos tus gastos es uno de los puntos más importantes, pues te ayuda a darte cuenta en qué estás gastando tu dinero y cuánto estás gastando. Si te cuesta trabajo, puedes ayudarte de la tecnología, pues existen aplicaciones móviles para anotar tus gastos.<br>
                4. Plantéate cómo reducir, en lo que se pueda, tus gastos fijos: Los gastos fijos son, por ejemplo, renta, luz, agua, comida o gas. Gastar menos en los gastos fijos es posible, pues sólo debes hacerte consciente del uso que les das e identificar si puedes ahorrar un poco en ellos.<br>
                5. Plantéate eliminar la mayor cantidad de gastos variables que puedas: Los gastos variables son aquellos que no son necesarios para subsistir. Para disminuirlos debes eliminar los que no retribuyen positivamente en tu vida.<br>
                6. Haz un presupuesto mensual alineado con tus metas: Un presupuesto es la guía que debe dictar cómo gastar tu dinero y te dirá con precisión con cuánto dispones para cada día y para cada actividad. Alinear tu presupuesto mensual con tus metas, te permitirá trazar un camino más preciso para conseguirlas.<br>
                7. Establece tus límites y aprende a decirte “no me alcanza”: Si algún gasto o actividad se sale de tu presupuesto, evítalo por completo. La importancia de decir “no me alcanza”, radica en saber con precisión cuáles son los gastos innecesarios que se salen de tu presupuesto.<br>
                8. Analiza los meses sin intereses: Los meses sin intereses son grandiosas formas de comprar sin pagar más por lo que se adquiere. Sin embargo, se debe tener precaución de las condiciones en las que se adquiere un plan de esta naturaleza o la cantidad de estos planes con los que se puede cumplir al mismo tiempo.<br>
                9. Cuidado con los gastos “hormiga”: Los gastos hormiga, son aquellos que no representan un gran desembolso en un inicio, pero la suma de ellos hace que se conviertan en una gran fuga de dinero. Se deben identificar, pues son muy complicados de erradicar.<br>
                10. Evita las compras por impulso: Comprar por impulso es muy peligroso. Las compras por impulso se parecen a los gastos hormigas debido a que se realizan cuando se adquieren productos innecesarios. La diferencia es que, generalmente, son productos más caros y no tardarás en darte cuenta de que no lo necesitabas. </p><br><br>
            `
        },
        {
            title: 'Tips que puedes practicar',
            descripcion: 'El dinero está en todos lados y qué mejor que aprender a manejarlo desde una edad temprana.',
            img: 'assets/img/2.6.jpg',
            content: `
                <h1>Tips que puedes practicar</h1><br>
                <p>El dinero está en todos lados y qué mejor que aprender a manejarlo desde una edad temprana. Estas son algunas claves para que construyas una relación sana con el dinero:</p><br><br>
                <h1>Practica la elaboración de un presupuesto</h1><br>
                <p>Una vez que hayas reunido algo de dinero en efectivo, trata de saber cuánto dinero dispones para realizar cierta actividad o compra. La idea es que aprendas a ajustarte a una cierta cantidad de capital o que busques alternativas para hacerlo crecer y lograr tu meta. Este es un ejercicio que te ayudará a ver cómo manejas el dinero en casa.</p><br><br>
                <h1>costo de oportunidad</h1><br>
                <p>En la vida normalmente tomamos algo y renunciamos a otra cosa cuando se trata de decisiones financieras. Priorizamos ciertas compras en lugar de otras y esto es lo que necesitas aprendera decidir, por ejemplo: ¿Gastar tu dinero en un videojuego o ahorrarlo para renovar tu celular antiguo?</p><br><br>
                <h1>Hazte consciente del peligro de endeudarse</h1><br>
                <p>Una tarjeta de crédito no es una extensión de los recursos económicos de una persona y usarla a diestra y siniestra podría cavar un agujero financiero profundo del que tardarías años en salir y podrías acumular intereses significativos en el camino. Como adolescente, es difícil tener una independencia financiera, pero estás en el camino y tiene muchas oportunidades para mejorar tus habilidades de administración del dinero y desarrollar hábitos financieros saludables que te beneficiarán el resto de la vida.</p><br><br>
            `
        },
    ],
    [
        {
            title: '¿A qué palzo conviene invertir?',
            descripcion: 'Permite establecer planes a futuro con mayor certeza, considerando las necesidades del inversionista.',
            img: 'assets/img/3.1.jpg',
            content: `
                <h1>Corto, mediano y largo plazo: ¿cuál me conviene para invertir?</h1><br>
                <p>Una inversión a plazos adecuada permite establecer planes a futuro con mayor certeza, considerando las necesidades del inversionista. Para incrementar el patrimonio, las cuentas de ahorro y los fondos de inversión, son clave. Sin embargo, se deben considerar las metas y las inversiones a plazo más convenientes, es decir, el tiempo planeado para disponer de los recursos para alcanzar los objetivos. Por ello, se deben explicar las diferencias entre inversión y ahorro, los plazos de inversión y cuándo es mejor utilizarlos para cumplir metas.</p><br><br>
                <h1>Ahorro o inversión: ¿Qué conviene más?</h1><br>
                <p>Ahorrar está enfocado en preservar el capital, a metas cercanas y al acceso rápido del dinero. No obstante, los intereses que se reciben son mínimos y están relacionados con el importe ahorrado. Por otra parte, los fondos de inversión generan mayor rentabilidad, pero sus riesgos dependen de factores del mercado y la bolsa de valores. Además, no se obtiene el dinero de inmediato. Es recomendable asesorarse con profesionales para conocer los beneficios y los riesgos para el bien del patrimonio. Definir el plazo de una inversión para las metas Para emplear adecuadamente y entender cómo funcionan las inversiones a plazo fijo, corto, mediano y largo, hay que establecer los objetivos según el tiempo que se quieran conseguir.</p><br><br>
                <h1>Tipos de inversión a corto plazo</h1><br>
                <p>Es ideal para recibir liquidez inmediata o para metas a un futuro cercano. Tiene un horizonte de tres meses o hasta de un año, y se puede disponer del dinero antes del tiempo establecido sin recibir penalizaciones. Su rendimiento es bajo, pero da protección económica. Puede considerarse para comprar una laptop en tres meses o reparar la casa en 6 meses. Conviene crear una cuenta de ahorro disponible 24 horas para casos de emergencia. Tipos de inversión a mediano plazo Es ideal para metas futuras entre 1 a 5 años. Estos plazos ofrecen tasas atractivas, pero no se puede disponer de los recursos durante un tiempo. Una opción para invertir son los fondos de inversión, ya que con cierto margen de riesgo se generan más rendimientos. Se puede pensar en este tipo de plazo para comprar un auto.</p><br><br>
            `
        },
        {
            title: '¿Qué es un fondo de inversión?',
            descripcion: 'Se tratan de mecanismos que reúnen a un grupo de personas, para que inviertan sus ahorros en conjunto',
            img: 'assets/img/3.2.jpg',
            content: `
                <h1>¿Qué es un fondo de inversión?</h1><br>
                <p>Un fondo de inversión es un tipo de inversión en conjunto que te permite ingresar a un portafolio de valores como acciones o bonos en el mercado nacional e internacional. Los fondos de inversión en México se tratan de mecanismos que reúnen a un grupo de personas como tú, para que inviertan sus ahorros en conjunto y así puedan acceder a mejores oportunidades, es por eso que puedes comenzar a invertir desde cantidades muy bajas. En general, un fondo de inversión está compuesto por una canasta que incluye acciones, con renta variable y bonos de renta fija, generando distintas combinaciones. La composición cambia en cada fondo, dependiendo del riesgo y el horizonte de tiempo. A lo largo del período, el administrador del fondo venderá y comprará títulos para alcanzar el rendimiento objetivo. Tipos de fondos disponibles Existen fondos de inversión con distintas características que puedes adaptar a tu perfil y necesidades. Podemos clasificarlos de acuerdo a su horizonte de tiempo: Corto plazo Son inversiones de muy bajo riesgo, para ayudarte a cubrir imprevistos o aprovechar oportunidades. Su horizonte de inversión es de solo unos meses y puedes obtener tu dinero diariamente. Mediano plazo Son útiles para que planifiques un viaje importante, o para que puedas comprar bienes como un auto nuevo. Se caracterizan por equilibrar confiabilidad y rendimiento. Tienen un horizonte de 1 año. Largo plazo Tienen un horizonte de varios años, y están diseñados para grandes metas y proyectos de largo plazo, como la compra de tu nueva casa, la educación de tus hijos e incluso como apoyo para el retiro.</p><br><br>
                <h1>¿Cuál es el fondo de inversión más rentable?</h1><br>
                <p>El fondo de inversión más rentable es el de mayor plazo ya que al final puedes tener mayores ganancias debido a que tu inversión puede ir aumentando precisamente por el rendimiento que vas generando con los años. Sin embargo una vez que comienzas a invertir, lo ideal es diversificar tu inversión, es decir poner tus ahorros en distintos fondos y no solo en fondos de inversión, sino también considerar otros mecanismos como cedes o divisas, entre otros. De esta manera puedes ir experimentando con distintos niveles de plazo, riesgo y rendimiento.</p><br><br>
            `
        },
        {
            title: 'Los beneficios de la inversión',
            descripcion: 'Las inversiones se encargan de hacer que ese dinero empiece a generar rendimientos a seguir el ritmo de la inflación',
            img: 'assets/img/3.3.jpg',
            content: `
                <h1>¿Cuáles son los beneficios de la inversión?</h1><br>
                <p>Revisa esta información para que conozcas cuáles son los beneficios de la inversión, los rendimientos asociados y puedas hacer crecer tu dinero de forma segura. El concepto de inversión no siempre se asocia con una actividad segura que sea del gusto de todos. Nuestra educación financiera convencional, no te dirá que realices inversiones a menos de que tengas un perfil arriesgado. Por el contrario, cualquier asesor de finanzas personales argumentará que las inversiones son esenciales en la búsqueda de la solvencia financiera. En la realidad, todo depende de tus metas a corto, mediano o largo plazo y de tu perfil como inversionista, pues existen diferentes planes diseñados para todos los tipos de inversión que se adaptan a casi cualquier situación financiera o preferencia.</p><br><br>
                <h1>Conoce cuáles son los beneficios de la inversión</h1><br>
                <p>Es importante que sepas cuál es la diferencia entre invertir y ahorrar. Para el caso de la salud financiera, ahorrar es sólo el primer paso, puesto que el dinero que no se ponga a trabajar pierde valor en el tiempo. La realidad es que es cierto debido a un factor macroeconómico llamado inflación, que resta valor a tu ahorro por el encarecimiento de los bienes o servicios. Tus ahorros, no pueden competir con ese aumento en el precio y por tanto pierde poder de compra con el tiempo. Las inversiones se encargan de hacer que ese dinero empiece a generar rendimientos que le ayudan a tus ahorros a seguir el ritmo de la inflación e incluso superarlo. Para conocer en concreto cuáles son los beneficios de la inversión, debes primero decidir de qué inversión estás hablando según el perfil de inversionista que tienes. A los que no quieren muchos riesgos y, por lo tanto, pocas ganancias, se le conoce como “conservadores”. Los “moderados” son los que buscan mejores rendimientos, pero con riesgos un poco más controlados y, finalmente, los perfiles más “arriesgados” son los que no temen invertir considerando un mayor riesgo sabiendo que pueden obtener mejores rendimientos que el resto.</p><br><br>
            `
        },
        {
            title: '¿Por qué es importante ahorrar?',
            descripcion: 'Obtén un colchón de seguridad, atrévete a ingeniar nuevos proyectos, cuando entiendas por qué es importante ahorrar.',
            img: 'assets/img/3.4.jpg',
            content: `
                <h1>¿Por qué es importante ahorrar?</h1><br>
                <p>¡Descubre diferentes razones de por qué es importante ahorrar! Prepárate para el futuro y administra mejor tus finanzas desde hoy. Puedes ser parte de la cultura del ahorro al crear buenos hábitos en tu manejo de las finanzas y que esto te traiga muchos beneficios para el futuro. Obtén un colchón de seguridad, atrévete a ingeniar nuevos proyectos, esto y más podrías conseguir cuando entiendas por qué es importante ahorrar. Entre antes comiences, mayores resultados son los que puedes llegar a obtener y así mantener una buena salud financiera en el tiempo.</p><br><br>
                <h1>¿Por qué deberías ahorrar dinero para el futuro?</h1><br>
                <p>1. Facilita pagar los estudios Ya sea los tuyos -cursar un diplomado, especialización o posgrado- como los de tus hijos o hijas. Por supuesto, depende de la institución y el grado académico que se cursará. Recuerda que en el futuro, deberás invertir no solamente en la colegiatura, sino en recursos de estudio, materiales para proyectos y en los posteriores gastos de titulación. Contar con un fondo de ahorros previamente construido te ayudará a pagar los estudios, te quitarás un peso de encima y tendrás tranquilidad cuando lleguen las fechas de pago. 2. Es un apoyo en caso de emprender ¿Algún proyecto en mente? ¿Un emprendimiento que deseas concretar? Si tienes un fondo de ahorros destinado a este propósito, serás capaz de usarlo sin afectar las finanzas de tu hogar. Igualmente, existe la opción de pedir préstamos a entidades financieras, con tal de llevar a cabo aquel emprendimiento que tanto deseas. Eso sí, procura ir ahorrando poco a poco y recuerda que empezar un negocio desde cero requiere una inversión inicial y bastante esfuerzo. 3. Puedes liquidar deudas Deudas debido a las compras, así como los saldos de las tarjetas de crédito, impactan las finanzas y puede provocar una bola de nieve que vaya creciendo en el tiempo en caso de no puedas pagar tus compromisos en las fechas establecidas. Un fondo de ahorro que tengas disponible para utilizar en un determinado momento, es algo que te aportará mucho en tu economía personal, especialmente en caso de enfrentar alguna deuda. 4. Previene contra imprevistos ¿Cómo ahorrar para el futuro? Recuerda que no puedes predecir accidentes o emergencias médicas, pero sí puedes estar preparado en caso de que suceda. Tener un fondo de emergencias te ayudará a cubrir los gastos de un desperfecto mecánico en tu automóvil, las facturas del veterinario de tu mascota, medicamentos para un tratamiento médico e incluso una visita al hospital. De este modo, tus finanzas mensuales no serán afectadas por estos gastos imprevistos. 5. Permite invertir en tu patrimonio Ahorrar dinero con una meta clara, como la de construir una casa o adquirir un hogar propio, son grandes impulsores de la cultura del ahorro. Si deseas dejar de pagar renta mes con mes y sueñas con tener una vivienda propia, el primer paso es ahorrar pensando en un monto que puedas reunir para el enganche de una casa o departamento. 6. Te ayuda para el retiro ¡Llegará eventualmente! Es posible que en tu empleo existan prestaciones de jubilación o que estés afiliado a instituciones de gobierno, las cuales te otorguen una pensión. No obstante, para mejorar tu calidad de vida durante esos años, un fondo de jubilación resultará crucial. Y es que resulta probable que todavía quieras realizar proyectos o completar sueños. Además, tener un monto extra de ahorro te permitirá invertirlo sin que afecte tu estilo de vida.</p><br><br>
            `
        },
        {
            title: 'Los beneficios de la inversión',
            descripcion: 'Las inversiones se encargan de hacer que ese dinero empiece a generar rendimientos a seguir el ritmo de la inflación',
            img: 'assets/img/3.4.jpg',
            content: `
                <h1>¿Cuáles son los beneficios de la inversión?</h1><br>
                <p>Revisa esta información para que conozcas cuáles son los beneficios de la inversión, los rendimientos asociados y puedas hacer crecer tu dinero de forma segura. El concepto de inversión no siempre se asocia con una actividad segura que sea del gusto de todos. Nuestra educación financiera convencional, no te dirá que realices inversiones a menos de que tengas un perfil arriesgado. Por el contrario, cualquier asesor de finanzas personales argumentará que las inversiones son esenciales en la búsqueda de la solvencia financiera. En la realidad, todo depende de tus metas a corto, mediano o largo plazo y de tu perfil como inversionista, pues existen diferentes planes diseñados para todos los tipos de inversión que se adaptan a casi cualquier situación financiera o preferencia.</p><br><br>
                <h1>Conoce cuáles son los beneficios de la inversión</h1><br>
                <p>Es importante que sepas cuál es la diferencia entre invertir y ahorrar. Para el caso de la salud financiera, ahorrar es sólo el primer paso, puesto que el dinero que no se ponga a trabajar pierde valor en el tiempo. La realidad es que es cierto debido a un factor macroeconómico llamado inflación, que resta valor a tu ahorro por el encarecimiento de los bienes o servicios. Tus ahorros, no pueden competir con ese aumento en el precio y por tanto pierde poder de compra con el tiempo. Las inversiones se encargan de hacer que ese dinero empiece a generar rendimientos que le ayudan a tus ahorros a seguir el ritmo de la inflación e incluso superarlo. Para conocer en concreto cuáles son los beneficios de la inversión, debes primero decidir de qué inversión estás hablando según el perfil de inversionista que tienes. A los que no quieren muchos riesgos y, por lo tanto, pocas ganancias, se le conoce como “conservadores”. Los “moderados” son los que buscan mejores rendimientos, pero con riesgos un poco más controlados y, finalmente, los perfiles más “arriesgados” son los que no temen invertir considerando un mayor riesgo sabiendo que pueden obtener mejores rendimientos que el resto.</p><br><br>
            `
        },
        {
            title: '5 consejos al obtener un seguro de auto',
            descripcion: 'Los seguros para autos son herramientas que buscan evitar que un imprevisto arruine tu planeación financiera',
            img: 'assets/img/3.5.jpg',
            content: `
                <h1>5 consejos al obtener un seguro de auto
                </h1><br>
                <p>Conoce estos consejos que te ayudarán a cotizar los mejores seguros para autos y encontrar el adecuado de acuerdo a tus necesidades y capacidad financiera. Los seguros para autos son herramientas que buscan evitar que un imprevisto arruine tu planeación financiera o debilite tu estabilidad económica. Un seguro de auto está diseñado para proteger tu patrimonio, y siempre vale más tenerlo que necesitarlo alguna vez y no contar con él. A diferencia de lo que se cree en México, los seguros para autos no son un gasto. Debe verse como una inversión a largo plazo que protegerá al conductor, al auto, al patrimonio y a los otros ocupantes del vehículo en caso de algún imprevisto. Vale la pena hacer el esfuerzo de contratar un seguro de auto que ofrezca más protección que la mínima necesaria para no ser infraccionado en la Ciudad de México. Siempre deberás recordar que, como otros productos financieros, el mejor seguro de auto es aquel que se adapte mejor a tus necesidades y presupuesto, sin que tengas que cambiar algo en tu planeación financiera. Por ello, hemos preparado diferentes consejos que te ayudarán en la búsqueda de encontrar el seguro más adecuado.<br><br>

                1. Identifica cuáles son los riegos Daños materiales. Se trata de la previsión que cubrirá el costo derivado de pérdidas por situaciones entre las que se incluyen los choques, o por eventos que ajenos a la conducción como la caída de árboles o terremotos que puedan ocasionar daños a tu vehículo. Dependiendo del seguro y plan de tu elección podrías contar con el beneficio de tener un auto sustituto mientras arreglan el tuyo Robo total. Es la previsión en caso del robo del vehículo. En este caso, el seguro pagará de acuerdo al valor del vehículo, aunque contemplará la depreciación del mismo. Se pueden contratar coberturas por robo parcial, en la que solo se cubre el costo del elemento faltante de tu auto Responsabilidad Civil. Cubre los daños materiales, lesiones o muerte que pudieran sufrir otras personas ajenas al auto asegurado derivado de un accidente Gastos médicos. Esta es la protección que cubre el pago de la asistencia médica que se requiera por lesiones del conductor o pasajeros tras un accidente de tránsito. 2. Identifica el tipo de póliza El seguro de responsabilidad civil es obligatorio según el reglamento de tránsito de la Ciudad de México y sólo cubre los daños a terceros. 3. Compara las aseguradoras y lo que ofrecen Como cualquier producto financiero, te sugerimos comparar los servicios y las coberturas que ofrecen las diferentes aseguradoras. En este sentido, recuerda que el precio puede variar. Sin embargo, el costo no debe de ser una de las razones principales para eliminar de la comparación alguna alternativa, sino los beneficios que ofrezca y cómo te pueden ayudar según tus necesidades y estilo de vida. 4. Revisa el precio Como te sugerimos en el punto anterior, el precio es muy importante, pero recuerda que hay muchos factores que inciden directamente en él. Uno de ellos es la cobertura que elijas, pero puede variar dependiendo de la aseguradora. Otro factor importante es el tipo, modelo y marca del vehículo, tu edad, tu sexo, el tiempo en el que te tardes en pagarlo, entre otros factores a considerar. Por ello, te sugerimos que revises con cuidado antes de tomar una decisión. 5. Condiciones Todos los seguros tienen condiciones y coberturas específicas para entregar protección según corresponda. Por ejemplo, un seguro de auto nunca te cubrirá si ingeriste bebidas alcohólicas u otras sustancias de efecto negativo para tu capacidad de conducir, tampoco cubre a los que no tienen licencia de conducir.</p><br><br>
            `
        },
    ]
];


const articleStorage = localStorage.getItem( 'article' );
const nivel = (parseInt( articleStorage.substring(0, 1) ) - 1);
const subnivel = (parseInt( articleStorage.substring(2, 3) ) - 1);
const article = articles[ nivel ][ subnivel ];

title.innerHTML = article.title;
descripcion.innerHTML = article.descripcion;
img.src = article.img;
content.innerHTML = article.content;
console.clear();