import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "../components/LoadingIndicator";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    setError(false);
    e.preventDefault();

    try {
      const res = await api.post("/token/", { username, password });

      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate("/");
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center">
        {error && (
          <div className=" h-12 w-1/2 m-2  rounded bg-red-500 text-white fixed font-custom text-center p-2">
            خطأ في إسم المستخدم أو كلمة السر
          </div>
        )}
        <div className=" flex flex-col items-center justify-center  font-custom">
          <div className="flex items-center place-content-center gap-3 hover:cursor-pointer p-5 m-4">
            <span className=" font-medium text-lg  ">مكتبتي</span>
            <img
              className="w-12 h-12"
              src="../../../icons/library.png"
              alt=""
            />
          </div>
          <form
            className="border flex flex-col px-10 py-4 rounded"
            onSubmit={handleSubmit}
          >
            <h1 className="text-center m-3">يرجى تسجيل الدخول</h1>
            <input
              type="text"
              placeholder="إسم المستخدم"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className=" w-80 border h-12 rounded p-2 m-4 py-1 focus:outline-none focus:border-blue-700 placeholder:text-right transition-colors "
            />
            <input
              type="password"
              placeholder="كلمة السر"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-80 border h-12 rounded p-2 m-4 py-1 focus:outline-none focus:border-blue-700 placeholder:text-right transition-colors"
            />
            <div className="flex flex-col items-center justify-center m-4 p-2 gap-3 ">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 py-3 px-5 rounded-lg w-40 text-white font-semibold text-sm"
              >
                {loading ? <LoadingIndicator /> : "تسجيل الدخول"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
