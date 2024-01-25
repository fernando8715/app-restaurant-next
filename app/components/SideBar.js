import Image from 'next/image';
import Categoria from './Categoria';
import { getData } from '../helpers/getData';

const SideBar = async () => {

  const { props } = await getData();
  const { categorias } = props;

  return (
    <div>
      <div className='flex justify-center mt-8 mb-8'>
        <Image
          src="./assets/img/logo.svg"
          alt="Imagen logotipo de coffee shop"
          width={180}
          height={100}
        />
      </div>
      {categorias.map(categoria => (
        <Categoria
          key={categoria.id}
          categoria={categoria} />
      ))}
    </div>
  )
}

export default SideBar