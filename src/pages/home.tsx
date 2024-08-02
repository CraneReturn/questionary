import NailTop from "../layouts/home/nailtop"
import CarouselPhoto from "../layouts/home/Carousel"
import TextHomeshow from "../layouts/home/textHome"
import StaticRecord from "../layouts/home/staticRecord"
import StaticTeps from "../layouts/home/staticStep"
import StepCreate from "../layouts/home/StepCreate"
import StepCom from "../layouts/home/stepCom"
import StepQuestion from "../layouts/home/StepQuestion"
import StepData from "../layouts/home/StepData"
import { useEffect } from "react"
import topIconshow from '../../src/asset/image/top.png'
const Home = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.fadeClass');
        const options = {
            rootMargin: '0px',
            threshold: 0.2
        };
        const observer = new IntersectionObserver(([entry]) => {
            console.log(entry.target);

            if (entry.isIntersecting) {
                entry.target.classList.add('withAnimation');
            }

        }, options);
        elements.forEach((dom) => {
            observer.observe(dom);

        });
    }, []);

    return (
        <div className="homeCenter">
            <NailTop />
            <CarouselPhoto />
            <div className="centerMainCarouse">
                <div>
                    <div className="borderTopScroll">

                        <a href="#topNail">

                            <div className="borderTop">

                                <img src={topIconshow} alt="" />
                            </div>
                        </a>


                    </div>
                </div>
                <TextHomeshow />
                <div className="staticStepCenter">
                    <StaticRecord />
                    <StaticTeps />
                    <StepCreate />
                    <StepCom />
                    <StepQuestion />
                    <StepData />
                </div>
            </div>

        </div >
    )
}
export default Home