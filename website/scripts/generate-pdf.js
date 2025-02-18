const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    console.log("📄 Génération du PDF en cours...");
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

    await page.pdf({
        path: '../guide-Agile4Enterprise.pdf',  // Stocke le PDF à la racine du projet
        format: 'A4',
        printBackground: true
    });

    await browser.close();
    console.log("✅ PDF généré avec succès : guide-Agile4Enterprise.pdf");
})();
