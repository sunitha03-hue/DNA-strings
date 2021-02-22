let dna = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//a) Replace the gene "GCT" with "AGG", and then print the altered strand.
dna= dna.replace("GCT", "AGG")
console.log(dna);


//b) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".
if(dna.indexOf("CAT"))
{console.log("CAT gene found");}
else{console.log("CAT gene NOT found");}
//c) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.

dna1=dna.slice(16, 19);
console.log(dna1);
//d) Use a template literal to print, "The DNA strand is ___ characters long."
dna2=dna.length;
console.log(`The DNA strand is, ${dna2} characters long.`);

//e) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
dna3="TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT".replace("TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT", "taco cat");
console.log(`To print, ${dna3}`);