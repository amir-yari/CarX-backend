import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ModalState = {
  isOpen: boolean;
  content: string;
};

const initialState: ModalState = {
  isOpen: false,
  content: "",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<string>) {
      state.isOpen = true;
      state.content = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.content = "";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice;
