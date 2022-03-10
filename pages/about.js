import Head from "next/head"
export default function About() {
    return (
        <>
            <Head>
                <title>
                    About - Next One
                </title>
            </Head>
            <div className="about-page bg-gray-100">
                <div className="mycontainer py-12">
                    <h1 className="text-4xl text-center font-bold mb-4">About Us</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="left p-4 ">
                            <img src="images/about.svg" className="w-[90%] md:w-[100%] mx-auto" alt="" />
                        </div>
                        <div className="right py-6 md:p-12 items-center">
                            <div className="title text-2xl font-bold text-[#3c3c3c]">
                                Our Mission
                            </div>
                            <p className="text-[#414141] my-2">Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.</p>
                            <ul>
                                <li><i class="fa-solid fa-check text-[#2fcf64]"></i> Laborum enim quasi at modi</li>
                                <li><i class="fa-solid fa-check text-[#2fcf64]"></i> Ad at tempore</li>
                                <li><i class="fa-solid fa-check text-[#2fcf64]"></i> Labore quaerat esse</li>
                            </ul>
                            <button className="bg-blue-500 shadow-md text-white py-2 px-5 border rounded-full mt-2">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}