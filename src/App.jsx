import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaPinterestP, FaBars, FaTimes, FaShoppingBag } from "react-icons/fa";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [careOpen, setCareOpen] = useState(false);
  const careRef = useRef(null);

  const products = [
    { id:1, name:"СЕРЬГИ С ЖЕМЧУГОМ И СЕРЕБРОМ", img:"https://picsum.photos/seed/arte-1/900/700", description:"Ручная работа. Серебро 925, натуральный речной жемчуг. Лёгкие, как дыхание.", link:"https://www.avito.ru/" },
    { id:2, name:"КОЛЬЦО «УТРО ТУМАНА»", img:"https://picsum.photos/seed/arte-2/900/700", description:"Серебро 925 без пробирного клейма РФ, кварц с молочным оттенком.", link:"https://www.avito.ru/" },
    { id:3, name:"БРАСЛЕТ С КАМНЯМИ АГАТА", img:"https://picsum.photos/seed/arte-3/900/700", description:"Гармония прозрачного стекла и природного агата. Каждый камень уникален.", link:"https://www.avito.ru/" },
    { id:4, name:"ПОДВЕСКА «ТИХОЕ УТРО»", img:"https://picsum.photos/seed/arte-4/900/700", description:"Серебро, стекло ручной огранки, деликатный блеск.", link:"https://www.avito.ru/" },
    { id:5, name:"КОЛЬЕ С КАМНЕМ ЛУННОГО СВЕТА", img:"https://picsum.photos/seed/arte-5/900/700", description:"Нежное сочетание серебра и натурального камня.", link:"https://www.avito.ru/" },
    { id:6, name:"СЕРЬГИ С КРИСТАЛЛАМИ", img:"https://picsum.photos/seed/arte-6/900/700", description:"Ручная работа с прозрачными кристаллами для особых моментов.", link:"https://www.avito.ru/" }
  ];

  useEffect(()=>{
    if (!careRef.current) return;
    if (careOpen) {
      careRef.current.style.maxHeight = careRef.current.scrollHeight + 'px';
      careRef.current.style.paddingBottom = '8px';
    } else {
      careRef.current.style.maxHeight = '3.2em';
      careRef.current.style.paddingBottom = '0px';
    }
  }, [careOpen]);

  return (
    <div className="body-text">
      {/* HEADER */}
      <header style={{background:'#2E3236'}} className="sticky top-0 z-50">
        <nav className="relative max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 min-h-[64px]">
          {/* Left: full logo with fade-in, bigger */}
          <a href="#top" className="flex items-center pr-3">
            <img src="/logo.png" alt="АРТЕМИДА — логотип" className="h-16 md:h-20 w-auto logo-fade" />
          </a>

          {/* Center empty */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"></div>

          {/* Menu right (Montserrat) */}
          <ul className="hidden md:flex items-center gap-7 text-sm uppercase tracking-wider text-white relative z-10 justify-end pr-4 sm:pr-8 ui-font">
            <li><a href="#about" className="hover:opacity-80">О БРЕНДЕ</a></li>
            <li><a href="#products" className="hover:opacity-80">УКРАШЕНИЯ</a></li>
            <li><a href="#philosophy" className="hover:opacity-80">ФИЛОСОФИЯ</a></li>
            <li><a href="#materials" className="hover:opacity-80">МАТЕРИАЛЫ</a></li>
            <li><a href="#care" className="hover:opacity-80">УХОД</a></li>
            <li><a href="#shipping" className="hover:opacity-80">ОПЛАТА И ДОСТАВКА</a></li>
            <li><a href="#contacts" className="hover:opacity-80">КОНТАКТЫ</a></li>
          </ul>

          {/* Burger */}
          <button aria-label="Открыть меню" className="md:hidden text-white relative z-10 ui-font" onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
          </button>
        </nav>

        {menuOpen && (
          <motion.ul initial={{opacity:0}} animate={{opacity:1}} className="md:hidden uppercase text-sm text-white px-4 pb-4 space-y-3 relative z-10 ui-font">
            <li><a href="#about" onClick={()=>setMenuOpen(false)}>О БРЕНДЕ</a></li>
            <li><a href="#products" onClick={()=>setMenuOpen(false)}>УКРАШЕНИЯ</a></li>
            <li><a href="#philosophy" onClick={()=>setMenuOpen(false)}>ФИЛОСОФИЯ</a></li>
            <li><a href="#materials" onClick={()=>setMenuOpen(false)}>МАТЕРИАЛЫ</a></li>
            <li><a href="#care" onClick={()=>setMenuOpen(false)}>УХОД</a></li>
            <li><a href="#shipping" onClick={()=>setMenuOpen(false)}>ОПЛАТА И ДОСТАВКА</a></li>
            <li><a href="#contacts" onClick={()=>setMenuOpen(false)}>КОНТАКТЫ</a></li>
          </motion.ul>
        )}
      </header>

      {/* HERO */}
      <section className="relative h-[46vh] sm:h-[62vh] flex items-center justify-center overflow-hidden cursor-auto">
        <img src="https://picsum.photos/seed/hero-arte/1800/1200" alt="background" className="absolute w-full h-full object-cover brightness-75"/>
        {/* stretched transparent logo under header */}
        <img src="/logo.png" alt="АРТЕМИДА" className="absolute opacity-5 w-[80%] max-w-[820px]" style={{filter:"grayscale(1)", top: "8%", position:"absolute"}} />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0 }} className="relative text-center text-white px-4 z-10">
          <h1 className="headings text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4">Украшения, рожденные из тишины</h1>
          <p className="ui-font text-xs sm:text-sm uppercase tracking-widest">АРТЕМИДА</p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto py-14 sm:py-16 px-4 text-center leading-relaxed">
        <h3 className="headings text-2xl sm:text-3xl mb-6 sm:mb-8">О БРЕНДЕ</h3>
        <div className="space-y-4">
          <p>Наши украшения рождаются из тишины и внимания к моменту. Каждое изделие — как воспоминание, заключённое в блеске металла, холоде камня и тепле рук. Они хранят дыхание мгновений, которые хочется помнить.</p>
          <p>Это не просто украшения — это маленькие жемчужины Вашей истории, впитывающие эмоции, тепло и память. Каждое изделие уникально.</p>
          <p>АРТЕМИДА — это история о внимании, тишине и формах, рождающихся из чувства, а не из моды.</p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-gray-50/40 py-16 px-4">
        <div className="max-w-6xl mx_auto text-center">
          <h3 className="headings text-2xl sm:text-3xl mb-8 sm:mb-10">УКРАШЕНИЯ</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product) => (
              <motion.div key={product.id} whileHover={{ opacity: 1 }} className="bg-white rounded-none shadow-md overflow-hidden card cursor-pointer">
                <img src={product.img} alt={product.name} className="w-full h-56 sm:h-64 object-cover" onClick={()=>setSelectedImage(product)} />
                <div className="p-4">
                  <h4 className="headings text-lg mb-2">{product.name}</h4>
                  <p className="text-sm mb-3">{product.description}</p>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="ui-font text-white px-5 py-2.5 rounded-none inline-flex items-center gap-2 hover:-translate-y-[1px]" style={{background:"var(--btn)", boxShadow:"0 4px 12px rgba(0,0,0,.08)", transition:"background .3s ease, transform .3s ease, box-shadow .3s ease"}}>
                    <FaShoppingBag/> Приобрести на Авито
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-sm text-[#5A514C] italic">
            Все представленные украшения существуют в единственном экземпляре.<br/>
            Приобрести можно через безопасную Авито Доставку.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="py-14 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center leading-relaxed">
          <h3 className="headings text-2xl sm:text-3xl mb-6 sm:mb-8">ФИЛОСОФИЯ</h3>
          <div className="space-y-4">
            <p>Мы создаём вещи, с которыми хочется жить, возвращаться к ним и бережно относиться — как к части собственной истории.</p>
            <p>Наши украшения — не громкие заявления, а тихое присутствие, которое становится частью Вашего внутреннего мира. Они проживают вместе с Вами важные моменты и становятся отражением пережитого, заключённого в материю.</p>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section id="materials" className="max-w-4xl mx-auto py-14 sm:py-16 px-4 text-center leading-relaxed">
        <h3 className="headings text-2xl sm:text-3xl mb-6 sm:mb-8">МАТЕРИАЛЫ И ПРОЦЕСС</h3>
        <div className="space-y-4">
          <p>В работе мы используем <strong>925 sterling silver (без государственного пробирного клейма РФ)</strong>, натуральные камни, жемчуг, бисер и стеклянные бусины — всё, что красиво сочетается и рождает мелодию.</p>
          <p>Каждый элемент создаётся с вниманием к форме, цвету и текстуре, чтобы итоговое изделие сочетало красоту, прочность и эмоциональную ценность.</p>
          <p>Ручная работа превращает украшение из вещи в маленькую жемчужину Вашей истории — ту, с которой хочется оставаться рядом.</p>
        </div>
      </section>

      {/* CARE */}
      <section id="care" className="py-14 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="headings text-2xl sm:text-3xl mb-6 sm:mb-8">УХОД ЗА УКРАШЕНИЯМИ</h3>
          <div className={"care-content " + (careOpen ? "" : "care-collapsed")} ref={careRef} onClick={()=>setCareOpen(!careOpen)}>
            <div className="space-y-4">
              <p className="care-center">Все работы созданы вручную и проходят проверку перед отправкой. Если в течение 2 месяцев после покупки изделие изменится из-за дефекта материалов — напишите нам, мы поможем с ремонтом или заменой</p>
              <div>
                <p className="mb-2 text-left">Чтобы изделие радовало долгие годы:</p>
                <ul className="list-disc list-inside text-left space-y-1 care-list">
                  <li>Храните отдельно от других, в бархатном мешочке или коробочке</li>
                  <li>Очищайте мягкой тканью, избегайте абразивов и агрессивной химии</li>
                  <li>Снимайте перед водой, спортом или контактом с косметикой</li>
                  <li>Проверяйте крепления и застёжки регулярно</li>
                </ul>
              </div>
              <p className="care-center">Бережное обращение превращает украшение в маленькую жемчужину, сохраняющую тепло рук мастера и память своего Владельца</p>
            </div>
          </div>
        </div>
      </section>

      {/* SHIPPING */}
      <section id="shipping" className="bg-gray-50/40 py-14 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center leading-relaxed">
          <h3 className="headings text-2xl sm:text-3xl mb-6 sm:mb-8">ОПЛАТА И ДОСТАВКА</h3>
          <div className="space-y-4">
            <p>Все украшения можно заказать на Авито оформив Авито Доставку. Перед отправкой каждое изделие осматривается и упаковывается вручную.</p>
            <p>Оплата проходит через платформу. Это гарантирует безопасность сделки и сохранность изделия, созданного для Вас.</p>
            <p>После оформления заказа вы получите уведомление от Авито с возможностью отследить посылку.</p>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-16 px-4 text-center">
        <h3 className="headings text-2xl sm:text-3xl mb-6 sm:mb-8">КОНТАКТЫ</h3>
        <p className="mb-8 italic">Следите за обновлениями бренда:</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
          <a href="https://www.avito.ru/" target="_blank" rel="noopener noreferrer" className="ui-font text-white px-5 py-2.5 rounded-none inline-flex items-center gap-2 hover:-translate-y-[1px]" style={{background:"var(--btn)", boxShadow:"0 4px 12px rgba(0,0,0,.08)", transition:"background .3s ease, transform .3s ease, box-shadow .3s ease"}}><FaShoppingBag/> Avito</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="ui-font text-white px-5 py-2.5 rounded-none inline-flex items-center gap-2 hover:-translate-y-[1px]" style={{background:"var(--btn)", boxShadow:"0 4px 12px rgba(0,0,0,.08)", transition:"background .3s ease, transform .3s ease, box-shadow .3s ease"}}><FaInstagram/> Instagram</a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" className="ui-font text-white px-5 py-2.5 rounded-none inline-flex items-center gap-2 hover:-translate-y-[1px]" style={{background:"var(--btn)", boxShadow:"0 4px 12px rgba(0,0,0,.08)", transition:"background .3s ease, transform .3s ease, box-shadow .3s ease"}}><FaPinterestP/> Pinterest</a>
        </div>
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div onClick={()=>setSelectedImage(null)} className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 cursor-pointer">
          <motion.img src={selectedImage.img} alt={selectedImage.name} initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.3 }} className="max-w-3xl w-[90%] rounded-none shadow-lg"/>
        </div>
      )}

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm text-gray-600">
        <p className="headings text-base">АРТЕМИДА · 2025</p>
        <p className="mt-1">Все изделия созданы вручную</p>
        <p className="mt-1"><a href="#contacts" className="underline">Контакты</a> · Купить безопасно через Авито</p>
      </footer>
    </div>
  );
}
