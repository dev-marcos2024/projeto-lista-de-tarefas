

let input = document.querySelector('#tarefas')
let btn = document.querySelector('#btn')
let lista = document.querySelector('#lista-tarefas')

// Criando o evento do clique do botao
btn.onclick = function(){

    let li = document.createElement('li')
    li.appendChild(document.createTextNode(input.value))
    
    let deletar = criarBtnDelet()

    let div = document.createElement('div')
    div.appendChild(li);
    div.appendChild(deletar)
    div.className = 'conteudo-lista'

    lista.appendChild(div)

    input.value = ""
}

// função para criar o botao deletar
function criarBtnDelet(){

    // riando a imagem do botao deletar
    let img = document.createElement('img');
    img.src = 'imgs/delete.png'
    img.alt = 'Botao deletar'

    // Adicionando a imagem ao botao
    var anchor = document.createElement('a');
    anchor.style.cursor = 'pointer'
    anchor.setAttribute('onclick', 'removeElemento(this.parentNode, "lista-tarefas")')
    anchor.appendChild(img)
    return anchor
}

// Função par remover uma linha
function removeElemento(item){
    lista.removeChild(item)
}


