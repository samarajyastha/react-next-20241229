import { useState } from "react";
import Modal from "../Modal";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function ConfirmOrder() {
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const router = useRouter();

  function onClickConfirm() {
    // setShowConfirmPopup(true);

    router.push("/profile/edit");
  }

  function confirmOrder() {}

  return (
    <>
      <button
        className={`rounded bg-primary-600 px-4 py-1 text-white shadow`}
        onClick={onClickConfirm}
      >
        Confirm Order
      </button>
      <Modal
        title={"Confirm order"}
        show={showConfirmPopup}
        setShow={setShowConfirmPopup}
      >
        <p className="py-5 text-left">
          Are you sure you want to confirm this order?
        </p>

        <div className="flex items-center justify-between pt-2">
          <button
            className="px-5 py-2 bg-red-500 hover:bg-red-700 text-white rounded"
            onClick={() => setShowConfirmPopup(false)}
          >
            Cancel
          </button>
          <button
            className="px-5 py-2 bg-green-700 hover:bg-green-800 text-white rounded"
            onClick={confirmOrder}
          >
            Confirm
          </button>
        </div>
      </Modal>
    </>
  );
}

export default ConfirmOrder;
