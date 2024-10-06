import { useState } from "react";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic client-side validation
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const data = {
      firstname,
      lastname,
      username,
      email,
      phone,
      address,
      password,
    };

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/account/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess("Signup successful!");
        // Clear form fields after successful signup
        setfirstname("");
        setlastname("");
        setUsername("");
        setEmail("");
        setPhone("");
        setAddress("");
        setPassword("");
        setConfirmPassword("");
        // Optionally redirect user to login or other page
      } else {
        setError(result.message || "Signup failed.");
      }
    } catch (error) {
      setError("An error occurred during signup.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full w-[50vw]">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Sign Up
        </h2>

        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {success && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <span className="block sm:inline">{success}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex gap-4">
            <div className=" w-1/2">
              <div className="flex gap-2">
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="firstname"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    value={firstname}
                    onChange={(e) => setfirstname(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="lastname"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    value={lastname}
                    onChange={(e) => setlastname(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Choose a username"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 my-4"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </div>
            <div className=" w-1/2">
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
          </div>
        </form>
        <div className="flex item-center justify-evenly text-start mt-6">
          <p className="text-blue-500 hover:underline">
            Already have an account?
          </p>
          <Link to={`/login`} className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
