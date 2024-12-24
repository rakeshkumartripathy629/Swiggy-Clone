import { create } from 'zustand';

// Search Store
export const useSearchStore = create((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
}));

// Cart Store
export const useCartStore = create((set) => ({
  items: [],
  total: 0,
  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
          total: state.total + item.price,
        };
      }
      return {
        items: [...state.items, item],
        total: state.total + item.price,
      };
    }),
  removeItem: (id) =>
    set((state) => {
      const item = state.items.find((i) => i.id === id);
      return {
        items: state.items.filter((i) => i.id !== id),
        total: state.total - (item ? item.price * item.quantity : 0),
      };
    }),
  clearCart: () => set({ items: [], total: 0 }),
}));
