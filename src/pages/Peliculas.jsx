import { useState } from 'react';

export default function Peliculas() {
  const [active, setActive] = useState(null);

  const peliculas = [
    {
      titulo: 'AVATAR',
      resumen: 'En un exuberante planeta llamado Pandora viven los Navi, seres que aparentan ser primitivos pero que en realidad son muy evolucionados. Debido a que el ambiente de Pandora es venenoso, los híbridos humanos Navi, llamados Avatares, están relacionados con las mentes humanas, lo que les permite moverse libremente por Pandora. Jake Sully, un exinfante de marina paralítico se transforma a través de un Avatar, y se enamora de una mujer Navi.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6prPneiRd5TSyRwQzpcg8gbSOCcVef1RHUQ&s'
    },
    {
      titulo: 'TITANIC',
      resumen: 'Una joven de la alta sociedad abandona a su arrogante pretendiente por un artista humilde en el trasatlántico que se hundió durante su viaje inaugural.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqJPTUUxybY2fILEB6wzW_bZN8-OwY5FIvLA&s'
    },
    {
      titulo: 'EL RENACIDO',
      resumen: 'El trampero Hugh Glass intenta vengarse de sus compañeros, quienes lo abandonaron herido en el bosque después de que lo atacó un oso, pensando que moriría, víctima de las lesiones y de la crudeza del entorno y del invierno. Sin embargo, el rencor que siente es más fuerte que cualquier adversidad, y Glass no permitirá que nada ni nadie le prive de saciar su odio.',
      imagen: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/041B11E1713AE634B5D1920FB4193A839644C718F07B1DF8335D9ED328E876F4/scale?width=1200&aspectRatio=1.78&format=webp'
    },
    {
      titulo: 'MATILDA',
      resumen: 'Una niña desarrolla una capacidad mental extraordinaria, a pesar de sus padres descuidados y de una directora abusiva.',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8KtrFUAL5Fj9VTiqOm7Cd8E2p9-UUHSEdQQ&s'
    },
    {
      titulo: 'SHREK',
      resumen: 'Un ogro llamado Shrek vive en su pantano, pero su preciada soledad se ve súbitamente interrumpida por la invasión de los ruidosos personajes de los cuentos de hadas. Todos fueron expulsados de sus reinos por el malvado Lord Farquaad. Decidido a salvar su hogar, Shrek hace un trato con Farquaad y se prepara para rescatar a la princesa Fiona, quien será la esposa de Farquaad.',
      imagen: 'https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/d8702a49-eced-457f-87b5-afe881ee72a0/80369d5a-5f5b-11ef-96ad-02805d6a02df?host=wbd-images.prod-vod.h264.io&partner=beamcom'
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Películas</h1>

      {peliculas.map((p, idx) => (
        <div key={idx} className="mb-6">
          {/* Botón para abrir el modal */}
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => setActive(idx)}
          >
            {p.titulo}
          </button>

          {/* Modal con imagen, título y resumen */}
          {active === idx && (
            <div className="mt-2 p-4 border bg-gray-100 rounded shadow-lg flex flex-col md:flex-row gap-4 items-center">
            {/* Imagen a la izquierda */}
            <img
            src={p.imagen}
            alt={p.titulo}
            className="w-full md:w-1/2 rounded h-70 w-10"
            />

            {/* Contenido a la derecha */}
            <div className="w-full md:w-1/2">
            <strong className="block text-xl mb-2">{p.titulo}</strong>
            <p className="mb-2">{p.resumen}</p>
            <button
                className="text-red-600 underline"
                onClick={() => setActive(null)}
            >
                Cerrar
            </button>
            </div>
        </div>
          )}
        </div>
      ))}
    </div>
  );
}

