<!DOCTYPE html>
<html>
<body>

<center><h2>Crear un objeto en JSON, y mandarlo hablar con parametros</h2></center>

<center><p id="demo"></p></center>

<script>
var text = '{"employees":[' +
'{"firstName":"Miguel","lastName":"Montelongo" },' +
'{"firstName":"Pedro","lastName":"Balderas" },' +
'{"firstName":"Fernando","lastName":"Herrera" }]}';
obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[0].firstName + " " + obj.employees[2].lastName;
</script>

</body>
</html>