import axios from 'axios'
import Link from 'next/link'

const Index = (props) => {
    return (
        <div>
            <h1>My Next App</h1>
            <ul>
                {props.posts.map(p => (
                    //the /post in the href is the name of the post file with a query string attached
                    <li key={p.id}><Link href={`/post?id=${p.id}`} as={`/p/${p.id}`}>
                        <a>{p.title}</a>
                    </Link></li>
                ))}
            </ul>
        </div>
    )
}

Index.getInitialProps = async ctx => {
    // console.log('Fetching your data inside get initial props');
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const { data } = res
    return { posts: data } //this converts 'posts' to a prop of this file, an object must be returned

}
export default Index
