function criaCartao (item, pergunta, resposta) {
    //console.log(item, pergunta,resposta)

    let flascard = document.getElementById('flashcard')
    let cartao = document.createElement('article')

    cartao.className = 'cartao';

    cartao.innerHTML = `
      <div class="cartao__conteudo">
                <h3>Missão</h3>
                
                <div class="cartao__conteudo__pergunta">
                    <p>Saiba qual é a missão de nossa empresa!</p>
                </div>
                
                <div class="cartao__conteudo__resposta">
                    <p>Nossa missão é ... </p>
                </div>
            </div>
            `

      
            let respostaEstaVisivel = false;
            
            function viraCartao () {
              respostaEstaVisivel = !variavelEstaVisivel;
              cartao.classList.toogle('active', viraCartao);
    }

    cartao.addEventListener('click', viraCartao);

    flashcard.appendChield(cartao);

}