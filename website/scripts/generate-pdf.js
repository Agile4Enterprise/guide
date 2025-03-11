import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

// 📂 Définition du chemin où enregistrer le PDF
const outputPdf = path.join(process.cwd(), 'static/Agile4Enterprise-Guide.pdf');

// 📄 Liste des pages à capturer sous `/docs`
const pagesToCapture = [
    'https://Agile4Enterprise.github.io/guide/docs/index',
    'https://Agile4Enterprise.github.io/guide/docs/introduction/entrepriseagile/index'
];

// 📜 Fonction pour générer le PDF
(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    let combinedContent = '';

    for (const url of pagesToCapture) {
        console.log(`📄 Capture de ${url}...`);
        await page.goto(url, { waitUntil: 'networkidle2' });

        // Récupère le contenu HTML de chaque page et l'ajoute
        const content = await page.content();
        combinedContent += content + '\n\n';
    }

    // Génère un seul PDF avec tout le contenu combiné
    await page.setContent(combinedContent);
    await page.pdf({ path: outputPdf, format: 'A4', printBackground: true });

    await browser.close();
    console.log(`✅ PDF généré avec succès : ${outputPdf}`);
})();
