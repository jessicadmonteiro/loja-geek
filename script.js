const itens= [
    {
        imagem:"./assets/img/actions/animewoman.jpg",
        nome: "Anime Woman",
        valor: "R$ 160.00",
        tipo: "actions",
    },
    {
        imagem:"./assets/img/actions/dragonballpersonagem.jpg",
        nome: "Dragon Ball Personagem",
        valor: "R$ 200.00",
        tipo: "actions", 
    },
    {
        imagem:"./assets/img/actions/starwarspersonagem.jpg",
        nome: "Star Wars Personagem",
        valor: "R$ 250.00",
        tipo: "actions",
    },
    {
        imagem:"./assets/img/painting/clock.jpg",
        nome: "Clock",
        valor: "R$ 100.00",
        tipo: "painting",
    },
    {
        imagem:"./assets/img/painting/gamepad.jpg",
        nome: "Game Pad",
        valor: "R$ 150.00",
        tipo: "painting",
    },
    {
        imagem:"./assets/img/painting/personagem.jpg",
        nome: "Personagem",
        valor: "R$ 120.00",
        tipo: "painting",
    }
]

const listaDeProdutosPainting = document.querySelector(".decorativoFrames")

const listaDeProdutosAction = document.querySelector(".actionFigure")

function listarProdutos (lista, referenciaHtml){
    for(let i = 0; i < lista.length; i ++){
        let produto = lista[i]
        if(produto.tipo == "painting"){
            let leiauteDeProdutos = criarLeiaute(produto)
            referenciaHtml.appendChild(leiauteDeProdutos)
        }
    }
}
listarProdutos(itens, listaDeProdutosPainting)

function listarProdutosAction (lista, referenciaHtml){
    for(let i = 0; i < lista.length; i ++){
        let produto = lista[i]
        if(produto.tipo == "actions" ){
            let leiauteDeProdutos = criarLeiaute(produto)
            referenciaHtml.appendChild(leiauteDeProdutos)
        }
    }
}
listarProdutosAction(itens, listaDeProdutosAction)

function criarLeiaute(produto){
    let imagem = produto.imagem
    let nome   = produto.nome
    let valor  = produto.valor
    let tipo   = produto.tipo

    let tagDiv    = document.createElement("div")
    let tagLi       = document.createElement("li")
    let tagImg      = document.createElement("img")
    let tagNome     = document.createElement("h3")
    let tagValor    = document.createElement("p")  

    tagImg.src         = imagem
    tagImg.alt         = nome
    tagNome.innerText  = nome
    tagValor.innerText = valor
    
    tagLi.appendChild(tagImg)
    tagLi.appendChild(tagNome)
    tagLi.appendChild(tagValor)
    tagDiv.appendChild(tagLi)
    
    return tagDiv

}
