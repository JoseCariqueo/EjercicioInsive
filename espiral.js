
let SumaDeDiagonales = function(PorteDelCuadrado){
    let numeroMaximo = PorteDelCuadrado * PorteDelCuadrado;
    let incremento = 1;
    let conteo = 0;
    let incrementoConteo = 0;
    for(let i = 1; i <= numeroMaximo; i++){
        conteo += i;
        i += incremento;
        incrementoConteo = (incrementoConteo + 1) % 4;
        if(incrementoConteo == 0){
            incremento += 2;
        }
    }
    
    return conteo;
}


console.log(SumaDeDiagonales(5));
console.log(SumaDeDiagonales(1003));