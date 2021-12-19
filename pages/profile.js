import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

const Profile = () => {
    const { user } = useUser()

    return ( 
        <>
            <div>
                Welcome, {user.name}!
            </div>
            <div>
                <Link href="/api/auth/logout">
                    <a>Logout</a>
                </Link>
            </div>
        </>
     );
}
 
export default Profile;