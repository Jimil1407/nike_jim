import RedirectButton from "./RedirectButton";

const Hero = () =>{
    return(
        <main className="hero container">
            <div className="Hero-cont">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                JUST DO IT, NIKE.
                </p>
                <div className="hero-btn">
                    <RedirectButton/>
                    <button className="secondary-btn"><a href="https://www.nike.com/in/w/shoes-y7ok"target="_blank">Category</a></button>
                </div>
                <div className="shopping">
                    <p>Also available on</p>
                    <div className="brand-iconns">
                        <img src="/images/amazon.png" alt=""/>
                        <img src="/images/flipkart.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="hero-img">
                <img src="/images/shoe_image.png" alt="shoe" />
            </div>
        </main>
    )
};

export default Hero;