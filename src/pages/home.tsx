import NailTop from "../layouts/home/nailtop"
import CarouselPhoto from "../layouts/home/Carousel"
import TextHomeshow from "../layouts/home/textHome"
import StaticRecord from "../layouts/home/staticRecord"
const Home = () => {
    return (
        <div className="homeCenter">
            <NailTop />
            <div className="centerMainCarouse">
                <CarouselPhoto />
                <TextHomeshow />
            </div>
            <StaticRecord/>
        </div>
    )
}
export default Home