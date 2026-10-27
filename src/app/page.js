"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  Package,
  Award,
  Users,
  CheckCircle2,
  Menu,
  X,
  ExternalLink,
  Layers,
  ArrowRight,
  Store,
  Building2,
  UtensilsCrossed,
  Cake,
  ShoppingBag
} from "lucide-react";

// Authentic Official WhatsApp Icon
function WhatsAppIcon({ className = "w-5 h-5", fill = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
  const [showChatPopup, setShowChatPopup] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    quantity: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatPopup(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  // Keyboard escape for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedGalleryImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Gallery focused strictly on wholesale supply, real store trays & delivery
  const galleryImages = [
    {
      id: 1,
      title: "Wholesale Egg Trays at Itarsi Depot",
      tagLabel: "Wholesale Trays",
      description: "Wholesale egg trays arranged for daily business dispatches at our Itarsi depot.",
      src: "/images/store-egg-stacks-1.jpg",
    },
    {
      id: 2,
      title: "MK Egg Centre Store & Dispatch Area",
      tagLabel: "Wholesale Store",
      description: "Daily wholesale order staging and supply center at Pudi Line, Dolaria Road, Itarsi.",
      src: "/images/store-egg-stacks-2.png",
    },
    {
      id: 3,
      title: "Vehicle-Based Egg Supply Logistics",
      tagLabel: "Supply Vehicle",
      description: "Dedicated delivery vehicles arranged for wholesale egg transport across Itarsi and nearby areas.",
      src: "/images/egg-delivery.jpg",
    },
    {
      id: 4,
      title: "Egg Trays in Bulk",
      tagLabel: "Bulk Supply",
      description: "Wholesale eggs packed securely in trays for bakeries, food businesses and retailers.",
      src: "/images/egg-trays.jpg",
    },
    {
      id: 5,
      title: "Wholesale Egg Stock",
      tagLabel: "Bulk Wholesale",
      description: "Consistent wholesale supply capacity to fulfill regular commercial orders.",
      src: "/images/egg-stock.jpg",
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = "Please enter your name";
    if (!formData.phone.trim() || formData.phone.length < 10)
      errors.phone = "Please enter a valid 10-digit phone number";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    const text = `Hi MK Egg Centre, I am contacting you for wholesale egg supply.%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Business Name:* ${encodeURIComponent(
      formData.business || "Not specified"
    )}%0A*Phone:* ${encodeURIComponent(
      formData.phone
    )}%0A*Required Quantity:* ${encodeURIComponent(
      formData.quantity || "To be discussed"
    )}%0A*Message:* ${encodeURIComponent(
      formData.message || "Please share today's wholesale rate and availability."
    )}`;

    window.open(`https://wa.me/919993446325?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-slate-900 selection:bg-amber-600 selection:text-white">
      {/* Top Contact Strip */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Itarsi, Madhya Pradesh — Wholesale Egg Supplier</span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <a
              href="tel:+919993446325"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>+91 9993446325 (Kishor Daryani)</span>
            </a>
            <span className="text-slate-700 hidden md:inline">|</span>
            <a
              href="tel:+917747986326"
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-500" />
              <span>+91 7747986326 (Rohit Daryani)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Elegant Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-amber-600 text-white flex items-center justify-center font-serif font-black text-xl shadow-sm group-hover:bg-amber-700 transition-colors">
              MK
            </div>
            <div>
              <span className="font-serif font-bold text-xl sm:text-2xl text-slate-900 tracking-tight block leading-none">
                MK Egg Centre
              </span>
              <span className="text-xs text-slate-500 font-medium tracking-normal mt-1 block">
                Wholesale Egg Supplier • Itarsi
              </span>
            </div>
          </a>

          {/* Desktop Nav Links - Exact Order Requested by User */}
          <nav className="hidden lg:flex items-center gap-7">
            <a href="#home" className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors">
              Home
            </a>
            <a href="#products" className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors">
              Our Products
            </a>
            <a href="#why" className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors">
              Wholesale Supply
            </a>
            <a href="#gallery" className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors">
              Gallery
            </a>
            <a href="#about" className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors">
              Contact Us
            </a>
          </nav>

          {/* Desktop Call & WhatsApp Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919993446325"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-800 hover:border-amber-500 hover:bg-amber-50/50 text-sm font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919993446325?text=Hi%2C%20I%20checked%20out%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20wholesale%20egg%20supply."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-xs transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" fill="#ffffff" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu - Exact Order */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-5 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3 font-semibold text-slate-800 text-sm">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-slate-100 hover:text-amber-600"
              >
                Home
              </a>
              <a
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-slate-100 hover:text-amber-600"
              >
                Our Products
              </a>
              <a
                href="#why"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-slate-100 hover:text-amber-600"
              >
                Wholesale Supply
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-slate-100 hover:text-amber-600"
              >
                Gallery
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-slate-100 hover:text-amber-600"
              >
                About Us
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-amber-600"
              >
                Contact Us
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="https://wa.me/919993446325?text=Hi%2C%20I%20checked%20out%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20wholesale%20egg%20supply."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-emerald-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 text-sm"
              >
                <WhatsAppIcon className="w-4 h-4" fill="#ffffff" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href="tel:+919993446325"
                className="w-full text-center py-3 bg-slate-900 text-white rounded-xl font-semibold flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 9993446325</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* 1. HERO SECTION - REFINED WHOLESALE VALUE PROPOSITION */}
        <section id="home" className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column Text */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-900 text-xs sm:text-sm font-medium">
                  <MapPin className="w-3.5 h-3.5 text-amber-700" />
                  <span>Itarsi, Madhya Pradesh</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                  Wholesale Egg Supply{" "}
                  <span className="text-amber-700">
                    You Can Rely On.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                  Your trusted wholesale egg supplier in Itarsi, Madhya Pradesh. MK Egg Centre supplies eggs in bulk with a focus on quality, reliable service and long-term business relationships.
                </p>

                {/* CTAs */}
                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <a
                    href="https://wa.me/919993446325?text=Hi%2C%20I%20checked%20out%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20wholesale%20egg%20supply."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base shadow-sm transition-all"
                  >
                    <WhatsAppIcon className="w-5 h-5" fill="#ffffff" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <a
                    href="tel:+919993446325"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base shadow-sm transition-all"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Call Us Now</span>
                  </a>
                </div>

                {/* Simple Highlights */}
                <div className="pt-4 flex flex-wrap gap-3 text-xs font-semibold text-slate-700">
                  <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                    Wholesale-Focused Supply
                  </span>
                  <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                    Delivery Vehicle Service
                  </span>
                  <span className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                    Bulk Order Enquiries Welcome
                  </span>
                </div>
              </div>

              {/* Right Column Hero Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden bg-white shadow-md border border-slate-200">
                  <div className="relative h-72 sm:h-96 w-full">
                    <Image
                      src="/images/hero-eggs.jpg"
                      alt="MK Egg Centre Wholesale White Eggs"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                        Serving Businesses in and Around Itarsi
                      </p>
                      <h3 className="font-serif text-lg font-bold text-white mt-0.5">
                        MK Egg Centre
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. OUR PRODUCTS SECTION */}
        <section id="products" className="py-16 md:py-20 bg-white border-y border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
                Our Products
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                Wholesale Eggs for Your Business
              </h2>
              <p className="text-base text-slate-600 mt-2 leading-relaxed">
                We supply eggs in bulk for businesses looking for a dependable wholesale supplier in Itarsi and nearby areas. Get in touch to discuss your quantity requirements and supply arrangements.
              </p>
            </div>

            {/* 3 Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Product 1 */}
              <div className="rounded-2xl bg-[#FAF8F3] border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between">
                <div>
                  <div className="relative h-56 w-full">
                    <Image
                      src="/images/egg-trays.jpg"
                      alt="Bulk Egg Supply - MK Egg Centre"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl font-bold text-slate-900">
                      Bulk Egg Supply
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Eggs supplied in trays and bulk quantities for regular business needs.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a
                    href="https://wa.me/919993446325?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20Bulk%20Egg%20Supply%20in%20trays."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 hover:border-amber-600 hover:text-amber-700 text-slate-800 font-semibold text-sm transition-colors bg-white"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-600" fill="#059669" />
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Product 2 */}
              <div className="rounded-2xl bg-[#FAF8F3] border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between">
                <div>
                  <div className="relative h-56 w-full">
                    <Image
                      src="/images/egg-stock.jpg"
                      alt="Wholesale Orders - MK Egg Centre"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl font-bold text-slate-900">
                      Wholesale Orders
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Share your quantity requirements and we&apos;ll discuss current rates and availability.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a
                    href="https://wa.me/919993446325?text=Hi%2C%20I%20would%20like%20to%20know%20today%27s%20Wholesale%20Egg%20Rates%20and%20availability."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 hover:border-amber-600 hover:text-amber-700 text-slate-800 font-semibold text-sm transition-colors bg-white"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-600" fill="#059669" />
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Product 3 */}
              <div className="rounded-2xl bg-[#FAF8F3] border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between">
                <div>
                  <div className="relative h-56 w-full">
                    <Image
                      src="/images/egg-delivery.jpg"
                      alt="Vehicle-Based Egg Supply - MK Egg Centre"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="font-serif text-xl font-bold text-slate-900">
                      Vehicle-Based Egg Supply
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Egg supplies arranged through our delivery vehicles for added convenience.
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <a
                    href="https://wa.me/919993446325?text=Hi%2C%20I%20would%20like%20to%20arrange%20Vehicle-Based%20Egg%20Supply%20to%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-300 hover:border-amber-600 hover:text-amber-700 text-slate-800 font-semibold text-sm transition-colors bg-white"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-emerald-600" fill="#059669" />
                    <span>Enquire Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Note banner */}
            <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-center text-sm text-slate-800 font-medium">
              Please contact us for current rates, available quantities and order details.
            </div>

            {/* BUSINESS CATEGORIES - Clean Showcase, No Numbers */}
            <div className="mt-14 p-8 rounded-2xl bg-[#FAF8F3] border border-stone-200 shadow-xs">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Wholesale Supply Across Commercial Categories
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  We supply wholesale eggs to various commercial businesses in and around Itarsi.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                <div className="p-4 rounded-xl bg-white border border-stone-200/80 text-center space-y-2">
                  <Cake className="w-6 h-6 text-amber-700 mx-auto" />
                  <p className="text-xs font-semibold text-slate-800">Bakeries & Confectioneries</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-200/80 text-center space-y-2">
                  <UtensilsCrossed className="w-6 h-6 text-amber-700 mx-auto" />
                  <p className="text-xs font-semibold text-slate-800">Restaurants & Dhabas</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-200/80 text-center space-y-2">
                  <Building2 className="w-6 h-6 text-amber-700 mx-auto" />
                  <p className="text-xs font-semibold text-slate-800">Hotels & Lodges</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-200/80 text-center space-y-2">
                  <ShoppingBag className="w-6 h-6 text-amber-700 mx-auto" />
                  <p className="text-xs font-semibold text-slate-800">Retail Grocery Stores</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-200/80 text-center space-y-2">
                  <Store className="w-6 h-6 text-amber-700 mx-auto" />
                  <p className="text-xs font-semibold text-slate-800">Food Stalls & Canteens</p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-stone-200/80 text-center space-y-2">
                  <Package className="w-6 h-6 text-amber-700 mx-auto" />
                  <p className="text-xs font-semibold text-slate-800">Wholesale Traders</p>
                </div>
              </div>

              <div className="text-center mt-6">
                <a
                  href="https://wa.me/919993446325?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20wholesale%20egg%20supply%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  <WhatsAppIcon className="w-4 h-4" fill="#047857" />
                  <span>Enquire for Your Business Category on WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHOLESALE SUPPLY SECTION (WHY CHOOSE US) */}
        <section id="why" className="py-16 md:py-20 bg-[#FAF8F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
                Wholesale Supply
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                Why Choose MK Egg Centre?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Point 1 */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Around 35 Years of Family Business Experience
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Decades of reliable family business experience in wholesale egg supply.
                </p>
              </div>

              {/* Point 2 */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Wholesale-Focused Egg Supply
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Tailored to meet the demands and schedules of commercial buyers and food businesses.
                </p>
              </div>

              {/* Point 3 */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Family-Owned Business
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Run by Amar Daryani, Kishor Daryani, and Mohan Daryani with personal care and accountability.
                </p>
              </div>

              {/* Point 4 */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Bulk Order Enquiries Welcome
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Equipped to fulfill regular and bulk quantity requirements with dependability.
                </p>
              </div>

              {/* Point 5 */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Supply Through Delivery Vehicles
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Convenient delivery arrangements through our dedicated supply vehicles.
                </p>
              </div>

              {/* Point 6 */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-2 shadow-2xs">
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Personal Contact for Business Enquiries
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Direct phone and WhatsApp access for quick communication and orders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. GALLERY SECTION */}
        <section id="gallery" className="py-16 md:py-20 bg-white border-y border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
                Gallery
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                A Look at Our Business
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Wholesale egg trays, delivery vehicles and store facilities at MK Egg Centre, Itarsi.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedGalleryImage(item)}
                  className="group rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-2xs hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="relative h-64 w-full overflow-hidden bg-stone-100">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-md text-xs font-semibold text-slate-900 shadow-2xs">
                      {item.tagLabel}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h4 className="font-serif font-bold text-sm sm:text-base">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Lightbox Modal */}
            {selectedGalleryImage && (
              <div
                className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
                onClick={() => setSelectedGalleryImage(null)}
              >
                <div
                  className="relative max-w-3xl w-full bg-slate-900 rounded-2xl overflow-hidden text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedGalleryImage(null)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="relative h-[360px] sm:h-[460px] w-full bg-black">
                    <Image
                      src={selectedGalleryImage.src}
                      alt={selectedGalleryImage.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="p-4 sm:p-5 bg-slate-900 flex justify-between items-center gap-4">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white">
                        {selectedGalleryImage.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-0.5">
                        {selectedGalleryImage.description}
                      </p>
                    </div>
                    <a
                      href="https://wa.me/919993446325?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20wholesale%20egg%20supply."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shrink-0 flex items-center gap-1.5"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" fill="#ffffff" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 5. ABOUT US SECTION - NO BLACK SECTION, CLEAN PHOTO */}
        <section id="about" className="py-16 md:py-20 bg-[#FAF8F3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
                Our Family Story
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                A Family Business Built on Trust
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Photo Showcase - Completely Cropped (No Black Bars) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-md max-w-sm w-full">
                  <div className="relative w-full aspect-[472/545] bg-stone-50">
                    <Image
                      src="/images/daryani-brothers.png"
                      alt="Amar Daryani, Kishor Daryani and Mohan Daryani - MK Egg Centre"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-stone-100 text-center">
                    <h4 className="font-serif font-bold text-base sm:text-lg text-slate-900">
                      Amar Daryani, Kishor Daryani & Mohan Daryani
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      MK Egg Centre, Itarsi
                    </p>
                  </div>
                </div>
              </div>

              {/* Clean, Simple Story */}
              <div className="lg:col-span-7 space-y-5 text-slate-700 text-base leading-relaxed">
                <p>
                  MK Egg Centre is a family-owned wholesale egg supply business started by three brothers from the Daryani family —{" "}
                  <strong className="text-slate-900 font-semibold">
                    Amar Daryani, Kishor Daryani and Mohan Daryani
                  </strong>.
                </p>

                <p>
                  With <strong className="text-slate-900">around 35 years of experience</strong> in the egg business, our family has built its journey through hard work, commitment and relationships with customers.
                </p>

                <p>
                  From supplying eggs in bulk to arranging egg supplies through our delivery vehicles, we focus on making egg procurement convenient for the businesses we serve.
                </p>

                <p className="italic text-slate-800 font-medium border-l-2 border-amber-600 pl-4 py-1">
                  For us, this business is more than supplying eggs. It is about trust, consistency and carrying forward a family legacy.
                </p>

                {/* Simple 3 Bullet Points */}
                <div className="pt-4 space-y-3 border-t border-stone-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">
                      <strong>Around 35 Years Experience:</strong> Built over decades with reliable wholesale supply in Itarsi.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">
                      <strong>Personal Contact:</strong> Direct business dealing with Kishor Daryani and family.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">
                      <strong>Delivery Vehicle Support:</strong> Bulk supplies delivered safely to your location.
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <a
                    href="tel:+919993446325"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Call Kishor Daryani (+91 9993446325)</span>
                  </a>
                  <a
                    href="tel:+917747986326"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-800 font-semibold text-sm hover:border-amber-600 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-amber-600" />
                    <span>Call Rohit Daryani (+91 7747986326)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CONTACT US SECTION */}
        <section id="contact" className="py-16 md:py-20 bg-white border-t border-stone-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
                Contact Us
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900">
                Let&apos;s Talk About Your Egg Supply Requirements
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Direct Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F3] border border-stone-200 space-y-5">
                  <div className="space-y-1">
                    <h3 className="font-serif text-xl font-bold text-slate-900">MK Egg Centre</h3>
                    <p className="text-xs text-slate-500">
                      Wholesale egg supplier in Itarsi, MP
                    </p>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=MK%20Egg%20Centre%2C%20Pudi%20Line%2C%20Near%20Station%20Road%2C%20Dolaria%20Road%2C%20Itarsi%20%E2%80%93%20461111%2C%20Madhya%20Pradesh%2C%20India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-slate-800 hover:text-amber-700 leading-snug block"
                      >
                        Pudi Line, Near Station Road, Dolaria Road, Itarsi – 461111, Madhya Pradesh, India
                      </a>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=MK%20Egg%20Centre%2C%20Pudi%20Line%2C%20Near%20Station%20Road%2C%20Dolaria%20Road%2C%20Itarsi%20%E2%80%93%20461111%2C%20Madhya%20Pradesh%2C%20India"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 hover:underline mt-1"
                      >
                        <span>Open address in Google Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div className="space-y-1 text-sm">
                      <a
                        href="tel:+919993446325"
                        className="font-semibold text-slate-800 hover:text-amber-700 block"
                      >
                        +91 9993446325 <span className="text-xs text-slate-500 font-normal">(Kishor Daryani)</span>
                      </a>
                      <a
                        href="tel:+917747986326"
                        className="font-semibold text-slate-800 hover:text-amber-700 block"
                      >
                        +91 7747986326 <span className="text-xs text-slate-500 font-normal">(Rohit Daryani)</span>
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <WhatsAppIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="#059669" />
                    <div>
                      <a
                        href="https://wa.me/919993446325?text=Hi%2C%20I%20checked%20out%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20wholesale%20egg%20supply."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-emerald-700 hover:underline block"
                      >
                        WhatsApp Enquiry (+91 9993446325)
                      </a>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Your enquiry opens in WhatsApp, ready to send to us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Enquiry Form */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-5">
                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    Send an Enquiry
                  </h3>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full p-3 rounded-xl border bg-stone-50 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                            formErrors.name
                              ? "border-rose-400 focus:ring-rose-200"
                              : "border-slate-200 focus:border-amber-500 focus:ring-amber-200"
                          }`}
                        />
                        {formErrors.name && (
                          <p className="text-xs text-rose-500 mt-1">{formErrors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Business Name (optional)
                        </label>
                        <input
                          type="text"
                          value={formData.business}
                          onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                          className="w-full p-3 rounded-xl border border-slate-200 bg-stone-50 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className={`w-full p-3 rounded-xl border bg-stone-50 text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                            formErrors.phone
                              ? "border-rose-400 focus:ring-rose-200"
                              : "border-slate-200 focus:border-amber-500 focus:ring-amber-200"
                          }`}
                        />
                        {formErrors.phone && (
                          <p className="text-xs text-rose-500 mt-1">{formErrors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Required Quantity (optional)
                        </label>
                        <input
                          type="text"
                          value={formData.quantity}
                          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                          className="w-full p-3 rounded-xl border border-slate-200 bg-stone-50 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Message
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-3 rounded-xl border border-slate-200 bg-stone-50 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-xs flex items-center justify-center gap-2.5 transition-colors"
                    >
                      <WhatsAppIcon className="w-5 h-5" fill="#ffffff" />
                      <span>Send Enquiry on WhatsApp</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 text-sm pt-12 pb-10 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
            {/* Brand */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-600 flex items-center justify-center text-white font-serif font-black text-lg">
                  MK
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-white">MK Egg Centre</h4>
                  <p className="text-xs text-slate-400">Wholesale Egg Supplier • Itarsi</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
                A family-owned wholesale egg supply business in Itarsi, supplying eggs in bulk to businesses in and around the area.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3 space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-white">
                Quick Links
              </h5>
              <ul className="space-y-1.5 text-xs">
                <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
                <li><a href="#products" className="hover:text-amber-400 transition-colors">Our Products</a></li>
                <li><a href="#why" className="hover:text-amber-400 transition-colors">Wholesale Supply</a></li>
                <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a></li>
                <li><a href="#about" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-4 space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-white">
                Contact
              </h5>
              <div className="space-y-1.5 text-xs text-slate-300">
                <p><a href="tel:+919993446325" className="hover:text-white transition-colors">+91 9993446325 (Kishor Daryani)</a></p>
                <p><a href="tel:+917747986326" className="hover:text-white transition-colors">+91 7747986326 (Rohit Daryani)</a></p>
                <p className="text-slate-400 pt-1">Pudi Line, Near Station Road, Dolaria Road, Itarsi – 461111, Madhya Pradesh, India</p>
              </div>
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-slate-500">
            © 2026 MK Egg Centre. All rights reserved.
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON WITH AUTHENTIC ICON */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {showChatPopup && (
          <div className="mb-2 max-w-xs bg-white text-slate-900 rounded-xl p-3 shadow-lg border border-stone-200 relative">
            <button
              onClick={() => setShowChatPopup(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-0.5"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <p className="text-xs text-slate-700 pr-4">
              Hi! 👋 Looking for wholesale egg supply? Chat with us directly on WhatsApp.
            </p>
          </div>
        )}

        <a
          href="https://wa.me/919993446325?text=Hi%2C%20I%20checked%20out%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20wholesale%20egg%20supply."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-all"
        >
          <WhatsAppIcon className="w-5 h-5" fill="#ffffff" />
          <span className="text-xs font-semibold pr-1 hidden sm:inline">WhatsApp Enquiry</span>
        </a>
      </div>

      {/* MOBILE STICKY CALL/WHATSAPP BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-2 grid grid-cols-2 gap-2 shadow-lg">
        <a
          href="tel:+919993446325"
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-900 text-white text-xs font-semibold"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Call Now</span>
        </a>
        <a
          href="https://wa.me/919993446325?text=Hi%2C%20I%20checked%20out%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20wholesale%20egg%20supply."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 text-white text-xs font-semibold"
        >
          <WhatsAppIcon className="w-4 h-4" fill="#ffffff" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
