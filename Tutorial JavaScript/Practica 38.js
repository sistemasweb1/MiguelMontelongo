<!DOCTYPE html>
<html>
<body>

<center><p>Es un ciclo, con arreglo que te permite mostrar los numeros que desees en el arreglo</p></center>
<center><p>Queremos que nos imprima del 1 al 70</p></center>
<center><p>Esto nos sirve para programas mas grandes </p></center>
<p id="demo"></p>

<script>
var text = "";
var i;
for (i = 0; i < 100; i++) {
    if (i === 71) { break; }
    text += "Numero:  " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>