const books = ['1984', 'Brave New World', 'Art of Programming']

let foundBook: string | undefined

for (let book of books) {
  if (book === '1983') {
    foundBook = book
    break
  }
}

foundBook?.length
