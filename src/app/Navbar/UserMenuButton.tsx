"use client"
import { Session  } from "next-auth"
import Image from "next/image";
import { signOut, signIn} from "next-auth/react"

interface UserMenuButtonProps{
    session: Session | null
}

export default function UserMenuButton({session}: UserMenuButtonProps){
    const user = session?.user;
    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                {
                    user ? 
                    (<Image src={user?.image || "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="  } alt="profile picture" width={40} height={40}
                    className="w-10 rounded-full"
                    />) :
                     (<svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4a4 4 0 110 8 4 4 0 010-8zM12 14a8 8 0 014.899 1.767 8.925 8.925 0 01-1.45 1.583 2.95 2.95 0 00-3.898 0 8.925 8.925 0 01-1.45-1.583A8 8 0 0112 14zm8 2a10 10 0 01-10 10 10 10 0 01-10-10 10 10 0 0110-10 10 10 0 0110 10z"
                    />
                  </svg>)
                }
            </label>
            <ul tabIndex={0} className="dropdown-content menu rounded-box menu-sm z-10 mt-3 w-52 bg-base-100 p-2 shadow">
                <li>
                    {
                        user ? 
                        <button onClick={()=> signOut({callbackUrl: "/"})}>sign out</button>
                        :
                        <button onClick={()=> signIn()}>sign in</button>
                    }
                </li>
            </ul>
        </div>
    )
}