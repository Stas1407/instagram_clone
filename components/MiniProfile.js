import { signOut, useSession } from "next-auth/react"


function MiniProfile() {
  const {data: session} = useSession();

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <img className="rounded-full border p-[2px] w-16 h-16" src={session.user.image} alt=""></img>
        <div className="flex-1 mx-4">
            <h2 className="font-bold">{session.user.username}</h2>
            <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
        </div>
        <button className="text-sm text-blue-400 font-semibold" onClick={signOut}>Sign out</button>
    </div>
  )
}

export default MiniProfile