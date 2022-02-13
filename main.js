
const provs= {
  "01": "Alava",
  "02": "Albacete",
  "03": "Alicante",
  "04": "Almeria",
  "05": "Avila",
  "06": "Badajoz",
  "07": "Islas Baleares",
  "08": "Barcelona",
  "09": "Burgos",
  "10": "Caceres",
  "11": "Cadiz",
  "12": "Castellon",
  "13": "Ciudad Real",
  "14": "Cordoba",
  "15": "La Coruna",
  "16": "Cuenca",
  "17": "Gerona",
  "18": "Granada",
  "19": "Guadalajara",
  "20": "Guipuzcoa",
  "21": "Huelva",
  "22": "Huesca",
  "23": "Jaen",
  "24": "Leon",
  "25": "Lerida",
  "26": "La Rioja",
  "27": "Lugo",
  "28": "Madrid",
  "29": "Malaga",
  "30": "Murcia",
  "31": "Navara",
  "32": "Orense",
  "33": "Asturias",
  "34": "Palencia",
  "35": "Las Palmas",
  "36": "Pontevedra",
  "37": "Salamanca",
  "38": "Santa Cruz de Tenerife",
  "39": "Cantabria",
  "40": "Segovia",
  "41": "Sevilla",
  "42": "Soria",
  "43": "Tarragona",
  "44": "Teruel",
  "45": "Toledo",
  "46": "Valencia",
  "47": "Valladolid",
  "48": "Vizcaya",
  "49": "Zamora",
  "50": "Zaragoza",
  "51": "Ceuta",
  "52": "Melilla"
}

//ALERTS -Puntuaciones

// Cuenta Bancaria
function showCount() {
  const pais = document.getElementById("pais").value;
  const iban = document.getElementById("iban").value;
  const entidad = document.getElementById("entidad").value;
  const sucursal = document.getElementById("sucursal").value;
  const dc = document.getElementById("dc").value;
  const cuenta = document.getElementById("cuenta").value;
  alert('Número de cuenta bancaria: ' + pais + iban + '-' + entidad + '-'+ sucursal + '-'+ dc + '-' + cuenta + '.' );
  return false;    
}

//Día de semana.
function showDay() {
  const week = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  var dateString = document.getElementById('fecha').value;
  const day = week[new Date(dateString).getDay()];
  alert('La fecha seleccionada en el elemento de fecha es un: ' + day + '.');
  return false;
}


// Puntuación
function showPoints() {
  let valor = document.getElementById("valor").value;
  alert('Has valorado con ' + valor + ' puntos.');
  return false;
}

///COLORS CHANGE


//Color DOM mensajes
function showedText(validatedText,color){
  let mensaje=document.querySelector('#showedText');
  mensaje.innerText=validatedText;
  mensaje.style.color=color;
}
////////////VALIDACIONES ///////////////



//Validación CP y provincia en DOM
function valoracion() {

  var form = document.getElementById("form");
  const codigopostalRegex = /^[0-9]{5,5}$/;
  const provinciaRegex = /^[a-zA-Z\s]{4,25}$/;
  const codigopostal=document.querySelector('#codigopostal');
  let numerocp = codigopostal.value;

  if(!codigopostalRegex.test(numerocp) || codigopostal.length < 5) {
      showedText('El código postal no tiene el formato correcto.','red');
      return false;
  }

  let doscodigopostal=numerocp.slice(0,2);
  console.log(parseInt(doscodigopostal,10));
  let provcodigopostal = provs[parseInt(doscodigopostal,10)];
  console.log(provcodigopostal);
  const provincia=document.querySelector('#provincia');

  if (provincia.value.toLowerCase()!=provcodigopostal.toLowerCase()){
      showedText('La provincia no coincide con el código postal.','red');
      return false;
  } else{
      showedText('La provincia coincide con el código postal.','green');
      return false;
  }
}


//Validación campo CP
function validarcp() {
var codigopostal = document.getElementById("codigopostal").value;
  if (codigopostal < 0 || codigopostal > 52999 || isNaN(codigopostal)) {
      window.alert("Introduce un código postal correcto.");
      return false;
  } else if ((codigopostal == "") | (codigopostal == " ")) {
      window.alert("El campo código postal no es válido.");
      return false;
  } else if (codigopostal.length < 5) {
      window.alert("El código postal debe tener 5 caracteres.");
      return false;
  }
}

//Validación campo provincia
  function validarprov(form) {
      var provinciav = document.getElementById("provincia").value;
      var prov = provinciav.toUpperCase(); 
      const pattern = /^([0-9])*$/;
      const provincias = ['ALAVA','ALBACETE','ALICANTE','ALMERIA','AVILA','BADAJOZ','ISLAS BALEARES','BARCELONA','BURGOS','CACERES','CADIZ','CASTELLON','CIUDAD REAL',
      'CORDOBA','LA CORUNA','CUENCA','GERONA','GRANADA','GUADALAJARA','GUIPUZCOA','HUELVA','HUESCA','JAEN','LEON','LERIDA','LA RIOJA','LUGO','MADRID','MALAGA','MURCIA',
      'NAVARRA','ORENSE','ASTURIAS','PALENCIA','LAS PALMAS','PONTEVEDRA','SALAMANCA','SANTA CRUZ DE TENERIFE','CANTABRIA','SEGOVIA','SEVILLA','SORIA','TARRAGONA',
      'TERUEL','TOLEDO','VALENCIA','VALLADOLID','VIZCAYA','ZAMORA','ZARAGOZA','CEUTA','MELILLA'
      ];

  if (pattern.test(prov)) {
      window.alert("Campo inválido");
      return false;
  } else if (prov == "" || provinciav == " ") {
      window.alert("El campo provincia no es válido.");
      return false;
  } else if (provincias.indexOf(prov) < 0) {
    window.alert("La provincia introducida no existe");
    return false;
  }
}