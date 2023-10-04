export function getDocsMaxPageNumber(routes) {
    let maxPageNum = 0;
    for (const key in routes) {
        if (key.startsWith("docs") && key.endsWith("Page")) {
            const pageNum = parseInt(key.substring(4, key.length - 4));
            if (!isNaN(pageNum) && pageNum > maxPageNum) {
                maxPageNum = pageNum;
            }
        }
    }
    return maxPageNum;
}