function szamol(muvelet, n1, n2){
    return muvelet(n1,n2);
}

function osszead(n1,n2){
    return n1+n2;
}

function kivonas(n1,n2){
    return n1-n2;
}

function szorzas(n1,n2){
    return n1*n2;
}

function osztas(n1,n2){
    if(n2 == 0){return}
    return n1/n2;
}

let result = szamol(osszead, 5, 3);
console.log('Az összeadás eredménye: 8, a számolt érték: ' + result);

result = szamol(kivonas, 8, 2);
console.log('A kivonás eredménye: 6, a számolt érték: ' + result);

result =  szamol(szorzas, 4, 6

);
console.log('A szorzás eredménye: 24, a számolt érték: ' + result);

result =  szamol(osztas, 9, 3);
console.log('Az osztás eredménye: 3, a számolt érték: ' + result);
