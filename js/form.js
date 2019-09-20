//define funcion
function validacion() {

    // variales a utilizar definidas por los imput del html en orden, ingresados en los campos de entrada definidos
    var v1= document.getElementById('nm').value;//nombre
    var v2= document.getElementById('ed').value;//edad
    var v3= document.getElementById('di').value;//dui
    var v4= document.getElementById('ie').value;//nie
    var v5= document.getElementById('ge').value;//genero
    var v6= document.getElementById('fe').value;//fecha
    var v7= document.getElementById('ce').value;//correo
    var v8= document.getElementById('tl').value;//telefono-contacto
    var v9= document.getElementById('pr').value;//parentesco
    var v10= document.getElementById('nm1').value;//nombre
    var v11= document.getElementById('tl1').value;//telefono-contacto

    // variales a utilizar definidas por expresioes regulares para validar cada campo de etrada
    //valida nombre
    var re1 = /^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/;
    //valida correo
    var re2 = /^\w+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']{0}?[\S]+[@]+[a-zA-Z]+[.]+[a-z]{3})?$/;
    //valida telefono-contacto
    var re3 = /^\d{4}[-]+\d{4}$/;
    //valida nie
    var re4 = /^\d{7}$/;
    //valida dui
    var re5 = /^\d{8}[-]+\d{1}$/;
    //valida fecha
    var re6 = /[\d]{2}[/]+[\d]{2}[/]+[\d]{4}/;
    //valida genero
    var re7 = /^([h][o][m][b][r][e])$/i;
    var re8 = /^([m][u][j][e][r])$/i;
    //valida parentesco
    var re9 = /^([p][a][d][r][e])$/i;
    var re10 = /^([m][a][d][r][e])$/i;
    var re11 = /^([o][t][r][o])$/i;
    //valida edad
    var re12 = /^\d{2}$/;

    //evalua codiciones segun la comparacion de cada campo con la respectiva expresion regular para validar los datos
    if(re1.test(v1) && re12.test(v2) && re5.test(v3) && re4.test(v4) && re7.test(v5)||re8.test(v5) && re6.test(v6) && re2.test(v7) && re3.test(v8) && re9.test(v9) || re10.test(v9) || re11.test(v9)  && re1.test(v10) && re3.test(v11)){
       //validacion exitosa
        alert('EL FORMULARIO AH SIDO ENVIADO CON EXITO');       
    }else{
        //validacion erronea
        alert('DATOS ERRONEOS Ó INCOMPLETOS, REVISE CADA CAMPO POR FAVOR');
    }

}


