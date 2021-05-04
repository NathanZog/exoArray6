// 1 !
let monTab =["crabe", "crevette", "homard", "cloporte"];
monTab.pop();
monTab.shift();
monTab.push("mégalodon");

monTab.unshift("ptéranondon");

monTab.splice(1,1,monTab[1].toUpperCase());
console.log(monTab);
console.log(monTab.reverse());

// 2 !!
let chiffres = [4, 5, 2, 1, 3];
chiffres.sort();
let chiffres2 = chiffres.join();
console.log(chiffres);
chiffres = chiffres2.split();

//3

let tab = [];
tab.push("elem1","elem2","elem3","elem4","elem5","elem6","elem7","elem8","elem9","elem10");
console.log(tab);
console.log(tab.indexOf("elem7"));
tab.splice(6,1);
console.log(tab);

let tabclasse = [];
tabclasse.push("Mouna","Ilias El", "Agim", "Kevin", "Antoine", "Seifidin", "Chris", "Haroune", "Elvis", "Nasila", "Van Hoa", "Jean", "Stan", "Ilias D", "Nathan", "Adil", "Ali", "Damien", "Yassine", "Lira");
console.log(tabclasse[Math.floor(Math.random() * tabclasse.length)]);
tabclasse.splice(tabclasse.indexOf("Nathan"),1)
console.log(tabclasse)