import toast, { ToastOptions } from "react-hot-toast";

// default styles or custom config
const defaultOptions: ToastOptions = {
  duration: 4000,
  position: "top-right",
};

export const showSuccess = (message: string, options?: ToastOptions) => {
  toast.success(message, { ...defaultOptions, ...options });
};

export const showError = (message: string, options?: ToastOptions) => {
  toast.error(message, { ...defaultOptions, ...options });
};

export const showLoading = (message: string, options?: ToastOptions) => {
  return toast.loading(message, { ...defaultOptions, ...options });
};

export const showPromise = <T,>(
  promise: Promise<T>,
  messages: {
    loading: string;
    success: (data: T) => string;
    error: (err: any) => string;
  },
  options?: ToastOptions
) => {
  return toast.promise(
    promise,
    {
      loading: messages.loading,
      success: (data) => messages.success(data),
      error: (err) => messages.error(err),
    },
    options
  );
};
