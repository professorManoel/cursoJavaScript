function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('ano')
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] veifique o ano novamente ')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img =window.document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if(fsex[0].checked){
            genero = 'masculino'
            if(idade >= 0 && idade < 11){
                //criança
                img.setAttribute('src','imagens/menino.png')
                
            } else if (idade < 30 ){
                //rapaz
                img.setAttribute('src','imagens/rapaz.png')
            } else {
                // homem
                img.setAttribute('src','imagens/homem.png')
            }
        } else if (fsex[1].checked){
            genero = 'feminino'
            if(idade >= 0 && idade < 11){
                //criança
                img.setAttribute('src','imagens/menina.png')
            } else if (idade < 30){
                //moca
                img.setAttribute('src','imagens/moca.png')
            } else {
                // mulher
                img.setAttribute('src','imagens/mulher.png')
            }
        }
        res.innerHTML = `Idade calculada ${idade} do sexo ${genero}`
        res.appendChild(img)
    }

}