import Candidato from "./components/Candidato";

export const inserir = (
  numero: number,
  codigo: string,
  setCodigo: (codigo: string) => void
) => {
  if (codigo.length === 2) return;
  setCodigo(codigo + numero);
};

export const corrige = (
  setCodigo: (codigo: string) => void,
  setCandidato: (candidato: Candidato | null) => void
) => {
  setCodigo("");
  setCandidato(null);
};

export const votar = (
  candidato: Candidato | null,
  setVotoConfirmado: (votoConfirmado: boolean) => void
) => {
  // Se o candidato existir, confirma o voto
  if (candidato) {
    setVotoConfirmado(true);
    alert("Voto confirmado!");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } else {
    alert("Selecione um candidato antes de votar");
  }
};

export const votoBranco = (setVotoConfirmado: (votoConfirmado: boolean) => void) => {
  setVotoConfirmado(true);
  alert("Voto em branco confirmado!");
  setTimeout(() => {
    window.location.reload();
  }, 1000);
};
