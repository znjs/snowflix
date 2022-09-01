import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { triggerToast } from "../../utils";
import "./auth.css";

function UserProfile() {
  const { userData } = useAuth();
  const navigate = useNavigate();
  const {
    user: { firstName, lastName },
  } = userData;
  return (
    <div className="w-full fx fx-jc-center fx-ai-center">
      <div className="bg-clr-gray-900 pd-1 clr-gray-50 w-20 brd-sm">
        <p className="ta-center f-1025 fw-600">Profile</p>
        <hr className="mg-b-05 border" />
        <p>
          <span className="fw-600">First Name:</span> {firstName}
        </p>
        <p>
          <span className="fw-600">Last Name:</span> {lastName}
        </p>
        <button
          className="bg-clr-red-600 clr-gray-50 pd-05 brd-sm w-full m-w-10 mg-b-05"
          onClick={() => {
            localStorage.removeItem("encodedToken");
            navigate("/");
            triggerToast("success", "User Logged out");
          }}>
          Logout
        </button>
      </div>
    </div>
  );
}

export { UserProfile };
