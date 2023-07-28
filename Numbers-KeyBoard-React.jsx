import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FiDelete } from "react-icons/fi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const KeyBoard = ({ openKeyboard, handleCloseKey, setData, data }) => {
  const handleNumberClick = (number) => {
    setData((prevData) => prevData + number);
  };
  const handleDelete = () => {
    if (data) {
      setData((prevData) => prevData.slice(0, -1));
    }
  };

  return (
    <div>
      <Modal
        open={openKeyboard}
        onClose={handleCloseKey}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="border-0 rounded">
          <form>
            <div className="d-flex justify-content-end mb-2">
              <button
                type="button"
                className="btn btn-danger btn-close"
                onClick={handleCloseKey}
              ></button>
            </div>
            <div className="row d-flex  justify-content-center mb-2">
              <input
                type="text"
                className="form-control"
                readOnly
                value={data}
                id=""
              />
            </div>
            <div className="row d-flex gap-2 d-md-flex justify-content-end mb-2 pe-3">
              <button
                type="button"
                className="btn btn-primary col-3"
                onClick={(e) => handleDelete()}
              >
                <FiDelete />
              </button>
            </div>
            <div className="row d-flex gap-2 d-md-flex justify-content-around mb-2">
              <button
                type="button"
                className="btn btn-primary col-3"
                onClick={() => handleNumberClick("1")}
              >
                1
              </button>
              <button
                type="button"
                className="btn btn-primary col-3"
                onClick={() => handleNumberClick("2")}
              >
                2
              </button>
              <button
                type="button"
                className="btn btn-primary col-3"
                onClick={() => handleNumberClick("3")}
              >
                3
              </button>
            </div>
            <div className="row d-flex gap-2 d-md-flex justify-content-around mb-2">
              <button
                type="button"
                className="btn btn-primary col-3"
                onClick={() => handleNumberClick("4")}
              >
                4
              </button>
              <button
                type="button"
                className="btn btn-primary col-3"
                onClick={() => handleNumberClick("5")}
              >
                5
              </button>
              <button
                type="button"
                className="btn btn-primary col-3"
                onClick={() => handleNumberClick("6")}
              >
                6
              </button>
            </div>

            <div className="row d-flex gap-2 d-md-flex justify-content-around mb-2">
              <button
                type="button"
                className="btn btn-primary col-3"
                onClick={() => handleNumberClick("7")}
              >
                7
              </button>
              <button
                type="button"
                className="btn btn-primary col-3"
                onClick={() => handleNumberClick("8")}
              >
                8
              </button>
              <button
                type="button"
                className="btn btn-primary col-3"
                onClick={() => handleNumberClick("9")}
              >
                9
              </button>
            </div>
            <div className="row d-flex gap-2 d-md-flex justify-content-around mb-2">
              <button
                type="button"
                className="btn btn-primary col-3"
                onClick={() => handleNumberClick(".")}
              >
                ,
              </button>
              <button
                type="button"
                className="btn btn-primary col-3"
                onClick={() => handleNumberClick("0")}
              >
                0
              </button>
              <button
                type="button"
                className="btn btn-danger col-3"
                onClick={() => setData("")}
              >
                C
              </button>
            </div>
            <div className="row d-flex justify-content-start mt-3 ps-3">
              <button
                type="button"
                className="btn btn-primary col-3"
                onClick={handleCloseKey}
              >
                Valider
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

KeyBoard.propTypes = {
  openKeyboard: PropTypes.bool.isRequired,
  handleCloseKey: PropTypes.func.isRequired,
};

export default KeyBoard;
