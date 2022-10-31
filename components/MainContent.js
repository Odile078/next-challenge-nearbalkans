import Image from "next/image";
import Link from "next/link";
import Certificate from "./Certificate";
import Course from "./Course";
import Development from "./Development";
import Hero from "./Hero";
import Wallet from "./Wallet";

const MainContent = () => {
    return (
        <main className="relative top-0 min-h-screen overflow-hidden bg-white pt-44">
            <Hero/>
            <div id="learning" className="flex items-center justify-center mt-16 ">
                <h1 className="font-primary text-center text-brandBlack font-medium text-32 lg:text-5xl lg:leading-60 -tracking-0.02">Making your NEAR <br/>learning easy.</h1>
            </div>
            <Wallet/>
            <Course/>
            <Certificate/>
            <Development/>
        </main>
    );
}

export default MainContent;