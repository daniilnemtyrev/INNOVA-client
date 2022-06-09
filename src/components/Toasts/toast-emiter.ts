import React from 'react';
import { toast } from 'react-toastify';
import { ToastVariant } from '../../enums/toast-enum';

interface Props {
  type: ToastVariant;
  text: string;
}

export const Toast = ({ type, text }: Props) => {
  switch (type) {
    case ToastVariant.SUCCESS:
      return toast.success(text, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    case ToastVariant.ERROR:
      return toast.error(text, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    case ToastVariant.WARNING:
      return toast.warn(text, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    case ToastVariant.INFO:
      return toast.info(text, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    default:
      return toast.info(text, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }
};
