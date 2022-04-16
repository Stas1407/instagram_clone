import Stories from '../components/Stories'
import Posts from '../components/Posts'
import MiniProfile from '../components/MiniProfile'
import Suggestions from '../components/Suggestions'

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto'>
        {/* Stories & Posts */}
        <section className='col-span-2 px-2'>
            {/* Stories */}
            <Stories />
            {/* Posts */}
            <Posts />
        </section>

        {/* Right section */}
        <section className='hidden lg:inline-grid md:col-span-1'>
            <div className='fixed'>
                <MiniProfile />
                <Suggestions />
            </div>
        </section>
    </main>
  )
}

export default Feed