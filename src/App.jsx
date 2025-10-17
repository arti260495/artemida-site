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
      <header style={{background:'var(--brand)'}} className="sticky top-0 z-50">
        <nav className="relative max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          {/* Left: big logo only */}
          <a href="#top" className="flex items-center gap-3 pr-3">
            <img src="/logo.png" alt="Логотип Артемида" className="h-16 md:h-20 w-auto" />
          </a>

          {/* Center absolute: brand title */}
          <div className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <div className="brand-title text-white tracking-wide">
              <span className="text-3xl md:text-4xl font-semibold">АРТЕМИДА</span>
            </div>
          </div>

          {/* Right: desktop menu / mobile burger */}
          <ul className="hidden md:flex items-center gap-6 text-sm uppercase tracking-wider text-white">
            <li><a href="#about" className="hover:opacity-80">О бренде</a></li>
            <li><a href="#philosophy" className="hover:opacity-80">Философия</a></li>
            <li><a href="#materials" className="hover:opacity-80">Материалы</a></li>
            <li><a href="#gallery" className="hover:opacity-80">Галерея</a></li>
            <li><a href="#care" className="hover:opacity-80">Уход</a></li>
            <li><a href="#contacts" className="hover:opacity-80">Контакты</a></li>
          </ul>

          <button
            aria-label="Открыть меню"
            className="md:hidden text-white"
            onClick={()=>setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
          </button>
        </nav>

        {menuOpen && (
          <motion.ul
            initial={{opacity:0}}
            animate={{opacity:1}}
            className="md:hidden uppercase text-sm text-white px-4 pb-4 space-y-3"
          >
            <li><a href="#about" onClick={()=>setMenuOpen(false)}>О бренде</a></li>
            <li><a href="#philosophy" onClick={()=>setMenuOpen(false)}>Философия</a></li>
            <li><a href="#materials" onClick={()=>setMenuOpen(false)}>Материалы</a></li>
            <li><a href="#gallery" onClick={()=>setMenuOpen(false)}>Галерея</a></li>
            <li><a href="#care" onClick={()=>setMenuOpen(false)}>Уход</a></li>
            <li><a href="#contacts" onClick={()=>setMenuOpen(false)}>Контакты</a></li>
          </motion.ul>
        )}
      </header>

      {/* HERO */}
      <section className="relative h-[46vh] sm:h-[62vh] flex items-center justify-center overflow-hidden">
        <img src="https://picsum.photos/seed/hero-arte/1800/1200" alt="Jewelry background" className="absolute w-full h-full object-cover brightness-75"/>
        {/* Watermark subtler */}
        <img src="/logo.png" alt="Артемида логотип" className="absolute opacity-5 w-[58%] max-w-[520px]" style={{filter:"grayscale(1)"}} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="relative text-center text-white px-4 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-2 sm:mb-4 tracking-wide">Украшения, рожденные из тишины</h1>
          <p className="text-xs sm:text-sm uppercase tracking-widest">Артемида</p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto py-14 sm:py-16 px-4 text-center leading-relaxed">
        <h3 className="text-2xl sm:text-3xl mb-6 sm:mb-8 font-light tracking-wide">О бренде</h3>
        <p className="text-base sm:text-lg italic">
          Наши украшения рождаются из тишины и внимания к моменту.
          Каждое изделие — как воспоминание, заключённое в блеске металла, холоде камня и тепле рук.
          Они хранят дыхание мгновений, которые хочется помнить.
          Это не просто украшения — это маленькая жемчужина Вашей истории, которая остаётся рядом,
          впитывая эмоции, тепло и память.
        </p>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="bg-gray-50 py-14 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center leading-relaxed">
          <h3 className="text-2xl sm:text-3xl mb-6 sm:mb-8 font-light tracking-wide">Философия</h3>
          <p className="text-base sm:text-lg italic">
            Мы создаём вещи, с которыми хочется жить, возвращаться к ним и бережно относиться, как к части собственной истории.
            Наши украшения — это не громкие заявления, а тихое присутствие, которое становится частью Вашего внутреннего мира.
            Они проживают вместе с Вами важные моменты и становятся отражением пережитого, заключённого в материю.
          </p>
        </div>
      </section>

      {/* MATERIALS */}
      <section id="materials" className="max-w-4xl mx-auto py-14 sm:py-16 px-4 text-center leading-relaxed">
        <h3 className="text-2xl sm:text-3xl mb-6 sm:mb-8 font-light tracking-wide">Материалы и процесс</h3>
        <p className="text-base sm:text-lg italic">
          В работе мы используем <strong>925 sterling silver (без государственного пробирного клейма РФ)</strong>, натуральные камни, жемчуг, бисер и красивые стеклянные бусины — всё, что красиво сочетается и рождает мелодию.
          Каждый элемент создаётся с вниманием к форме, цвету и текстуре, чтобы итоговое изделие сочетало красоту, прочность и эмоциональную ценность.
          Ручная работа превращает украшение из вещи в маленькую жемчужину Вашей истории, с которой хочется оставаться рядом.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <img src="https://picsum.photos/seed/material-1/900/700" alt="Silver" className="rounded-2xl shadow-md" />
          <img src="https://picsum.photos/seed/material-2/900/700" alt="Gemstones" className="rounded-2xl shadow-md" />
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl sm:text-3xl mb-8 sm:mb-10 font-light tracking-wide">Галерея</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product) => (
              <motion.div key={product.id} whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer">
                <img src={product.img} alt={product.name} className="w-full h-56 sm:h-64 object-cover" onClick={()=>setSelectedImage(product)} />
                <div className="p-4">
                  <h4 className="text-base sm:text-lg font-medium mb-1 sm:mb-2">{product.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{product.description}</p>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm hover:bg-gray-800 transition">
                    <span className="inline-flex items-center gap-2"><FaShoppingBag /> Купить на Авито</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CARE - collapsible */}
      <section id="care" className="py-14 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl mb-6 sm:mb-8 font-light tracking-wide text-center">Уход за украшениями</h3>
          <details className="bg-gray-50 rounded-2xl shadow-sm p-5 open:shadow-md">
            <summary className="cursor-pointer list-none select-none text-base sm:text-lg font-medium">
              Нажмите, чтобы развернуть рекомендации по уходу
            </summary>
            <div className="mt-4 text-gray-700 leading-relaxed">
              <p className="italic mb-3">Для того чтобы украшение радовало долгие годы:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Храните отдельно от других изделий, в бархатном мешочке или коробочке.</li>
                <li>Очищайте мягкой тканью, избегайте абразивов и агрессивной химии.</li>
                <li>Снимайте перед водой, спортом или контактом с косметикой.</li>
                <li>Проверяйте крепления и застёжки регулярно.</li>
              </ul>
              <p className="italic mt-4">Бережное обращение превращает изделие в маленькую жемчужину, которая сохраняет тепло рук мастера и воспоминания Владельца.</p>
            </div>
          </details>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="bg-gray-50 py-16 px-4 text-center">
        <h3 className="text-2xl sm:text-3xl mb-6 sm:mb-8 font-light tracking-wide">Контакты</h3>
        <p className="text-base sm:text-lg italic mb-8 sm:mb-10">Следите за обновлениями бренда:</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
          <a href="https://www.avito.ru/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition"><FaShoppingBag/> Avito</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition"><FaInstagram/> Instagram</a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-gray-800 transition"><FaPinterestP/> Pinterest</a>
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
