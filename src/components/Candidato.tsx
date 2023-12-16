type CandidatoProps = {
 codigo: number;
 nome: string;
 partido: string;
 foto: string;
};

const Candidato = ({ codigo, nome, partido, foto }: CandidatoProps) => {
 return (
  <div className="flex items-center justify-evenly">
   <div className="flex flex-col justify-center items-center">
    <span className="font-bold">Códgio:</span>
    <span className="border-2 border-neutral-900 px-2 py-1">{`${codigo}`}</span>
    <span className="font-bold">Nome:</span>
    <span className="border-2 border-neutral-900 px-2 py-1">{nome}</span>
    <span className="font-bold">Partido:</span>
    <span className="border-2 border-neutral-900 px-2 py-1">{partido}</span>
   </div>
   <img
    src={foto}
    alt={`Foto do candidato ${nome}`}
    className="border border-neutral-900 w-48"
   />
  </div>
 );
};

export default Candidato;
