import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toast as BsToast } from "bootstrap";
import { removeMessage } from "../redux/toastSlice";

const Toast = () => {
	const messages = useSelector((state) => state.toast.messages);
	const dispatch = useDispatch();
	const toastRefs = useRef([]);

	useEffect(() => {
		messages.forEach((message) => {
			const toastElement = toastRefs.current[message.id];

			if (toastElement) {
				const toastInstance = new BsToast(toastElement);
				setTimeout(() => {
          toastInstance.show();
        }, 300);

				setTimeout(() => {
					dispatch(removeMessage(message.id));
				}, 3000);
			}
		});
	}, [messages, dispatch]);

	const handleCloseToast = (id) => {
		// dispatch(removeMessage(id));
		const toastElement = toastRefs.current[id];
		if (toastElement) {
			const toastInstance = BsToast.getInstance(toastElement);
			toastInstance.hide();
			setTimeout(() => {
				dispatch(removeMessage(id));
			}, 3000);
		}
	};

	return (
		<div className="position-fixed top-0 end-0 p-3" style={{ zIndex: 1000 }}>
			{messages.map((message) => (
				<div
					ref={(el) => (toastRefs.current[message.id] = el)}
					key={message.id}
					className="toast"
					role="alert"
					aria-live="assertive"
					aria-atomic="true"
				>
					<div className={`toast-header ${message.status === "success" ? "bg-success" : "bg-danger"} text-white`}>
						<strong className="me-auto">{message.status === "success" ? "成功" : "失敗"}</strong>
						<button
							type="button"
							className="btn-close"
							aria-label="Close"
							onClick={() => handleCloseToast(message.id)}
						></button>
					</div>
					<div className="toast-body">{message.text}</div>
				</div>
			))}
		</div>
	);
};

export default Toast;
