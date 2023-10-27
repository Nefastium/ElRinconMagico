var url = "../indexApi.json";
var portadaPelis = document.getElementById("layoutPelis");
var titu = document.getElementById("cabecera")

imprimirDatos({PATH : url}) .then(elementApi =>{
    console.log(elementApi)
    elementApi.titulos.map(data =>{
        titu.innerHTML +=`
        <h1 class="titulo">${data.titulo3}</h1>
            <h2 class="subtitulo">${data.subtitulo3}</h2>`
    });
    elementApi.peliculas.map((data,i)=>{
        console.log(data);
        portadaPelis.innerHTML += `
            <div class="foto">
                <a href="previewPelis.html?page=${i}">
                    <img src="${data.imagen}">
                </a>
            </div>`
    });
});