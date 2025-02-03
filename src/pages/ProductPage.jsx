import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Modal } from "bootstrap";

import Pagination from "../components/Pagination";
import ProductModal from "../components/ProductModal";

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

const API_BASE = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [modalMode, setModalMode] = useState(null);
  const [tempProduct, setTempProduct] = useState({});
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const getProducts = async (page = 1) => {
    try {
      const res = await axios.get(
        `${API_BASE}/api/${API_PATH}/admin/products?page=${page}`
      );
      // console.log(res.data);
      const _products = res.data.products;
      // check callback data is Array or not
      setProducts(Array.isArray(_products) ? _products : []);
      setPageInfo(res.data.pagination);
    } catch (error) {
      console.log(error);
      setProducts([]);
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
      setTempProduct(defaultModalState);
    } else {
      // 檢查副圖是否存在!!!!
      setTempProduct({
        ...product,
      });
    }

    // const modal = Modal.getInstance(productModalRef.current);
    // modal.show();
    setIsProductModalOpen(true);
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

  const deleteProduct = async () => {
    try {
      await axios.delete(
        `${API_BASE}/api/${API_PATH}/admin/product/${tempProduct.id}`,
        {
          data: {
            ...tempProduct,
            origin_price: Number(tempProduct.origin_price),
            price: Number(tempProduct.price),
            is_enabled: tempProduct.is_enabled ? 1 : 0,
            imagesUrl: Array.isArray(tempProduct?.imagesUrl)
              ? tempProduct.imagesUrl
              : [],
          },
        }
      );
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

  // // Pagination
  const [pageInfo, setPageInfo] = useState({});
  const handleProductsPageChange = (page) => {
    getProducts(page);
  };

  // Modal
  const delProductModalRef = useRef(null);

  useEffect(() => {
    new Modal(delProductModalRef.current, {
      backdrop: false,
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="text-end mt-4">
          <button
            onClick={() => handleOpenProductModal("new")}
            className="btn btn-primary"
          >
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
                <td>
                  {product.is_enabled ? (
                    <span className="text-success">啟用</span>
                  ) : (
                    <span>未啟用</span>
                  )}
                </td>
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
          <Pagination
            pageInfo={pageInfo}
            handleProductsPageChange={handleProductsPageChange}
          />
        ) : (
          <></>
        )}
      </div>
      <ProductModal
        modalMode={modalMode}
        tempProduct={tempProduct}
        isOpen={isProductModalOpen}
        setIsOpen={setIsProductModalOpen}
      />
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
              <button
                onClick={handleCloseDeleteModal}
                type="button"
                className="btn-close"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              你是否要刪除
              <span className="text-danger fw-bold">{tempProduct.title}</span>
            </div>
            <div className="modal-footer">
              <button
                onClick={handleCloseDeleteModal}
                type="button"
                className="btn btn-secondary"
              >
                取消
              </button>
              <button
                onClick={handleDeleteProduct}
                type="button"
                className="btn btn-danger"
              >
                刪除
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
