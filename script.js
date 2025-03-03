function stringChop(str, size) {
    // Handle null, empty string, or invalid size cases
    if (!str || size <= 0) return [];

    let result = [];
    
    for (let i = 0; i < str.length; i += size) {
        result.push(str.slice(i, i + size));
    }

    return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(JSON.stringify(stringChop(str, size)));
