exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `#${i} `;
    console.log(i);
  }
};

exercicio2 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";
  let numero = document.getElementById("num").value;
  let erro = document.getElementById("erro");
  for (let i = 0; i <= numero; i += 2) {
    if (numero <= 0) {
      erro.innerHTML = `digite um numero valido`;
    } else {
      document.getElementById("resposta").innerHTML += `#${i} `;
    }
    console.log(i);
  }
};

exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  if (num <= 0) {
    error.innerText = `o numero que foi digitado (${num}), não é valido!!`;
    result.innerText = "";
  } else {
    result.innerText = "";
    error.innerText = "";
    let primo = true;
    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false;
    }
    primo
      ? (result.innerText = `o numero ${num} é primo`)
      : (error.innerText = `o numero ${num} não é primo`);
  }
};

exercicio4 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerHTML = "";
  if (num <= 0) {
    error.innerText = `favor inserir numeros validos`;
  } else {
    for (let i = 1; i <= 10; i++) {
      let x1 = num * i;

      result.innerHTML += `${num} X ${i} = ${x1} <br>`;
    }
  }
};

exercicio5 = () => {

  let numero = document.getElementById("num").value;
  let erro = document.getElementById("erro");
  let resul = document.getElementById("resultado");
  let contador = 1;
  resul.innerHTML = "";
  erro.innerText = ""
if(numero <= 0){
  erro.innerText = `favor inserir numeros validos`;

}else{

  while (contador <= numero) {
  
    if (contador % 2 !== 0) {
      resul.innerHTML += `${contador} <br>`;
    }
    
    contador++;
  }
}

  }

  exercicio6 = () => {
    let numero = document.getElementById("num").value;
  let erro = document.getElementById("erro");
  let resul = document.getElementById("resultado");
  let contador = 0;
  let somar = 0;

  resul.innerHTML = "";
  erro.innerText = ""
if(numero <= 0){
  erro.innerText = `favor inserir numeros validos`;

}else{

  while (contador <= numero) {
  
    if (contador % 2 == 0) {
      somar += contador
      // resul.innerHTML += `${contador} <br>`;
      resul.innerHTML = `${somar } <br>`;

    }
    
    contador++;
  }
}

  }

  exercicio7 = () =>{
let numero = 10
let resul = document.getElementById("resposta");
while(numero >= 1){
 resul.innerHTML +=`${numero} <br>`;
  console.log(numero)
  numero--
}
  }
  exercicio8 = () =>{

  }

  exercicio9 = () =>{

let resul = document.getElementById("resposta");
for (let i = 1; i <=100; i++) {
 resul.innerHTML +=`${i} <br>`;
  
}
  }

  exercicio10 = () =>{

    for (let i = 1; i <= 100; i++) {
      
    }

    
  }
