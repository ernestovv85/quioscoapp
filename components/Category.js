import Image from 'next/image'
import { useQuiosco } from '../hooks/useQuiosco'

export const Category = ({ category }) => {
  const {currentCategory, handleCategory} = useQuiosco()
  const { name, icon, id } = category
  return (
    <div className={`${currentCategory?.id === id ? 'bg-amber-400' : ''} flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}>
      <Image
        width={50}
        height={50}
        src={`/assets/img/icono_${icon}.svg`}
        alt={name}
      />
      <button type='button' className='text-2xl font-bold hover:cursor-pointer' onClick={() => handleCategory(id)}>
        {name}
      </button>
    </div>
  )
}
