type Props = {
  codigo: string;
  setCodigo: (codigo: string) => void;
};

const Codigo: React.FC<Props> = ({ codigo, setCodigo }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodigo(event.target.value);
  };

  return (
    <div className="codigo">
      <label htmlFor="codigo">Digite o código do candidato:</label>
      <input
        id="codigo"
        type="number"
        value={codigo}
        onChange={handleChange}
        placeholder="00"
      />
    </div>
  );
};

export default Codigo;
