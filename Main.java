import java.util.Scanner;
//Driving class
public class Main {
    public static void main(String[] args) {
        Library library = new Library();
        Scanner scanner = new Scanner(System.in);
        int sentinelValue = 0;

        while (sentinelValue!=-1) {

            System.out.print("""
                    Menu
                    1. Add book
                    2. Show available books
                    3. Book borrowed
                    4. Book returned
                    5. Show overdue books
                    6 .Exit
                    Enter your option :\040""");


            switch (scanner.nextInt()) {
                case 1 -> library.addBook();
                case 2 -> library.showBooks();
                case 3 -> {
                    System.out.print("Search for book(\"Name\" \"Author\" \" Subject\") :");
                    library.bookBorrowed(new Scanner(System.in).nextLine());
                }
                case 4 -> library.bookReturned();
                case 5-> library.showOverdueBooks();
                case 6 -> sentinelValue= -1;
                default -> System.out.println("Invalid Input");
            }

        }
    }
}
