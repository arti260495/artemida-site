import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaPinterestP, FaBars, FaTimes, FaShoppingBag } from "react-icons/fa";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const products = [
    { id:1, name:"Серьги с жемчугом и серебром", img:"https://picsum.photos/seed/arte-1/900/700", description:"Ручная работа. Серебро 925, натуральный речной жемчуг. Лёгкие, как дыхание.", link:"https://www.avito.ru/" },
    { id:2, name:"Кольцо «Утро тумана»", img:"https://picsum.photos/seed/arte-2/900/700", description:"Серебро 925 без пробирного клейма РФ, кварц с молочным оттенком.", link:"https://www.avito.ru/" },
    { id:3, name:"Браслет с камнями агата", img:"https://picsum.photos/seed/arte-3/900/700", description:"Гармония прозрачного стекла и природного агата. Каждый камень уникален.", link:"https://www.avito.ru/" },
    { id:4, name:"Подвеска «Тихое утро»", img:"https://picsum.photos/seed/arte-4/900/700", description:"Серебро, стекло ручной огранки, деликатный блеск.", link:"https://www.avito.ru/" },
    { id:5, name:"Колье с камнем лунного света", img:"https://picsum.photos/seed/arte-5/900/700", description:"Нежное сочетание серебра и натурального камня.", link:"https://www.avito.ru/" },
    { id:6, name:"Серьги с кристаллами", img:"https://picsum.photos/seed/arte-6/900/700", description:"Ручная работа с прозрачными кристаллами для особых моментов.", link:"https://www.avito.ru/" }
  ];

  return (
    <div className="bg-white text-gray-900 font-serif">
      {/* HEADER */}
      <header style={background:"#2b3035"} className="sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto grid grid-cols-3 items-center px-6 py-4">
          {/* left spacer on desktop */}
          <div className="hidden md:block" />
          {/* centered logo */}
          <div className="flex justify-center text-white">
            <img src="/logo.png" alt="Артемида — логотип" className="h-10 sm:h-12 w-auto drop-shadow-md" />
          </div>
          {/* desktop menu */}
          <ul className="hidden md:flex justify-end gap-6 text-sm uppercase tracking-wider text-white">
            <li><a href="#about" className="hover:text-gray-500">О бренде</a></li>
            <li><a href="#gallery" className="hover:text-gray-500">Галерея</a></li>
            <li><a href="#contacts" className="hover:text-gray-500">Контакты</a></li>
          </ul>
          {/* mobile hamburger */}
          <div className="md:hidden col-start-3 justify-self-end text-white">
            <button aria-label="Открыть меню" onClick={()=>setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <motion.ul initial={{opacity:0}} animate={{opacity:1}} className="flex flex-col gap-4 px-6 pb-4 md:hidden uppercase text-sm text-white">
            <li><a href="#about" onClick={()=>setMenuOpen(false)}>О бренде</a></li>
            <li><a href="#gallery" onClick={()=>setMenuOpen(false)}>Галерея</a></li>
            <li><a href="#contacts" onClick={()=>setMenuOpen(false)}>Контакты</a></li>
          </motion.ul>
        )}
      </header>

      {/* HERO */}
      <section className="relative h-[50vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        <img src="/logo.png" alt="Артемида логотип" className="absolute opacity-10 w-[60%] max-w-[520px] -z-0" style={{filter:"grayscale(1)"}} />
        <img src="https://picsum.photos/seed/hero-arte/1800/1200" alt="Jewelry background" className="absolute w-full h-full object-cover brightness-75"/>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="relative text-center text-white px-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-light mb-2 sm:mb-4 tracking-wide">Украшения, рожденные из тишины</h2>
          <p className="text-xs sm:text-sm uppercase tracking-widest">Артемида</p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto py-16 sm:py-20 px-4 text-center leading-relaxed">
        <h3 className="text-2xl sm:text-3xl mb-6 sm:mb-8 font-light tracking-wide">О бренде</h3>
        <p className="text-base sm:text-lg italic">
          Наши украшения рождаются из тишины и внимания к моменту. Каждое изделие — как воспоминание, заключённое в блеске металла, холоде камня и тепле рук. Они хранят дыхание мгновений, которые хочется помнить.
        </p>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-gray-50 py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl mb-8 sm:mb-10 font-light tracking-wide">Галерея</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product) => (
              <motion.div key={product.id} whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer">
                <img src={product.img} alt={product.name} className="w-full h-56 sm:h-64 object-cover" onClick={()=>setSelectedImage(product)} />
                <div className="p-4">
                  <h4 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">{product.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{product.description}</p>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm hover:bg-gray-800 transition">Купить на Авито</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-16 sm:py-20 px-4 text-center">
        <h3 className="text-2xl sm:text-3xl mb-6 sm:mb-8 font-light tracking-wide">Контакты</h3>
        <p className="text-base sm:text-lg italic mb-8 sm:mb-10">Следите за обновлениями бренда:</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
          <a href="https://www.avito.ru/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition"><FaShoppingBag className="text-xl"/> Avito</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition"><FaInstagram className="text-xl"/> Instagram</a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition"><FaPinterestP className="text-xl"/> Pinterest</a>
        </div>
      </section>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div onClick={()=>setSelectedImage(null)} className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 cursor-zoom-out">
          <motion.img src={selectedImage.img} alt={selectedImage.name} initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.3 }} className="max-w-3xl w-[90%] rounded-2xl shadow-lg"/>
        </div>
      )}

      <footer className="text-center py-10 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Артемида. Все права защищены.</p>
      </footer>
    </div>
  );
}
