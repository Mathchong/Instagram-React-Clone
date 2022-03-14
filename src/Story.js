export default function Story(props) {
    return (
        <article className="story" key={props.key}>
            <div className="imagem">
                <img alt="" src={props.src} />
            </div>
            <div className="usuario">
                {props.username}
            </div>
        </article>
    )
}