import jsPDF from "jspdf";

document.getElementById("download").addEventListener("click", () => {
  const doc = new jsPDF();
  const lines = [
    "Potvrzení o studiu",
    "",
    `Jméno a příjmení: ${document.getElementById("name").textContent}`,
    `Škola: ${document.getElementById("school").textContent}`,
    `Fakulta: ${document.getElementById("faculty").textContent}`,
    `Studijní program: ${document.getElementById("program").textContent}`,
    `Den vystavení: ${document.getElementById("issued").textContent}`,
    `Stav studia k: ${document.getElementById("statusDate").textContent}`,
    `Stav: ${document.getElementById("status").textContent}`,
  ];
  let y = 10;
  lines.forEach(line => { doc.text(line, 10, y); y += 10; });
  doc.save("confirmation.pdf");
});
