import Link from "next/link";

const Navbar = () => {
    return (
        <header className="fixed top-0 z-30 w-full bg-white">
            <nav className="container relative flex items-center justify-between w-11/12 px-4 mx-auto md:w-5/6 md:px-10 w my-25 max-w-7xl">
            <ul className="flex items-center">
                <li className="relative lg:pr-11 pr-1.5 after:absolute after:top-0  after:content-[''] after:w-[2px] after:right-0 after:h-full after:bg-gray-200">
                    <Link href="/dacade">
                        <a className="font-bold">
                            <div className="flex items-center space-x-2">
                                <svg viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" class="lg:w-39 w-30"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 1.41C9.509 1.41 1.41 9.509 1.41 19.5S9.509 37.59 19.5 37.59s18.09-8.099 18.09-18.09S29.491 1.41 19.5 1.41ZM0 19.5C0 8.73 8.73 0 19.5 0S39 8.73 39 19.5 30.27 39 19.5 39 0 30.27 0 19.5Z" fill="#3F4246"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25.515 6.525C23.852 3.199 21.685 1.41 19.5 1.41V0c3.006 0 5.537 2.418 7.276 5.895 1.759 3.518 2.826 8.33 2.826 13.605 0 5.276-1.067 10.087-2.826 13.605C25.037 36.582 22.506 39 19.5 39v-1.41c2.184 0 4.352-1.789 6.015-5.115 1.642-3.284 2.678-7.87 2.678-12.975 0-5.104-1.036-9.69-2.678-12.975Z" fill="#3F4246"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M28.904 6.633C26.453 3.365 23.12 1.41 19.5 1.41V0c4.164 0 7.88 2.252 10.532 5.787 2.65 3.534 4.27 8.385 4.27 13.713 0 5.328-1.62 10.178-4.27 13.713C27.38 36.748 23.663 39 19.5 39v-1.41c3.621 0 6.953-1.955 9.404-5.223 2.45-3.268 3.988-7.815 3.988-12.867 0-5.052-1.537-9.6-3.988-12.867Z" fill="#3F4246"></path></svg>
                                <span className="hidden ml-2 text-lg font-bold md:block text-zinc-700">Dacade</span>
                            </div>
                        </a>
                    </Link></li>
               
                <li className="lg:pl-11 pl-1.5">
                    <Link href="/nearBalkans">
                        <a>
                            <div class="hidden lg:block">                        
                                <picture>
                                    <img alt="near balkans icon" src="/svgs/nearbalkans-icon.svg" className="" />
                                </picture>
                            </div>
                            <div className="lg:hidden">
                                <picture>
                                    <img alt="near balkans icon" src="/svgs/nearbalkans-icon-small.svg" className="" />
                                </picture>
                            </div>
                        </a>
                    </Link>
                </li>
            </ul>
            <div className="flex items-center">
                <button className="hidden px-5 py-3 leading-4 bg-transparent border border-none rounded-full cursor-pointer lg:block text-default focus:outline-none w-fit rounded-4xl">Start The Course</button>
                <Link href="/createWallet">
                    <a>
                        <button className="inline-block px-5 py-3 ml-12 leading-4 text-white border border-solid rounded-full cursor-pointer bg-zinc-700 focus:outline-none transition-250ms w-fit border-accent rounded-4xl">Create Wallet</button>
                    </a>
                </Link>
            </div>          
            </nav>
            
        </header>
    );
}

export default Navbar;