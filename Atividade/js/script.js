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
  erro.innerText = "";
  if (numero <= 0) {
    erro.innerText = `favor inserir numeros validos`;
  } else {
    while (contador <= numero) {
      if (contador % 2 !== 0) {
        resul.innerHTML += `${contador} <br>`;
      }

      contador++;
    }
  }
};

exercicio6 = () => {
  let numero = document.getElementById("num").value;
  let erro = document.getElementById("erro");
  let resul = document.getElementById("resultado");
  let contador = 0;
  let somar = 0;

  resul.innerHTML = "";
  erro.innerText = "";
  if (numero <= 0) {
    erro.innerText = `favor inserir numeros validos`;
  } else {
    while (contador <= numero) {
      if (contador % 2 == 0) {
        somar += contador;
        // resul.innerHTML += `${contador} <br>`;
        resul.innerHTML = `${somar} <br>`;
      }

      contador++;
    }
  }
};

exercicio7 = () => {
  let numero = 10;
  let resul = document.getElementById("resposta");
  resul.innerHTML = "";
  while (numero >= 1) {
    resul.innerHTML += `${numero} <br>`;
    console.log(numero);
    numero--;
  }
};
exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";
  if (palavra == "") {
    error.innerText = "favor informar uma palavra";
  } else {
    for (let i = 1; i <= palavra.length; i++) {
      inversa += palavra.charAt(palavra.length - i);
    }

    palavra.toLowerCase() == inversa.toLowerCase()
      ? (result.innerText = "A palavra é um palíndromo!")
      : (error.innerText = "A palavra não é um palíndromo!");
  }
};

exercicio9 = () => {
  let resul = document.getElementById("resposta");
  let soma = 0;
  resul.innerHTML = "";
  resul.innerHTML = "<h2>Resposta da Atividade</h2>";
  for (let i = 1; i <= 100; i++) {
    soma += i;
    resul.innerHTML = `<h2>Resposta da Atividade</h2><br>${soma} <br>`;
  }
};

exercicio10 = () => {
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let num = document.getElementById("num").value;
  let soma = 0;
  let contador = 0;
  error.innerText = "";
  result.innerHTML = "";

  if (num <= 0) {
    error.innerText = `O numero ${num} é invalido, favor informe um numero valido`;
    result.innerHTML = "";
  } else {
    while (num >= contador) {
      soma += contador;
      contador++;
    }
    let media = soma / num;
    result.innerHTML += `A soma é ${soma} <br>`;
    result.innerHTML += ` A media é ${media} <br>`;
  }
};

exercicio11 = () => {
  let resul = document.getElementById("resposta");
  resul.innerHTML = `<h2>Resposta da Atividade</h2> <br>`;

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      resul.innerHTML += ` <br> ${i} <br>`;
      console.log(i);
    }
  }
};

exercicio12 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let soma = 0;
  result.innerHTML = "";
  error.innerText = "";
if(num <=0){
  error.innerText = `favor inserir numero valido`

}
else{

  for (let i = 1; i < num.length; i++) {
soma +=parseInt(num.charAt(num.length - i))    
result.innerHTML =`a soma dos digitos é de ${soma}`
  }
}
  console.log(soma)
};

exercicio13 = () => {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let error = document.getElementById("erro");
    let result = document.getElementById("resultado");
    result.innerText = "";
    if (num2 < num1) {
        menor = parseInt(num2)
        maior = parseInt(num1)
    } else {
        menor = parseInt(num1);
        maior = parseInt(num2);
    }

    if (parseInt(num1) <= 0 || parseInt(num2) <= 0) {
        error.innerText = "Favor digitar um numero valido";
        result.innerText = "";
    }else{
        error.innerText = "" ;
        for (let i = menor; i <= maior; i++) {
            let teste = verificarPrimo(i);
            if(teste)
                result.innerText += ` ${i}`
        }
    }

function verificarPrimo(numero){
    let primo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) primo = false;
    }
    return primo
}
  }

  exercicio14 =() =>{
    let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let area = num1 * num2
  result.innerText = "";
  error.innerText = "";
  if (num1 <=0 && num2 <=0){
    error.innerText = `informe numero valido`
  }else{

    console.log(area)
    result.innerHTML = `a aréa de ${num1}cm e ${num2}cm é ${area}cm²`
  }
  
  }
    exercicio15 = () => {
      let pala = document.getElementById("palavra").value;
      document.getElementById("resultado").innerText = "";
      document.getElementById("erro").innerText = "";
      console.log(pala.length);
      let vog = [`a`, `e`, `i`, `o`, `u`];
      let consoante = [
        "b",
        "c",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "m",
        "n",
        "p",
        "q",
        "r",
        "s",
        "t",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      pala = pala.toLowerCase();
      if (pala == "") {
        document.getElementById("erro").innerText = `Favor informar uma palavra`;
      }
      for (let i = 0; i < pala.length; i++) {
        for (let l = 0; l < vog.length; l++) {
          if (pala.charAt(i) == vog[l]) {
            document.getElementById("resultado").innerText += ` #${pala.charAt(i)}`;
          }
        }
        for (let z = 0; z < consoante.length; z++) {
          if (pala.charAt(i) == consoante[z]) {
            document.getElementById("erro").innerText += ` #${pala.charAt(i)}`;
          }
        }
      }
    };

  exercicio16 = () =>{

    let num1 = document.getElementById("num1").value;
    let error = document.getElementById("erro");
    let result = document.getElementById("resultado");

    let area = (num1**2) *3.14
    result.innerText = "";
  error.innerText = "";
    if(num1<=0){
      error.innerText=`favor informar numero valido`
    }else{

      result.innerHTML = `A area é de ${area}cm²`
  console.log(area)
    }

  }
  exercicio17 = () =>{

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let error = document.getElementById("erro");
    let result = document.getElementById("resultado");
    let area = num1*num2 /2

    result.innerHTML = "";
    error.innerText = "";
      if(num1<=0 && num2 <=0){
        error.innerText=`favor informar numero valido`
      }else{
  
        result.innerHTML = `A area é de ${area}cm²`
    console.log(area)
      }
  }
  exercicio18 = () =>{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    let error = document.getElementById("erro");
    let result = document.getElementById("resultado");
    let area =( (Number(num1)+Number(num2)) * (Number(num3)) /2)
    result.innerHTML = "";
    error.innerText = "";//---------------------------------------------------------------------------------

      if(num1<=0 && num2 <=0 && num3 <=0){
        error.innerText=`favor informar numero valido`
      }else{
  
        result.innerHTML = `A area é de ${area}cm²`
    console.log(area)
      }
  }
  exercicio19 = () =>{
let data = document.getElementById("data").value
let result = document.getElementById("resultado")
let data1 = new Date();
let data2 = new Date(data);
let dif = data1.getTime() - data2.getTime()
let error = document.getElementById("erro")
let idedi= Math.floor(dif / (1000 * 60 * 60 * 24 *365.25))
if (idedi>110 || idedi<=0) {
  result.innerText=""
  error.innerHTML="informe idade valida"
}else{
  error.innerHTML=""
  result.innerHTML = `a idade é ${idedi}`
}
  }
  exercicio20 = () =>{
    let frase = document.getElementById("frase").value
    let result = document.getElementById("resultado")
    let error = document.getElementById("erro")
    let inversao = ""
    error.innerText = ""
    result.innerHTML = ""

    if (frase ==""){
      error.innerText = `escreva algo`
    }
    else{

      for (let i = 1; i <= frase.length; i++) {
        inversao += frase.charAt(frase.length - i)
        result.innerHTML = `o inverso da palavra ${frase} é ${inversao}`
        
      }
    }

  }
  exercicio21 = () =>{
    let frase = document.getElementById("frase").value
    let error = document.getElementById("erro")
    let result = document.getElementById("resultado")
    let espacobranco = frase.trim();
    
      if( frase == ""){
        result.innerHTML = ""
        error.innerText = "favor informar uma frase"
      }   else{
        error.innerText = ""
result.innerHTML = espacobranco.replace(/\s/g, " ")
      }
    }    
  
    exercicio22 = () =>{
    let num = document.getElementById("num").value;
let soma = 0
    let error = document.getElementById("erro");
    let result = document.getElementById("resultado");
    result.innerText = ``

    soma +=parseInt(num)
    while (soma <=100) {
      let numero = parseInt(prompt("informe mais um numero"))
      if(isNaN(numero)|| numero <=0){
        numero = parseInt(prompt('numero invalido, informe novamente'))
      }else{
        soma +=numero
      }
    }
    result.innerText= `O total da soma é ${soma}`
  }

  exercicio23 = ()=>{
    let frase = document.getElementById("frase").value.toLowerCase()
    let error = document.getElementById("erro");
    let result = document.getElementById("resultado");
    let palavra = document.getElementById("palavra").value.toLowerCase()
result.innerHTML = ""
error.innerHTML = ""
let contador  = 0
let buspalavra = frase.split(" ")

if (frase == "" || palavra == "" ) {
  error.innerHTML = `escreva uma frase valida`

}else{
  for (let i = 0; i < buspalavra.length; i++) {
    if(palavra == buspalavra [i]){

      contador++
    }
    
  }
  result.innerHTML = `a palavra ${palavra} aparece ${contador} vezes, na frase que foi escrita`
}

    
  }
  exercicio24 = () =>{
    let resultado = document.getElementById("resultado");

    let valor = document.getElementById("frase").value;
    let frase = valor.split(" ");
    const array = [];
  
    let erro = document.getElementById("erro");
  
    if (valor == "") {
      erro.innerText = "Coloque um título!";
      resultado.innerHTML = "";
    } else {
      erro.innerText = "";
      const fraseMod = frase.map((palavra) => {
        const primeiraLetra = palavra[0].toUpperCase();
        array.push(primeiraLetra);
        return primeiraLetra + palavra.slice(1);
      });
      resultado.innerHTML = `<h1>${fraseMod.join(" ")}</h1>`;
    }
  }
  exercicio25 = () =>{
    let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  result.innerText = "";

  let nome = [];
  nome.push(num1);
  nome.push(num2);
  nome.push(num3);
  nome.sort((a, b) => a - b);

  result.innerText += `#${nome[0]}` ;
  (result.innerText += `#${nome[1]}` ), (result.innerText += `#${nome[2]}` );


  }