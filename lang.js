
const strings = {
  en:{services:"Services",gallery:"Gallery",contact:"Contact",heroTitle:"Reliable Remodeling in Miami",heroSubtitle:"Kitchens, Bathrooms, Floors, Painting, Repairs"},
  es:{services:"Servicios",gallery:"Galería",contact:"Contacto",heroTitle:"Remodelación confiable en Miami",heroSubtitle:"Cocinas, Baños, Pisos, Pintura, Reparaciones"},
  fr:{services:"Services",gallery:"Galerie",contact:"Contact",heroTitle:"Rénovation fiable à Miami",heroSubtitle:"Cuisines, Salles de bain, Sols, Peinture, Réparations"},
  pt:{services:"Serviços",gallery:"Galeria",contact:"Contato",heroTitle:"Reformas confiáveis em Miami",heroSubtitle:"Cozinhas, Banheiros, Pisos, Pintura, Reparos"},
  zh:{services:"服务",gallery:"画廊",contact:"联系",heroTitle:"迈阿密可靠的翻新",heroSubtitle:"厨房，浴室，地板，油漆，维修"}
};
function applyLang(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.getAttribute("data-i18n");
    if(strings[lang][key]) el.textContent=strings[lang][key];
  });
}
document.addEventListener("DOMContentLoaded",()=>{
  const sel=document.getElementById("langSelect");
  sel.addEventListener("change",()=>applyLang(sel.value));
  applyLang("en");
});
