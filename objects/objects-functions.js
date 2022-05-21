let myBook = {
    title: "1984",
    author: "George",
    pageCount: 300
}

let otherBook = {
    title: "Fire in the train",
    author: "Henry",
    pageCount: 700
}

let getSummary = function(book)
{
    return{
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary =  getSummary(myBook)
let otherbookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)