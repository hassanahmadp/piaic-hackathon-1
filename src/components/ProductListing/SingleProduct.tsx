import Image from "next/image"
import Link from "next/link"

export function SingleProduct(props: Product) {
  return (
    <Link href={`/${props.targetAudiance}/${props.id}`} className="flex flex-col">
      <Image
        className="w-full rounded-2xl"
        src={props.images[0]}
        alt="product"
        width={3000}
        height={3000}
      />
      <h2 className="line-clamp-1 pt-2 font-semibold text-lg" title={props.name}>
        {props.name}
      </h2>
      <h3 className=" ">{props.type}</h3>
      <h1 className="font-semibold text-xl">${props.price}</h1>
    </Link>
  )
}
