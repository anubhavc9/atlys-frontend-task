import { useState } from "react";
import PostCard from "./PostCard";
import AddPostCard from "./AddPostCard";
import Header from "../Common/Header";
import type { Post } from "../../types/Post";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const DUMMY_POSTS: Post[] = [
  {
    id: 1,
    name: "Theresa Webb",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    emoji: "😊",
    content: "Had a great day exploring the city! 🌆",
    createdOn: "2025-06-14T10:15:00Z",
  },
  {
    id: 2,
    name: "Cameron Williamson",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    emoji: "🤔",
    content: "Thinking about my next project. Any ideas?",
    createdOn: "2025-06-14T11:30:00Z",
  },
  {
    id: 3,
    name: "Jenny Wilson",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    emoji: "😎",
    content: "Loving the new React features! 🚀",
    createdOn: "2025-06-14T12:00:00Z",
  },
  {
    id: 4,
    name: "Robert Fox",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    emoji: "🥳",
    content: "Excited for the weekend plans! 🎉",
    createdOn: "2025-06-14T12:45:00Z",
  },
];

export default function FeedsPage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([...DUMMY_POSTS]);
  const { user } = useAuth();

  const showAlertMessage = () => {
    if (user) {
      alert("function not implemented");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-12 flex flex-col items-center justify-center">
      <Header type={"login"} />
      <AddPostCard
        posts={posts}
        setPosts={setPosts}
        onClickHandler={showAlertMessage}
      />
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} onClickHandler={showAlertMessage} />
      ))}
    </div>
  );
}
