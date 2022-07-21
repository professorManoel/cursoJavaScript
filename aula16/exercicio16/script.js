function contar(){
    let ini = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let pas = window.document.getElementById('passo')
    let res = window.document.getElementById('res')
 
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
     window.alert('ERRO Falta dados ')
 
    } else {
            res.innerHTML = 'Contando: <br>'
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            let c

            if (p <= 0 ){
                window.alert('passo inválido! considerando passo = 1')
                p = 1
            }
            if (i < f){
                // Contagem crescente
                for(c = i; c <= f; c+=p){
                    res.innerHTML += ` ${c} \u{1f449}`  
                } 
            } else {
                // Contagem regresiva
                for(c = i; c >= f; c-=p){
                    res.innerHTML += ` ${c} \u{1f449}`
                }
            }

            res.innerHTML +=`\u{1f3c1}`
       
    }
}

 