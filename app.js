
const $ = (s)=>document.querySelector(s);
const $$ = (s)=>document.querySelectorAll(s);

const i18n = {
  EN: {
    nav_services: "Services",
    nav_gallery: "Gallery",
    nav_contact: "Contact",
    hero_title: "Reliable Remodeling in Miami",
    hero_sub: "Kitchens · Bathrooms · Floors · Painting · Repairs",
    cta_whatsapp: "WhatsApp",
    services_title: "What we do",
    contact_title: "Contact",
    contact_sub: "Fast quotes and on-time work",
    phone_label: "Phone/WhatsApp",
    email_label: "Email",
    gallery_btn: "Imagen",
    gallery_title: "Project Photos"
  },
  ES: {
    nav_services: "Servicios",
    nav_gallery: "Galería",
    nav_contact: "Contacto",
    hero_title: "Remodelación confiable en Miami",
    hero_sub: "Cocinas · Baños · Pisos · Pintura · Reparaciones",
    cta_whatsapp: "WhatsApp",
    services_title: "Qué hacemos",
    contact_title: "Contacto",
    contact_sub: "Cotizaciones rápidas y trabajo puntual",
    phone_label: "Teléfono/WhatsApp",
    email_label: "Correo",
    gallery_btn: "Imagen",
    gallery_title: "Fotos de Proyectos"
  },
  FR: {
    nav_services: "Services",
    nav_gallery: "Galerie",
    nav_contact: "Contact",
    hero_title: "Rénovation fiable à Miami",
    hero_sub: "Cuisines · Salles de bain · Sols · Peinture · Réparations",
    cta_whatsapp: "WhatsApp",
    services_title: "Ce que nous faisons",
    contact_title: "Contact",
    contact_sub: "Devis rapides et ponctualité",
    phone_label: "Téléphone/WhatsApp",
    email_label: "Email",
    gallery_btn: "Image",
    gallery_title: "Photos de Projets"
  },
  PT: {
    nav_services: "Serviços",
    nav_gallery: "Galeria",
    nav_contact: "Contato",
    hero_title: "Reforma confiável em Miami",
    hero_sub: "Cozinhas · Banheiros · Pisos · Pintura · Reparos",
    cta_whatsapp: "WhatsApp",
    services_title: "O que fazemos",
    contact_title: "Contato",
    contact_sub: "Orçamentos rápidos e pontuais",
    phone_label: "Telefone/WhatsApp",
    email_label: "Email",
    gallery_btn: "Imagem",
    gallery_title: "Fotos de Projetos"
  },
  ZH: {
    nav_services: "服务",
    nav_gallery: "画廊",
    nav_contact: "联系",
    hero_title: "迈阿密值得信赖的装修",
    hero_sub: "厨房 · 卫浴 · 地板 · 油漆 · 维修",
    cta_whatsapp: "WhatsApp",
    services_title: "我们的服务",
    contact_title: "联系",
    contact_sub: "快速报价 · 准时完工",
    phone_label: "电话/WhatsApp",
    email_label: "邮箱",
    gallery_btn: "图片",
    gallery_title: "项目照片"
  }
};

const phone = "+12143037280";
const email = "sevillanones37@gmail.com";

function setLang(lc) {
  const t = i18n[lc] || i18n.EN;
  document.documentElement.lang = lc.toLowerCase();
  $("#nav-services").textContent = t.nav_services;
  $("#nav-gallery").textContent = t.nav_gallery;
  $("#nav-contact").textContent = t.nav_contact;
  $("#hero-title").textContent = t.hero_title;
  $("#hero-sub").textContent = t.hero_sub;
  $("#cta-wa").textContent = t.cta_whatsapp;
  $("#services-title").textContent = t.services_title;
  $("#contact-title").textContent = t.contact_title;
  $("#contact-sub").textContent = t.contact_sub;
  $("#label-phone").textContent = t.phone_label + ":";
  $("#label-email").textContent = t.email_label + ":";
  $("#gallery-open").textContent = t.gallery_btn;
  $("#gallery-title").textContent = t.gallery_title;
  localStorage.setItem("lang", lc);
}

window.addEventListener("DOMContentLoaded", ()=>{
  const saved = localStorage.getItem("lang") || "EN";
  $("#lang").value = saved;
  setLang(saved);
  $("#cta-wa").href = "https://wa.me/12143037280?text=Hello%20Nest%20House%20Construction!";
  $("#phone-link").textContent = "(214) 303-7280";
  $("#phone-link").href = "tel:" + phone;
  $("#email-link").textContent = email;
  $("#email-link").href = "mailto:" + email;

  // Gallery modal handlers
  $("#gallery-open").addEventListener("click", ()=> $("#galleryModal").style.display="flex");
  $("#gallery-close").addEventListener("click", ()=> $("#galleryModal").style.display="none");
  $("#galleryModal").addEventListener("click", (e)=>{ if(e.target.id==='galleryModal') e.target.style.display='none'; });
});

$("#lang")?.addEventListener("change", (e)=> setLang(e.target.value));
