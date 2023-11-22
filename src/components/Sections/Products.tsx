"use client"

import Image from "next/image"
import ImageProduct from "../../img/product1.jpg"
import { RenderTractor } from "../../components/renders/render"
import { useState } from "react"

function ProductsComponent() {
    let i = 0
    let array = []
    let [ booleanShow, setBooleanShow ] = useState(false)
    let booleanShowFunction = () => {
        if(booleanShow === true){
            setBooleanShow(false)
        }else{
            setBooleanShow(true)
        }
    }
    for (i = 0; i <= 11; i++) {
        const div =
            <div className="flex flex-col gap-4">
                <div className="skeleton h-96 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        array.push(div)
    }
    return (
        <div>
            {booleanShow === true &&
                <div>
                    <div>
                        <button onClick={booleanShowFunction} className="btn-lg btn absolute z-50">Atrás</button>
                    </div>
                    <RenderTractor/>
                </div>
            }
            {booleanShow === false &&
                        <div onClick={booleanShowFunction} className="grid grid-cols-4 gap-10">
                            <div className="card bg-base-100 shadow-xl hover:translate-y-2 hover:scale-105 duration-300">
                                <figure>
                                    <Image src={ImageProduct} alt="Imagen producto" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Pala tractor TURBO
                                        <div className="badge badge-primary">Novedad</div>
                                    </h2>
                                    <p>Pala con diseño innovador que ayuda a la recolección y extracción de material.</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline">Tractores</div>
                                        <div className="badge badge-outline">Palas</div>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary">Ver 3D</button>
                                    </div>
                                </div>
                            </div>
                            {array}
                        </div>
            }
        </div>

    )
}

export {
    ProductsComponent
}