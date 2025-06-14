import { FaRightToBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Header({ type = "home" }: { type?: string }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleRedirection = () => {
    if (type === "home") {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div className="absolute top-4 left-4 text-sm font-semibold">
        <span className="inline-flex items-center">
          <div className="w-4 h-4 border-2 rounded-full mr-1"></div>
          foo-rum
        </span>
      </div>
      {user ? (
        <div
          className="absolute top-4 right-4 text-sm flex items-center gap-2 cursor-pointer"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
          <FaRightToBracket className="text-black text-lg" />
        </div>
      ) : (
        <div
          className="absolute top-4 right-4 text-sm flex items-center gap-2 cursor-pointer"
          onClick={handleRedirection}
        >
          {type === "login" ? "Login" : "Back to home"}
          {type === "login" && (
            <FaRightToBracket className="text-black text-lg" />
          )}
        </div>
      )}
    </div>
  );
}
