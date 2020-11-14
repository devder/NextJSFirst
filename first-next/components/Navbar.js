import Link from 'next/link'

const Navbar = () => {
    const styles = {
        display: "flex",
        background: "grey",
        justifyContent: "space-between",
        padding: "1rem"
    }
    return (
        <div style={styles}>
            <Link href='/'><a>Home Page</a></Link>
            <Link href='/contact'><span>About Page</span></Link>
            <Link href='/contact'><button>Contact Page</button></Link>
        </div>
    )
}
export default Navbar