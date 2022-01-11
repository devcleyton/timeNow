const url1 = "https://api.hgbrasil.com/weather?format=json-cors&woeid=455819&key=3b7f073a"

function getUrl(url1) {
    let request = new XMLHttpRequest()
    request.open("GET", url1, false)
    request.send()
    return request.responseText
}


function main() {
    tempo = getUrl(url1);

    tempoJson = JSON.parse(tempo)

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


}

main()