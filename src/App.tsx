import React, { useState, useEffect } from "react";
import Candidato from "./components/Candidato";
import Teclado from "./components/Teclado";
import Codigo from "./components/Codigo";
import Voto from "./components/Voto";
import { inserir, corrige, votar, votoBranco } from "./utils";

type Candidato = {
 codigo: number;
 nome: string;
 partido: string;
 foto: string;
};

const Urna = () => {
 const candidatos: Candidato[] = [
  {
   codigo: 10,
   nome: "D'Alessandro",
   partido: "Libertadores",
   foto: "src/assets/Dale.png",
  },
  {
   codigo: 0o6,
   nome: "Fernandão",
   partido: "Mundial",
   foto: "src/assets/Fernandao.png",
  },
  {
   codigo: 79,
   nome: "Falcão",
   partido: "Brasileirão",
   foto: "src/assets/Falcao.png",
  },
 ];

 const [codigo, setCodigo] = useState("");

 const [candidato, setCandidato] = useState<Candidato | null>(null);

 const [votoConfirmado, setVotoConfirmado] = useState(false);

 useEffect(() => {
  if (codigo.length === 2) {
   const candidatoEncontrado = candidatos.find(
    (c) => c.codigo === Number(codigo)
   );

   if (candidatoEncontrado) {
    setCandidato(candidatoEncontrado);
   } else {
    alert("Candidato não existe");

    setCodigo("");
    setCandidato(null);
   }
  } else {
   setCandidato(null);
  }
 }, [codigo, candidatos]);

 return (
  <div className="flex bg-zinc-200 w-screen min-h-screen justify-evenly py-8 border items-center flex-wrap">
   <div className="bg-zinc-100 w-[38rem] h-96 outline outline-[1.5rem] outline-neutral-900 flex items-center">
    <div className="w-full">
     {votoConfirmado ? (
      <span className="font-extrabold text-center text-6xl text-neutral-900 block">
       FIM
      </span>
     ) : (
      <>{candidato && <Candidato {...candidato} />}</>
     )}
    </div>
   </div>
   <Teclado
    onInserir={(numero) => inserir(numero, codigo, setCodigo)}
    onCorrige={() => corrige(setCodigo, setCandidato)}
    onVotar={() => votar(candidato, setVotoConfirmado)}
    onBranco={() => votoBranco(setVotoConfirmado)}
   />
  </div>
 );
};

export default Urna;
