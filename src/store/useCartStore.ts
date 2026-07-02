import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// প্রোডাক্টের টাইপ ডেফিনেশন
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// কার্ট স্টেটের টাইপ ডেফিনেশন
interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      // কার্টে নতুন প্রোডাক্ট অ্যাড করা
      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((i) => i.id === item.id);
        
        if (existingItem) {
          // প্রোডাক্ট আগে থেকেই থাকলে শুধু কোয়ান্টিটি বাড়বে
          set({
            items: currentItems.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          });
        } else {
          // নতুন প্রোডাক্ট হলে কার্টে যুক্ত হবে
          set({ items: [...currentItems, item] });
        }
      },
      
      // কার্ট থেকে প্রোডাক্ট রিমুভ করা
      removeItem: (id) => {
        set({ items: get().items.filter((i) => i.id !== id) });
      },
      
      // কোয়ান্টিটি আপডেট করা (কমপক্ষে ১ থাকতে হবে)
      updateQuantity: (id, quantity) => {
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i
          ),
        });
      },
      
      // সম্পূর্ণ কার্ট ক্লিয়ার করা (অর্ডার প্লেস করার পর লাগবে)
      clearCart: () => set({ items: [] }),
      
      // মোট দাম হিসাব করা
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      
      // মোট আইটেম সংখ্যা হিসাব করা (ব্যাজ দেখানোর জন্য)
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: 'tech-nova-cart', // Local Storage-এ এই নামে সেভ থাকবে
    }
  )
);
