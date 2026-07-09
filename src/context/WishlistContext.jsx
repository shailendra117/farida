import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext(null);

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
};

export const WishlistProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try {
      const raw = window.localStorage.getItem("fg-wishlist");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("fg-wishlist", JSON.stringify(items));
  }, [items]);

  const toggleWishlist = (product) => {
    setItems((prev) => {
      const exists = prev.find(
        (p) =>
          p.id === product.id &&
          (p.selectedSize || null) === (product.selectedSize || null) &&
          (p.fromPage || null) === (product.fromPage || null)
      );

      if (exists)
        return prev.filter(
          (p) =>
            !(p.id === product.id && (p.selectedSize || null) === (product.selectedSize || null) && (p.fromPage || null) === (product.fromPage || null))
        );

      return [...prev, product];
    });
  };

  const remove = (productId, selectedSize = null) => {
    setItems((prev) => prev.filter((p) => !(p.id === productId && (p.selectedSize || null) === (selectedSize || null))));
  };

  return (
    <WishlistContext.Provider value={{ items, toggleWishlist, remove }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
