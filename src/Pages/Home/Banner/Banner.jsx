import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <div >
            <Carousel>
                <div className="h-[90vh] ">
                    <img className="object-cover w-full h-full" src="https://i.ibb.co/4K2Y7WJ/121346.jpg" />
                    <div className="legend"> 
                    <h1 className="text-2xl py-2">This is Image title bar</h1>
                    <p>Legend 1</p>
                    </div>
                </div>
                <div className="h-[90vh] ">
                    <img className="object-cover w-full h-full" src="https://i.ibb.co/vH38LsK/play.jpg" />
                    <div className="legend"> 
                    <h1 className="text-2xl py-2">This is Image title bar</h1>
                    <p>Legend 1</p>
                    </div>
                </div >
                <div className="h-[90vh] ">
                    <img className="object-cover w-full h-full" src="https://i.ibb.co/98NXzc9/IMG-3118-scaled.jpg" />
                    <div className="legend"> 
                    <h1 className="text-2xl py-2">This is Image title bar</h1>
                    <p>Legend 1</p>
                    </div>
                </div>
                <div className="h-[90vh] ">
                    <img className="object-cover w-full h-full" src="https://i.ibb.co/59kvhXn/images-1.jpg" />
                    <div className="legend"> 
                    <h1 className="text-2xl py-2">This is Image title bar</h1>
                    <p>Legend 1</p>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;