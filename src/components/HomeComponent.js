import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay transitionTime swipeable fade onSwipeEnd>
                <div>
                    <img src="/assets/images/1.jpg" />
                </div>
                <div>
                    <img src="/assets/images/2.jpg" />
                </div>
                <div>
                    <img src="/assets/images/3.jpg" />
                </div>
            </Carousel>
        </div>
    );
}