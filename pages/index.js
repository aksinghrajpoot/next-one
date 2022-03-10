import Head from "next/head"
import Image from "next/dist/client/image"
import Link from "next/link"
export default function Home() {
  return (
    <>

      <Head>
        <title>Next One</title>
      </Head>

      <div className="main py-14">
        <div className="mycontainer grid grid-cols-1 md:grid-cols-2 order-1">
          <div className="order-first md:order-last mx-auto">
            <Image src="/images/hero-left.svg" alt="" width={400} height={400} className='mx-auto' />
          </div>
          <div className="col-start-1	my-auto">
            <h1 className="text-4xl font-bold text-gray-800">Make Your Business More Profitable</h1>
            <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
            <button className="bg-blue-500 shadow-md text-white py-2 px-5 border rounded-full mt-2">Get Started</button>
          </div>
        </div>
      </div>

      <section className="features py-12 bg-orange-50">
        <div className="row">
          <h2 className="text-3xl font-medium text-center">Imagine Features</h2>
          <span className="block text-slate-800 text-center text-base my-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.
            <div className="mycontainer grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 pt-10 gap-5" >
              <div className="card ">
                <span className="feature-icons"><i class="fa-solid fa-arrows-rotate"></i></span>
                <div className="imagine-title">
                  Marketing Consulting
                </div>
                <div className="imagine-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</div>
                <div className="learn-more">Learn more</div>
              </div>
              <div className="card ">
                <span className="feature-icons"><i class="fa-solid fa-basket-shopping"></i></span>
                <div className="imagine-title">
                  Market Analysis
                </div>
                <div className="imagine-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</div>
                <div className="learn-more">Learn more</div>
              </div>
              <div className="card ">
                <span className="feature-icons"><i class="fa-brands fa-shopify"></i></span>
                <div className="imagine-title">
                  Easy Purchase
                </div>
                <div className="imagine-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</div>
                <div className="learn-more">Learn more</div>
              </div>
              <div className="card ">
                <span className="feature-icons"><i class="fa-solid fa-arrow-rotate-left"></i></span>
                <div className="imagine-title">
                  Free Updates
                </div>
                <div className="imagine-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</div>
                <div className="learn-more">Learn more</div>
              </div>
              <div className="card ">
                <span className="feature-icons"><i class="fa-solid fa-face-smile"></i></span>
                <div className="imagine-title">
                  100% Satistified
                </div>
                <div className="imagine-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</div>
                <div className="learn-more">Learn more</div>
              </div>
              <div className="card ">
                <span className="feature-icons"><i class="fa-solid fa-plug"></i></span>
                <div className="imagine-title">
                  Easy Plugin
                </div>
                <div className="imagine-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</div>
                <div className="learn-more">Learn more</div>
              </div>
            </div>
          </span>
        </div>
      </section>

      <section className="feedback py-10 md:py-20">
        <div className="mycontainer grid grid-cols-1 md:grid-cols-2">
          <div className="left p-4">
            <img src="images/left-2.svg" className="w-[90%] md:w-[100%] mx-auto" alt="" />
          </div>
          <div className="right py-6 md:p-12 items-center">
            <div className="title text-4xl font-bold text-[#3c3c3c]">
            Communicate and gather feedback
            </div>
            <p className="text-[#414141] my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.</p>
            <div className="card border-l-8 border-blue-600">
              <h3 className="font-bold">Grey Simpson</h3> 
              <h4>Co-Founder, XYZ Inc.</h4>    
              <p className="italic text-[#4b4b4b] my-2">“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”</p>         
            </div>
          </div>
        </div>
      </section>
      <section className="feedback py-10 md:py-20">
        <div className="mycontainer grid grid-cols-1 md:grid-cols-2">
          <div className="left p-4 order-lasr">
            <img src="images/left-3.svg" className="w-[90%] md:w-[100%] mx-auto" alt="" />
          </div>
          <div className="right py-6 md:p-12 items-center">
            <div className="title text-4xl font-bold text-[#3c3c3c]">
            Communicate and gather feedback
            </div>
            <p className="text-[#414141] my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem molestias corrupti officia veniam.</p>
            <div className="card border-l-8 border-sky-700">
              <h3 className="font-bold">Grey Simpson</h3> 
              <h4>Co-Founder, XYZ Inc.</h4>    
              <p className="italic text-[#4b4b4b] my-2">“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”</p>         
            </div>
          </div>
        </div>
      </section>

    </>
  )
}