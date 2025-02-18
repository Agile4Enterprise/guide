const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer'); // Doit être après les autres imports


(async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();

    console.log("📄 Génération du PDF en cours...");
    const GITHUB_URL = 'https://Agile4Enterprise.github.io/guide';

    await page.goto(GITHUB_URL, { waitUntil: 'networkidle2' });


    const puppeteer = require('puppeteer');

    (async () => {
        try {
            const browser = await puppeteer.launch({
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            });
    
            const page = await browser.newPage();
            console.log("📄 Génération du PDF en cours...");
    
            await page.goto('http://localhost:3000/guide', { waitUntil: 'networkidle2' });
    
            const pdfPath = './static/Agile4Enterprise.pdf';
            await page.pdf({
                path: pdfPath,
                format: 'A4',
                printBackground: true
            });
    
            await browser.close();
            console.log(`✅ PDF généré avec succès : ${pdfPath}`);
    
        } catch (error) {
            console.error("❌ Erreur lors de la génération du PDF :", error);
            process.exit(1);
        }
    })();
    

    
    await browser.close();
    console.log("✅ PDF généré avec succès : guide-Agile4Enterprise.pdf");
})();
