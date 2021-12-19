import Link from "next/link";
import UserSection from "./UserSection";


const Navbar = () => {

    return ( 
        <nav>
            <div className="logo">
                <h1>NFL BETTING SPECIAL</h1>
            </div>
            <div className="nav-items">
                <Link href="/">
                    <a>home</a>
                </Link>
                <Link href="/guide">
                    <a>guide</a>
                </Link>
                <UserSection/>
            </div>
        </nav>
     );
}
 
export default Navbar;
