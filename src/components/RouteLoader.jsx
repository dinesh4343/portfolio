// src/components/RouteLoader.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLoader } from "../context/LoaderContext";

export default function RouteLoader({ children }) {
  const location = useLocation();
  const { setLoading } = useLoader();

  useEffect(() => {
    // Show loader when path changes
    setLoading(true);

    // Hide loader after short delay (simulate page load)
    const timer = setTimeout(() => setLoading(false), 800);

    return () => clearTimeout(timer);
  }, [location.pathname, setLoading]);

  return children;
}
