import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

// Lazy loading Layouts and Pages for optimized performance
const MainLayout = lazy(() => import('./layouts/MainLayout'));
const Home = lazy(() => import('./pages/Home'));
const AdminDashboard = lazy(() => import('./admin/Dashboard'));

// Global Loader Component for Suspense Fallback
const GlobalLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-surface">
    <Loader2 className="w-12 h-12 animate-spin text-accent" />
    <p className="mt-4 text-primary-light font-medium tracking-wide">Loading Tech Nova...</p>
  </div>
);

// 404 Not Found Component
const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-surface text-primary text-center px-4">
    <h1 className="text-7xl font-bold text-accent mb-4 drop-shadow-md">404</h1>
    <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
    <p className="text-gray-500 max-w-md">
      The page you are looking for doesn't exist or has been moved.
    </p>
    <a 
      href="/" 
      className="mt-8 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-light transition-colors shadow-premium"
    >
      Return to Home
    </a>
  </div>
);

export default function App() {
  return (
    <Suspense fallback={<GlobalLoader />}>
      <Routes>
        {/* Public Routes - Wrapped with MainLayout (Includes Header, Footer, Bottom Nav) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* We will add more routes here later (e.g., /cart, /product/:id) */}
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Fallback 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
        }
