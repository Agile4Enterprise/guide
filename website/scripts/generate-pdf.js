const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer'); // Import unique

(async () => {
    try {
        console.log("📄 Démarrage de Puppeteer...");
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();
        const URL = 'https://Agile4Enterprise.github.io/guide'; // URL du site

        console.log(`🔗 Accès à la page : ${URL}`);
        await page.goto(URL, { waitUntil: 'networkidle2' });

        const pdfDir = path.resolve(__dirname, '../../website/static/'); // Correction du chemin
        const pdfPath = path.join(pdfDir, 'Agile4Enterprise.pdf');


        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true
        });

        await browser.close();
        console.log("✅ PDF généré avec succès !");

        console.log("📂 Vérification des fichiers après la génération du PDF...");
        console.log(require('fs').readdirSync(__dirname));

        
        // Vérification si le fichier existe
        if (fs.existsSync(pdfPath)) {
            console.log("📁 Fichier PDF trouvé après génération !");
        } else {
            console.error("❌ Erreur : le fichier PDF n’a pas été trouvé après génération.");
            process.exit(1);
        }

    } catch (error) {
        console.error("🚨 Erreur lors de la génération du PDF :", error);
        process.exit(1);
    }
})();
