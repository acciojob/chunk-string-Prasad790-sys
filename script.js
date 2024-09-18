function stringChop(str, size) {
  let chunks = [];
  let i = 0;

  while (i < str.length) {
    let s = str.slice(i, i + size); // Use i + size to get the correct slice
    chunks.push(s);
    i += size;
  }

  return chunks;
}
// Do not change the code bel
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
