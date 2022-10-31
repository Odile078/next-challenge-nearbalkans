import Link from "next/link";

const Wallet = () => {
    return (
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
    );
}

export default Wallet;