import React from 'react';
import { Content } from '../components/Content';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header'



import '../sass/style.scss'

const Main  = () => {
    return ( 
        <>
        <Header />
        <Content />
        <Footer />
        </>
     );
}
 
export default Main ;