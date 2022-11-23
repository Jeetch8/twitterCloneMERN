import React from "react";
import Modal from "react-modal";
import { RiCloseLine } from "react-icons/ri";
import { TbCapture } from "react-icons/tb";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
    color: "white",
    width: "600px",
    height: "80vh",
    borderRadius: "15px",
    overflowY: "scroll",
  },
};

// Modal.setAppElement("#yourAppElement");

const EditProfileModal = ({ setIsOpen, modalIsOpen }) => {
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-between items-center backdrop-blur-xl">
          <div className="flex">
            <button onClick={closeModal}>
              <RiCloseLine className="fill-white font-bold text-2xl mr-4" />
            </button>
            <h2 className="font-bold">Edit Profile</h2>
          </div>
          <button className="text-black bg-white py-1 px-3 rounded-full font-medium">
            Save
          </button>
        </div>
        <div>
          {/* Screen for backimage */}
          <div className="w-full h-[18vh] flex justify-center items-center">
            <div className="bg-slate-700 rounded-full p-1">
              <TbCapture className="text-[20px]" />
            </div>
          </div>
          {/* Profile pic */}
          <div className="relative w-fit">
            <label
              htmlFor="profilePicUpload"
              className="w-[150px] cursor-pointer relative"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
                alt=""
                className="w-[120px] h-[120px]"
              />
            </label>
            <div className="absolute top-[6vh] right-[3vw] text-[20px] bg-slate-700 rounded-full p-1">
              <TbCapture />
            </div>
            <input type="file" id="profilePicUpload" className=" hidden" />
          </div>
        </div>
        <div className="flex flex-col border-[1px] border-zinc-800 rounded-lg pt-1 mt-4">
          <div className="text-zinc-500 text-[13px] px-2">Name</div>
          <input
            type="text"
            value={"Jeet Chawda"}
            className="bg-transparent px-2 pb-2 text-[17px]"
          />
        </div>
        <div className="flex flex-col border-[1px] border-zinc-800 rounded-lg pt-1 mt-6">
          <div className="text-zinc-500 text-[13px] px-2">Bio</div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="4"
            className="bg-transparent px-2"
            value={"Full stack || DevOps developer"}
          ></textarea>
        </div>
        <div className="flex flex-col border-[1px] border-zinc-800 rounded-lg pt-1 mt-6">
          <input
            type="text"
            placeholder="Website"
            className="bg-transparent px-2 py-3 text-[17px]"
          />
        </div>
        <div className="mt-5 mb-6">
          <h2 className="text-[15px] text-gray-600">
            Birth date . <span className="text-blue-600">Edit</span>
          </h2>
          <h2 className="text-[20px]">April 6, 2002</h2>
        </div>
      </Modal>
    </div>
  );
};

export default EditProfileModal;
