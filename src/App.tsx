/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import {
  Pizza,
  MapPin,
  Heart,
  Clock,
  ChevronRight,
  Star,
  Instagram,
  Facebook,
  Twitter,
  ShoppingBag,
  ExternalLink,
  ChefHat,
  UtensilsCrossed,
  Bike,
  Menu as MenuIcon,
  X
} from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Components
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-brand-bg/95 backdrop-blur-sm border-b border-brand-red/5 transition-shadow duration-300 ${scrolled ? 'shadow-lg shadow-brand-red/10' : ''}`}>
      <div className="flex items-center justify-between px-6 md:px-12 py-2">
        <div className="flex items-center gap-3">
          <img src="/images/tagliato.webp" alt="Poppy's Pizza" className="h-7 w-auto object-contain" />
        </div>

        <div className="hidden md:flex items-center gap-12 font-display font-black text-xs tracking-[0.2em] text-brand-red uppercase">
          <a href="#menu" className="hover:opacity-60 transition-all">MENU</a>
          <a href="#locations" className="hover:opacity-60 transition-all">LOCATIONS</a>
          <a href="#about" className="hover:opacity-60 transition-all">ABOUT</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:block bg-brand-red text-white px-6 py-2 rounded-xl font-display font-black text-xs tracking-widest shadow-xl shadow-brand-red/20 hover:scale-105 active:scale-95 transition-all">
            BOOK NOW
          </button>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5 text-brand-red" /> : <MenuIcon className="w-5 h-5 text-brand-red" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-brand-bg border-t border-brand-red/10 px-6 py-6 flex flex-col gap-6 font-display font-black text-sm tracking-[0.2em] text-brand-red uppercase">
          <a href="#menu" onClick={() => setOpen(false)} className="hover:opacity-60 transition-all">MENU</a>
          <a href="#locations" onClick={() => setOpen(false)} className="hover:opacity-60 transition-all">LOCATIONS</a>
          <a href="#about" onClick={() => setOpen(false)} className="hover:opacity-60 transition-all">ABOUT</a>
        </div>
      )}
    </nav>
  );
};

const PizzaCharacter = ({ className, delay = 0 }: { className?: string, delay?: number }) => (
  <motion.div 
    className={`absolute pointer-events-none z-0 animate-float-complex ${className}`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay }}
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="w-16 h-16 md:w-24 md:h-24 filter drop-shadow-lg">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10L90 85H10L50 10Z" fill="#FFB7C5" stroke="#3D0C0C" strokeWidth="4" />
        <circle cx="45" cy="45" r="6" fill="#C8161D" />
        <circle cx="65" cy="55" r="6" fill="#C8161D" />
        <circle cx="35" cy="65" r="6" fill="#C8161D" />
        <path d="M35 85L30 95" stroke="#3D0C0C" strokeWidth="4" strokeLinecap="round" />
        <path d="M65 85L70 95" stroke="#3D0C0C" strokeWidth="4" strokeLinecap="round" />
        <path d="M15 50L5 45" stroke="#3D0C0C" strokeWidth="4" strokeLinecap="round" />
        <path d="M85 50L95 45" stroke="#3D0C0C" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative pt-24 pb-2 md:pb-12 px-6 md:px-12 overflow-hidden bg-brand-bg">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-12 items-center">
        <div className="z-10 text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-brand-red font-display font-black text-[10px] md:text-xs tracking-[0.4em] mb-2 md:mb-5 block border-l-0 md:border-l-4 border-brand-red pl-0 md:pl-4 uppercase"
          >NAPOLI MEETS NYC</motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-black text-brand-red leading-[0.95] mb-1 md:mb-3 tracking-tighter"
          >AMERICAN PIZZA</motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-3xl font-black text-brand-dark leading-[1] mb-2 md:mb-8 tracking-tighter italic"
          >NEAPOLITAN HEART.</motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xs md:text-base text-brand-dark/70 max-w-xs mb-0 md:mb-6 leading-relaxed font-bold mx-auto lg:mx-0"
          >Handmade dough, quality ingredients and all the taste of real American style pizzas. Crunchy outside, soft inside. 100% Poppy's.</motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="hidden md:flex flex-wrap gap-4 mt-6"
          >
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-red text-white py-3 px-10 rounded-xl font-display font-black text-xs tracking-widest shadow-2xl shadow-brand-red/30"
            >ORDER ONLINE</motion.button>
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-brand-red text-brand-red py-3 px-10 rounded-xl font-display font-black text-xs tracking-widest hover:bg-brand-red hover:text-white transition-colors uppercase"
            >EXPLORE MENU</motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center p-0 md:p-2 z-10"
        >
          <motion.img
            src="/images/pizza home def.webp"
            alt="Pepperoni Pizza"
            className="w-full md:w-[130%] max-w-none h-auto drop-shadow-[0_45px_45px_rgba(0,0,0,0.15)] mix-blend-multiply"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-brand-pink/10 rounded-full scale-110 -z-10 blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex md:hidden justify-center flex-wrap gap-3 mt-2 mb-4"
        >
          <motion.button whileTap={{ scale: 0.95 }} className="bg-brand-red text-white py-2.5 px-8 rounded-xl font-display font-black text-xs tracking-widest">
            ORDER ONLINE
          </motion.button>
          <motion.a href="#menu" whileTap={{ scale: 0.95 }} className="bg-transparent border-2 border-brand-red text-brand-red py-2.5 px-8 rounded-xl font-display font-black text-xs tracking-widest uppercase">
            EXPLORE MENU
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const MarqueeSection = () => {
  const items = [
    { text: "HANDMADE DOUGH", emoji: "🥣" },
    { text: "AMERICAN STYLE", emoji: "🗽" },
    { text: "TOP INGREDIENTS", emoji: "🍅" },
    { text: "FAST DELIVERY", emoji: "🛵" },
    { text: "NAPOLI meets NYC", emoji: "🍕" }
  ];
  
  return (
    <div className="relative z-20 overflow-hidden bg-brand-bg py-4">
      <div className="bg-brand-red py-4 md:py-14 border-y-4 border-brand-dark tilt-marquee relative">
        <div className="flex animate-marquee-fast md:animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8">
              {items.map((item, j) => (
                <div key={j} className="flex items-center gap-8 text-white font-display font-black text-lg md:text-xl tracking-[0.2em]">
                  <span className="text-3xl md:text-4xl">{item.emoji}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Menu = () => {
  const items = [
    { title: "CHEESE", price: "24", desc: "Tomato, Mozzarella", img: "/images/CHEESE.webp" },
    { title: "BRONX PEPPERONI (BEST SELLER)", price: "28", desc: "Pepperoni, Mozzarella, Tomato", img: "/images/BRONX PEPPERONI.webp" },
    { title: "CHEESE OVERLOAD", price: "26", desc: "Mozzarella, Parmesan, Cheese sauce", img: "/images/CHEESE OVERLOAD.webp" },
    { title: "SPICY PEPPERONI (BROOKLYN STYLE)", price: "29", desc: "Spicy salami, Hot honey, Chili flakes, Mozzarella, Tomato", img: "/images/SPICY PEPPERONI.webp" },
    { title: "HAWAII CLASSIC", price: "28", desc: "Tomato, Mozzarella, Ham, Pineapple", img: "/images/HAWAII CLASSIC.webp" },
    { title: "WHITE GARLIC", price: "27", desc: "Mozzarella, creamy triple cheese, garlic, black pepper", img: "/images/white garlik.webp" }
  ];

  return (
    <section id="menu" className="pt-10 pb-12 px-6 md:px-12 bg-brand-bg relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-brand-red font-display font-black text-xs tracking-[0.4em] uppercase">OUR MENU</span>
          <h2 className="text-5xl md:text-6xl font-black text-brand-red tracking-tighter italic uppercase">PICK YOUR FAVORITE</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(200,22,29,0.12)" }}
              className="bg-white rounded-3xl overflow-hidden border-2 border-brand-dark/5 hover:border-brand-red transition-colors group flex flex-col cursor-pointer"
            >
              <div className="h-64 overflow-hidden relative">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-8 text-center space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-brand-dark leading-tight mb-2 uppercase italic">{item.title}</h3>
                  <p className="text-xs text-brand-dark/60 font-bold uppercase tracking-wide leading-relaxed">{item.desc}</p>
                </div>
                <span className="text-2xl font-black text-brand-red block mt-4">CHF {item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-red text-white py-4 px-12 rounded-xl font-display font-black text-xs tracking-widest"
          >SEE THE FULL MENU</motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const Story = () => (
  <section id="about" className="pt-12 pb-24 px-6 md:px-12 bg-brand-bg flex items-center justify-center relative">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative"
      >
        <div className="rounded-[40px] overflow-hidden border-8 border-brand-bg shadow-2xl relative z-10">
          <img
            src="/images/OUR STORY.webp"
            alt="Poppy's Pizza atmosphere"
            className="w-full h-[280px] md:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-brand-red/10 animate-pulse pointer-events-none" />
        </div>
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-brand-pink/40 rounded-full blur-3xl -z-1" />
      </motion.div>

      <div className="space-y-10 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-brand-red font-display font-black text-xs tracking-[0.4em] uppercase border-l-0 lg:border-l-4 border-brand-red pl-0 lg:pl-4 block">OUR STORY</span>
          <h2 className="text-5xl md:text-6xl font-black text-brand-dark leading-[0.9] tracking-tighter italic">
            FROM NAPLES TO NEW YORK.<br />AND BACK.
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg text-brand-dark/70 font-bold leading-relaxed max-w-md mx-auto lg:mx-0"
        >
          Poppy's was born from the meeting between Neapolitan tradition and the vibrant spirit of New York. We combine the art of Italian dough with American style to create unique pizzas, designed to be shared. Welcome to our world.
        </motion.p>

        <div className="grid grid-cols-3 gap-4 md:gap-12 pt-4">
          {[
            { icon: <MapPin className="w-5 h-5 text-brand-red" />, value: "1", label: <>LOCATION<br />IN ZURICH</>, href: "#locations" },
            { icon: <Pizza className="w-5 h-5 text-brand-red" />, value: "8", label: <>PIZZAS<br />ON MENU</>, href: "#menu" },
            { icon: <Heart className="w-5 h-5 text-brand-red" />, value: "10K+", label: <>HAPPY<br />CUSTOMERS</>, href: "#reviews" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group flex flex-col items-center lg:flex-row lg:items-center gap-2 lg:gap-4 text-center lg:text-left"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-brand-pink/30 flex items-center justify-center shrink-0"
              >
                {stat.icon}
              </motion.div>
              <div>
                <span className="text-2xl md:text-4xl font-black text-brand-red italic block leading-none">{stat.value}</span>
                <a href={stat.href} className="text-[8px] md:text-[10px] font-black uppercase text-brand-dark/40 tracking-[0.2em] leading-tight block hover:text-brand-red transition-all">{stat.label}</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Reviews = () => {
  const reviews = [
    { name: "Marco R.", text: "The best American style pizza I've tried in Italy. Perfect dough and amazing ingredients!", rating: 5 },
    { name: "Giulia T.", text: "Super welcoming atmosphere and friendly staff. The Brooklyn is my absolute favorite!", rating: 5 },
    { name: "Alessandro B.", text: "We always order from Poppy's! Fast delivery and pizza always arrives piping hot.", rating: 5 }
  ];

  return (
    <section id="reviews" className="py-16 md:py-32 px-6 bg-brand-bg relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-red font-display font-black text-xs tracking-[0.4em] uppercase block mb-4">THEY SAY ABOUT US</span>
          <div className="h-1 w-20 bg-brand-red mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(200,22,29,0.10)" }}
              className="bg-white p-6 md:p-12 rounded-[50px] border-b-8 border-brand-red flex flex-col gap-6"
            >
              <div className="flex gap-1 text-brand-red">
                {[...Array(r.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="font-bold text-lg leading-tight italic">"{r.text}"</p>
              <span className="text-xs font-black uppercase tracking-widest opacity-60">— {r.name}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.06, backgroundColor: "#C8161D", color: "#fff" }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-brand-red text-brand-red py-4 px-12 rounded-xl font-display font-black text-xs tracking-widest uppercase transition-colors"
          >READ ALL REVIEWS</motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const Location = () => (
  <section id="locations" className="py-24 px-6 bg-brand-red text-brand-bg text-center">
    <div className="max-w-3xl mx-auto space-y-12">
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-white/60 font-display font-black text-xs tracking-[0.4em] uppercase block"
      >OUR LOCATION</motion.span>
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          className="w-24 h-24 mb-4 border-2 border-brand-bg/20 rounded-full flex items-center justify-center"
        >
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
            <MapPin className="w-12 h-12 text-white" />
          </motion.div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-black text-white italic tracking-tighter"
        >POPPY'S ZURICH</motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="space-y-1 text-lg font-bold opacity-80"
        >
          <p>Erismannstrasse 52</p>
          <p>8004 Zürich, Switzerland</p>
        </motion.div>
        <motion.a
          href="https://www.google.com/maps/search/?api=1&query=Erismannstrasse+52,+8004+Zurich"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-brand-red py-4 px-12 rounded-xl font-display font-black text-xs tracking-widest shadow-2xl"
        >GET DIRECTIONS</motion.a>
      </div>
    </div>
  </section>
);

const NewsletterFooter = () => (
  <div className="bg-brand-bg relative overflow-hidden">
    
    <section className="py-24 px-6 max-w-4xl mx-auto text-center space-y-12">
      <h2 className="text-4xl md:text-5xl font-black text-brand-dark italic tracking-tighter">STAY UPDATED</h2>
      <p className="text-brand-dark/60 font-black uppercase tracking-widest text-xs">Subscribe to our newsletter and receive exclusive offers and previews.</p>
      <form className="flex flex-col md:flex-row gap-4" onSubmit={e => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Your email" 
          className="flex-1 bg-white border-2 border-brand-dark/10 rounded-xl px-8 py-4 focus:outline-none focus:border-brand-red transition-all font-bold"
        />
        <button className="bg-brand-red text-white py-4 px-12 rounded-xl font-display font-black text-xs tracking-widest hover:scale-105 transition-all">
          SUBSCRIBE
        </button>
      </form>
    </section>

    <footer className="bg-brand-red text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="bg-white p-2 inline-flex flex-col items-center transform -rotate-6 rounded-lg text-brand-red shadow-xl">
              <span className="font-black text-sm">POPPY'S</span>
              <span className="font-black text-[10px] opacity-80 uppercase leading-none italic">Pizza</span>
            </div>
            <p className="text-white/60 text-xs font-black uppercase tracking-[0.2em] leading-relaxed max-w-[200px]">
              Real American style pizza with a Neapolitan heart.
            </p>
          </div>
          
          {[
            { title: "MENU", items: ["All pizzas", "About us"], links: ["#menu", "#about"] },
            { title: "INFO", items: ["Work with us", "FAQ", "Contacts"] },
            { title: "SERVICES", items: ["Order Online", "Catering", "Gift Card"] }
          ].map((col, i) => (
            <div key={i} className="space-y-8">
              <h4 className="text-[10px] tracking-[.3em] font-black opacity-40 uppercase">{col.title}</h4>
              <ul className="space-y-4 text-xs font-black uppercase tracking-widest">
                {col.items.map((it, j) => (
                  <li key={j}><a href={(col as any).links?.[j] ?? "#"} className="hover:text-brand-pink transition-all">{it}</a></li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="space-y-8">
            <h4 className="text-[10px] tracking-[.3em] font-black opacity-40 uppercase">FOLLOW US</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-xl flex items-center justify-center hover:bg-white hover:text-brand-red transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-xl flex items-center justify-center hover:bg-white hover:text-brand-red transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black tracking-widest opacity-40 uppercase">
          <span>© 2024 Poppy's Pizza — Napoli meets NYC. All rights reserved.</span>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-red selection:text-white">
      <Navbar />
      <Hero />
      <MarqueeSection />
      <Menu />
      <Story />
      <div className="h-8 bg-checkered w-full" />
      <Reviews />
      <Location />
      <NewsletterFooter />
    </div>
  );
}
