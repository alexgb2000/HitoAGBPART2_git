const tabla = document.querySelector('#lista-url tbody');

function cargarProvincias() {
    const url = 'https://www.el-tiempo.net/api/json/v1/provincias';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(url => {
            console.log(url);
            url.forEach(url => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td class="td1">${url.CODPROV}</td>
                    <td class="td2">${url.NOMBRE_PROVINCIA}</td>
                    <td class="td1">${url.CODAUTON}</td>
                    <td class="td2">${url.COMUNIDAD_CIUDAD_AUTONOMA}</td>
                    <td class="td2">${url.CAPITAL_PROVINCIA}</td>
                `;
                tabla.appendChild(row);

            });
        })
        .catch(error => console.log('Hubo un error : ' + error.message))
}

cargarProvincias(); 