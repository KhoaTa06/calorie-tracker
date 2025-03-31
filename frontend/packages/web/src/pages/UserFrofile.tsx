import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const UserProfile = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext not initialized");
  }
  const { user, logout } = authContext;

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Email: {user.email}</p>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default UserProfile;
