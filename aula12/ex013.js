var agora = new Date()
var dia = agora.getDay()
/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado

*/

switch(dia){
    case 0:
        console.log('hoje é domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sabado')
        break
    default:
        console.log('erro não existe esse dia')
    
}