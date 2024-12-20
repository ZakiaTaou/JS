let books = ['book1', 'book2', 'book3 JavaScript', 'book4', 'book5'];
let summary = {
    totalBooks : 0,
    numberBooksAboutJS : 0
}
for (let i = 0; i < books.length; i++) {
    summary.totalBooks++;
    console.log(books[i]);
    if(books[i].includes("JavaScript")){
        summary.numberBooksAboutJS++;
        console.log(`"${books[i]}" is about JavaScript`);
    }
}
console.log(summary);