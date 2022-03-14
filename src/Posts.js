import Post from './Post';

export default function Posts() {
    const posts = [
        {
            userSrc: "assets/img/meowed.svg",
            userName: "meowed",
            postSrc: "assets/img/gato-telefone.svg",
            likeSrc: "assets/img/respondeai.svg",
            likeName: "respondeai",
            likeText: "outras 101.523 pessoas"
        },
        {
            userSrc: "assets/img/barked.svg",
            userName: "barked",
            postSrc: "assets/img/dog.svg",
            likeSrc: "assets/img/adorable_animals.svg",
            likeName: "adorable_animals",
            likeText: "outras 99.159 pessoas"
        }
    ]
    return (
        <div className="posts">
            {posts.map(post => <Post 
            userSrc={post.userSrc} 
            userName={post.userName}
            postSrc={post.postSrc}
            likeSrc={post.likeSrc}
            likeName={post.likeName}
            likeText={post.likeText}
            />)}
        </div>
    )
}