import Link from "next/dist/client/link"
import Image from "next/image"
import Head from "next/head"
export default function Navbar() {
  return <>
<Head>
<link rel='icon' href='logo.png' />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</Head>
    <div className="mycontainer">
    <nav className="flex justify-between items-center py-2">
      <div className="left">
        <Link href='/'>
        <Image className="cursor-pointer" width={35} height={30} src='/logo.png'/>
        </Link>
      </div>
    <input id="menu__toggle" type="checkbox" className="invisible" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>
      <div className="right" id='navbar'>
        <ul className=" md:flex space-y-2 md:space-y-0 md:space-x-4 font-medium">
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
          <li><Link href='/product'>Product</Link></li>
          <li><Link href='/gallery'>Gallery</Link></li>
        </ul>
      </div>
    </nav>
    </div>
  </>
}