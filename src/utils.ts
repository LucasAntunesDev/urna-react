// No arquivo utils.ts
import Candidato from "./components/Candidato";

// Uma função para inserir um número no código
export const inserir = (
  numero: number,
  codigo: string,
  setCodigo: (codigo: string) => void
) => {
  // Se o código já tiver dois dígitos, não faz nada
  if (codigo.length === 2) return;
  // Se não, adiciona o número ao final do código
  setCodigo(codigo + numero);
};

// Uma função para corrigir o código
export const corrige = (
  setCodigo: (codigo: string) => void,
  setCandidato: (candidato: Candidato | null) => void
) => {
  // Limpa o código e o candidato
  setCodigo("");
  setCandidato(null);
};

// Uma função para votar no candidato
export const votar = (
  candidato: Candidato | null,
  setVotoConfirmado: (votoConfirmado: boolean) => void
) => {
  // Se o candidato existir, confirma o voto
  if (candidato) {
    setVotoConfirmado(true);
    // Mostra uma mensagem de sucesso
    alert("Voto confirmado!");
    // Recarrega a página depois de um segundo
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } else {
    // Se não, mostra uma mensagem de erro
    alert("Selecione um candidato antes de votar");
  }
};

// Uma função para votar em branco
export const votoBranco = (setVotoConfirmado: (votoConfirmado: boolean) => void) => {
  // Confirma o voto em branco
  setVotoConfirmado(true);
  // Mostra uma mensagem de sucesso
  alert("Voto em branco confirmado!");
  // Recarrega a página depois de um segundo
  setTimeout(() => {
    window.location.reload();
  }, 1000);
};
