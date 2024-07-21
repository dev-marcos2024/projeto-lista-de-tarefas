let input = document.querySelector('#tarefas')
let btn = document.querySelector('#btn')
let lista = document.querySelector('#lista-tarefas')
let menssagemErro = false
let listaTarefas = []


// Criando o evento do clique do botao
btn.onclick = function(){
    addLine(input.value)
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
    anchor.setAttribute('onclick', 'removeElemento(this.parentNode)')
    anchor.appendChild(img)
    return anchor
}

// Função par remover uma linha
function removeElemento(item){
    let chave = item.firstChild.innerHTML;
    listaTarefas.splice(listaTarefas.indexOf(chave),1)
    localStorage.setItem('tarefas', JSON.stringify(listaTarefas))
    removerMsgErro()
    lista.removeChild(item)

}

// fução para remover menssagem de Erro
function removerMsgErro(){
    if(menssagemErro){
        document.querySelector('.msg-erro').remove()
        menssagemErro = false
    }
}

// Adicionando uma linha na lista.
function addLine(valueInput){
    let lengthli = document.querySelectorAll('li').length || 0;
    if (valueInput){
        removerMsgErro();

        let li = document.createElement('li')
        li.appendChild(document.createTextNode(valueInput))
        
        let deletar = criarBtnDelet()

        let div = document.createElement('div')
        div.appendChild(li);
        div.appendChild(deletar)
        div.className = 'conteudo-lista'

        lista.appendChild(div)

        listaTarefas.push(valueInput)

        localStorage.setItem('tarefas', JSON.stringify(listaTarefas))
    }else{
            if(!menssagemErro){
                let erro = document.createElement('span')
                erro.className = 'msg-erro'
                 erro.innerHTML = 'Opção invalida e necessario digitar uma tarefa'
                document.querySelector('.main-contener').appendChild(erro)
                menssagemErro = true
            }
    }
}

// Caregando dados do banco de dados do navegador
function carregarDados(){
    if (JSON.parse(localStorage.getItem('tarefas')) !== null){
        for (tarefa of JSON.parse(localStorage.getItem('tarefas'))) {
            addLine(tarefa)
        }
    }
    
}

carregarDados()





