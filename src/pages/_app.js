import { ProvideAuth } from '@/hooks/useAuth';
import Mainlayout from '@layout/Mainlayout';
import '@styles/tailwind.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ProvideAuth>
                <Mainlayout>
                    <Component {...pageProps} />
                </Mainlayout>
            </ProvideAuth>
        </>
    );
}

export default MyApp;
