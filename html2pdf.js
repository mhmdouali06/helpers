$(document).ready(function () {
  $("#impress").click(function () {
    var element = document.getElementById("canvas_div_pdf");
    html2pdf(element, {
      margin: 5,
      filename: "file_" + Date.now() + ".pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        logging: true,
        dpi: 192,
        letterRendering: true,
      },
      jsPDF: { unit: "mm", format: "legal", orientation: "portrait" },
    }).then(function (pdf) {
      // Use jsPDF's print method to open the PDF in a new window for printing
      pdf.print();
    });
  });
});
