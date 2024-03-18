const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')
const form = document.getElementById('form')
const resultadoTexto = document.getElementById('resultadoTexto')

resultadoTexto.style.display = 'none'

form.addEventListener('submit', function(e) {
    var mensagemResultado
    
    e.preventDefault()
    
    var resultadoComparacao = comparadorValores(campoA.value, campoB.value)
    console.log(resultadoComparacao)
    
    if (resultadoComparacao === 2) {
        mensagemResultado = `O valor A informado foi: <b>${campoA.value}</b><br/>O valor B informado foi: <b>${campoB.value}</b><br/><br/>O valor <b>${campoA.value}</b> é maior que o <b>${campoB.value}</b>`
    }
    else if (resultadoComparacao === -1){
        mensagemResultado = `O valor A informado foi: <b>${campoA.value}</b><br/>O valor B informado foi: <b>${campoB.value}</b><br/><br/>O valor <b>${campoB.value}</b> é maior que o <b>${campoA.value}</b>`
    }
    else if (resultadoComparacao === 1){
        mensagemResultado = `O valor A informado foi: <b>${campoA.value}</b><br/>O valor B informado foi: <b>${campoB.value}</b><br/><br/>O valor <b>${campoB.value}</b> é maior que o <b>${campoA.value}</b>`
    }
    else if (resultadoComparacao === -2){
        mensagemResultado = `O valor A informado foi: <b>${campoA.value}</b><br/>O valor B informado foi: <b>${campoB.value}</b><br/><br/>O valor <b>${campoA.value}</b> é maior que o <b>${campoB.value}</b>`
    }
    else {
        mensagemResultado = `O valor A informado foi: <b>${campoA.value}</b><br/>O valor B informado foi: <b>${campoB.value}</b><br/><br/>Os valores são iguais`
    }
        
    resultadoTexto.innerHTML = mensagemResultado
    resultadoTexto.style.display = 'block'
})

function comparadorValores(val1,val2){
    if (val1 > val2 && val1 >= 0) {
        return 2
    }
    else if (val1 > val2 && val1 <= 0){
        return 1
    }
    else if (val1 < val2 && val2 >= 0){
        return -1
    }
    else if (val1 < val2 && val2 <= 0){
        return -2
    }
    else {
        return 0
    }
}
