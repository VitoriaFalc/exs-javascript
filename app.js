
//inicio conteudo da aula
alert('Boas-Vindas ao jogo do número secreto'); //exibir mensagem
console.log('Ola');

//criando variavel
let numeroSecreto = 5;
console.log('Valor do numero secreto ' + numeroSecreto);//mostra esta mensagem no console do site
//Comando para fazer uma pergunta
let chute; // chute = variavel do usuario
let tentativa =1;
while (chute != numeroSecreto){
    chute = prompt('Digite o chute');
    //condição IF
        if (chute == numeroSecreto){
            //comando onde podemos testar e visualizar, como se fosse um ambiente quase secreto para desenvolvedoras e desenvolvedores.
            console.log(`Isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativa} tentativas `);
            //Template Strings colocamos o acento grave (`) para puxar a variavel para exibição
            
        } else  {
            if (chute > numeroSecreto){
                alert(`O número secreto é menor que ${chute}`);
            } else{
                alert(`O número secreto é maior que ${chute}`);
            }
            tentativa ++;
    }
    
}
//console.log('Valor do Chute ' + chute);
console.log('Resultado de comparação ', numeroSecreto == chute); // retorna um valor booleano (true or false)




/*SObre o console.log()
//O console.log é uma função muito importante em linguagens de programação, 
//especialmente quando se trabalha com JavaScript. 
//Sua principal função é imprimir mensagens no console do ambiente de desenvolvimento, 
//o que permite testar informações relevantes durante a execução de um programa.*/

//fim conteudo da aula



