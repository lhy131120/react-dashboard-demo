import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { pushMessage } from "../redux/toastSlice";

// Loading
import { OrbitProgress } from "react-loading-indicators";

const API_BASE = import.meta.env.VITE_BASE_URL;

const LoginPage = ({ setIsAuth }) => {

  const dispatch = useDispatch();

  const [isScreenLoading, setIsScreenLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsScreenLoading(true);
    try {
      const res = await axios.post(`${API_BASE}/admin/signin`, formData);
      const { expired, token } = res.data;
      document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
      axios.defaults.headers.common["Authorization"] = token;
      setIsAuth(true);
    } catch (error) {
      // console.error(err.response.data.message);
      const { message } = error.response.data;
			dispatch(
				pushMessage({
					text: message,
					status: "failure",
				})
			);
    } finally {
      setIsScreenLoading(false);
    }
  };

  const checkAdminLogin = async () => {
    try {
      await axios.post(`${API_BASE}/api/user/check`);
      setIsAuth(true);
    } catch (error) {
      console.log(error.response.data.message);
      setIsAuth(false);
    }
  };

  useEffect(() => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    if (!token) {
      setIsAuth(false);
      return;
    }

    axios.defaults.headers.common["Authorization"] = token;

    checkAdminLogin();
  }, []);

  return (
		<>
			<div className="container login">
				<div className="row justify-content-center">
					<h1 className="h3 mb-3 font-weight-normal">請先登入</h1>
					<div className="col-8">
						<form id="form" className="form-signin" onSubmit={handleSubmit}>
							<div className="form-floating mb-3">
								<input
									type="email"
									className="form-control"
									id="username"
									placeholder="name@example.com"
									value={formData.username}
									onChange={handleInputChange}
									required
									autoFocus
								/>
								<label htmlFor="username">Email address</label>
							</div>
							<div className="form-floating">
								<input
									type="password"
									className="form-control"
									id="password"
									placeholder="Password"
									value={formData.password}
									onChange={handleInputChange}
									required
								/>
								<label htmlFor="password">Password</label>
							</div>
							<button className="btn btn-lg btn-primary w-100 mt-3" type="submit">
								登入
							</button>
						</form>
					</div>
				</div>
				<p className="mt-5 mb-3 text-muted">&copy; 2024~∞ - 六角學院</p>
			</div>
			{isScreenLoading && (
				<div
					className="d-flex justify-content-center align-items-center"
					style={{
						position: "fixed",
						inset: 0,
						backgroundColor: "rgba(255,255,255,0.9)",
						zIndex: 999,
					}}
				>
					<OrbitProgress dense color="#1c211c" size="medium" text="" textColor="" />
				</div>
			)}
		</>
	);
};

LoginPage.propTypes = {
	setIsAuth: PropTypes.func.isRequired
};

export default LoginPage;
