const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')
const form = document.getElementById('form')
const resultadoTexto = document.getElementById('resultadoTexto')

resultadoTexto.style.display = 'none'

form.addEventListener('submit', function(e) {
    var mensagemResultado
    
    e.preventDefault()

    var valor_a = parseInt(campoA.value) 
    var valor_b = parseInt(campoB.value)

    var resultadoComparacao = comparadorValores(valor_a, valor_b)
    
    if (resultadoComparacao === 2) {
        mensagemResultado = `O valor A informado foi: <b>${valor_a}</b><br/>O valor B informado foi: <b>${valor_b}</b><br/><br/>O valor <b>${valor_a}</b> é maior que o <b>${valor_b}</b>.<br/><br/> Os valores informados no Campo A e no Campo B estão invalidos.`
        resultadoTexto.classList.remove('sucesso')
        resultadoTexto.classList.add('fracasso')
    }
    else if (resultadoComparacao === -1){
        mensagemResultado = `O valor A informado foi: <b>${valor_a}</b><br/>O valor B informado foi: <b>${valor_b}</b><br/><br/>O valor <b>${valor_b}</b> é maior que o <b>${valor_a}</b>.<br/><br/> Os valores informados no Campo A e no Campo B estão validos.`
        resultadoTexto.classList.remove('fracasso')
        resultadoTexto.classList.add('sucesso')
    }
    else if (resultadoComparacao === 1){
        mensagemResultado = `O valor A informado foi: <b>${valor_a}</b><br/>O valor B informado foi: <b>${valor_b}</b><br/><br/>O valor <b>${valor_b}</b> é maior que o <b>${valor_a}</b>.<br/><br/> Os valores informados no Campo A e no Campo B estão invalidos.`
        resultadoTexto.classList.remove('sucesso')
        resultadoTexto.classList.add('fracasso')
    }
    else if (resultadoComparacao === -2){
        mensagemResultado = `O valor A informado foi: <b>${valor_a}</b><br/>O valor B informado foi: <b>${valor_b}</b><br/><br/>O valor <b>${valor_a}</b> é maior que o <b>${valor_b}</b>.<br/><br/> Os valores informados no Campo A e no Campo B estão validos.`
        resultadoTexto.classList.remove('fracasso')
        resultadoTexto.classList.add('sucesso')
    }
    else {
        mensagemResultado = `O valor A informado foi: <b>${valor_a}</b><br/>O valor B informado foi: <b>${valor_b}</b><br/><br/>Os valores são iguais.<br/><br/> Os valores informados no Campo A e no Campo B estão invalidos.`
        resultadoTexto.classList.remove('sucesso')
        resultadoTexto.classList.add('fracasso')
    }
        
    resultadoTexto.innerHTML = mensagemResultado
    resultadoTexto.style.display = 'block'
})

function comparadorValores(val1,val2){
    if (val1 > val2 && val1 >= 0) {
        return 2
    }
    else if (val1 > val2){
        return 1
    }
    else if (val1 < val2 && val2 >= 0){
        return -1
    }
    else if (val1 < val2){
        return -2
    }
    else {
        return 0
    }
}
