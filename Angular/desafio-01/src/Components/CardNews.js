class Cardnews extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({ mode: "open"});
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }
    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anônimo");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("url") 


        const conteudo = document.createElement("p");
        conteudo.textContent = this.getAttribute("content")


        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(conteudo);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");


        const imagem = document.createElement("img");
        imagem.src = this.getAttribute("imagem");
        imagem.alt = "Imagem da Notícia"

        cardRight.appendChild(imagem)

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot
    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        img{
            height: 220px;
            width: 400px;
        }
        .card{
            width: 80%;
            display: flex;
            flex-direction: row;
            box-shadow: 9px 9px 27px 0px rgba(0,0, 0.75);
            justify-content: space-between;
        }
        
        .card__left{
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .card__left > span{
            font-weight: bold;
        }
        
        .card__left > h1{
            margin-top: 15px;
            font-size: 30px;
        }
        .card__left > a{
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        .card__left > p{
            color: grey;
        }`;
        return style
    }
}
customElements.define("card-news", Cardnews)