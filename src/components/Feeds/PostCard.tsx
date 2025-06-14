import { FaRegHeart, FaRegComment, FaRegPaperPlane } from "react-icons/fa";
import type { Post } from "../../types/Post";

export default function PostCard({
  post,
  onClickHandler,
}: {
  post: Post;
  onClickHandler: () => void;
}) {
  return (
    <div className="rounded-2xl p-1 mb-4 bg-gray-50 shadow-sm w-full max-w-md">
      <div className="bg-white p-2 rounded-2xl border border-gray-200 ">
        <div className="flex items-center mb-2 grid grid-cols-12">
          <img
            src={post.avatar}
            alt="avatar"
            className="w-8 h-8 rounded-md col-span-1 text-center"
          />
          <div className="col-span-11 ml-1">
            <div className="font-semibold text-sm text-gray-800">
              {post.name}
            </div>
            <div className="text-xs text-gray-500">5 mins ago</div>
          </div>
        </div>

        <div className="flex items-start grid grid-cols-12">
          <div className="text-sm mr-2 col-span-1 text-center">
            <span className="rounded-full p-0.75 bg-gray-200">
              {post?.emoji}
            </span>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed col-span-11 ml-1">
            {post.content}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6 text-gray-500 text-base px-3 py-2 pb-1">
        <button
          className="cursor-pointer hover:scale-110 transition-transform duration-100"
          onClick={onClickHandler}
        >
          <FaRegHeart />
        </button>
        <button
          className="cursor-pointer hover:scale-110 transition-transform duration-100"
          onClick={onClickHandler}
        >
          <FaRegComment />
        </button>
        <button
          className="cursor-pointer hover:scale-110 transition-transform duration-100"
          onClick={onClickHandler}
        >
          <FaRegPaperPlane />
        </button>
      </div>
    </div>
  );
}
