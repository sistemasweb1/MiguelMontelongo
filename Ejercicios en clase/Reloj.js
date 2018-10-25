<!DOCTYPE html>
<html>
<head>



	<title></title>
	<LINK REL="stylesheet" TYPE="text/css" HREF="reloj.css">

</head>
<body>
<div id  ="todo"><center>
<script type="text/javascript">	
	var fecha = new Date();
	
	var diia=fecha.getDay();
	var dia=fecha.getDate();
	var mes=fecha.getMonth();
	var anio=fecha.getFullYear();

	switch(diia){
		case 0:
		document.write('Domingo ');
		break;
		case 1:
		document.write('Lunes ');
		break;
		case 2:
		document.write('Martes ');
		break;
		case 3:
		document.write('Miercoles ');
		break;
		case 4:
		document.write('Jueves ');
		break;
		case 5:
		document.write('Viernes ');
		break;
		case 6:
		document.write('Sabado ');
		break;
	}

	document.write(dia);

	switch(mes){
		case 0:
		document.write(' Enero del ');
		break;
		case 1:
		document.write(' Febrero del ');
		break;
		case 2:
		document.write(' Marzo del ');
		break;
		case 3:
		document.write(' Abril del ');
		break;
		case 4:
		document.write(' Mayo del ');
		break;
		case 5:
		document.write(' Junio del ');
		break;
		case 6:
		document.write(' Julio del ');
		break;
		case 7:
		document.write(' Agosto del ');
		break;
		case 8:
		document.write(' Septiembre del ');
		break;
		case 9:
		document.write(' Octubre del ');
		break;
		case 10:
		document.write(' Noviembre del ');
		break;
		case 11:
		document.write(' Diciembre del ');
		break;
	}
	document.write(anio, "<br>");
</script>
</body>

<script language="JavaScript">
function fecha_hora(){
	fecha=new Date();
	horas=fecha.getHours();
	minutos=fecha.getMinutes();
	segundos=fecha.getSeconds();
	if (horas<=12){
		horaImprimible=horas+":"+minutos+":"+segundos+" AM";
		document.form_reloj.reloj.value=horaImprimible;
		setTimeout("fecha_hora()",1000);
    }
    else{
    	horas=horas-12;
    	horaImprimible=horas+":"+minutos+":"+segundos+" PM";
    	document.form_reloj.reloj.value=horaImprimible;
    	setTimeout("fecha_hora()",1000);
    }
}
</script>

<body onload="fecha_hora()">


<form name="form_reloj">
<input type="text" name="reloj">
</form>
</center>
</div>
</body>
</html>