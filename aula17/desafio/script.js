


var num = window.document.querySelector('input#num')
var lista = window.document.querySelector('select#lista')
var res = window.document.querySelector('div#res')
var valores =[]

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function isLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value)&& !inLista(num.value, valores)){
        window.alert('tudo ok')
    }else{
        window.alert('valor inválido ou já encontarado na lista ')
    }

}