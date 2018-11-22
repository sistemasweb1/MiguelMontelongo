<!DOCTYPE html>
<html>
<body>

<center><p>Este programa se encarga de enviarte verdadero y falso, depende de lo que pongas: </p></center>
<center><p>8>9 sera ejemplo introducido </p></center>
<button onclick="myFunction()">Try it</button>

<center><p id="demo"></p></center>

<script>
function myFunction() {
    document.getElementById("demo").innerHTML = 8 > 9;
}
</script>

</body>
</html>