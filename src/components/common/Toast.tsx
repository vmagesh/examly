import { toast, ToastPosition, ToastOptions } from "react-toastify";

export const notify = (
    text: string,
    type: "success" | "warning" | "error" = "error",
    options: ToastOptions = {}
) => {
    const defaultOptions: ToastOptions = {
        position: "top-right" as ToastPosition,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        ...options,
    };

    switch (type) {
        case "success":
            toast.success(text, defaultOptions);
            break;
        case "warning":
            toast.warn(text, defaultOptions);
            break;
        default:
            toast.error(text, defaultOptions);
            break;
    }
};
