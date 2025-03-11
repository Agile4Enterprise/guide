import fs from 'fs';
import path from 'path';
import { mdToPdf } from 'md-to-pdf';
import { fileURLToPath } from 'url';

// Gestion du chemin en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 📂 Dossier contenant les fichiers Markdown
const docsDir = path.join(__dirname, '../docs');
const outputPdf = path.join(__dirname, '../static/Agile4Enterprise-Guide.pdf');

// 📝 Récupérer tous les fichiers Markdown
const markdownFiles = fs.readdirSync(docsDir).filter(file => file.endsWith('.md'));

// 📝 Concaténer tous les fichiers Markdown en un seul
let combinedMarkdown = '';

markdownFiles.forEach(file => {
    const filePath = path.join(docsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    combinedMarkdown += `\n\n# ${file.replace('.md', '')}\n\n${content}`;
});

// 📄 Générer le PDF
(async () => {
    console.log("📄 Génération du PDF...");
    await mdToPdf({ content: combinedMarkdown }).then(pdf => {
        fs.writeFileSync(outputPdf, pdf.content);
        console.log(`✅ PDF généré avec succès : ${outputPdf}`);
    }).catch(err => console.error("❌ Erreur lors de la génération du PDF :", err));
})();
