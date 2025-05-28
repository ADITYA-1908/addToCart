import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const usernameRegex = /^[A-Za-z]{7,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

    if (!usernameRegex.test(formData.username)) {
      setError(
        "Username must be more than 6 letters and contain only alphabets."
      );
      return false;
    }

    if (!passwordRegex.test(formData.password)) {
      setError(
        "Password must include at least one number, uppercase, lowercase, and special character."
      );
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setTimeout(() => {
      console.log("Login Successful:", formData);
      setIsLoading(false);
      navigate("/home");
    }, 1500);
  };

  return (
    <div className="flex h-screen">
      {/* Left Pane */}
      <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <div className="max-w-md text-center">
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?semt=ais_hybrid&w=740"
            alt="Mobile login concept illustration"
            title="Image by Freepik"
            className="w-auto"
          />
        </div>
      </div>

      {/* Right Pane */}
      <div className="w-full bg-blue-400 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">
            Sign Up
          </h1>

          {error && (
            <div className="mb-4 text-sm text-red-600 text-center">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 mb-5">
            <div className="mt-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 w-full border rounded-md"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-gray-300"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div style={{ marginTop: "20px" }}>
              <button
                type="submit"
                className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:ring-2 focus:ring-gray-900 transition"
              >
                {isLoading ? "Signing Up..." : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
