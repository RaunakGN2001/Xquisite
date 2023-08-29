import toast from 'react-hot-toast';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useCart = create(
    persist(
      (set, get) => ({ 
        items: [],
        addItem: (data) => {
          const currentItems = get().items;
          const existingItem = currentItems.find((item) => item.id === data.id);
  
          if (existingItem) {
            return toast('Item already in cart.');
          }
  
          set((state) => ({ items: [...state.items, data] }));
          toast.success('Item added to cart.');
        },
        removeItem: (id) => {
          set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
          toast.success('Item removed from cart.');
        },
        removeAll: () => set({ items: [] }),
      }),
      {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage),
      }
    )
  );

export default useCart;
