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

function cambiarFondoCampo(nombre, apellidos, dni, localidad, direccion, codpostal, fecha)
{
  if(nombre == "")
  {
    document.getElementById("nombre").style.backgroundColor="Red";
  }
  else
  {
    document.getElementById("nombre").style.backgroundColor="White";
  }

  if(apellidos == "")
  {
    document.getElementById("apellidos").style.backgroundColor="Red";
  }
  else
  {
    document.getElementById("apellidos").style.backgroundColor="White";
  }

  if(dni == "")
  {
    document.getElementById("dni").style.backgroundColor="Red";
  }
  else
  {
    document.getElementById("dni").style.backgroundColor="White";
  }

  if(localidad == "")
  {
    document.getElementById("localidad").style.backgroundColor="Red";
  }
  else
  {
    document.getElementById("localidad").style.backgroundColor="White";
  }

  if(direccion == "")
  {
    document.getElementById("direccion").style.backgroundColor="Red";
  }
  else
  {
    document.getElementById("direccion").style.backgroundColor="White";
  }

  if(codpostal == "")
  {
    document.getElementById("codpostal").style.backgroundColor="Red";
  }
  else
  {
    document.getElementById("codpostal").style.backgroundColor="White";
  }

  if(fecha == "")
  {
    document.getElementById("fecha").style.backgroundColor="Red";
  }
  else
  {
    document.getElementById("fecha").style.backgroundColor="White";
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



