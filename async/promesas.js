function hola(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Hola " + nombre);
            resolve(nombre);
        },1500);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Bla bla bla bla...");
            //resolve(nombre);
            reject("Error");
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Adios ", nombre);
            resolve();
        }, 1000);
    });
    
}

// 
console.log("Iniciando el proceso")
hola("Edward")
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("Terminado el proceso")
    })
    .catch(error => { // En canto encuentra un error, se ejecuta catch ingnorando las demás lineas.
        console.error("Error en el proceso");
    }) 