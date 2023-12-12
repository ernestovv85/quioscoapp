import Image from "next/image"

export const Product = ({product}) => {
  const {name, price, image} = product
  return (
    <div className="border p-3">
      <Image src={`/assets/img/${image}.jpg`} alt={name} width={400} height={500}/>
      <div className="p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p></p>
      </div>
    </div>
  )
}