<!DOCTYPE html>
<html>
<body>

<p>Ingresa un numero y presiona el boton ingresar:</p>
<p>Existe una funcion que no te permite dejar sin ingresar cosas al campo:</p>

<input id="id1" type="number" min="1" max="200" required>
<button onclick="myFunction()">Ingresar</button>

<p>El numero que ingreses debe estar entre 1 a 200</p>

<p id="demo"></p>

<script>
function myFunction() {
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "El numero ingresado esta en el rango";
    } 
} 
</script>

</body>
</html>