const s=t=>t===""?"":t.split(" ").map(e=>e.includes("_")?e.split("_").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(" "):e.charAt(0).toUpperCase()+e.slice(1)).join(" "),i=t=>new Date(t).toLocaleString(),l=t=>{let e=new Date(t),n=e.getFullYear(),r=e.getMonth()+1,a=e.getDate();return`${n}-${r}-${a}`},o=t=>{const e=t.split(" ");return e.length>15?(e.length=15,e.push("..."),e.join(" ")):t};export{i as a,s as c,l as g,o as h};
