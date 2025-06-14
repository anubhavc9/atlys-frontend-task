import { useState } from "react";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaListUl,
  FaListOl,
  FaCode,
  FaTrashAlt,
  FaPlus,
  FaMicrophone,
  FaPaperPlane,
  FaSmile,
  FaVideo,
} from "react-icons/fa";
import type { Post } from "../../types/Post";
import { useAuth } from "../../context/AuthContext";

export default function AddPostCard({
  posts,
  setPosts,
  onClickHandler,
}: {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  onClickHandler: () => void;
}) {
  const { user } = useAuth();
  const [text, setText] = useState<string>("");

  const handlePublish = () => {
    if (!user) {
      onClickHandler();
    }
    if (text.trim() === "") return;
    setPosts([
      {
        id: Date.now(),
        name: "You",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        emoji: "😊",
        content: text,
        createdOn: new Date().toISOString(),
      },
      ...posts,
    ]);
    setText("");
  };

  return (
    <div className="rounded-2xl p-1 mb-8 bg-gray-50 shadow-sm w-full max-w-md">
      <div className="bg-white p-2 rounded-2xl border border-gray-200 bg-white shadow-sm w-full max-w-md">
        <div className="mb-2 grid grid-cols-12 items-center gap-2">
          <div className="col-span-12 sm:col-span-10 flex flex-wrap items-center bg-gray-100 rounded-lg p-1">
            <select
              className="bg-white rounded-lg shadow-sm px-2 py-1 text-sm text-gray-700 mr-2 mb-1"
              onClick={onClickHandler}
            >
              <option>Paragraph</option>
            </select>

            <div className="flex items-center gap-1 mb-1">
              <button
                className="cursor-pointer p-1 hover:scale-105 transition-transform duration-150 bg-white hover:bg-gray-200 rounded"
                onClick={onClickHandler}
              >
                <FaBold />
              </button>
              <button
                className="cursor-pointer p-1 hover:scale-105 transition-transform duration-150 hover:bg-gray-200 rounded"
                onClick={onClickHandler}
              >
                <FaItalic />
              </button>
              <button
                className="cursor-pointer p-1 hover:scale-105 transition-transform duration-150 hover:bg-gray-200 rounded"
                onClick={onClickHandler}
              >
                <FaUnderline />
              </button>
            </div>

            <div className="h-5 w-px bg-gray-300 mx-2 hidden sm:block"></div>

            <div className="flex items-center gap-1 mb-1">
              <button
                className="cursor-pointer p-1 hover:scale-105 transition-transform duration-150 hover:bg-gray-200 rounded"
                onClick={onClickHandler}
              >
                <FaListUl />
              </button>
              <button
                className="cursor-pointer p-1 hover:scale-105 transition-transform duration-150 hover:bg-gray-200 rounded"
                onClick={onClickHandler}
              >
                <FaListOl />
              </button>
            </div>

            <div className="h-5 w-px bg-gray-300 mx-2 hidden sm:block"></div>

            <div className="flex items-center gap-1 mb-1">
              <button
                className="cursor-pointer p-1 hover:scale-105 transition-transform duration-150 hover:bg-gray-200 rounded"
                onClick={onClickHandler}
              >
                99
              </button>
              <button
                className="cursor-pointer p-1 hover:scale-105 transition-transform duration-150 hover:bg-gray-200 rounded"
                onClick={onClickHandler}
              >
                <FaCode />
              </button>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-2 flex justify-end">
            <button
              onClick={onClickHandler}
              className="text-red-500 bg-red-100 rounded-lg p-3 cursor-pointer hover:scale-105 transition-transform duration-150"
            >
              <FaTrashAlt />
            </button>
          </div>
        </div>

        <div className="flex items-start mb-2">
          <div
            className="mr-2 text-lg text-gray-500 cursor-pointer hover:scale-110 transition-transform duration-100"
            onClick={onClickHandler}
          >
            <FaSmile />
          </div>
          <textarea
            value={text}
            onClick={() => {
              if (!user) {
                onClickHandler();
              }
            }}
            onChange={(e) => setText(e.target.value)}
            className="w-full outline-none text-sm placeholder-gray-400"
            placeholder="How are you feeling today?"
            rows={4}
            style={{ resize: "none" }}
          ></textarea>
        </div>

        <div className="border-t border-gray-200 my-2 -mx-2"></div>

        <div className="flex items-center justify-between">
          <div className="flex gap-3 text-gray-500 " onClick={onClickHandler}>
            <button className="bg-gray-100 rounded-lg p-2 cursor-pointer hover:scale-110 transition-transform duration-100">
              <FaPlus />
            </button>
            <button className="cursor-pointer hover:scale-110 transition-transform duration-100">
              <FaMicrophone />
            </button>
            <button className="cursor-pointer hover:scale-110 transition-transform duration-100">
              <FaVideo />
            </button>
          </div>
          <button
            onClick={handlePublish}
            className="text-xl cursor-pointer text-indigo-600 hover:scale-110 transition-transform duration-100"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
}
