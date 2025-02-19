import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/Auth/SignUpForm";

function Singup() {
  let navigate = useNavigate();

  const handleSignup = (email: string, password: string) => {
    console.log("Signing up ", email, password);
    navigate("/dashboard");
  };

  return (
    <>
      <div className="container">
        <div className="col-6 mx-auto">
          <div className="text-center">
            <h1>WELCOME</h1>
          </div>
          <SignUpForm onSubmit={handleSignup} />
        </div>
      </div>
    </>
  );
}

export default Singup;
