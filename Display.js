
  
  // Función para obtener una frase al azar
  function obtenerFraseAlAzar() {
    var indice = Math.floor(Math.random() * frases.length);
    return frases[indice];
  }

// Función para obtener un mensaje aleatorio
function obtenerMensajeAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * mensajes.length);
    return mensajes[indiceAleatorio];
}


class Display {
    constructor(displayValorAnterior, displayResultado) {
        this.displayResultado = displayResultado;
        this.displayValorAnterior = displayValorAnterior;
        this.tipoOperacion = undefined;
        this.valorAnterior = 0;
        this.resultado = 0;
        this.num1 = 0;
        this.num2 = 0;
    
        this.signos = {
        
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-',
        };
    }

    asignarEventoClickAlBoton(botonId, tipoOperacion) {
        const boton = document.getElementById(botonId);
        boton.addEventListener('click', () => {
            this.computar(tipoOperacion);
            this.mostrarExplicacion();
        });
    }

    mostrarExplicacion() {
        const botonExplicacion = document.getElementById('botonExplicacion');
        const displayExplicacion = document.getElementById('displayExplicacion');

        if (botonExplicacion.textContent === 'Ocultar explicación') {
            botonExplicacion.textContent = 'Mostrar explicación';
            displayExplicacion.style.display = 'none';
        } else {
            botonExplicacion.textContent = 'Ocultar explicación';
            displayExplicacion.style.display = 'block';
        }
    }

    borrar() {
        this.resultado = this.resultado.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.resultado = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.resultado || this.valorAnterior;
        this.resultado = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if (numero === '.' && this.resultado.includes('.')) return;
        this.resultado = this.resultado.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayResultado.textContent = this.resultado;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }
    
    
    calcular() {
        const valorAnterior = Number(this.valorAnterior);
        const resultado = Number(this.resultado);

        if (isNaN(resultado) || isNaN(valorAnterior)) return;

        this.num1 = valorAnterior;
        this.num2 = resultado;

        switch (this.tipoOperacion) {
            case 'sumar':
                this.resultado = (valorAnterior + resultado + resultado) ;
                const frasesAnidadas = [
                    `${this.num1} + ${this.num2} es ${this.resultado} porque la suma es una operación matemática que consiste en añadir dos o más cantidades. En el caso de ${this.num1} + ${this.num2}, estamos añadiendo dos. donde su resultado es `,
                    ` ${this.num1} + ${this.num2} es ${this.resultado}hay una explicación de por qué ${this.num1} + ${this.num2} es ${this.resultado}, Podemos pensar en ${this.num2} como una fila de ${this.num2} objetos, Podemos pensar en ${this.num1} como una fila de ${this.num1} objetos, Si añadimos las dos filas, obtenemos una fila de ${this.resultado} objetos:`,
                    ` ${this.num1} + ${this.num2} es ${this.resultado} Imagina que tienes una caja con ${this.num1} lápices. Luego, tu amigo te regala una caja con ${this.num2} lápices. ¿Cuántos lápices tienes en total?, la respuesta es ${this.resultado} lapices `,
                    `  ${this.num1} + ${this.num2} es ${this.resultado}La suma de ${this.num1} y ${this.num2} es ${this.resultado} debido a las reglas fundamentales de la aritmética. En el sistema numérico decimal, cuando sumas dos números, estás combinando las cantidades representadas por esos números.\n la propiedad conmutativa que establece que el orden de los números en una suma no afecta el resultado. Por lo tanto, ${this.num1} + ${this.num2} es igual a ${this.resultado}.,`,
                ];
                const fraseAnidadaAleatoria = frasesAnidadas[Math.floor(Math.random() * frasesAnidadas.length)];
                alert(fraseAnidadaAleatoria);
              
                break;
            case 'restar':
                this.resultado = (valorAnterior - resultado + resultado);
                const frasesAnidadas1 = [
                    `Cuando restamos ${this.num1} - ${this.num2}, estamos quitando ${this.num2} de ${this.num1}. Podemos pensar en esta operación de la siguiente manera:\n tenemos ${this.num1} objetos\n quitamos ${this.num2} ojbetos a los ${this.num2} que ya tenemos.\n Ahora nos quedan ${this.num2} objetos en total. `,
                    `¿Quieres saber por que ${this.num1} - ${this.num2} da ${this.resultado} , te lo explico con un ejemplo :)\n Imagina que tienes ${this.num1} libros. Luego, prestas ${this.num2} libros a un amigo. ¿Cuántos libros te quedan?\nLa respuesta es ${this.resultado} libros.`,
                    `la resta es una operacion en la que se toma un numero (el sustraendo) y se resta de otro numero mas grande (el minuendo). en el caso de ${this.num1} - ${this.num2}`,
                   
                ];
                const fraseAnidadaAleatoria1 = frasesAnidadas1[Math.floor(Math.random() * frasesAnidadas1.length)];
                alert(fraseAnidadaAleatoria1);
                
                
                
                break;
            case 'multiplicar':
                this.resultado = (valorAnterior * resultado + resultado);
                const frasesAnidadas2 = [
                    `${this.num1} * ${this.num2} es ${this.resultado}.\n Por lo siguiente :\n1.En este caso, ${this.num1} * ${this.num2} es lo mismo que ${this.num1} * (${this.num2} * 1), que es lo mismo que  ${this.resultado}.\n2.Otra forma de ver por qué ${this.num1} * ${this.num2} es ${this.resultado} es pensar en términos de áreas. \n3.Un cuadrado de lado ${this.num1} tiene un área de ${this.num1}. Esto se debe a que el área de un cuadrado es igual al lado multiplicado por sí mismo. \n4.En este caso, el lado mide ${this.num1}, por lo que el área es ${this.num1} * ${this.num2} =  ${this.resultado}`,
                    `${this.num1} * ${this.num2} es ${this.resultado}.\n La multiplicación es una operación matemática que consiste en sumar un número tantas veces como lo indica el otro número. :\n1.En este caso En el caso de ${this.num1} x ${this.num1}, estamos sumando ${this.num1} veces \n2.Esto es lo mismo que sumar ${this.num1} cuantas veces sea necesario hasta que de ${this.resultado}`,
                    `${this.num1} * ${this.num2} es ${this.resultado}.\n ${this.num1} x ${this.num1} también es el área de un rectángulo con un ancho de ${this.num2} y un largo de${this.num1}`,
                    `${this.num1} * ${this.num2} es ${this.resultado}.\n También podemos pensar en ${this.num1}x ${this.num2} como el área de un rectángulo con un ancho de ${this.num1} y un largo de ${this.num2} \n El área de un rectángulo es igual a su ancho multiplicado por su largo. En este caso, el ancho es ${this.num1} y el largo es ${this.num2}, por lo que el área es ${this.num2} x ${this.num1} = ${this.resultado}.`,
                ];
                const fraseAnidadaAleatoria2 = frasesAnidadas2[Math.floor(Math.random() * frasesAnidadas2.length)];
                alert(fraseAnidadaAleatoria2);
                
                break;
            case 'dividir':
                this.resultado = valorAnterior / resultado + resultado;
                const frasesAnidadas3 = [
                    `${this.num1} dividido ${this.num2} es ${this.resultado} porque la división es una operación matemática que consiste en repartir una cantidad en un número de partes iguales. En el caso de ${this.num1}  dividido ${this.num2}, estamos repartiendo ${this.num1}  objetos en ${this.num2} partes iguales.`,
                    `${this.num1} y ${this.num2}Podemos pensar en esta operación de la siguiente manera:\nTenemos ${this.num1} objetos.\nQueremos repartirlos en ${this.num1} partes iguales.\nCada parte tendrá ${this.num1} objetos / ${this.num2} partes = ${this.resultado} objetos.`,
                    `Imagina que tienes  ${this.num1} metros de tela y quieres cortarla en ${this.num2} trozos iguales. ¿Cuánto medirá cada trozo?\n La respuesta es ${this.resultado} metros.\n Espero que esta explicación te ayude a entender por qué ${this.num1} dividido ${this.num2} es ${this.resultado}` ,
                    `La división es la operación inversa de la multiplicación. En este caso, estás dividiendo ${this.num1} entre ${this.num2}, lo que significa que estás buscando cuántas veces cabe el número ${this.num2} en el número ${this.num1}.Esto se debe a que En términos generales, la división se puede entender como la distribución equitativa de una cantidad en partes iguales, y en este caso, ${this.num1} se divide en ${this.num2} partes iguales, cada una de las cuales es igual a ${this.resultado}. en terminos generales la divsion se puede entender como la distribucion equitativa de una cantida en partes iguales , y en este caso, ${this.num1} se divide en ${this.num2} partes iguales, cada una de las cuales es igual a ${this.resultado}`,
                ];
                const fraseAnidadaAleatoria3 = frasesAnidadas3[Math.floor(Math.random() * frasesAnidadas3.length)];
                alert(fraseAnidadaAleatoria3);
              
                break;
        }
    }
}
