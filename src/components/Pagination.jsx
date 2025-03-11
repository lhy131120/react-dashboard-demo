import PropTypes from "prop-types";
const Pagination = ({ pageInfo, handleProductsPageChange }) => {
	return (
		<>
			<div className="d-flex justify-content-center">
				<nav>
					<ul className="pagination">
						<li className={`page-item ${!pageInfo.has_pre && "disabled"}`}>
							<button type="button" onClick={(e) => handleProductsPageChange(e, pageInfo.current_page - 1)} className="page-link" >
								上一頁
							</button>
						</li>

						{Array.from({ length: pageInfo.total_pages }).map((el, index) => (
							<li
								data-key={index + 1}
								key={index}
								className={`page-item ${pageInfo.current_page === index + 1 && "active"}`}
							>
								<button type="button" onClick={(e) => handleProductsPageChange(e, index + 1)} className="page-link" >
									{index + 1}
								</button>
							</li>
						))}

						<li className={`page-item ${!pageInfo.has_next && "disabled"}`}>
							<button type="button" onClick={(e) => handleProductsPageChange(e, pageInfo.current_page + 1)} className="page-link" >
								下一頁
							</button>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
};

Pagination.propTypes = {
	handleProductsPageChange: PropTypes.func,
	pageInfo: PropTypes.shape({
		has_pre: PropTypes.bool,
		has_next: PropTypes.bool,
		current_page: PropTypes.number,
    total_pages: PropTypes.number
	}),
};

export default Pagination;
