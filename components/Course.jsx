const Course = () => {
    return (
        <div className="flex flex-col items-center mx-auto">
                <picture className="hidden py-6 lg:block"><img className="object-cover object-center" alt="curve icon" src="/svgs/curve-icon1.svg"/></picture>
                <div className="flex flex-col items-center mx-auto mt-16 lg:mt-0 lg:px-0 lg:max-w-940 px-22 gap-x-179 lg:flex-row gap-y-4">
                    <div className="z-20">
                        <div className="relative z-10 lg:w-296 lg:h-296 w-180 h-180">
                            <picture className="relative z-10"><img className="object-cover object-center" alt="course icon" src="/svgs/arrow-course-icon.svg"/></picture>
                            <div className="bg-targetLogoBackground top-38% right-70% absolute h-480 w-480 z-0 hidden lg:block bg-opacity-60 blur-159 backdrop-blur-159"></div>
                        </div>
                    </div>
                    <div className="text-center lg:text-left ">
                        <h1 className=" font-medium text-2xl lg:text-4xl leading-44 -tracking-0.02 relative  text-brandBlack">Complete the course
                        </h1>
                        <p className="mt-6 text-lg leading-6 text-brandBlack">In three simple modules, learn:</p>
                        <ul className="space-y-6">
                            <li className="flex flex-col items-center justify-center mt-26 lg:flex-row lg:justify-start gap-x-3 gap-y-10px">
                                <picture className="lg:h-8 lg:w-8 h-18 w-18"><img alt="modules" src="/images/modules.daf4f0ca.png" className=""/></picture>
                                <p className="text-base font-normal text-brandBlack lg:text-lg lg:leading-6 ">Essential NEAR concepts</p>
                            </li>
                            <li className="flex flex-col items-center justify-center lg:flex-row lg:justify-start gap-x-3 gap-y-10px">
                                <picture className="lg:h-8 lg:w-8 h-18 w-18"><img alt="contract" src="/images/contract.png" className=""/></picture>
                                <p className="text-base font-normal text-brandBlack lg:text-lg lg:leading-6 ">How to write smart contracts on NEAR</p>
                            </li>
                            <li className="flex flex-col items-center justify-center mt-26 lg:flex-row lg:justify-start gap-x-3 gap-y-10px">
                                <picture className="lg:h-8 lg:w-8 h-18 w-18"><img alt="blockchain" src="/images/blockchain.png" className=""/></picture>
                                <p className="text-base font-normal text-brandBlack lg:text-lg lg:leading-6 ">How to build dapps on the NEAR blockchain</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>   
    );
}

export default Course;