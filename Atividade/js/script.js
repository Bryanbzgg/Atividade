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
  var numero = document.getElementById("num").value;
  var erro = document.getElementById("erro")
  for (let i = 0; i <= numero; i += 2) {
    document.getElementById("resposta").innerHTML += `#${i} `;

    console.log(i);
  }
};

exercicio3=()=>{
    document.getElementById("resposta").innerHTML =
    "<h2>Resposta da Atividade</h2>";

    if(num / num == 0 && num / 1 == 0){
        console.log(`é `)
    }else{

    }


}
