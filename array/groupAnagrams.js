function groupAnagrams(strs) {
    const hash = new Map();

    strs.forEach((str) => {
        const key = [...str].sort().join();
        hash.set(key, [...(hash.get(key) || []), str])
    });

    return Array.from(hash.values());
};

const res = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.log(res);
