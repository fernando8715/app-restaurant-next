import Image from 'next/image';
import Categoria from './Categoria';
import { getDataCategorias } from '../helpers/getData';

const SideBar = async () => {

  const { props } = await getDataCategorias();
  const { categorias } = props;

  return (
    <div>
      <div className='flex justify-center mt-7 mb-8'>
        <Image
          src="/assets/img/logo.svg"
          alt="Imagen logotipo de coffee shop"
          width={150}
          height={100}
        />
      </div>
      {categorias?.map(categoria => (
        <Categoria
          key={categoria.id}
          categoria={categoria} />
      ))}
    </div>
  )
}

export default SideBar