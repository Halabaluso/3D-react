import Image from 'next/image'
import { HeaderComponent } from "../components/Header/Header"
import { ProductsComponent } from '@/components/Sections/Products'
import 'animate.css';
export default function Home() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <HeaderComponent/>
        <div className='p-5'>
          <ProductsComponent/>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <li className='btn mb-5 font-bold text-lg'><a>EURO-TLM</a></li>
          <li className='btn btn-primary'><a>Top ventas</a></li>
          <li><a>Palas</a></li>
          <li><a>Rastrillos</a></li>
          <li><a>Tornillos</a></li>
          <li><a>Tuercas</a></li>
          <li><a>Contrapesos</a></li>
          <li><a>Tractores</a></li>
        </ul>
      </div>
    </div>
  )
}
