import App from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
    return <>
        <Navbar />
        <Component {...pageProps} />
        <p>I am from the app.js file</p>

    </>
}


MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps }
}

export default MyApp