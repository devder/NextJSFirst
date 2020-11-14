import axios from 'axios'
const Post = (props) => (
    <div>
        <h1>Comments for post number{props.id}</h1>
        <ul>
            {props.comments.map(c =>
                <>
                    <li>{c.body}</li>
                    <p>written by {c.name}</p>
                </>)}
        </ul>

    </div>
)

Post.getInitialProps = async (ctx) => {
    // return ctx.query // here this is ctx.query which is already an oject {id: 23} so 'id' is a "Post" prop
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${ctx.query.id}`)
    const { data } = res
    console.log(data);
    //ctx.query is {id: 3}
    return { ...ctx.query, comments: data }
}
export default Post

//========ALTERNATIVE==========
// import { withRouter } from 'next/router'

// const Post = (props) => (
//     <h1>you are looking at {props.router.query.id}</h1>
// )
// export default withRouter(Post)
