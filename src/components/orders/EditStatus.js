import { PiPencilLineDuotone } from "react-icons/pi";
import Modal from "../Modal";

function EditOrderStatus() {
  const [showPopup, setShowPopup] = useState(false);

  function editStatus() {}

  return (
    <>
      <button
        className="h-7 w-6 bg-blue-600 p-1 rounded text-white mx-1"
        onClick={editStatus}
      >
        <PiPencilLineDuotone />
      </button>
      <Modal
        title={"Edit order status"}
        show={showPopup}
        setShow={setShowPopup}
      >
        <form action=""></form>

        <div className="flex items-center justify-between pt-2">
          <button
            className="px-5 py-2 bg-red-500 hover:bg-red-700 text-white rounded"
            onClick={() => setShowPopup(false)}
          >
            Cancel
          </button>
          <button
            className="px-5 py-2 bg-primary-500 hover:bg-primary-700 text-white rounded"
            onClick={confirmRemoveProduct}
          >
            Remove
          </button>
        </div>
      </Modal>
    </>
  );
}

export default EditOrderStatus;
