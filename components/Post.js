import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from "@heroicons/react/outline"
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid"
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from "firebase/firestore";
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Moment from "react-moment"

function Post({id, username, userImg, img, caption}) {
  const {data: session} = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => onSnapshot(query(collection(db, "posts", id, "comments"), orderBy("timestamp", "desc")), snapshot => {
        setComments(snapshot.docs)
    }), [db, id])

  useEffect(() => onSnapshot(collection(db, "posts", id, "likes"), snapshot => {
      setLikes(snapshot.docs)
  }), [db, id])

  useEffect(() => {
    setHasLiked(likes.findIndex(like => (like.id === session?.user?.uid)) !== -1)
  }, [likes])

  const likePost = async () => {
    if(hasLiked) {
        await deleteDoc(doc(db, "posts", id, "likes", session.user.uid))
    } else {
        await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
            username: session.user.username
        })
    }
  }

  const sendComment = async (e) => {
      e.preventDefault();

      const commentToSend = comment;
      setComment("");

      await addDoc(collection(db, "posts", id, "comments"), {
          comment: commentToSend,
          username: session.user.username,
          userImage: session.user.image,
          timestamp: serverTimestamp()
      })
  }

  return (
    <div className="bg-white my-7 border rounded-sm">
        {/* Header */}
        <div className="flex items-center p-5">
            <img src={userImg} alt="" className="rounded-full h-12 w-12 p-1 mr-3 border"/>
            <p className="flex-grow font-bold text-sm">{username}</p>
            <DotsHorizontalIcon className="h-5 cursor-context-menu" />
        </div>

        {/* Image */}
        <img src={img} alt="Post" className="mx-auto object-cover w-full"/>

        {/* Buttons */}
        {session && (
            <div className="flex items-center justify-between px-4 pt-4">
                <div className="flex items-center space-x-4">
                    {hasLiked ? (
                        <HeartIconFilled className="postBtn text-red-500" onClick={likePost}/>
                    ) : (
                        <HeartIcon className="postBtn" onClick={likePost}/>
                    )}
                    <ChatIcon className="postBtn" />
                    <PaperAirplaneIcon className="postBtn" />
                </div>

                <BookmarkIcon className="postBtn" />
            </div>
        )}

        {/* Caption */}
        <p className="p-5 truncate">
            {likes.length > 0 && (
                <p className="font-bold mb-4">{likes.length} likes</p>
            )}

            <span className="font-bold mr-1">{username}</span>
            {caption}
        </p>

        {/* Comments */}
        {comments.length > 0 && (
            <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
                {comments.map(comment => (
                    <div key={comment.id} className="flex items-center space-x-2 mb-3">
                        <img src={comment.data().userImage} alt="" className="h-7 rounded-full"/>
                        <p className="text-sm flex-1"><span className="font-bold">{comment.data().username}</span> {comment.data().comment}</p>
                        <Moment fromNow className="text-xs pr-5">{comment.data().timestamp?.toDate()}</Moment>
                    </div>
                ))}
            </div>
        )}

        {/* Input box */}
        {session && (
            <form className="flex items-center p-4 space-x-4">
                <EmojiHappyIcon className="h-7"/>
                <input type="text" className="border-none flex-1 focus:ring-0 outline-none" placeholder="Add a comment..." value={comment} 
                    onChange={e => setComment(e.target.value)} />
                <button type="submit" disabled={!comment.trim()} onClick={sendComment} className=" font-semibold text-blue-400">Post</button>
            </form>
        )}
    </div>
  )
}

export default Post