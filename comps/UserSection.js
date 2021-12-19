import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
//Durg0euS8H6ePdfs
const UserSection = () => {
    const { user, error, isLoading } = useUser()
    console.log(user)
    if (user) {
        return (
            <>
                <div>
                    <Link href="/profile"><a className="nav-user">{user.given_name ? user.given_name:user.nickname}</a></Link>
                </div>
            </>
        )
    } else {
        return (
            <>
                <Link href="/api/auth/login"><a>LOGIN</a ></Link>
            </>
        )
    }
}
 
export default UserSection;