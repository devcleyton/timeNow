const url1 = "https://api.hgbrasil.com/weather?format=json-cors&woeid=455819&key=3b7f073a"
const url2 = "https://api.hgbrasil.com/weather?format=json-cors&woeid=55944421&key=3b7f073a"
const url3 = "https://api.hgbrasil.com/weather?format=json-cors&woeid=456912&key=3b7f073a"

function getUrl(url1) {
    let request = new XMLHttpRequest()
    request.open("GET", url1, false)
    request.send()
    return request.responseText
}
function getUrl2(url2) {
    let request = new XMLHttpRequest()
    request.open("GET", url2, false)
    request.send()
    return request.responseText
}
function getUrl3(url3) {
    let request = new XMLHttpRequest()
    request.open("GET", url3, false)
    request.send()
    return request.responseText
}


function main() {
    tempo = getUrl(url1);
    tempo2 = getUrl2(url2);
    tempo3 = getUrl3(url3);

    tempoJson = JSON.parse(tempo)
    tempoJson2 = JSON.parse(tempo2)
    tempoJson3 = JSON.parse(tempo3)

    let secao = document.getElementById("secao")

    //Brasília
    let cidadeBrasilia = document.createElement("h1")
    let temperaturaBrasilia = document.createElement("p")
    let descricaoBrasilia = document.createElement("p")

    cidadeBrasilia.innerHTML = tempoJson.results.city
    temperaturaBrasilia.innerHTML = tempoJson.results.temp + " graus"
    descricaoBrasilia.innerHTML = tempoJson.results.forecast[0].description

    secao.appendChild(cidadeBrasilia)
    secao.appendChild(temperaturaBrasilia)
    secao.appendChild(descricaoBrasilia)

    //Planaltina GO
    let cidadeBrasilinha = document.createElement("h1")
    let temperaturaBrasilinha = document.createElement("p")
    let descricaoBrasilinha = document.createElement("p")

    cidadeBrasilinha.innerHTML = tempoJson2.results.city
    temperaturaBrasilinha.innerHTML = tempoJson2.results.temp + " graus"
    descricaoBrasilinha.innerHTML = tempoJson2.results.forecast[0].description

    secao.appendChild(cidadeBrasilinha)
    secao.appendChild(temperaturaBrasilinha)
    secao.appendChild(descricaoBrasilinha)

    //Caldas Novas GO
    let cidadeCaldas = document.createElement("h1")
    let temperaturaCaldas = document.createElement("p")
    let descricaoCaldas = document.createElement("p")

    cidadeCaldas.innerHTML = tempoJson3.results.city
    temperaturaCaldas.innerHTML = tempoJson3.results.temp + " graus"
    descricaoCaldas.innerHTML = tempoJson3.results.forecast[0].description

    secao.appendChild(cidadeCaldas)
    secao.appendChild(temperaturaCaldas)
    secao.appendChild(descricaoCaldas)


}

main()