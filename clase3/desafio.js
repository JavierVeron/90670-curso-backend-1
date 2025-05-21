const sumar = (valor1, valor2) => {
    return new Promise((resolve, reject) => {
        if (valor1 == 0 || valor2 == 0) {
            reject("Operación innecesaria!");
        }

        let resultado = valor1 + valor2;
        resultado > 0 ? resolve(resultado) : reject("La calculadora debe devolver valores positivos");
    })
}

const restar = (valor1, valor2) => {
    return new Promise((resolve, reject) => {
        if (valor1 == 0 || valor2 == 0) {
            reject("Operación inválida!");
        }

        let resultado = valor1 - valor2;
        resultado > 0 ? resolve(resultado) : reject("La calculadora debe devolver valores positivos");
    })
}

const multiplicar = (valor1, valor2) => {
    return new Promise((resolve, reject) => {
        if (valor1 == 0 || valor2 == 0) {
            reject("Operación inválida!");
        }

        let resultado = valor1 * valor2;
        resultado > 0 ? resolve(resultado) : reject("La calculadora debe devolver valores positivos");
    })
}

const dividir = (valor1, valor2) => {
    return new Promise((resolve, reject) => {
        if (valor2 == 0) {
            reject("No se puede divivir por cero")
        } else if (valor1 == 0 || valor2 == 0) {
            reject("Operación inválida!");
        } else {
            resolve(valor1 / valor2)
        }
    });
}

const calculos = async (valor1, valor2, operacion) => {
    try {
        let resultado = await operacion(valor1, valor2)
        console.log(resultado);
    } catch(mensaje) {
        console.log("Error:", mensaje);
    }
}

calculos(14, 2, sumar);
calculos(14, 2, restar);
calculos(14, 2, multiplicar);
calculos(14, 2, dividir);