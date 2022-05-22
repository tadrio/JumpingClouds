const c = [0,0,0,1,0,0];

function jumpingOnClouds(array){
  let counter = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i + 2] == 0){
      i++;
      counter++;
    } else if (array[i + 1] == 0){
      counter++;
    }
  }
  return counter;
}

console.log(jumpingOnClouds(c));