import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { pushMessage } from "../redux/toastSlice";

import Pagination from "../components/Pagination";
import ProductModal from "../components/ProductModal";
import DeleteProductModal from "../components/DeleteProductModal";
import Toast from "../components/toast";

// Loading
import { OrbitProgress } from "react-loading-indicators";

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
	discountPercent: "",
};

const API_BASE = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

const ProductPage = ({ setIsAuth }) => {
  const dispatch = useDispatch();
	const [products, setProducts] = useState([]);
	const [modalMode, setModalMode] = useState(null);
	const [tempProduct, setTempProduct] = useState({});
	const [isProductModalOpen, setIsProductModalOpen] = useState(false);
	const [isDeleteProductModalOpen, setIsDeleteProductModalOpen] = useState(false);
	const [isScreenLoading, setIsScreenLoading] = useState(false);

	const getProducts = async (page = 1) => {
    setIsScreenLoading(true);
		try {
			const res = await axios.get(`${API_BASE}/api/${API_PATH}/admin/products?page=${page}`);
			// console.log(res.data);
			const _products = res.data.products;
			// check callback data is Array or not
			setProducts(Array.isArray(_products) ? _products : []);
			setPageInfo(res.data.pagination);
      dispatch(
				pushMessage({
					text: `已轉到第${page}頁`,
					status: "success",
				})
			);
		} catch (error) {
			// console.log(`${error.response.data.message}`);
      const { message } = error.response.data;
			dispatch(
				pushMessage({
					text: message,
					status: "failure",
				})
			);
			setProducts([]);
		} finally {
      setIsScreenLoading(false);
    }
	};

	useEffect(() => {
		getProducts();
	}, []);

	const handleOpenProductModal = (modalMode, product) => {
		// set Modal Mode for Change Modal Title
		modalMode === "new" ? setModalMode("new") : setModalMode("edit");

		// if product? === edit
		if (modalMode === "new") {
			setTempProduct({ ...defaultModalState });
		} else {
			// 檢查副圖是否存在!!!!
			setTempProduct({
				...product,
			});
		}

		setIsProductModalOpen(true);
	};

	const handleOpenDeleteModal = (product) => {
		if (!product) {
			console.error("Invalid product passed to handleOpenDeleteModal");
			return;
		}
		setTempProduct(product);
		setIsDeleteProductModalOpen(true);
	};

	// // Pagination
	const [pageInfo, setPageInfo] = useState({});
	const handleProductsPageChange = (e, page) => {
    
    e.preventDefault();
		getProducts(page);
	};

	const handleLogOut = async () => {
    setIsScreenLoading(true);
		try {
			const res = await axios.post(`${API_BASE}/logout`, {});
			console.log(res.data);
			axios.defaults.headers.common["Authorization"] = null;
			setIsAuth(false);
		} catch (error) {
			console.log(error);
		} finally {
      setIsScreenLoading(false);
    }
	};

	return (
		<>
			<div className="container">
				<div className="d-flex justify-content-end align-items-center mt-4">
					<button onClick={() => handleLogOut()} className="btn btn-danger me-3" type="button">
						登出
					</button>
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
					<Pagination pageInfo={pageInfo} handleProductsPageChange={handleProductsPageChange} />
				) : null}
			</div>
			<ProductModal
				modalMode={modalMode}
				tempProduct={tempProduct}
				getProducts={getProducts}
				isOpen={isProductModalOpen}
				setIsOpen={setIsProductModalOpen}
				pageInfo={pageInfo}
			/>
			<DeleteProductModal
				tempProduct={tempProduct}
				getProducts={getProducts}
				isOpen={isDeleteProductModalOpen}
				setIsOpen={setIsDeleteProductModalOpen}
			/>
			<Toast />
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

ProductPage.propTypes = {
  setIsAuth: PropTypes.func.isRequired
};

export default ProductPage;
