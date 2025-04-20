"use strict";
class Serie {
    constructor(id, nombre, canal, temporadas, descripcion, pagina, imagen) {
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.pagina = pagina;
        this.imagen = imagen;
    }
}
const series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "https://i.imgur.com/GGje0vc.jpg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "https://i.imgur.com/EvKe48G.jpg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "https://i.imgur.com/TDCEV1S.jpg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg"),
];
function promedio() {
    let suma = 0;
    series.forEach((serie) => {
        suma += serie.temporadas;
    });
    return suma / series.length;
}
function renderizarCard(Serie) {
    const cardContainer = document.getElementById("card1");
    if (!cardContainer) {
        console.error("No se encontró el contenedor de la card");
        return;
    }
    cardContainer.innerHTML = `
    <img class="card-img-top" src=${Serie.imagen} alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${Serie.nombre}</h5>
    <p class="card-text">${Serie.descripcion}</p>
    <a href="${Serie.pagina}" class="btn btn-primary" target="_blank">ir a la pagina</a>
  </div>
  `;
}
function actualizarTabla() {
    const tbody = document.querySelector("#table1 tbody");
    let promedioTemporadas = promedio();
    tbody.innerHTML = ""; // Limpiar el contenido actual
    series.forEach((serie) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td>${serie.id}</td>
                    <td><a href="#" class="serie-link">${serie.nombre}</a></td>
                    <td>${serie.canal}</td>
                    <td>${serie.temporadas}</td>`;
        tbody.appendChild(tr);
        const serieLink = tr.querySelector(".serie-link");
        serieLink.addEventListener("click", (event) => {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            renderizarCard(serie);
        });
    });
    const trPromedio = document.createElement("tr");
    trPromedio.innerHTML = `
            <td >Promedio de temporadas:</td>
            <td>${promedioTemporadas}</td>
            <td></td>`;
    tbody.appendChild(trPromedio);
}
document.addEventListener("DOMContentLoaded", actualizarTabla);
