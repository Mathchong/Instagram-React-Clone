export default function Post(props){
    return (
        <div className="post">
                <div className="topo">
                    <div className="usuario">
                        <img alt="" src={props.userSrc} />
                        {props.userName}
                    </div>
                    <div className="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div className="conteudo">
                    <img alt="" src={props.postSrc} />
                </div>

                <div className="fundo">
                    <div className="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div className="curtidas">
                        <img alt="" src={props.likeSrc} />
                        <div className="texto">
                            Curtido por <strong>{props.likeName}</strong> e <strong>{props.likeText}</strong>
                        </div>
                    </div>
                </div>
            </div>
    )
}