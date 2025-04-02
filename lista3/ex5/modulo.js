import fs from "fs";

let buffer = fs.readFileSync("test.data"); 
let text = fs.readFileSync("data.csv", "utf8"); 

fs.promises
  .readFile("ex05/linhas.csv", "utf8")
  .then(processFileText)
  .catch(handleReadError);


export async function processText(filename, encoding = "utf8") {
    let text = await fs.promises.readFile(filename, encoding);
    return text;
}


function processFileText(data) {
  console.log("Arquivo lido:", data);
}