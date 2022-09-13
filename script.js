function generateRandomArray(length, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * max));
    }
    return arr;
}

function mergeSort(arr) {
    const len = arr.length;
    if (len == 1) { return arr; }
    const center = Math.round(len / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
    let out = [];
    while (true) {
        if (arr1.length == 0) { out.push(...arr2); break; }
        else if (arr2.length == 0) { out.push(...arr1); break; }
        const min = Math.min(arr1[0], arr2[0]);
        out.push(min);
        if (arr1.includes(min)) { arr1.shift(); }
        else { arr2.shift(); }
    }
    return out;
}

const length = 10;
const max_value = 10;
const array = generateRandomArray(length, max_value);
console.log("Random array to be sorted:");
console.log(array);
console.log("Array sorted via Marge Sort");
console.log(mergeSort(array));


