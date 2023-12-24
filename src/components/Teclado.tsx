type TecladoProps = {
 onInserir: (numero: number) => void;
 onCorrige: () => void;
 onVotar: () => void;
 onBranco: () => void;
};

const Teclado = ({ onInserir, onCorrige, onVotar, onBranco }: TecladoProps) => {
 const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

 return (
  <div className="flex flex-col justify-start items-center w-80 bg-neutral-700 h-96 border border-neutral-900">
   <div className="bg-zinc-50 w-full flex justify-around items-center h-20 mb-10">
    <img
     src="src/assets/tse-logo.svg"
     alt="Logo do Tribunal Superior Eleitoral"
     className="w-12"
    />
    <span className="font-extrabold uppercase w-min text-center">
     Justiça Eleitoral
    </span>
   </div>
   <div className="grid grid-cols-3 gap-4 w-56 justify-items-center  ">
    {numeros.map((numero) => (
     // Um botão para cada número que chama a função onInserir com o valor do número
     <button
      key={numero}
      onClick={() => onInserir(numero)}
      className="bg-neutral-900 hover:bg-neutral-950 focus:outline-neutral-500 focus:outline text-zinc-50 rounded-md w-fit py-1 border
       border-neutral-600 last:ml-[10rem] transition-normal"
     >
      {numero}
     </button>
    ))}
   </div>

   <div className="flex items-center gap-x-4 mt-4 *:uppercase *:p-1 *:font-bold">
    <button onClick={onBranco} className="bg-zinc-50 hover:bg-zinc-200 focus:outline-white focus:outline focus:bg-zinc-50 transition-normal">
     BRANCO
    </button>
    <button onClick={onCorrige} className="bg-orange-500 hover:bg-orange-600 focus:outline-orange-300 focus:outline focus:bg-orange-500 transition-normal">
     CORRIGE
    </button>
    <button onClick={onVotar} className="bg-green-500 hover:bg-green-600 focus:outline-green-300 focus:outline focus:bg-green-500 transition-normal">
     VOTAR
    </button>
   </div>
  </div>
 );
};

export default Teclado;
