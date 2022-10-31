import Image from "next/image";
import Link from "next/link";
import Hero from "./Hero";

const MainContent = () => {
    return (
        <main className="relative top-0 min-h-screen overflow-hidden bg-white pt-44">
            <Hero/>
            <div id="learning" className="flex items-center justify-center mt-16 ">
                <h1 className="font-primary text-center text-brandBlack font-medium text-32 lg:text-5xl lg:leading-60 -tracking-0.02">Making your NEAR <br/>learning easy.</h1>
            </div>
            <div className="flex flex-col-reverse items-center mx-auto mt-16 lg:mt-182 gap-y-4 px-22 lg:px-0 lg:max-w-940 lg:flex-row lg:justify-between">
                <div className="text-center font-primary lg:text-left">
                    <h1 className="text-brandBlack font-medium text-2xl text-center lg:text-left lg:text-4xl  leading-44 -tracking-0.02">Open NEAR wallet</h1>
                    <p class="text-brandBlack-light text-brandBlack- font-normal text-base lg:text-lg lg:leading-6 pt-6px">
                        <span class="hidden lg:block">Opening a NEAR wallet is the first step and<br/> essential part of joining the NEAR community<br/> as well as starting this course.</span>
                        <span class="block lg:hidden">Opening a NEAR wallet is the first step and an essential part of joining the NEAR community as well as starting this course.</span>
                    </p>
                    <Link href="/createWallet">
                        <a>
                            <div className="font-normal text-brandBlack text-base leading-17.6 mt-8  border-dark-100 text-dark-100 border-brandBlack focus:outline-none cursor-pointer w-fit border-accent border-solid border rounded-full px-5 py-3 rounded-4xl inline-block">Create Wallet</div>
                        </a>
                    </Link>
                </div>
                <div className="relative">
                    <div className="bg-nearLogoBackground bg-opacity-90 blur-159 h-480 w-full max-w-480  absolute -top-2/3  left-20% hidden lg:block"></div>
                    <div className="lg:w-[296px] lg:h-[296px] w-[180px] h-[180px] relative">
                        <picture><img alt="wallet " src="/images/near.3a79378e.png" className="object-cover object-center"/></picture>
                    </div>
                </div>
            </div>
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
            
            <div className="relative flex flex-col items-center justify-center px-5 mt-16 space-y-8 lg:mt-4 lg:space-y-20">
                           
                <div className="container flex flex-col items-center justify-center mx-auto">
                    <picture className="hidden pb-6 lg:block "><img className="object-cover object-center" alt="curve icon" src="/svgs/curve-icon2.svg"/></picture>                  
                   <h1 className="text-center text-dark-100 font-medium text-2xl lg:text-4xl leading-44 -tracking-0.02 relative">Claim NEAR certificate
                    
                    </h1>
                    <p class="text-brandBlack-light font-normal text-lg leading-6 text-center">
                        <span class="hidden lg:block"> Upon course completion, receive the NEAR dev 101<br/> certificate as an NFT on your NEAR wallet.</span>
                        <span class="block lg:hidden">Upon course completion, receive the NEAR dev 101 certificate as an NFT on your NEAR wallet.</span>
                    </p>
                </div>
                <div className="lg:w-644 h-186 lg:h-362.25 w-full">
                <picture className="lg:w-644 h-186 lg:h-362.25 w-full"><img className="object-cover object-center w-full " alt="certificate " src="/images/certificate.png"/></picture>
                    
                </div>
            </div>
            <div className="w-full bg-white">
                <div className="flex flex-col items-center justify-between lg:px-148 lg:flex-row mt-168">
                    <div className="relative order-last space-y-4 text-center lg:order-first lg:text-start">
                        <h1 className="text-brandBlack font-medium text-2xl lg:text-4xl leading-44 -tracking-0.02 ">NEAR Development 101</h1>
                        <button className="font-normal relative z-10 text-brandBlack text-base leading-17.6  mt-4 focus:outline-none cursor-pointer border-solid border rounded-full px-5 py-3 w-fit inline-block">Start The Course</button>
                        <div className="bg-developmentBackground w-1067 h-60 top-5% -left-15% absolute hidden lg:block blur-159 z-0 bg-opacity-90"></div>
                    </div>
                    <div className="lg:w-400 lg:h-400 w-180 h-180">
                      <picture className=""><img className="object-cover object-center w-full " alt="near grey " src="/images/nearGrey.ff4971b0.png"/></picture>
                    
                </div>
                </div>
            </div>
        </main>
    );
}

export default MainContent;