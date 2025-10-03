(function(){
  const COMPANY = {
    name: "Nest House Construction Remodeling and Repair",
    owner: "Nestor",
    phone: "+1 (214) 303-7280",
    whatsapp: "+12143037280",
    email: "sevillanones37@gmail.com"
  };
  document.getElementById("brandName").textContent = COMPANY.name;
  document.getElementById("footName").textContent = COMPANY.name;
  document.getElementById("ownerName").textContent = COMPANY.owner;
  document.getElementById("phoneRow").textContent = "📞 " + COMPANY.phone;
  document.getElementById("phoneRow").href = "tel:" + COMPANY.phone.replace(/[^\d+]/g,"");
  document.getElementById("waRow").href = "https://wa.me/" + COMPANY.whatsapp.replace(/[^\d]/g,"");
  document.getElementById("whatsApp").href = "https://wa.me/" + COMPANY.whatsapp.replace(/[^\d]/g,"");
  document.getElementById("emailRow").textContent = "✉️ " + COMPANY.email;
  document.getElementById("emailRow").href = "mailto:" + COMPANY.email;
  document.getElementById("year").textContent = new Date().getFullYear();
})();