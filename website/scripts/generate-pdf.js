const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();

    console.log("📄 Génération du PDF en cours...");
    const GITHUB_URL = 'https://Agile4Enterprise.github.io/guide';

    await page.goto(GITHUB_URL, { waitUntil: 'networkidle2' });


    await page.pdf({
        path: './static/Agile4Enterprise.pdf', 
        format: 'A4',
        printBackground: true
    });

    
    await browser.close();
    console.log("✅ PDF généré avec succès : guide-Agile4Enterprise.pdf");
})();
