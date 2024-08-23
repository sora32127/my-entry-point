import { fetchHatenaBlogData } from "../lib/data"
import ExternalLink from "./ExternalLink";
import Tag from "./Tag";
import JSTDateTime from "./JSTDateTime";
import { H2 } from "./Headings";

export default async function HatenaBlog() {
    const data = await fetchHatenaBlogData()
    return (
        <div className="hatenablog-container">
            <H2>Recent Hatena Blog Posts</H2>
            <div className="hatenablog-entries">
                {data.map((entry) => (
                    <div key={entry.entryTitle} className="my-8">
                        <div className="hatenablog-entry-title">
                            <ExternalLink href={entry.entryURL}>
                                {entry.entryTitle}
                            </ExternalLink>
                        </div>
                        <JSTDateTime date={entry.entryUpdatedDate} />
                        <div className="hatenablog-entry-tags my-2">
                            {entry.category.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                        </div>
                    </div>
                ))}
                <ExternalLink href="https://contradiction29.hatenablog.com/">
                  <p>Read More...</p>
                </ExternalLink>
            </div>
        </div>
    )
}