import moment from "moment"

const fechaActual = moment();
const fechaNacimiento = moment("2006-04-19");
console.log(fechaActual);
console.log(fechaNacimiento);
console.log(fechaActual.isValid());
console.log(fechaNacimiento.isValid());

if (fechaNacimiento.isValid()) {
    console.log("Tu Fecha de Nacimiento es válida!");
} else {
    console.log("Tu Fecha de Nacimiento NO ES válida!");
}

const diferenciaDias = fechaActual.diff(fechaNacimiento, "days");
const diferenciaMeses = fechaActual.diff(fechaNacimiento, "months");
const diferenciaAnios = fechaActual.diff(fechaNacimiento, "years");
console.log("Días:", diferenciaDias);
console.log("Meses:", diferenciaMeses);
console.log("Años:", diferenciaAnios);


