const Certificate = () => {
    return (
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
    );
}

export default Certificate;