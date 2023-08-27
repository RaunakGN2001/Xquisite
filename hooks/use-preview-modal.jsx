import { create } from 'zustand';

const usePreviewModal = create((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data) => set({
        data,
        isOpen: true
    }),

    onClose: (data) => set({
        isOpen: false
    })

}));


export default usePreviewModal;
