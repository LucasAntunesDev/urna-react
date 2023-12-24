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
        <span className="font-extrabold text-center text-6xl text-neutral-900 block">
          FIM
        </span>
      ) : (
        candidato && <Candidato {...candidato} />
      )}
    </div>
  );
};

export default Voto;
