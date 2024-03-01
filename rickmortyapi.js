function fetchCharacter(id) {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(data => {
      const html = `
      <img src="${data.image}" alt="${data.name}">
      <h3>${data.name}</h3>
      <p>Género: ${data.gender}</p>
      <p>Especie: ${data.species}</p>
      <p>Estado: ${data.status}</p>
    `;
    $('#resultado').html(html);
    return data;
      console.log('Personaje:', data);
      return data;
    })
    .catch(error => console.error('Error:', error));
}

function xhrCharacter(id) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://rickandmortyapi.com/api/character/${id}`);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
     const html = `
      <img src="${data.image}" alt="${data.name}">
      <h3>${data.name}</h3>
      <p>Género: ${data.gender}</p>
      <p>Especie: ${data.species}</p>
      <p>Estado: ${data.status}</p>
    `;
    $('#resultado').html(html);
      console.log('Personaje:', data);
    } else {
      console.error('Error:', xhr.statusText);
    }
  };
  xhr.send();
}

function jqueryCharacter(id) {
  $.ajax({
    url: `https://rickandmortyapi.com/api/character/${id}`,
    method: 'GET',
    success: function(data) {
       const html = `
      <img src="${data.image}" alt="${data.name}">
      <h3>${data.name}</h3>
      <p>Género: ${data.gender}</p>
      <p>Especie: ${data.species}</p>
      <p>Estado: ${data.status}</p>
    `;
    $('#resultado').html(html);
      console.log('Personaje:', data);
    },
    error: function(error) {
      console.error('Error:', error);
    }
  });
}

function jqueryRandomCharacter() {
  const randomNumber = Math.floor(Math.random() * 826); 
  $.ajax({
    url: `https://rickandmortyapi.com/api/character/${randomNumber}`,
    method: 'GET',
    success: function(data) {
      const html = `
      <img src="${data.image}" alt="${data.name}">
      <h3>${data.name}</h3>
      <p>Género: ${data.gender}</p>
      <p>Especie: ${data.species}</p>
      <p>Estado: ${data.status}</p>
    `;
    $('#resultado').html(html);
      console.log('Personaje aleatorio:', data);
    },
    error: function(error) {
      console.error('Error:', error);
    }
  });
}

$(document).ready(function() {
  $('#btn-fetch').click(function() {
    const id = prompt('Ingrese el ID del personaje:');
    fetchCharacter(id);
  });

  $('#btn-httprequest').click(function() {
    const id = prompt('Ingrese el ID del personaje:');
    xhrCharacter(id);
  });

  $('#btn-jquery').click(function() {
    const id = prompt('Ingrese el ID del personaje:');
    jqueryCharacter(id);
  });

  $('#btn-random').click(function() {
    jqueryRandomCharacter();
  });
});
