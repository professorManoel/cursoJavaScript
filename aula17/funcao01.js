function par_impar(n){
    if(n%2 == 0){
        return 'par'
    } else {
        return 'ímpar'
    }
}

var res = par_impar(233)
console.log(res)