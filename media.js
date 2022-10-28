 // nome é uma variável
 let nome=prompt("Nome do aluno?");
 alert('Ola aluno, '+nome,);

// nome é uma variável
function verificaSituacao(){
     let n1 = parseFloat(document.getElementById("nota1").value);
     let n2 = parseFloat(document.getElementById("nota2").value);

let media = (n1 + n2) / 2;
let situacao = "";
if (media>=6) {
     situacao = 'Aprovado';
     document.getElementById("situacao").style.color ="blue" ;
} else  {
    if (media >=2 && media < 6 ) {
         situacao = "Exame Final";
         document.getElementById("situacao").style.color ="green" ;
    } else {
         situacao = 'Reprovado';
         document.getElementById("situacao").style.color ="red" ;
    }
}
document.getElementById("nota1").innerHTML = n1;
document.getElementById("nota1").style.color ="black" ;
document.getElementById("nota2").innerHTML = n2;
document.getElementById("nota2").style.color ="black" ;
document.getElementById("media").innerHTML = media;
document.getElementById("media").style.color ="black" ;
document.getElementById("situacao").innerHTML = situacao;
}

