import { Helmet } from 'react-helmet-async';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Settings, 
  LogOut, 
  Package,
  DollarSign,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-surface flex flex-col md:flex-row">
      <Helmet>
        <title>Admin Dashboard | TECH NOVA</title>
      </Helmet>

      {/* Sidebar (Desktop) / Top Nav (Mobile) */}
      <aside className="w-full md:w-64 bg-primary text-white flex flex-col shadow-premium md:min-h-screen z-20">
        <div className="h-16 flex items-center justify-center border-b border-primary-light">
          <h1 className="text-xl font-bold text-accent tracking-wider">TECH NOVA ADMIN</h1>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex-1 overflow-x-auto md:overflow-y-auto hide-scrollbar flex md:flex-col p-4 gap-2">
          <Link to="/admin" className="flex items-center gap-3 px-4 py-3 bg-primary-light rounded-lg text-accent transition-colors shrink-0">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <button className="flex items-center gap-3 px-4 py-3 hover:bg-primary-light rounded-lg text-gray-300 hover:text-accent transition-colors shrink-0 w-full text-left">
            <Package className="w-5 h-5" />
            <span className="font-medium">Products</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-3 hover:bg-primary-light rounded-lg text-gray-300 hover:text-accent transition-colors shrink-0 w-full text-left">
            <ShoppingBag className="w-5 h-5" />
            <span className="font-medium">Orders</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-3 hover:bg-primary-light rounded-lg text-gray-300 hover:text-accent transition-colors shrink-0 w-full text-left">
            <Users className="w-5 h-5" />
            <span className="font-medium">Customers</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-3 hover:bg-primary-light rounded-lg text-gray-300 hover:text-accent transition-colors shrink-0 w-full text-left">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </button>
        </nav>

        <div className="p-4 border-t border-primary-light hidden md:block">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 hover:bg-red-500/10 rounded-lg text-gray-300 hover:text-red-400 transition-colors w-full text-left">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Exit Admin</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-primary">Overview</h2>
            <p className="text-gray-500 text-sm">Welcome back to Tech Nova control panel</p>
          </div>
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-accent font-bold shadow-md">
            A
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {/* Total Revenue */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Revenue</p>
              <h3 className="text-xl md:text-2xl font-bold text-primary">৳0.00</h3>
            </div>
          </div>

          {/* Total Orders */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
              <ShoppingBag className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Orders</p>
              <h3 className="text-xl md:text-2xl font-bold text-primary">0</h3>
            </div>
          </div>

          {/* Active Products */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
              <Package className="w-6 h-6 text-accent-dark" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Active Products</p>
              <h3 className="text-xl md:text-2xl font-bold text-primary">0</h3>
            </div>
          </div>

          {/* Total Users */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Users</p>
              <h3 className="text-xl md:text-2xl font-bold text-primary">0</h3>
            </div>
          </div>
        </div>

        {/* Recent Orders Placeholder */}
        <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-primary">Recent Orders</h3>
            <button className="text-sm font-medium text-accent hover:underline">View All</button>
          </div>
          <div className="h-40 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-100 rounded-xl">
            <TrendingUp className="w-8 h-8 mb-2 opacity-50" />
            <p>No orders found yet</p>
          </div>
        </div>
      </main>
    </div>
  );
      }
