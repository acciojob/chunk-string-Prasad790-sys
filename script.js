function stringChop(str, size) {
  let chunks=[];
   let i=0;
  while(i+size<str.length()){
	  let s=str.slice(i,size);
	  i+=size;
	  chunks.push(s);
  }
	let s=str.slice(i,str.length()+1);
	chuks.push(s)
	return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
