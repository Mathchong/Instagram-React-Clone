import Sugestao from "./Sugestao"
import Usuario from "./Usuario"

export default function Sidebar() {
    const sugestoes = [
        { src: "assets/img/bad.vibes.memes.svg", username: "bad.vibes.memes", razao: "Segue você" },
        { src: "assets/img/chibirdart.svg", username: "chibirdart", razao: "Segue você" } ,
        { src: "assets/img/razoesparaacreditar.svg", username: "razoesparaacredita", razao: "Novo no Instagram" } ,
        { src: "assets/img/adorable_animals.svg", username: "adorable_animals", razao: "Segue você" } ,
        { src: "assets/img/smallcutecats.svg", username: "smallcutecats", razao: "Segue você" }]
    const usuario = {src:"assets/img/catanacomics.svg", username:"catanacomics", nickname:"Catana"}
    return (
        <div className="sidebar">
            <Usuario src={usuario.src} username={usuario.username} nickname={usuario.nickname} />
            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestoes.map(sugestao => <Sugestao src={sugestao.src} username={sugestao.username} razao={sugestao.razao} />)}
            </div>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}