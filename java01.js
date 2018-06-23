var inicio = prompt ("Press any key to start!");
var contador = 1;
while (contador <= 100) {
  if (contador % 3 === 0 && contador % 5 === 0) {
      console.log("HACKYOURFUTURE: " + contador);
  } 
    else if (contador % 3 === 0) {
        console.log("HACK: " + contador); 
    }
    else if (contador % 5 === 0){
        console.log("FUTURE: " + contador); 
    }
    else {
        console.log(contador);
    }
     contador++;
}
