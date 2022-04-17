import {getProviders, signIn} from "next-auth/react"
import Header from "../../components/Header"

function signin({ providers }) {
    return (
        <>
            <Header />

            <div className="flex flex-col items-center justify-center min-h-screen py-2 px-14 text-center -mt-40">
                <img src="https://links.papareact.com/ocw" alt="logo" className="w-80"/>
                <p className="text-xs italic">This is NOT a real app, it is built for educational purposes only</p>
            
                <div className="mt-40">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                        <button className="p-3 bg-blue-500 rounded-lg text-white" 
                                onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                            Sign in with {provider.name}
                        </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
      )
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signin