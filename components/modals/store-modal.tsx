"use client"

import { useStoreModal } from "@/hook/use-store-modal"
import { Modal } from "@/components/ui/model"

export const StoreModal = () => {

    const storeModal = useStoreModal();

    
  return (
    <Modal
      title="Create Store"
      description="Add a new store to your products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create Store Form
    </Modal>
  );
}