var modoEscuro = false
var modoLupa = false

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });

    $('.botao-menu').click(function(){
        $('.menuSecundario nav').slideToggle()
    })
    
    $('header').hover(function(){
        $('.menuPrincipal nav').slideToggle()
    })
    
    $('#modoLupa').click(function(){
        if (modoLupa == false) {
            modoLupa = true
            $('#liModoLupa').addClass('bordaAtiva')
            ativarHoverZoom(modoLupa)
        }
        else {
            modoLupa = false
            $('#liModoLupa').removeClass('bordaAtiva')
            ativarHoverZoom(modoLupa)
        }
    })

    $('#modoEscuro').click(function(){
        if (modoEscuro == false) {
            modoEscuro = true
            $('#liModoEscuro').addClass('bordaAtiva')
            ativarModoEscuro(modoEscuro)
        }
        else{
            modoEscuro = false
            $('#liModoEscuro').removeClass('bordaAtiva')
            ativarModoEscuro(modoEscuro)
        }
    })
})

$('.botaoFlutuante > button').click(function(){
    $('html, body').animate({scrollTop : 0},800)
})

$(this).on('scroll', function(){
    var alturaMinima = 142
    var verificador = $(this).scrollTop() > alturaMinima
    if (!verificador){
        $('.botaoFlutuante').removeClass('reveladorDeBotaoFlutuante')
        $('.botaoFlutuante').addClass('escondedorDeBotaoFlutuante')
    }
    else{
        $('.botaoFlutuante').addClass('reveladorDeBotaoFlutuante')
        $('.botaoFlutuante').removeClass('escondedorDeBotaoFlutuante')
    }
})

function ativarHoverZoom(Ativo=false){
    if (Ativo == true){
        $('.produtosLista p').addClass('ativar-hover-produtos-lista')
        $('.preco').addClass('ativar-hover-preco')
    }
    else{
        $('.produtosLista p').removeClass('ativar-hover-produtos-lista')
        $('.preco').removeClass('ativar-hover-preco')
    }
}

function ativarModoEscuro(Ativo=false){
    if (Ativo == true){
        console.log('mudei as cores')
    }
    else {
        console.log('coloquei as cores originais')
    }
}