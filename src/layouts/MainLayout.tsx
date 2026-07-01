import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, Search, ShoppingCart, User } from 'lucide-react';

export default function MainLayout() {
  const location = useLocation();

  // অ্যাক্টিভ রাউট চেক করার ফাংশন (যে পেজে থাকবে, সেই আইকনটির কালার গোল্ডেন হবে)
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      
      {/* Fixed Top Header */}
      <header className="fixed top-0 left-0 right-0 bg-primary z-50 shadow-premium pt-[env(safe-area-inset-top)]">
        <div className="h-16 flex items-center justify-between px-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-accent tracking-wider drop-shadow-md">
              TECH NOVA
            </span>
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`font-medium transition-colors hover:text-accent ${isActive('/') ? 'text-accent' : 'text-white'}`}>Home</Link>
            <Link to="/search" className={`font-medium transition-colors hover:text-accent ${isActive('/search') ? 'text-accent' : 'text-white'}`}>Search</Link>
            <Link to="/cart" className={`font-medium transition-colors hover:text-accent flex items-center gap-1 ${isActive('/cart') ? 'text-accent' : 'text-white'}`}>
              Cart 
              {/* Cart Badge Placeholder */}
              <span className="bg-accent text-primary text-[10px] font-bold px-1.5 py-0.5 rounded-full">0</span>
            </Link>
            <Link to="/profile" className={`font-medium transition-colors hover:text-accent ${isActive('/profile') ? 'text-accent' : 'text-white'}`}>Profile</Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      {/* pt-16 for header space, pb-20 for bottom nav space on mobile */}
      <main className="flex-grow pt-16 pb-20 md:pb-8 w-full max-w-7xl mx-auto px-4 md:px-6">
        <Outlet />
      </main>

      {/* Fixed Bottom Navigation (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-primary z-50 rounded-t-2xl shadow-[0_-4px_20px_-2px_rgba(15,23,42,0.2)] border-t border-primary-light pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-center justify-around h-16 px-2">
          
          <Link to="/" className="flex flex-col items-center justify-center w-full h-full space-y-1">
            <Home className={`w-6 h-6 transition-colors ${isActive('/') ? 'text-accent' : 'text-gray-400'}`} />
            <span className={`text-[10px] font-medium transition-colors ${isActive('/') ? 'text-accent' : 'text-gray-400'}`}>Home</span>
          </Link>

          <Link to="/search" className="flex flex-col items-center justify-center w-full h-full space-y-1">
            <Search className={`w-6 h-6 transition-colors ${isActive('/search') ? 'text-accent' : 'text-gray-400'}`} />
            <span className={`text-[10px] font-medium transition-colors ${isActive('/search') ? 'text-accent' : 'text-gray-400'}`}>Search</span>
          </Link>

          <Link to="/cart" className="flex flex-col items-center justify-center w-full h-full space-y-1 relative">
            <ShoppingCart className={`w-6 h-6 transition-colors ${isActive('/cart') ? 'text-accent' : 'text-gray-400'}`} />
            <span className={`text-[10px] font-medium transition-colors ${isActive('/cart') ? 'text-accent' : 'text-gray-400'}`}>Cart</span>
            {/* Cart Badge Placeholder */}
            <span className="absolute top-1 right-3 sm:right-6 bg-accent text-primary text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-primary">
              0
            </span>
          </Link>

          <Link to="/profile" className="flex flex-col items-center justify-center w-full h-full space-y-1">
            <User className={`w-6 h-6 transition-colors ${isActive('/profile') ? 'text-accent' : 'text-gray-400'}`} />
            <span className={`text-[10px] font-medium transition-colors ${isActive('/profile') ? 'text-accent' : 'text-gray-400'}`}>Profile</span>
          </Link>
          
        </div>
      </nav>
      
    </div>
  );
              }
