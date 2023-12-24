// No arquivo Voto.tsx
// import React from "react";
// import Candidato from "Candidato";
import Candidato from './Candidato';

type Candidato = {
  codigo: number;
  nome: string;
  partido: string;
  foto: string;
};

type Props = {
  candidato: Candidato | null;
  votoConfirmado: boolean;
};

const Voto: React.FC<Props> = ({ candidato, votoConfirmado }) => {
  return (
    <div className="voto">
      {votoConfirmado ? (
        // Se o voto foi confirmado, mostra uma mensagem de fim
        <span className="font-extrabold text-center text-6xl text-neutral-900 block">
          FIM
        </span>
      ) : (
        // Se não, mostra o candidato
        candidato && <Candidato {...candidato} />
      )}
    </div>
  );
};

export default Voto;
