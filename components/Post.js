import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from "@heroicons/react/outline"
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid"

function Post({id, username, userImg, img, caption}) {
  return (
    <div className="bg-white my-7 border rounded-sm">
        {/* Header */}
        <div className="flex items-center p-5">
            <img src={userImg} alt="" className="rounded-full h-12 w-12 p-1 mr-3 border"/>
            <p className="flex-grow font-bold text-sm">Username</p>
            <DotsHorizontalIcon className="h-5 cursor-context-menu" />
        </div>

        {/* Image */}
        <img src={img} alt="Post" className="mx-auto object-cover w-full"/>

        {/* Buttons */}
        <div className="flex items-center justify-between px-4 pt-4">
            <div className="flex items-center space-x-4">
                <HeartIcon className="postBtn"/>
                <ChatIcon className="postBtn" />
                <PaperAirplaneIcon className="postBtn" />
            </div>

            <BookmarkIcon className="postBtn" />
        </div>

        {/* Caption */}
        <p className="p-5 truncate">
            <span className="font-bold mr-1">{username}</span>
            {caption}
        </p>

        {/* Comments */}
        {/* Input box */}
        <form className="flex items-center p-4 space-x-4">
            <EmojiHappyIcon className="h-7"/>
            <input type="text" className="border-none flex-1 focus:ring-0 outline-none" placeholder="Add a comment..."/>
            <button className=" font-semibold text-blue-400">Post</button>
        </form>
    </div>
  )
}

export default Post