import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

export default function ExternalLink({ href, children} : { href: string, children: React.ReactNode }) {
    return (
        <Link href={href} target="_blank" className="flex items-center text-blue-500 hover:text-blue-700 underline underline-offset-4">
            {children}
            <BiLinkExternal className="ml-1" />
        </Link>
    )
}