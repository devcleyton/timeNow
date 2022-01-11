//WOEID CIDADES
let woeid_caldas = 456912
let woeid_brasilia = 455819

let cors = "format=json-cors&"
let url1 = "https://api.hgbrasil.com/weather?" + cors + "woeid=" + woeid_brasilia
let url2 = "https://api.hgbrasil.com/weather?" + cors + "woeid=" + woeid_caldas

function get1(url1) {
    let request = new XMLHttpRequest()
    let json
    request.open("GET", url1, false)
    request.send()
    return request.responseText
}

function get2(url2) {
    let request = new XMLHttpRequest()
    request.open("GET", url2, false)
    request.send()
    return request.responseText
}


function main() {
    tempo = get1(url1);
    tempo2 = get2(url2);
    tempoJson = JSON.parse(tempo)
    tempoJson2 = JSON.parse(tempo2)

    console.log(tempoJson)
    console.log(tempoJson2)

    let secao = document.getElementById("secao")

    //Brasília
    let cidadeBrasilia = document.createElement("h1")
    let temperaturaBrasilia = document.createElement("p")
    cidadeBrasilia.innerHTML = tempoJson.results.city
    temperaturaBrasilia.innerHTML = tempoJson.results.temp + " graus"
    secao.appendChild(cidadeBrasilia)
    secao.appendChild(temperaturaBrasilia)

    //Caldas
    let cidadeCaldas = document.createElement("h1")
    let temperaturaCaldas = document.createElement("p")
    cidadeCaldas.innerHTML = tempoJson2.results.city
    temperaturaCaldas.innerHTML = tempoJson2.results.temp + " graus"
    secao.appendChild(cidadeCaldas)
    secao.appendChild(temperaturaCaldas)


}

main()