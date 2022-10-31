import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex items-center justify-center py-24 mx-auto bg-white p px-23">
            <div className="lg:w-71%">
                <h5 className="text-lg text-center text-brandBlack"> Visit <span><Link href="/nearBalkans"><a className="font-bold">nearbalkans.org </a></Link></span>and make sure to follow us on our social and community channels!</h5>
                <div className="flex flex-col w-full lg:flex-row pt-39 lg:w-540 lg:mx-auto">
                    <div className="relative lg:pr-61 hidden after:absolute after:top-0 lg:block after:content-[''] after:lg:w-[2px] after:right-0 after:h-full after:bg-gray-200">
                        <Link href="/nearBalkans">
                            <a className="font-bold">
                                <picture>
                                    <img alt="near balkans icon" src="/svgs/nearbalkans-icon.svg" className="" />
                                </picture>
                            </a>
                        </Link>
                    </div>   
                    <ul className="flex items-center justify-between space-x-4 lg:space-x-6 lg:pl-61">
                        <li className="pl-2">
                            <Link href="https://twitter.com/NEARbalkan">
                                <a>
                                    <div class="">                        
                                        <picture>
                                            <img alt="twitter icon" src="/svgs/twitter.svg" className="object-cover object-center" />
                                        </picture>
                                    </div>                           
                                </a>
                            </Link>
                        </li>
                        <li className="">
                            <Link href="https://discord.com/invite/NgSYSmJXg9">
                                <a>
                                    <div class="">                        
                                        <picture>
                                            <img alt="discord icon" src="/svgs/discord.svg" className="object-cover object-center" />
                                        </picture>
                                    </div>                           
                                </a>
                            </Link>
                        </li>
                        <li className="">
                            <Link href="https://t.me/nearbalkanshub">
                                <a>
                                    <div class="">                        
                                        <picture>
                                            <img alt="telegram icon" src="/svgs/telegram.svg" className="object-cover object-center" />
                                        </picture>
                                    </div>                           
                                </a>
                            </Link>
                        </li>
                        <li className="">
                            <Link href="https://www.facebook.com/nearbalkans">
                                <a>
                                    <div class="">                        
                                        <picture>
                                            <img alt="facebook icon" src="/svgs/facebook.svg" className="object-cover object-center" />
                                        </picture>
                                    </div>                           
                                </a>
                            </Link>
                        </li>
                        <li className="">
                            <Link href="https://www.linkedin.com/company/nearbalkans">
                                <a>
                                    <div class="">                        
                                        <picture>
                                            <img alt="linkedIn icon" src="/svgs/linkedIn.svg" className="object-cover object-center" />
                                        </picture>
                                    </div>                           
                                </a>
                            </Link>
                        </li>
                        <li className="">
                            <Link href="https://www.instagram.com/nearbalkans/">
                                <a>
                                    <div class="">                        
                                        <picture>
                                            <img alt="instagram icon" src="/svgs/instagram.svg" className="object-cover object-center" />
                                        </picture>
                                    </div>                           
                                </a>
                            </Link>
                        </li>
                        <li className="pr-2">
                            <Link href="https://medium.com/@nearbalkans">
                                <a>
                                    <div class="">                        
                                        <picture>
                                            <img alt="medium icon" src="/svgs/medium.svg" className="object-cover object-center" />
                                        </picture>
                                    </div>                           
                                </a>
                            </Link>
                        </li>
                    </ul>           
                </div>
                
                <ul className="flex flex-col items-center justify-center pt-39 lg:gap-10 lg:flex-row">
                    <li className="">
                        <Link href="/nearBalkans">
                            <a className="text-lg text-center text-brandBlack">NEAR Balkans 2022</a>
                        </Link>
                    </li>
                    <li className="">
                        <Link href="mailto: info@nearbalkans.org">
                            <a className="text-lg text-center text-brandBlack">info@nearbalkans.org</a>
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/nearBalkans">
                            <a className="text-lg text-center text-brandBlack">Privacy Policy</a>
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/nearBalkans">
                            <a className="text-lg text-center text-brandBlack">Cookie Policy</a>
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/nearBalkans">
                            <a className="text-lg text-center text-brandBlack">Terms & Conditions</a>
                        </Link>
                    </li>
                </ul>  
            
              
                <h5 className="text-lg text-center pt-34 text-brandBlack"> NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia, Montenegro, North Macedonia, Serbia, and Slovenia</h5>               
            </div>
            
        </footer>
    );
}

export default Footer;