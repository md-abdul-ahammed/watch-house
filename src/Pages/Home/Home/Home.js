import React from 'react';
import Discover from '../../../components/Discover/Discover';
import JoinWithUs from '../../../components/JoinWithUs/JoinWithUs';
import NewsLetter from '../../../components/NewsLetter/NewsLetter';
import SectionBanner from '../../../components/SectionBanner/SectionBanner';
import ShowSomeProducts from '../../../components/ShowSomeProducts/ShowSomeProducts';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Feedback from '../Feedback/Feedback';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <Products></Products>
            <Discover></Discover>
            <ShowSomeProducts></ShowSomeProducts>
            <hr />
            <SectionBanner></SectionBanner>
            <hr />
            <Feedback></Feedback>
            <hr />
            <NewsLetter></NewsLetter>
            <hr />
            <JoinWithUs></JoinWithUs>
            <hr />
            <Footer></Footer>
        </div>
    );
};

export default Home;