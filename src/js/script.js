const ul = document.querySelector('.containerListaProdutos ul')

const montarListaProdutos = (listaProdutos) => {
    ul.innerHTML = ''

    listaProdutos.forEach((produto) => {
        const li   = document.createElement('li')

        const img  = document.createElement('img')
        const h3   = document.createElement('h3')
        const p    = document.createElement('p')
        const span = document.createElement('span')

        img.src        = produto.img
        img.alt        = produto.nome
        h3.innerText   = produto.nome
        p.innerText    = produto.preco
        span.innerText = produto.secao

        li.appendChild(img)
        li.appendChild(h3)
        li.appendChild(p)
        li.appendChild(span)

        ul.appendChild(li)
    })
}

montarListaProdutos(produtos)

const filtrarPorHortifruti = () => {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti'
    })

    montarListaProdutos(listaHortifruti)
}

const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti')
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti)

const mostrarTodos = () => {

    return montarListaProdutos(produtos)

}

const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos')
botaoMostrarTodos.addEventListener('click', mostrarTodos)

const buscarProdutos = () => {
    const imput = document.querySelector('.campoBuscaPorNome') 
    let busca = imput.value.toLowerCase()   

   const buscaProdutos = produtos.filter((produto) => {
        return produto.nome.toLowerCase() === busca
    })
    console.log(buscaProdutos)

    montarListaProdutos(buscaProdutos)
    
}

const botaoBusca = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome')
botaoBusca.addEventListener('click', buscarProdutos)

//const totalCarrinho = this.produtos.reduce(function(soma, produto){
//
//    return soma + produtos.preco
//
//}, 0)

