const Hero = () => {
    return (
        <div className="bg-white px-[23px] lg:px-0 font-primary relative lg:pt-32 pt-12 h-[600px] lg:h-[500px] w-full">
            <div className="bg-heroBackground absolute lg:-top-[550px] -top-[520px] opacity-[0.4] left-0 lg:-left-48 h-[100%] w-[50%] z-10"></div>
            <div className="bg-heroBackground absolute lg:-top-[550px] -top-[520px] opacity-[0.4] right-0 lg:right-0 h-[100%] w-[40%] z-10"></div>
            <div className="flex flex-col items-center justify-center text-center lg:w-[910px] mx-auto">
                <h1 className="mx-auto text-4xl font-medium lg:text-7xl lg:w-full w-200 text-brandBlack"> Get<span className="not-italic text-transparent text-gradient w-fit bg-clip-text"> Near </span> Certified!</h1>
                <p className="pt-5 pb-24 text-lg leading-7 lg:text-22 text-brandBlack-light">We, in NEAR Balkans, know how important it is to have regional and local support. Now you can become NEAR certified in a regional language of preference and connect with our team to support your further growth within the NEAR ecosystem.</p>
                <div className="container mx-auto text-center">
                    <a href="/#learning" className="cursor-pointer">                       
                        <picture className="container flex items-center justify-center mx-auto text-center">
                            <img alt="arrow icon" src="/svgs/arrow-icon.svg" className="" />
                        </picture>
                </a></div>
            </div>
        </div>
    );
}

export default Hero;