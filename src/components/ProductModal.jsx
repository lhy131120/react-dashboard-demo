import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Modal } from "bootstrap";

const API_BASE = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

const ProductModal = ({ modalMode, tempProduct, isOpen, setIsOpen, getProducts, pageInfo }) => {
	const [modalData, setModalData] = useState(tempProduct);

	useEffect(() => {
		setModalData({
			...tempProduct,
		});
	}, [tempProduct]);

	const productModalRef = useRef(null);

	useEffect(() => {
		new Modal(productModalRef.current, {
			backdrop: false,
		});
	}, []);

	useEffect(() => {
		if (isOpen) {
			const modal = Modal.getInstance(productModalRef.current);
			modal.show();
		}
	}, [isOpen]);

	const handleCloseProductModal = () => {
		const modal = Modal.getInstance(productModalRef.current);
		modal.hide();
		setIsOpen(false);
	};

	const handleModalInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setModalData({
			...modalData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleImageChange = (e, index) => {
		const { value } = e.target;

		const newImages = modalData?.imagesUrl ? [...modalData.imagesUrl] : [""];

		newImages[index] = value;

		setModalData({
			...modalData,
			imagesUrl: newImages,
		});
	};

	const handleAddImage = () => {
		const newImages = [...modalData.imagesUrl, ""];
		setModalData({
			...modalData,
			imagesUrl: newImages,
		});
	};

	const handleRemoveImage = () => {
		const newImages = [...modalData.imagesUrl];
		newImages.pop();
		setModalData({
			...modalData,
			imagesUrl: newImages,
		});
	};

	const createProduct = async () => {
		try {
			await axios.post(`${API_BASE}/api/${API_PATH}/admin/product/`, {
				data: {
					...modalData,
					origin_price: Number(modalData.origin_price),
					price: Number(modalData.price),
					is_enabled: modalData.is_enabled ? 1 : 0,
				},
			});
      handleCloseProductModal();
		} catch (error) {
			console.log(`新增產品失敗: ${error.response.data.message}`);
      alert(`新增產品失敗: ${error.response.data.message}`);
		}
	};

	const updateProduct = async () => {
		try {
			await axios.put(`${API_BASE}/api/${API_PATH}/admin/product/${modalData.id}`, {
				data: {
					...modalData,
					origin_price: Number(modalData.origin_price),
					price: Number(modalData.price),
					is_enabled: modalData.is_enabled ? 1 : 0,
					imagesUrl: Array.isArray(modalData?.imagesUrl) ? modalData.imagesUrl : [],
				},
			});
      handleCloseProductModal();
		} catch (error) {
			console.log(`更新產品失敗: ${error.response.data.message}`);
		}
	};

	const handleUpdateProduct = async () => {
		const apiCall = modalMode === "new" ? createProduct : updateProduct;

		try {
			await apiCall();
			getProducts(pageInfo.current_page);
			// handleCloseProductModal();
		} catch (error) {
			console.log(`${error.response.data.message}`);
		}
	};

	const handleFileChange = async (e) => {
		// console.log(e.target);
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append("file-to-upload", file);

		try {
			const res = await axios.post(`${API_BASE}/api/${API_PATH}/admin/upload`, formData);
			const uploadImageUrl = res.data.imageUrl;
			setModalData({
				...modalData,
				imageUrl: uploadImageUrl,
			});
		} catch (error) {
			console.error(error.response.data.message);
		}
	};

	return (
		<>
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
												value={modalData.imageUrl}
												name="imageUrl"
												type="text"
												className="form-control"
												placeholder="請輸入圖片連結"
											/>
										</div>
										<img className="img-fluid" src={modalData.imageUrl} alt={modalData.title} />
									</div>
									<div className="border border-2 border-dashed rounder-3 p-3">
										{modalData.imagesUrl?.map((image, index) => (
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
											{modalData?.imagesUrl?.length < 5 &&
												modalData?.imagesUrl[modalData?.imagesUrl?.length - 1] !== "" &&
												modalData?.imagesUrl[modalData?.imagesUrl?.length] !== "undefined" && (
													<button onClick={handleAddImage} className="btn btn-outline-primary btn-sm w-100">
														新增圖片
													</button>
												)}
											{modalData?.imagesUrl?.length > 1 && (
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
											value={modalData.title}
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
												value={modalData.category}
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
												value={modalData.unit}
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
												value={modalData.origin_price}
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
												value={modalData.price}
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
											value={modalData.description}
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
											value={modalData.content}
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
												checked={modalData.is_enabled}
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
		</>
	);
};

export default ProductModal;
