var settings = {
  "url": "http://localhost:3000/farmacia",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/farmacia",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "8734733984",
    "first_name": "farmaceuticos y medicinas",
    "last_name": "mieltertos",
    "email": "elrubius@gmail.com",
    "gender": "masc ",
    "ip_address": "repartidor de medicinas",
    "lenguaje": "menoxidil"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/farmacia",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "829734878439u488258",
    "first_name": "acetaminofenes.",
    "last_name": "pastillas",
    "email": "pollos farmaceuticos",
    "gender": "fem ",
    "ip_address": "74934734823",
    "lenguaje": "dopamina"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/farmacia",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "eou3339344755",
    "first_name": "medicina legal",
    "last_name": "morgues",
    "email": "morgues@gmail.com",
    "gender": "JAHSHUHFUJDJ ",
    "ip_address": "236768262",
    "lenguaje": "hospital psiquiatrico"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/farmacia",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "5745923749",
    "first_name": "laboratorio biologico medicinal",
    "last_name": "seres vivos",
    "email": "93849379889",
    "gender": "mas ",
    "ip_address": "849275848849492",
    "lenguaje": "pollos"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/farmacia/829734878439u488258",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "829734878439u488258",
    "first_name": "acetaminofenos.",
    "apellido": "pastillas",
    "email": "medicina forestal",
    "género": "fem ",
    "dirección_ip": "74934734823",
    "lenguaje": "dopamina"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/farmacia/eou3339344755",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "eou3339344755",
    "first_name": "medicina legal",
    "apellido": "morgues",
    "correo electrónico": "morgues@gmail.com",
    "género": "fem ",
    "dirección_ip": "236768262",
    "lenguaje": "hospital medico"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/farmacia/5745923749",
  "method": "PUT",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "id": "5745923749",
    "first_name": "laboratorio biológico medicinal",
    "last_name": "seres unicelulares",
    "correo electrónico": "93849379889",
    "género": "más ",
    "dirección_ip": "849275848849492",
    "lenguaje": "HEROINA como medicina?"
  }),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/farmacia/829734878439u488258",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

var settings = {
  "url": "http://localhost:3000/farmacia/eou3339344755",
  "method": "DELETE",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});