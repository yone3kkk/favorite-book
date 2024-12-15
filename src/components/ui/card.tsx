import { mockDataItems } from "@/mocks/product";
import { url } from "inspector";
import Image from "next/image";

export function Card(props) {
    return <a href={props.url} className="h-[300px]">
        <Image
            src={props.image}
            alt={mockDataItems[0].Item.itemName}
            width={128}
            height={128} />
        <h2 className="text-center text-sm mt-2 w-32 line-clamp-5">
            {props.name}
        </h2>
    </a>;
}
