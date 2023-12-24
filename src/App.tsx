// No arquivo Urna.tsx
import React, { useState, useEffect } from "react";
import Candidato from "./components/Candidato";
import Teclado from "./components/Teclado";
import Codigo from "./components/Codigo";
import Voto from "./components/Voto";
import { inserir, corrige, votar, votoBranco } from "./utils";

// O componente principal da urna eletrônica
type Candidato = {
  codigo: number;
  nome: string;
  partido: string;
  foto: string;
};

const Urna = () => {
  // Os dados dos candidatos
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

  // O estado para armazenar o código digitado pelo usuário
  const [codigo, setCodigo] = useState("");

  // O estado para armazenar o candidato selecionado pelo usuário
  const [candidato, setCandidato] = useState<Candidato | null>(null);

  // O estado para armazenar se o voto foi confirmado pelo usuário
  const [votoConfirmado, setVotoConfirmado] = useState(false);

  // Um efeito para atualizar o candidato de acordo com o código digitado
  useEffect(() => {
    // Se o código tiver dois dígitos, procura o candidato correspondente
    if (codigo.length === 2) {
      const candidatoEncontrado = candidatos.find(
        (c) => c.codigo === Number(codigo)
      );
      // Se encontrar o candidato, atualiza o estado
      if (candidatoEncontrado) {
        setCandidato(candidatoEncontrado);
      } else {
        // Se não encontrar o candidato, mostra uma mensagem de erro
        alert("Candidato não existe");
        // Limpa o código e o candidato
        setCodigo("");
        setCandidato(null);
      }
    } else {
      // Se o código não tiver dois dígitos, limpa o candidato
      setCandidato(null);
    }
  }, [codigo, candidatos]); // O efeito depende do código e dos candidatos

  return (
    <div className="flex bg-zinc-200 w-screen min-h-screen justify-evenly py-8 border items-center flex-wrap">
      <div className="bg-zinc-100 w-[38rem] h-96 outline outline-[1.5rem] outline-neutral-900 flex items-center">
      <div className="w-full">
     {votoConfirmado ? (
      // Se o voto foi confirmado, mostra uma mensagem de fim
      <span className="font-extrabold text-center text-6xl text-neutral-900 block">FIM</span>
     ) : (
      // Se não, mostra o código e o candidato
      <>
       
       {candidato && <Candidato {...candidato} />}
      </>
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
