

const wordSearch = (letters, word) => {
    if (letters.length === 0) return false; // edge case: empty array
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = letters[0].map((col, i) => letters.map(row => row[i]).join(''));
    for (const line of [...horizontalJoin, ...verticalJoin]) {
        if (line.includes(word)) return true;
    }
    return false;
};

module.exports = wordSearch;
