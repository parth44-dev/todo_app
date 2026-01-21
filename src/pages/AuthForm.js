import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const nav = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (isLogin) {
      console.log("Login data:", {
        email: formData.email,
        password: formData.password
      });

      nav("/Dashboard",{state:formData})
     
    } else {
      console.log("Signup data:", {
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword
      });
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >

            SignUp
          </button>
        </div>

        {isLogin ? (
          <form className="form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <a href="#">Forgot Password</a>
            <button type="submit">Login</button>
            <p>
              Not A Member?
              <a href="#" onClick={() => setIsLogin(false)}>
                {" "}
                SignUp Now{" "}
              </a>
            </p>
          </form>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <h2>SignUp</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit">SignUp</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
