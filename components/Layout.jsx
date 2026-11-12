import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>
        <Head>
            <title>Grandview-Properties | Luxury & Modern Real Estate</title>
            <meta name='description' content='Discover luxury apartments, homes, and villas for rent and sale with Grandview-Properties. Browse verified listings with real-time filters and direct contact.' />
            <meta name='keywords' content='Grandview-Properties, real estate, luxury homes, rent apartment, buy villa, property search' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Box maxWidth='1280px' m='auto'>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </>
);

export default Layout;
