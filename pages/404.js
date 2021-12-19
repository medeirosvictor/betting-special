import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
    return ( 
        <>
            <Head>
                <title>Betting Special | 404 Page not found </title>
            </Head>
            <div className="not-found">
                <h2>
                    Nope
                </h2>
                <Link href="/">
                    <a>Go back to the homepage</a>
                </Link>
            </div>
        </>
     );
}
 
export default NotFound;
