import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Modal } from "bootstrap";
import "./assets/main.scss";

import LoginPage from "./pages/LoginPage";

const API_BASE = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

const defaultModalState = {
	imageUrl: "",
	title: "",
	category: "",
	unit: "",
	origin_price: "",
	price: "",
	description: "",
	content: "",
	is_enabled: 0,
	imagesUrl: [""],
	customObj: "",
};

function App() {
	// const [formData, setFormData] = useState({
	// 	username: "",
	// 	password: "",
	// });
	const [isAuth, setIsAuth] = useState(false);
	const [products, setProducts] = useState([]);
	const [modalMode, setModalMode] = useState(null);
	const [tempProduct, setTempProduct] = useState({});
	const [pageInfo, setPageInfo] = useState({});
	const productModalRef = useRef(null);
	const delProductModalRef = useRef(null);

	// const handleInputChange = (e) => {
	// 	const { id, value } = e.target;
	// 	setFormData({
	// 		...formData,
	// 		[id]: value,
	// 	});
	// };

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const res = await axios.post(`${API_BASE}/admin/signin`, formData);
	// 		const { expired, token } = res.data;
	// 		document.cookie = `hexToken=${token}; expires=${new Date(expired)}`;
	// 		axios.defaults.headers.common["Authorization"] = token;
	// 		getProducts();
	// 		setIsAuth(true);
	// 	} catch (err) {
	// 		console.error(err.response.data.message);
	// 	}
	// };

	const checkAdminLogin = async () => {
		const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, "$1");

		if (!token) {
			setIsAuth(false);
			return;
		}
		axios.defaults.headers.common["Authorization"] = token;

		try {
			await axios.post(`${API_BASE}/api/user/check`);
			getProducts();
			setIsAuth(true);
		} catch (error) {
			console.error(error.response.data.message);
			setIsAuth(false);
		}
	};

	const getProducts = async (page = 1) => {
		try {
			const res = await axios.get(`${API_BASE}/api/${API_PATH}/admin/products?page=${page}`);
			// console.log(res.data);
			const _products = res.data.products;
			// check callback data is Array or not
			setProducts(Array.isArray(_products) ? _products : []);
			setPageInfo(res.data.pagination);
		} catch (error) {
			console.error(error.response.data.message);
			setProducts([]);
		}
	};

	const handleProductsPageChange = (page) => {
		getProducts(page);
	};

	const handleOpenProductModal = (modalMode, product) => {
		// set Modal Mode for Change Modal Title
		modalMode === "new" ? setModalMode("new") : setModalMode("edit");

		// if product? === edit
		if (modalMode === "new") {
			setTempProduct(defaultModalState);
		} else {
			// 檢查副圖是否存在!!!!
			setTempProduct({
				...product,
			});
		}

		const modal = Modal.getInstance(productModalRef.current);
		modal.show();
	};

	const handleCloseProductModal = () => {
		const modal = Modal.getInstance(productModalRef.current);
		modal.hide();
	};

	const handleCloseDeleteModal = () => {
		const modal = Modal.getInstance(delProductModalRef.current);
		modal.hide();
	};

	const handleOpenDeleteModal = (product) => {
		if (!product) {
			console.error("Invalid product passed to handleOpenDeleteModal");
			return;
		}
		setTempProduct(product);
		const modal = Modal.getInstance(delProductModalRef.current);
		modal.show();
	};

	const handleModalInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setTempProduct({
			...tempProduct,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleImageChange = (e, index) => {
		const { value } = e.target;

		const newImages = tempProduct?.imagesUrl ? [...tempProduct.imagesUrl] : [""];

		newImages[index] = value;

		setTempProduct({
			...tempProduct,
			imagesUrl: newImages,
		});
	};

	const handleAddImage = () => {
		const newImages = [...tempProduct.imagesUrl, ""];
		setTempProduct({
			...tempProduct,
			imagesUrl: newImages,
		});
	};

	const handleRemoveImage = () => {
		const newImages = [...tempProduct.imagesUrl];
		newImages.pop();
		setTempProduct({
			...tempProduct,
			imagesUrl: newImages,
		});
	};

	const createProduct = async () => {
		try {
			await axios.post(`${API_BASE}/api/${API_PATH}/admin/product/`, {
				data: {
					...tempProduct,
					origin_price: Number(tempProduct.origin_price),
					price: Number(tempProduct.price),
					is_enabled: tempProduct.is_enabled ? 1 : 0,
				},
			});
		} catch (error) {
			console.log(`新增產品失敗: ${error.response.data.message}`);
		}
	};

	const updateProduct = async () => {
		try {
			await axios.put(`${API_BASE}/api/${API_PATH}/admin/product/${tempProduct.id}`, {
				data: {
					...tempProduct,
					origin_price: Number(tempProduct.origin_price),
					price: Number(tempProduct.price),
					is_enabled: tempProduct.is_enabled ? 1 : 0,
					imagesUrl: Array.isArray(tempProduct?.imagesUrl) ? tempProduct.imagesUrl : [],
				},
			});
		} catch (error) {
			console.log(`更新產品失敗: ${error.response.data.message}`);
		}
	};

	const deleteProduct = async () => {
		try {
			await axios.delete(`${API_BASE}/api/${API_PATH}/admin/product/${tempProduct.id}`, {
				data: {
					...tempProduct,
					origin_price: Number(tempProduct.origin_price),
					price: Number(tempProduct.price),
					is_enabled: tempProduct.is_enabled ? 1 : 0,
					imagesUrl: Array.isArray(tempProduct?.imagesUrl) ? tempProduct.imagesUrl : [],
				},
			});
		} catch (error) {
			console.log(`刪除產品失敗: ${error.response.data.message}`);
		}
	};

	const handleUpdateProduct = async () => {
		const apiCall = modalMode === "new" ? createProduct : updateProduct;

		try {
			await apiCall();
			getProducts(pageInfo.current_page);
			handleCloseProductModal();
		} catch (error) {
			console.error(error.response.data.message);
		}
	};

	const handleDeleteProduct = async () => {
		try {
			await deleteProduct();
			getProducts();
			handleCloseDeleteModal();
		} catch (error) {
			console.log(`Error: ${error.response.data.message}`);
		}
	};

  const handleFileChange = async (e) => {
    // console.log(e.target);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file-to-upload', file)
    
    try {
      const res = await axios.post(`${API_BASE}/api/${API_PATH}/admin/upload`, formData);
      const uploadImageUrl = res.data.imageUrl;
      setTempProduct({
        ...tempProduct,
        imageUrl: uploadImageUrl
      })
    } catch (error) {
      console.error(error.response.data.message)
    }
  }

	// useEffect
	useEffect(() => {
		checkAdminLogin();
	}, []);

	useEffect(() => {
		new Modal(productModalRef.current, {
			backdrop: false,
		});
		new Modal(delProductModalRef.current, {
			backdrop: false,
		});
	}, []);

	return (
		<>
			{isAuth ? (
				<div>
					<div className="container">
						<div className="text-end mt-4">
							<button onClick={() => handleOpenProductModal("new")} className="btn btn-primary">
								建立新的產品
							</button>
						</div>
						<table className="table mt-4">
							<thead>
								<tr>
									<th width="120">分類</th>
									<th>產品名稱</th>
									<th width="120">原價</th>
									<th width="120">售價</th>
									<th width="100">是否啟用</th>
									<th width="120">編輯</th>
								</tr>
							</thead>
							<tbody>
								{products.map((product) => (
									<tr key={product.id} style={{ verticalAlign: "middle" }}>
										<td>{product.category}</td>
										<td>{product.title}</td>
										<td className="text-center">{product.origin_price}</td>
										<td className="text-center">{product.price}</td>
										<td>{product.is_enabled ? <span className="text-success">啟用</span> : <span>未啟用</span>}</td>
										<td>
											<div className="btn-group">
												<button
													onClick={() => handleOpenProductModal("edit", product)}
													type="button"
													className="btn btn-outline-primary btn-sm"
												>
													編輯
												</button>
												<button
													onClick={() => handleOpenDeleteModal(product)}
													type="button"
													className="btn btn-outline-danger btn-sm"
												>
													刪除
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						{pageInfo.total_pages > 2 ? (
							<div className="d-flex justify-content-center">
								<nav>
									<ul className="pagination">
										<li className={`page-item ${!pageInfo.has_pre && "disabled"}`}>
											<a
												onClick={() => handleProductsPageChange(pageInfo.current_page - 1)}
												className="page-link"
												href="#"
											>
												上一頁
											</a>
										</li>

										{Array.from({ length: pageInfo.total_pages }).map((el, index) => (
											<li
												data-key={index + 1}
												key={index}
												className={`page-item ${pageInfo.current_page === index + 1 && "active"}`}
											>
												<a
													onClick={() => handleProductsPageChange(index + 1)}
													className="page-link"
													href="javascript:;"
												>
													{index + 1}
												</a>
											</li>
										))}

										<li className={`page-item ${!pageInfo.has_next && "disabled"}`}>
											<a
												onClick={() => handleProductsPageChange(pageInfo.current_page + 1)}
												className="page-link"
												href="#"
											>
												下一頁
											</a>
										</li>
									</ul>
								</nav>
							</div>
						) : (
							<></>
						)}
					</div>
				</div>
			) : (
				<LoginPage getProducts={getProducts} setIsAuth={setIsAuth} />
			)}
			<div
				ref={productModalRef}
				id="productModal"
				className="modal fade"
				tabIndex="-1"
				aria-labelledby="productModalLabel"
				aria-hidden="true"
				style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
			>
				<div className="modal-dialog modal-xl">
					<div className="modal-content border-0 shadow">
						<div className="modal-header text-white bg-primary">
							<h5 className="modal-title fs-4 fw-bold">{modalMode === "new" ? "新增產品" : "編輯產品"}</h5>
							<button
								onClick={() => handleCloseProductModal()}
								type="button"
								className="btn-close"
								aria-label="Close"
							></button>
						</div>
						<div className="modal-body text-start">
							<div className="row">
								<div className="col-md-4">
									<div className="mb-5">
										<label htmlFor="fileInput" className="form-label">
											圖片上傳
										</label>
										<input
											onChange={handleFileChange}
											type="file"
											accept=".jpg,.jpeg,.png"
											className="form-control"
											id="fileInput"
										/>
									</div>
									<div className="mb-2">
										<div className="mb-3">
											<label htmlFor="imageUrl" className="form-label">
												主圖
											</label>
											<input
												onChange={handleModalInputChange}
												value={tempProduct.imageUrl}
												name="imageUrl"
												type="text"
												className="form-control"
												placeholder="請輸入圖片連結"
											/>
										</div>
										<img className="img-fluid" src={tempProduct.imageUrl} alt={tempProduct.title} />
									</div>
									<div className="border border-2 border-dashed rounder-3 p-3">
										{tempProduct.imagesUrl?.map((image, index) => (
											<div key={index} className="mb-2">
												<label htmlFor={`imagesUrl-${index + 1}`} className="form-label">
													副圖{index + 1}
												</label>
												<input
													onChange={(e) => handleImageChange(e, index)}
													value={image}
													id={`imagesUrl-${index + 1}`}
													type="text"
													placeholder={`圖片網址-${index + 1}`}
													className="form-control mb-2"
												/>
												{image && <img className="img-fluid mb-2" src={image} alt={`副圖 ${index + 1}`} />}
											</div>
										))}
										<div className="btn-group w-100">
											{tempProduct?.imagesUrl?.length < 5 &&
												tempProduct?.imagesUrl[tempProduct?.imagesUrl?.length - 1] !== "" &&
												tempProduct?.imagesUrl[tempProduct?.imagesUrl?.length] !== "undefined" && (
													<button onClick={handleAddImage} className="btn btn-outline-primary btn-sm w-100">
														新增圖片
													</button>
												)}
											{tempProduct?.imagesUrl?.length > 1 && (
												<button onClick={handleRemoveImage} className="btn btn-outline-danger btn-sm w-100">
													取消圖片
												</button>
											)}
										</div>
									</div>
								</div>
								<div className="col-md-8">
									<div className="mb-3">
										<label htmlFor="title" className="form-label">
											標題
										</label>
										<input
											onChange={handleModalInputChange}
											value={tempProduct.title}
											name="title"
											id="title"
											type="text"
											className="form-control"
											placeholder="請輸入標題"
										/>
									</div>

									<div className="row">
										<div className="mb-3 col-md-6">
											<label htmlFor="category" className="form-label">
												分類
											</label>
											<input
												onChange={handleModalInputChange}
												value={tempProduct.category}
												name="category"
												id="category"
												type="text"
												className="form-control"
												placeholder="請輸入分類"
											/>
										</div>
										<div className="mb-3 col-md-6">
											<label htmlFor="unit" className="form-label">
												單位
											</label>
											<input
												onChange={handleModalInputChange}
												value={tempProduct.unit}
												name="unit"
												id="unit"
												type="text"
												className="form-control"
												placeholder="請輸入單位"
											/>
										</div>
									</div>

									<div className="row">
										<div className="mb-3 col-md-6">
											<label htmlFor="origin_price" className="form-label">
												原價
											</label>
											<input
												onChange={handleModalInputChange}
												value={tempProduct.origin_price}
												name="origin_price"
												id="origin_price"
												type="number"
												min="0"
												className="form-control"
												placeholder="請輸入原價"
											/>
										</div>
										<div className="mb-3 col-md-6">
											<label htmlFor="price" className="form-label">
												售價
											</label>
											<input
												onChange={handleModalInputChange}
												value={tempProduct.price}
												name="price"
												id="price"
												type="number"
												min="0"
												className="form-control"
												placeholder="請輸入售價"
											/>
										</div>
									</div>
									<hr />

									<div className="mb-3">
										<label htmlFor="description" className="form-label">
											產品描述
										</label>
										<textarea
											onChange={handleModalInputChange}
											value={tempProduct.description}
											name="description"
											id="description"
											className="form-control"
											placeholder="請輸入產品描述"
										></textarea>
									</div>
									<div className="mb-3">
										<label htmlFor="content" className="form-label">
											說明內容
										</label>
										<textarea
											onChange={handleModalInputChange}
											value={tempProduct.content}
											name="content"
											id="content"
											className="form-control"
											placeholder="請輸入說明內容"
										></textarea>
									</div>
									<div className="mb-3">
										<div className="form-check">
											<input
												onChange={handleModalInputChange}
												checked={tempProduct.is_enabled}
												name="is_enabled"
												id="is_enabled"
												className="form-check-input"
												type="checkbox"
											/>
											<label className="form-check-label" htmlFor="is_enabled">
												是否啟用
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="modal-footer">
							<button onClick={() => handleCloseProductModal()} type="button" className="btn btn-outline-secondary">
								取消
							</button>
							<button onClick={handleUpdateProduct} type="button" className="btn btn-primary">
								確認
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Delete Modal */}
			<div
				ref={delProductModalRef}
				className="modal fade"
				id="delProductModal"
				tabIndex="-1"
				style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5">刪除產品</h1>
							<button onClick={handleCloseDeleteModal} type="button" className="btn-close" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							你是否要刪除
							<span className="text-danger fw-bold">{tempProduct.title}</span>
						</div>
						<div className="modal-footer">
							<button onClick={handleCloseDeleteModal} type="button" className="btn btn-secondary">
								取消
							</button>
							<button onClick={handleDeleteProduct} type="button" className="btn btn-danger">
								刪除
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
