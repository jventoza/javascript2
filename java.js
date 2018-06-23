var inicio = prompt ("Press any key to start!");
for (contador = 1; contador <= 100; contador++) {
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
  }

