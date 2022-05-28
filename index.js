const c = [0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0];

function jumpingOnClouds(array){
  let counter = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i + 2] == 0){ //verifica se pode fazer um pulo duplo
      i++; //faz o for pular uma iteração, uma vez que o pulo é duplo
      counter++; //adiciona um ao contador de movimentos
    } else if (array[i + 1] == 0){ //verifica se pode fazer um pulo simples
      counter++;
    }
  }
  return counter;
}

console.log(jumpingOnClouds(c));