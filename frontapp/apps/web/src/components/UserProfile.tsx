import { useContext } from "react";
import { AuthContext } from "@frontapp/api_call/AuthContext";
import { AuthContextType } from "@frontapp/types/AuthContextType";

function UserProfile() {
  const authContext = useContext(AuthContext as React.Context<AuthContextType>);
  if (!authContext) {
    throw new Error("AuthContext not initialized");
  }
  const { email, logout } = authContext;

  if (!email) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div>
      <h2>User Profile</h2>
      <p>Email: {email}</p>
      <button onClick={logout}>Logout</button>
    </div>
    </>
  );
}

export default UserProfile;
