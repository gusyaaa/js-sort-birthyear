function sortByBirth(){
    return data.sort((a, b) => a.year - b.year)
}

let data = [
    {name: "Kamal", year : 2009},
    {name: "Huseyn", year : 2005},
    {name: "Ali", year : 1945},
    {name: "Tural", year : 1987},
    {name: "Farhad", year : 2004}
]
console.log(sortByBirth(data.name, data.year));