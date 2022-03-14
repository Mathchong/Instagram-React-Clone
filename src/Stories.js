import Story from "./Story"

export default function stories() {
    const stories = [
        { story: { src: "assets/img/9gag.svg", username: "9gag" } },
        { story: { src: "assets/img/meowed.svg", username: "meowed" } },
        { story: { src: "assets/img/barked.svg", username: "barked" } },
        { story: { src: "assets/img/nathanwpylestrangeplanet.svg", username: "nathanwpylestrangeplanet" } },
        { story: { src: "assets/img/wawawicomics.svg", username: "wawawicomics" } },
        { story: { src: "assets/img/respondeai.svg", username: "respondeai" } },
        { story: { src: "assets/img/filomoderna.svg", username: "filomoderna" } },
        { story: { src: "assets/img/memeriagourmet.svg", username: "memeriagourmet" } }]


    return (
        <div className="stories">
            {stories.map(story => <Story src={story.story.src} username={story.story.username} />)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}