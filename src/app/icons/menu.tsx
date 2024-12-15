import Link from "next/link";
import { SVGProps } from "react";

export function PrimeAlignJustify(props: SVGProps<SVGSVGElement>) {
    return (
        <Link href="/favorite">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                {...props}
            >
                <path
                    fill="currentColor"
                    d="M20 10.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5m0-4H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5m0 8H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5m0 4H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5"
                ></path>
            </svg>
        </Link>
    );
}