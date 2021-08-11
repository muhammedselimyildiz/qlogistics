import React from 'react'

import Layout from '../components/common/Layout';
import Home from '../components/sections/Home'
import Whyq from '../components/sections/Whyq'
import Features from '../components/sections/Features'
import Product from '../components/sections/Product'
import Contact from '../components/sections/Contact'



const index = () => {
    return (
        <Layout>
            <Home />
            
            <Whyq />
            <Features />
            <Product />
            <Contact />
        </Layout>
    )
}

export default index
