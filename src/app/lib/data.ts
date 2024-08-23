import { JSDOM } from 'jsdom';

type hatenaBlogData = {
    entryTitle: string,
    entryURL: string,
    entryUpdatedDate: string,
    category: string[],
    summary: string,
}



export async function fetchHatenaBlogData(): Promise<hatenaBlogData[]> {
    const hatenaBlogUserName = process.env.HATENA_BLOG_USER_NAME
    const hatenaBlogAPIKey = process.env.HATENA_BLOG_API_KEY
    const hatenaBlogBase64EncodedAuth = Buffer.from(`${hatenaBlogUserName}:${hatenaBlogAPIKey}`).toString("base64")

    const response = await fetch(
        "https://blog.hatena.ne.jp/contradiction29/contradiction29.hatenablog.com/atom/entry",
        {
            headers: {
                "Content-Type": "application/atom+xml",
                "Authorization": `Basic ${hatenaBlogBase64EncodedAuth}`
            }
        }
    );
    const xml = await response.text();
    const dom = new JSDOM(xml, { contentType: "application/xml" });
    const document = dom.window.document;

    const entries = document.getElementsByTagName("entry");
    const blogData: hatenaBlogData[] = Array.from(entries)
        .filter(entry => {
            const controlElement = entry.getElementsByTagName("app:control")[0];
            const draftElement = controlElement?.getElementsByTagName("app:draft")[0];
            return draftElement && draftElement.textContent === "no";
        })
        .map(entry => {
            return {
                entryTitle: entry.getElementsByTagName("title")[0]?.textContent || "",
                entryURL: Array.from(entry.getElementsByTagName("link"))
                    .find(link => link.getAttribute("rel") === "alternate")?.getAttribute("href") || "",
                entryUpdatedDate: entry.getElementsByTagName("updated")[0]?.textContent || "",
                category: Array.from(entry.getElementsByTagName("category"))
                    .map(cat => cat.getAttribute("term") || ""),
                summary: entry.getElementsByTagName("summary")[0]?.textContent || "",
            };
        });
    return blogData;
}