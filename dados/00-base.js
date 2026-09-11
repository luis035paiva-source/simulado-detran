/* Banco de questões do Simulado DETRAN.
   Cadernos 19, 20 e 21 (Direção Defensiva): gabarito comentado do material
   "Direção Defensiva – Gabarito Comentado e Explicado".
   Cadernos 25 a 28 (Prova Geral): gabarito e comentários elaborados com base
   no CTB (Código de Trânsito Brasileiro) e no conteúdo programático do DETRAN.

   c = índice da alternativa correta (0=A, 1=B, 2=C, 3=D)
   nota = observação exibida junto da questão
   img  = chave de uma ilustração de dados/imagens.js (placa, semáforo etc.) */

const QUESTOES = [];

function Q(caderno, tema, e, alts, c, exp, mac, nota, img) {
  QUESTOES.push({ caderno, tema, e, alts, c, exp, mac, nota, img });
}
