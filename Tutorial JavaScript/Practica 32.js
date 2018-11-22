<!DOCTYPE html>
<html>
<body>

<h2>Programa</h2>
<h3> que otras cosas puedes realizar con javascript</h3>
<h4> calcular un promedio de datos, que son 5, 6 , 7 </h4>
<p id="demo"></p>

<script>
var price1 = 5;
var price2 = 6;
var price3=7;
var total = price1 + price2;
var prom= (price1 + price2+price3) /3;
document.getElementById("demo").innerHTML =
"El Promedio de los datos es " +  prom;
</script>

</body>
</html>