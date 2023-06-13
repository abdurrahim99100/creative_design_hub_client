import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/carosel/caro-one1.jpg'
import img2 from '../../../assets/carosel/caro-one2.jpg'
import img3 from '../../../assets/carosel/caro-one3.jpg'
import img4 from '../../../assets/carosel/caro-one4.jpg'
import img5 from '../../../assets/carosel/caro-one5.jpg'
import img6 from '../../../assets/carosel/caro-one6.jpg'

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
            <div>
                <img src={img6} />
            </div>
        </Carousel>
    );
};

export default Banner;