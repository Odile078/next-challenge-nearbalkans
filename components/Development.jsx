const Development = () => {
    return (
        <div className="w-full bg-white">
            <div className="flex flex-col items-center justify-between lg:px-148 lg:flex-row mt-168">
                <div className="relative order-last space-y-4 text-center lg:order-first lg:text-start">
                    <h1 className="text-brandBlack font-medium text-2xl lg:text-4xl leading-44 -tracking-0.02 ">NEAR Development 101</h1>
                    <button className="font-normal relative z-10 text-brandBlack text-base leading-17.6  mt-4 focus:outline-none cursor-pointer border-solid border rounded-full px-5 py-3 w-fit inline-block">Start The Course</button>
                    <div className="bg-developmentBackground w-1067 h-60 top-5% -left-15% absolute hidden lg:block blur-159 z-0 bg-opacity-90"></div>
                </div>
                <div className="relative lg:w-400 lg:h-400 w-180 h-180">
                    <picture className=""><img className="object-cover object-center w-full " alt="near grey " src="/images/nearGrey.ff4971b0.png"/></picture>                   
            </div>
            </div>
        </div>
    );
}

export default Development;