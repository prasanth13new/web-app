import React from 'react'
import Banner from './Banner'
import Cards from './Cards'
import Content from './Content'
import Footer from './Footer'
import Widget from './Widget'
import Widget_2 from './Widget_2'
import Widget_3 from './Widget_3'

function Home() {
    return (
        <div>
            <Banner />
            <Content />
            <Widget />
            <Widget_2 />
            <Widget_3 />
            <Cards />
            <Footer />
        </div>
    )
}

export default Home