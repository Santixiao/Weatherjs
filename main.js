document.getElementById('ciudad').addEventListener('keyup', function(e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    document.getElementById('botonBuscar').click();
  }
});
document.getElementById('botonBuscar').addEventListener('click', () => {
  var apiKey = '31691357730e1efc91861461715f7872';
  var ciudad = document.getElementById('ciudad').value;
  console.log(ciudad);

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && this.responseText != '') {
      var resultado = JSON.parse(this.responseText);

      let divresultado = document.getElementById('resultado_busqueda');

      let nuevodiv = document.createElement('p');
      let contenidonuevodiv = document.createTextNode(
        'Ciudad: ' + resultado.city.name + '\nGrados: ' 
      );
      nuevodiv.appendChild(contenidonuevodiv);
      divresultado.parentNode.insertBefore(nuevodiv, divresultado);
    }
  };
  if (ciudad != '') {
    xhttp.open(
      'GET',
      'http://api.openweathermap.org/data/2.5/weather?q=' +
        ciudad +
        '&APPID=' +
        apiKey,
      true
    );
    xhttp.send();
  } else {
    alert('Indica una ciudad');
  }
});
