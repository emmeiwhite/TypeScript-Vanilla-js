const books = ['1984', 'Brave New World', 'Art of Programming']

let foundBook: string | undefined

for (let book of books) {
  if (book === '1983') {
    foundBook = book
    break
  }
}

foundBook?.length

// Challenge: Union Type and Literal type

let discount: number | string = '20%'
discount = 20
// discount = false

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing'
orderStatus = 'delivered'
// orderStatus = 'reached'
