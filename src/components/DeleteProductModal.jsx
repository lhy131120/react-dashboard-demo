import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Modal } from "bootstrap";

const API_BASE = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

const DeleteProductModal = ({ tempProduct, getProducts, isOpen, setIsOpen }) => {

	// const [modalData, setModalData] = useState(tempProduct);

  const delProductModalRef = useRef(null);

  useEffect(() => {
    new Modal(delProductModalRef.current, {
      backdrop: false,
    });
  }, []);

	// useEffect(() => {
	// 	setModalData({ ...tempProduct });
	// }, [tempProduct]);

	useEffect(() => {
		if (isOpen) {
			const modalInstance = Modal.getInstance(delProductModalRef.current);
			modalInstance.show();
		}
	}, [isOpen]);

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

	const handleDeleteProduct = async () => {
		try {
			await deleteProduct();
			getProducts();
			handleCloseDeleteModal();
		} catch (error) {
			console.log(`Error: ${error.response.data.message}`);
		}
	};

	const handleCloseDeleteModal = () => {
		const modal = Modal.getInstance(delProductModalRef.current);
		modal.hide();
		setIsOpen(false);
	};

	return (
		<>
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
};

export default DeleteProductModal;
