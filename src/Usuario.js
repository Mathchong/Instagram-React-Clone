export default function Usuario(props) {
    return (
        <div className="usuario">
            <img alt="" src={props.src} />
            <div className="texto">
                <strong>{props.username}</strong>
                {props.nickname}
            </div>
        </div>
    )
}