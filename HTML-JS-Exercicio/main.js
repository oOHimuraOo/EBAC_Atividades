const valorA = document.getElementById('valorA')
const valorB = document.getElementById('valorB')
const form = document.getElementById('form')
const resultadoTexto = document.getElementById('resultadoTexto')

resultadoTexto.style.display = 'none'

form.addEventListener('submit', function(e) {
    var mensagemResultado
    
    e.preventDefault()
    
    var resultadoComparacao = comparadorValores(valorA.value, valorB.value)
    console.log(resultadoComparacao)
    
    if (resultadoComparacao === 2) {
        mensagemResultado = `O valor A informado foi: <b>${valorA.value}</b><br/>O valor B informado foi: <b>${valorB.value}</b><br/><br/>O valor <b>${valorA.value}</b> é maior que o <b>${valorB.value}</b>`
    }
    else if (resultadoComparacao === -1){
        mensagemResultado = `O valor A informado foi: <b>${valorA.value}</b><br/>O valor B informado foi: <b>${valorB.value}</b><br/><br/>O valor <b>${valorB.value}</b> é maior que o <b>${valorA.value}</b>`
    }
    else if (resultadoComparacao === 1){
        mensagemResultado = `O valor A informado foi: <b>${valorA.value}</b><br/>O valor B informado foi: <b>${valorB.value}</b><br/><br/>O valor <b>${valorB.value}</b> é maior que o <b>${valorA.value}</b>`
    }
    else if (resultadoComparacao === -2){
        mensagemResultado = `O valor A informado foi: <b>${valorA.value}</b><br/>O valor B informado foi: <b>${valorB.value}</b><br/><br/>O valor <b>${valorA.value}</b> é maior que o <b>${valorB.value}</b>`
    }
    else {
        mensagemResultado = `O valor A informado foi: <b>${valorA.value}</b><br/>O valor B informado foi: <b>${valorB.value}</b><br/><br/>Os valores são iguais`
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
