const ProductModal =() => {
  return(<>
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
              <h5 className="modal-title fs-4 fw-bold">
                {modalMode === "new" ? "新增產品" : "編輯產品"}
              </h5>
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
                    <img
                      className="img-fluid"
                      src={tempProduct.imageUrl}
                      alt={tempProduct.title}
                    />
                  </div>
                  <div className="border border-2 border-dashed rounder-3 p-3">
                    {tempProduct.imagesUrl?.map((image, index) => (
                      <div key={index} className="mb-2">
                        <label
                          htmlFor={`imagesUrl-${index + 1}`}
                          className="form-label"
                        >
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
                        {image && (
                          <img
                            className="img-fluid mb-2"
                            src={image}
                            alt={`副圖 ${index + 1}`}
                          />
                        )}
                      </div>
                    ))}
                    <div className="btn-group w-100">
                      {tempProduct?.imagesUrl?.length < 5 &&
                        tempProduct?.imagesUrl[
                          tempProduct?.imagesUrl?.length - 1
                        ] !== "" &&
                        tempProduct?.imagesUrl[
                          tempProduct?.imagesUrl?.length
                        ] !== "undefined" && (
                          <button
                            onClick={handleAddImage}
                            className="btn btn-outline-primary btn-sm w-100"
                          >
                            新增圖片
                          </button>
                        )}
                      {tempProduct?.imagesUrl?.length > 1 && (
                        <button
                          onClick={handleRemoveImage}
                          className="btn btn-outline-danger btn-sm w-100"
                        >
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
              <button
                onClick={() => handleCloseProductModal()}
                type="button"
                className="btn btn-outline-secondary"
              >
                取消
              </button>
              <button
                onClick={handleUpdateProduct}
                type="button"
                className="btn btn-primary"
              >
                確認
              </button>
            </div>
          </div>
        </div>
      </div>
  </>)
}

export default ProductModal;