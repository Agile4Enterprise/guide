import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import PDFMerger from 'pdf-merger-js';

// Définition de __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    try {
        console.log("📄 Démarrage de Puppeteer...");
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();
        const baseURL = 'https://Agile4Enterprise.github.io/guide';
        const docsURL = `${baseURL}/docs`;

        console.log(`🔗 Accès à la documentation : ${docsURL}`);
        await page.goto(docsURL, { waitUntil: 'networkidle2' });

        // 📌 Récupération des liens du menu latéral (sidebar)
        const orderedPages = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.menu__link')) // Vérifier ce sélecteur
                .map(a => a.href)
                .filter(href => href.includes('/docs/'));
        });

        console.log(`📄 ${orderedPages.length} pages trouvées sous /docs`);
        console.log("🔍 Ordre des pages :", orderedPages);

        // 📂 Création d'un répertoire temporaire pour stocker les PDFs
        const pdfDir = path.join(__dirname, '../static/pdfs');
        if (!fs.existsSync(pdfDir)) {
            fs.mkdirSync(pdfDir, { recursive: true });
            console.log(`📁 Création du dossier temporaire : ${pdfDir}`);
        }

        const pdfPaths = [];

        // 📜 Générer un PDF pour chaque page trouvée dans l’ordre de la sidebar
        for (let i = 0; i < orderedPages.length; i++) {
            const url = orderedPages[i];
            const filename = `page_${i + 1}.pdf`;
            const pdfPath = path.join(pdfDir, filename);

            console.log(`📄 Génération du PDF pour ${url}...`);
            await page.goto(url, { waitUntil: 'networkidle2' });

            await page.pdf({
                path: pdfPath,
                format: 'A4',
                printBackground: true
            });

            pdfPaths.push(pdfPath);
        }

        await browser.close();
        console.log("✅ Tous les fichiers PDF individuels sont générés !");

        // 📂 Fusionner tous les PDFs en un seul
        console.log("📂 Fusion des fichiers PDF...");
        const merger = new PDFMerger();
        for (const pdf of pdfPaths) {
            merger.add(pdf);
        }

        const finalPdfPath = path.join(__dirname, '../static/Agile4Enterprise.pdf');
        await merger.save(finalPdfPath);

        console.log(`✅ PDF final généré : ${finalPdfPath}`);

    } catch (error) {
        console.error("🚨 Erreur lors de la génération du PDF :", error);
    }
})();
