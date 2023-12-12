import { Layout } from "../layout/Layout";
import { useQuiosco } from "../hooks/useQuiosco";
import { Product } from "../components/Product";


export default function Home() {
  const {currentCategory} = useQuiosco()
  return (
    <div>
      <Layout page={`Menú ${currentCategory.name}`}>
        <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
        <p className="text-2xl my-10">Elige el contenido de tu pedido</p>
        {currentCategory?.products?.map(product => (
          <Product key={product.id} product={product}/>
        ))}
      </Layout>
    </div>
  )
}
