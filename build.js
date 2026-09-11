/* Gera o index.html (arquivo único, pronto para abrir com duplo clique)
   a partir de src/template.html + dados/*.js
   Uso:  node build.js                                                  */

const fs = require("fs");
const path = require("path");

const ARQUIVOS = ["00-base", "imagens", "19", "20", "21", "25", "26", "27", "28"];

const dados = ARQUIVOS
  .map(f => fs.readFileSync(path.join(__dirname, "dados", f + ".js"), "utf8"))
  .join("\n\n");

const html = fs.readFileSync(path.join(__dirname, "src", "template.html"), "utf8")
  .replace("<!--DADOS-->", "<script>\n" + dados + "\n</script>");

fs.writeFileSync(path.join(__dirname, "index.html"), html, "utf8");

// confere se todas as questões estão íntegras
const lista = eval(dados + "\nQUESTOES;");
const ruins = lista.filter(q =>
  !q.e || !Array.isArray(q.alts) || q.alts.length !== 4 ||
  q.c < 0 || q.c > 3 || !q.exp || !q.mac);

console.log("index.html gerado com " + lista.length + " questões.");
if (ruins.length) console.log("ATENÇÃO: " + ruins.length + " questão(ões) com problema.");
