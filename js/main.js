// Update this number before publishing. Use country code + number, digits only (no + or spaces).
const WHATSAPP_NUMBER = "91XXXXXXXXXX";
document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
const form = document.querySelector("#order-form");
if (form) form.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Please add your WhatsApp number in js/main.js before using order enquiries.");
    return;
  }
  const data = new FormData(form);
  const message = [
    "Hello Avani's Home Bakes! I'd like to enquire about an order.",
    `Name: ${data.get("name")}`,
    `Treat: ${data.get("treat")}`,
    `Needed by: ${data.get("date") || "Flexible"}`,
    `Details: ${data.get("details") || "Please share options."}`
  ].join("\n");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});