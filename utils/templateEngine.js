import fs from "fs";

export function readPage(filePath) {
    return fs.readFileSync(filePath).toString();
}

export function renderPage(page, config = {}) {
    const footerHTML = readPage("./public/components/footer/footer.html");
    const headerHTML = readPage("./public/components/header/header.html")
        .replace("$TAB_TITLE", config.tabTitle || "NodeJS Documentation")
        .replace("$CSS_LINKS", config.cssLinks || "");
    const pageHTML = page
        .replace("$TOC_ELEMENT", config.tableOfContents || "");
    return headerHTML + pageHTML + footerHTML;
}