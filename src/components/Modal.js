import { MdClose } from "react-icons/md";

function Modal({ title, children, show = false, setShow }) {
  return (
    <div className={show ? "block" : "hidden"}>
      <div className="h-svh w-full bg-gray-200 px-5 bg-opacity-50 dark:bg-opacity-50 dark:bg-gray-800 z-30 fixed top-0 left-0 flex items-center justify-center">
        <div className="min-h-50 w-full md:w-1/2 bg-white dark:bg-gray-900 rounded-3xl shadow py-5 px-10  dark:text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-textColor dark:text-white">
              {title}
            </h2>
            <button onClick={() => setShow(false)}>
              <MdClose className="h-6 w-6" />
            </button>
          </div>
          <div className="w-full pb-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
