"use client"

import { useEffect } from "react"
import { Avatar, Exhibit, EnvironmentModel } from '@readyplayerme/visage';
import Image from "next/image"
import Vendor from "../../img/vendor.png"
function RenderTractor() {
    /* Importas el elemento */
    const modelSrc = 'https://firebasestorage.googleapis.com/v0/b/watsapp-659b6.appspot.com/o/rastrillo.glb?alt=media&token=6779ebc3-f90f-4bd3-a0c1-40cd0e801d29';
    return (
        <div className='flex flex-row justify-between min-h-screen'>
            <div className='flex-1 min-h-screen'>
                <Exhibit
                    environment="hub"
                    fit
                    float
                    modelSrc={modelSrc}
                    onLoaded={function noRefCheck() { }}
                    onLoading={function noRefCheck() { }}
                    scale={3}
                    shadows
                    snap
                    style={{
                        background: '#fff'
                    }}
                //lockVertical = {true}

                />
            </div>
            <div className='flex-1'>
                <div className="chat chat-start animate__animated animate__fadeInLeft">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image alt="Tailwind CSS chat bubble component" src={Vendor} />
                        </div>
                    </div>
                    <div className="chat-bubble">
                        <p className='font-bold mb-2 text-lg text-white'>Material resistente</p>
                        La pala para tractores está fabricada con un acero de alta resistencia que garantiza durabilidad y robustez. Su construcción sólida permite enfrentar sin esfuerzo las tareas más exigentes en el campo.
                    </div>
                </div>
                <div className="chat chat-start animate__animated animate__fadeInLeft animate__delay-1s">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image alt="Tailwind CSS chat bubble component" src={Vendor} />
                        </div>
                    </div>
                    <div className="chat-bubble">
                        <p className='font-bold mb-2 text-lg text-white'>Diseño ergonómico</p>
                        Con un diseño ergonómico, esta pala asegura una experiencia cómoda para el operador durante largas jornadas de trabajo. Los controles son intuitivos, y el asiento ajustable permite adaptarse a diferentes usuarios.
                    </div>
                </div>
                <div className="chat chat-start animate__animated animate__fadeInLeft animate__delay-2s">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image alt="Tailwind CSS chat bubble component" src={Vendor} />
                        </div>
                    </div>
                    <div className="chat-bubble">
                        <p className='font-bold mb-2 text-lg text-white'>Sistema de elevación eficiente</p>
                        Equipada con un sistema de elevación hidráulico de última generación, esta pala ofrece una capacidad de elevación excepcional. Puede levantar y transportar grandes cantidades de tierra, escombros o cualquier carga con facilidad y precisión.</div>
                </div>
                <div className="chat chat-start animate__animated animate__fadeInLeft animate__delay-3s">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <Image alt="Tailwind CSS chat bubble component" src={Vendor} />
                        </div>
                    </div>

                    <div className="chat-bubble">
                        <p className='font-bold mb-2 text-lg text-white'>Versatilidad de uso</p>
                        La versatilidad es clave en la agricultura moderna, y esta pala para tractores cumple con creces. Desde la nivelación del terreno hasta la carga de materiales, su diseño versátil la convierte en una herramienta indispensable para diversas tareas agrícolas.</div>
                </div>
            </div>


        </div>
    )
}

export {
    RenderTractor
}