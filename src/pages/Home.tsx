import { Helmet } from 'react-helmet-async';
import { ShoppingBag, Zap, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-8 animate-fade-in pb-6">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>TECH NOVA | Premium E-Commerce Marketplace in Bangladesh</title>
        <meta name="description" content="Shop the best premium products at TECH NOVA. Enjoy fast delivery, secure payments, and top-notch customer service in Bangladesh." />
        <meta name="keywords" content="Tech Nova, E-commerce Bangladesh, Online Shopping, Premium Tech, Gadgets" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full rounded-2xl bg-primary overflow-hidden shadow-premium mt-4">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl -ml-12 -mb-12 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-20 md:px-12 gap-8 text-center md:text-left">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Upgrade Your Life With <br className="hidden md:block"/>
              <span className="text-accent">Premium Tech</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base max-w-md mx-auto md:mx-0 leading-relaxed">
              Discover the latest gadgets and premium accessories with exclusive offers. Experience top-tier shopping in Bangladesh.
            </p>
            <div className="pt-2">
              <Link 
                to="/search" 
                className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-3.5 rounded-full font-bold text-sm md:text-base transition-transform hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.4)] active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                Shop Now
              </Link>
            </div>
          </div>
          
          {/* Right side placeholder (Later we can add a 3D image or slider here) */}
          <div className="flex-1 w-full flex justify-center items-center">
             <div className="w-64 h-64 md:w-80 md:h-80 bg-primary-light rounded-full border border-primary flex items-center justify-center relative shadow-inner">
                {/* Floating elements animation representation */}
                <div className="absolute w-full h-full border border-accent/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute w-full h-full border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse] scale-110"></div>
                <Zap className="w-24 h-24 text-accent drop-shadow-md animate-pulse" />
             </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        <div className="bg-white p-4 rounded-xl flex flex-col items-center text-center gap-2 shadow-sm border border-gray-100">
          <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center">
            <Truck className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-sm font-bold text-primary">Fast Delivery</h3>
          <p className="text-xs text-gray-500">All over Bangladesh</p>
        </div>

        <div className="bg-white p-4 rounded-xl flex flex-col items-center text-center gap-2 shadow-sm border border-gray-100">
          <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-sm font-bold text-primary">Secure Payment</h3>
          <p className="text-xs text-gray-500">100% Safe transactions</p>
        </div>

        <div className="bg-white p-4 rounded-xl flex flex-col items-center text-center gap-2 shadow-sm border border-gray-100">
          <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-sm font-bold text-primary">Flash Sales</h3>
          <p className="text-xs text-gray-500">Exciting daily offers</p>
        </div>

        <div className="bg-white p-4 rounded-xl flex flex-col items-center text-center gap-2 shadow-sm border border-gray-100">
          <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-sm font-bold text-primary">Premium Quality</h3>
          <p className="text-xs text-gray-500">Top-tier brands</p>
        </div>
      </section>

      {/* Placeholder for Upcoming Sections (Categories, Trending Products) */}
      <section className="w-full mt-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-primary">Trending Categories</h2>
          <Link to="/search" className="text-sm font-medium text-accent hover:underline">View All</Link>
        </div>
        <div className="h-32 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 border border-dashed border-gray-300">
          Categories will be loaded here dynamically
        </div>
      </section>
    </div>
  );
      }
