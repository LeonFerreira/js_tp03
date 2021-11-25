function calcularValor() {
    let minimo = document.getElementById("valorMin");
    let maximo = document.getElementById("valorMax");
    let mixMaxHtml = document.getElementById("resultado_mixmax");
    let qtd = 0;

    if (minimo < maximo) {
        for (let i = minimo + 1; i = maximo - 1; i++) {
            if (i % 2 === 0 && i % 3 === 0) {
                qtd++
            }
        }
        
    }
    mixMaxHtml.innerHTML += `<br><div>${qtd}</div>`
}