let myWindow;

function Modal(titre, texte){
    this.titre = titre;
    this.texte = texte;

    this.addTitle = () => {
        let h1 = document.getElementById("title");
        h1.innerHTML = this.titre;
    }

    this.addParagraph = () => {
        let paragraph = document.getElementById("paragraph");
        paragraph.innerHTML = this.texte;
    }

    this.addModal = () => {
        let window = document.getElementById("window");
        window.style.display = "block";
    }

    this.open = () => {
        document.getElementById("ok").addEventListener("click", () => {
            let features = "menuba=no, scrollbars=yes, width=600, height=900, status=no, toolbar=no";
            myWindow = window.open("https://www.repliksword.com/mangas-et-games-divers/2681-the-witcher-epee-geralt-de-riv-replique-twin-wolf.html",
                '', features)
        })
    }

    this.closeModal = (id) =>{
        document.getElementById(id).addEventListener("click", () => {
            let window = document.getElementById("window");
            window.style.display = "none";
            document.body.style.backgroundColor = "white";
        })
    }
    this.close = () => {
        document.getElementById("closeWindow").addEventListener("click", () => {
            myWindow.close();
        })
    }
}

let modal1 = new Modal("Salutation Guerrier",
    "Il vous manque quelque choses non ?<br> Cliquez sur OK pour vous procurez ce qui vous manque",
    "Acceptez de suivre l'aventure ?");

modal1.addParagraph();
modal1.addTitle();
modal1.addModal();
modal1.closeModal("close");
modal1.closeModal("cancel");
modal1.open();
modal1.close();