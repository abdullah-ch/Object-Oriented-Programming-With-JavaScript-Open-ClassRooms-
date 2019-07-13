const GreenBook = new Book("Green Book" , "Abdullah" , 56 , "Drama Mystery" , 4 ,true);
const BlueBook = new Book("Blue Book" , "Abdullah" , 56 , "Drama Mystery" , 4 ,true);
const PurpleBook = new Book("Purple Book" , "Abdullah" , 22 , "Drama Mystery" , 4 ,true);
const YellowBook = new Book("Yellow Book" , "Abdullah" , 99 , "Drama Mystery" , 4 ,true);
GreenBook.readBook(59);
BlueBook.readBook(55);
PurpleBook.readBook(22);
YellowBook.readBook(99);


BookList = [GreenBook , BlueBook,PurpleBook,YellowBook];

console.log(BookList);