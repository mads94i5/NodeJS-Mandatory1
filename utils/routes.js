import { readPage, renderPage } from "./templateEngine.js";

const frontpage = readPage("./public/pages/home/home.html");
export const homePage = renderPage(frontpage, {
    tabTitle: "NodeJS Documentation | Home"
});

const admin = readPage("./public/pages/admin/admin.html");
export const adminPage = renderPage(admin, {
    tabTitle: "NodeJS Documentation | Admin"
});

const login = readPage("./public/pages/login/login.html");
export const loginPage = renderPage(login, {
    tabTitle: "NodeJS Documentation | Login"
});

const error = readPage("./public/pages/error/error.html");
export const errorPage = renderPage(error, {
    tabTitle: "NodeJS Documentation | Error"
});

const tableOfContentsHTML = readPage("./public/components/toc/toc.html");

const docs1 = readPage("./public/pages/documentation/doc1.html");
export const docs1Page = renderPage(docs1, {
    tabTitle: "NodeJS Documentation | Page 1",
    tableOfContents: tableOfContentsHTML
});

const docs2 = readPage("./public/pages/documentation/doc2.html");
export const docs2Page = renderPage(docs2, {
    tabTitle: "NodeJS Documentation | Page 2",
    tableOfContents: tableOfContentsHTML
});

const docs3 = readPage("./public/pages/documentation/doc3.html");
export const docs3Page = renderPage(docs3, {
    tabTitle: "NodeJS Documentation | Page 3",
    tableOfContents: tableOfContentsHTML
});

const docs4 = readPage("./public/pages/documentation/doc4.html");
export const docs4Page = renderPage(docs4, {
    tabTitle: "NodeJS Documentation | Page 4",
    tableOfContents: tableOfContentsHTML
});

const docs5 = readPage("./public/pages/documentation/doc5.html");
export const docs5Page = renderPage(docs5, {
    tabTitle: "NodeJS Documentation | Page 5",
    tableOfContents: tableOfContentsHTML
});

const docs6 = readPage("./public/pages/documentation/doc6.html");
export const docs6Page = renderPage(docs6, {
    tabTitle: "NodeJS Documentation | Page 6",
    tableOfContents: tableOfContentsHTML
});

const docs7 = readPage("./public/pages/documentation/doc7.html");
export const docs7Page = renderPage(docs7, {
    tabTitle: "NodeJS Documentation | Page 7",
    tableOfContents: tableOfContentsHTML
});

const docs8 = readPage("./public/pages/documentation/doc8.html");
export const docs8Page = renderPage(docs8, {
    tabTitle: "NodeJS Documentation | Page 8",
    tableOfContents: tableOfContentsHTML
});

const docs9 = readPage("./public/pages/documentation/doc9.html");
export const docs9Page = renderPage(docs9, {
    tabTitle: "NodeJS Documentation | Page 9",
    tableOfContents: tableOfContentsHTML
});

const docs10 = readPage("./public/pages/documentation/doc10.html");
export const docs10Page = renderPage(docs10, {
    tabTitle: "NodeJS Documentation | Page 10",
    tableOfContents: tableOfContentsHTML
});

const docs11 = readPage("./public/pages/documentation/doc11.html");
export const docs11Page = renderPage(docs11, {
    tabTitle: "NodeJS Documentation | Page 11",
    tableOfContents: tableOfContentsHTML
});

const docs12 = readPage("./public/pages/documentation/doc12.html");
export const docs12Page = renderPage(docs12, {
    tabTitle: "NodeJS Documentation | Page 12",
    tableOfContents: tableOfContentsHTML
});

const docs13 = readPage("./public/pages/documentation/doc13.html");
export const docs13Page = renderPage(docs13, {
    tabTitle: "NodeJS Documentation | Page 13",
    tableOfContents: tableOfContentsHTML
});

const docs14 = readPage("./public/pages/documentation/doc14.html");
export const docs14Page = renderPage(docs14, {
    tabTitle: "NodeJS Documentation | Page 14",
    tableOfContents: tableOfContentsHTML
});

const docs15 = readPage("./public/pages/documentation/doc15.html");
export const docs15Page = renderPage(docs15, {
    tabTitle: "NodeJS Documentation | Page 15",
    tableOfContents: tableOfContentsHTML
});

const docs16 = readPage("./public/pages/documentation/doc16.html");
export const docs16Page = renderPage(docs16, {
    tabTitle: "NodeJS Documentation | Page 16",
    tableOfContents: tableOfContentsHTML
});

const docs17 = readPage("./public/pages/documentation/doc17.html");
export const docs17Page = renderPage(docs17, {
    tabTitle: "NodeJS Documentation | Page 17",
    tableOfContents: tableOfContentsHTML
});

const docs18 = readPage("./public/pages/documentation/doc18.html");
export const docs18Page = renderPage(docs18, {
    tabTitle: "NodeJS Documentation | Page 18",
    tableOfContents: tableOfContentsHTML
});

const docs19 = readPage("./public/pages/documentation/doc19.html");
export const docs19Page = renderPage(docs19, {
    tabTitle: "NodeJS Documentation | Page 19",
    tableOfContents: tableOfContentsHTML
});

const docs20 = readPage("./public/pages/documentation/doc20.html");
export const docs20Page = renderPage(docs20, {
    tabTitle: "NodeJS Documentation | Page 20",
    tableOfContents: tableOfContentsHTML
});

const docs21 = readPage("./public/pages/documentation/doc21.html");
export const docs21Page = renderPage(docs21, {
    tabTitle: "NodeJS Documentation | Page 21",
    tableOfContents: tableOfContentsHTML
});

const docs22 = readPage("./public/pages/documentation/doc22.html");
export const docs22Page = renderPage(docs22, {
    tabTitle: "NodeJS Documentation | Page 22",
    tableOfContents: tableOfContentsHTML
});

const docs23 = readPage("./public/pages/documentation/doc23.html");
export const docs23Page = renderPage(docs23, {
    tabTitle: "NodeJS Documentation | Page 23",
    tableOfContents: tableOfContentsHTML
});

const docs24 = readPage("./public/pages/documentation/doc24.html");
export const docs24Page = renderPage(docs24, {
    tabTitle: "NodeJS Documentation | Page 24",
    tableOfContents: tableOfContentsHTML
});

const docs25 = readPage("./public/pages/documentation/doc25.html");
export const docs25Page = renderPage(docs25, {
    tabTitle: "NodeJS Documentation | Page 25",
    tableOfContents: tableOfContentsHTML
});