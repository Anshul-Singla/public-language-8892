import Body from "../components/bodypart";
import {HomePageCarousel} from "../components/Carousel";
import Footer from "../components/footer";
import Header from "../components/header";

function Home(){
    const carouselImages = {
        src1:'https://www.kindmeal.my/photos/shop/5/587-4745-m.jpg',
        src2:'https://www.kindmeal.my/photos/shop/5/549-4094-m.jpg',
        src3:'https://www.kindmeal.my/photos/shop/6/624-4812-m.jpg',
        src4:'https://www.kindmeal.my/photos/shop/6/607-4802-m.jpg',
        src5:'https://www.kindmeal.my/photos/shop/5/568-4306-m.jpg',
    }
    return (
        <div>
            <Header/>
            <HomePageCarousel carouselImages={carouselImages} />
            <Body/>
            <Footer/>
        </div>
    )
}
export default Home;