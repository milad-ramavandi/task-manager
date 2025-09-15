import { useState } from "react";

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const onOpenModal = () => setIsOpenModal(true);
  const onCloseModal = () => setIsOpenModal(false);
  return { isOpenModal, onCloseModal, onOpenModal };
};

export default useModal;
