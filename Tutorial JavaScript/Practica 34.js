<!DOCTYPE html>
<html>
<body>

<h2>Ejemplo en JavaScript de Objetos</h2>

<p>El objeto extrae los valores de las variables que le damos</p>

<p id="demo"></p>

<script>
// Creamos el object:
var persona = {
    nombre: "Miguel",
    apellido : "Montelongo",
    edad: 20, 
    id       : 150383,
    nombrecompleto : function() {
       return this.nombre + " " + this.apellido +" " + this.edad +" años " + "Matricula " + this.id ;
    }
};
// Display data from the object:
document.getElementById("demo").innerHTML = persona.nombrecompleto();
</script>
</body>
</html>