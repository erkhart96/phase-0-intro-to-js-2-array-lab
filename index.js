const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (cat) {
    cats.push(cat);
}

function destructivelyPrependCat (cat) {
    cats.unshift(cat);
};

function destructivelyRemoveLastCat (cat) {
    cats.pop(cat);
};

function destructivelyRemoveFirstCat (cat) {
    cats.shift(cat);
};

function appendCat (name) {
    const name1 = [...cats, name]
    return name1    
}

function prependCat (name) {
    const name2 = [name, ...cats];
    return name2;
};

function removeLastCat (name) {
    const catRemoved = cats.slice(0, cats.length-1);
    return catRemoved;
};

function removeFirstCat (name) {
    const firstCatRemoved = cats.slice(1);
    return firstCatRemoved;
};