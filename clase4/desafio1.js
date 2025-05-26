const generarNumeroRandom = () => {
    return new Promise((res) => {
        res(Math.round(Math.random() * 19) + 1)
    })
}

const desafio1 = async () => {
    const total = 10000;
    const numerosAleatorios = [];
    const numerosSalidos = {}
    
    for (let i=0; i<total; i++) {
        const numeroRandom = await generarNumeroRandom();
        numerosAleatorios.push(numeroRandom);
    }    
    
    for (const numero of numerosAleatorios) {
        const numeros = numerosAleatorios.filter(item => item == numero);        
        numerosSalidos[numero] = numeros.length;
    }

    console.log(numerosSalidos);
    console.log("Fin del Proceso!");
}

desafio1();
