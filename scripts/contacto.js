function comprobacion()
{
    //variables
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var dni = document.getElementById("dni").value;
    var localidad = document.getElementById("localidad").value;
    var direccion = document.getElementById("direccion").value;
    var codpostal = document.getElementById("codpostal").value;
    var fecha = document.getElementById("fecha").value;

    var errores = false;

    if(nombre=="" || apellidos==""|| dni==""|| localidad=="" || direccion=="" || codpostal=="" || fecha=="" )
    {
      cambiarFondoCampo(nombre, apellidos, dni, localidad, direccion, codpostal, fecha)
      var errores = true;
      console.log("Campos vacios");
      alert("Campos vacios en el formulario, comprobar de nuevo.");
    }    
    else
    {
      if(isNaN(codpostal))
      {
        alert("codigo postal no valido");
        errores = true;
      }
      if(!isNaN(fecha))
      {
        alert("Fecha no valida");
        errores = true;
      }
      //comprobar formado de 8 numero seguido de letra
      if( !(/^\d{8}[A-Z]$/.test(dni)) ) {
        alert("Dni no valido");
        errores = true;
      }

      comprobarCheckbox()

      if(!errores)
      {
        limpiarCampos()

      }
    }

    
}


function cambiarFondoError(campo)
{
	document.getElementById(campo).style.backgroundColor = "#F24C46";
}

function cambiarFondoCorrecto(campo)
{
	document.getElementById(campo).style.backgroundColor = "white";
}

function cambiarFondoCampo(nombre, apellidos, dni, localidad, direccion, codpostal, fecha)
{
	if(nombre == "")
	{
		cambiarFondoError("nombre");
	}
	else
	{
		cambiarFondoCorrecto("nombre");
	}

	if(apellidos == "")
	{
		cambiarFondoError("apellidos");
	}
	else
	{
		cambiarFondoCorrecto("apellidos");
	}

	if(dni == "")
	{
		cambiarFondoError("dni");
	}
	else
	{
		cambiarFondoCorrecto("dni");
	}

	if(localidad == "")
	{
		cambiarFondoError("localidad");
	}
	else
	{
		cambiarFondoCorrecto("localidad");
	}

	if(direccion == "")
	{
		cambiarFondoError("direccion");
	}
	else
	{
		cambiarFondoCorrecto("direccion");
	}

	if(codpostal == "")
	{
		cambiarFondoError("codpostal");
	}
	else
	{
		cambiarFondoCorrecto("codpostal");
	}

	if(fecha == "")
	{
		cambiarFondoError("fecha");
	}
	else
	{
		cambiarFondoCorrecto("fecha");
	}
}

function limpiarCampos()
{
	document.getElementById("nombre").value = "";
	document.getElementById("apellidos").value = "";
	document.getElementById("dni").value = "";
	document.getElementById("localidad").value = "";
	document.getElementById("direccion").value = ""; 
	document.getElementById("codpostal").value = "";
	document.getElementById("fecha").value = null;
	document.getElementById('checkhtml').checked = false;
	document.getElementById('checkcss').checked = false;
	document.getElementById('checkjava').checked = false;

	document.getElementById("nombre").style.backgroundColor="White";
	document.getElementById("apellidos").style.backgroundColor="White";
	document.getElementById("dni").style.backgroundColor="White";
	document.getElementById("localidad").style.backgroundColor="White";
	document.getElementById("direccion").style.backgroundColor="White";
	document.getElementById("fecha").style.backgroundColor="White";
	document.getElementById("codpostal").style.backgroundColor="White";

}

function comprobarCheckbox()
{
	var htmlcheck = document.getElementById('checkhtml').checked;
	var csscheck = document.getElementById('checkcss').checked;
	var javacheck = document.getElementById('checkjava').checked;


	if(!htmlcheck && !csscheck && !javacheck){
	alert("Tienes que estudiar mas"); 
	}
}



