import Head from "next/head"
import Image from "next/image"
export default function Product() {
    return (
        <>
            <Head>
                <title>
                    Gallery - Next One
                </title>
            </Head>
            <div className="about-page bg-gray-100">
                <div className="mycontainer py-12">
                    <h1 className="text-4xl text-center font-bold mb-1">Our Gallery</h1>
                    <p className="text-[#6d6d6d] text-center  mb-6 font-mono leading-tight"> Show Case of Our Gallery Pictures</p>

                    <div className="grid grid-cols-1 md:grid-cols-3">
                        
                        <div><img src='images/product-1.jpg' className="w-full"/></div>
                        <div><img src='images/product-2.png' className="w-full"/></div>
                        <div><img src='/images/product-3.jpg' className="w-full" /></div>
                        </div>

                </div>
            </div>

        </>
    )
}