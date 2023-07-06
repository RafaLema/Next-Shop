import Mainlayout from '@layout/Mainlayout';
import '@styles/tailwind.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Mainlayout>
                <Component {...pageProps} />
            </Mainlayout>
        </>
    );
}

export default MyApp;
