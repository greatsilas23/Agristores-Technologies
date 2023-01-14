
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Scanner;

//Module -> Used to interact with the database
public class Library {
    private Connection connection;


    public Library() {
        //Create a database or check if it exists on initialization of the class if not hte Db Connect Class creates a new One
        this.connection = DbConnection.connect();
    }

    public void bookBorrowed(String searchStr) {
        List<Book> bookList = new ArrayList<>();
        ResultSet resultSet = null;
        PreparedStatement preparedStatement = null;
        String SQLSearchQuery = "SELECT * FROM BOOKS WHERE NAME LIKE '%" + searchStr + "%' OR SUBJECT LIKE '%" + searchStr + "%' OR AUTHOR LIKE '%" + searchStr + "%'";
        try {
            preparedStatement = connection.prepareStatement(SQLSearchQuery);
            resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                bookList.add(new Book(
                        resultSet.getInt("ISBN"),
                        resultSet.getString("NAME"),
                        resultSet.getString("AUTHOR"),
                        resultSet.getString("SUBJECT")));

            }

        } catch (SQLException exception) {
            System.out.println(exception.toString());

        } finally {
            try {
                preparedStatement.close();
                resultSet.close();

            } catch (SQLException e) {
                System.out.println(e.toString());
            }
        }
        String booksAvailable = "";
        for (Book book : bookList) {
            booksAvailable += book.toString();
        }
        System.out.println(booksAvailable);

        System.out.print("Enter book you want : ");
        int option = new Scanner(System.in).nextInt();

        Book required = bookList.get(option - 1);
        System.out.println(required);
        //update database
        String SqlUpdate = "UPDATE BOOKS SET IS_BORROWED = ?,DUE_DATE = ? WHERE ISBN ="+required.getISBN();

        try {
            preparedStatement = connection.prepareStatement(SqlUpdate);
            final long TWO_WEEKS_IN_MS = 1209600000;
            long dueDate = System.currentTimeMillis()+TWO_WEEKS_IN_MS;
            preparedStatement.setString(1,"1");
            preparedStatement.setString(2,new SimpleDateFormat("dd/MM/yyyy")
                    .format(new Date(dueDate)));
            preparedStatement.execute();

        }catch (SQLException exception){
            System.out.println(exception.toString());
        }



    }

    public void bookReturned() {
        System.out.print("Enter ISBN : ");
        String bookInfo = new Scanner(System.in).nextLine();
        String SQLSearchQuery = "SELECT * FROM BOOKS WHERE NAME LIKE '%" + bookInfo + "%' OR AUTHOR LIKE '%" + bookInfo + "%' OR ISBN = " + Integer.parseInt(bookInfo);
        List<Book> bookList = new ArrayList<>();
        ResultSet resultSet = null;
        PreparedStatement preparedStatement = null;
        try {
            preparedStatement = connection.prepareStatement(SQLSearchQuery);
            resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                Book book = new Book(
                        resultSet.getInt("ISBN"),
                        resultSet.getString("NAME"),
                        resultSet.getString("AUTHOR"),
                        resultSet.getString("SUBJECT"));
                book.setDueDate(resultSet.getString("DUE_DATE"));

                try {
                    if (resultSet.getString("DUE_DATE") != null && new SimpleDateFormat("dd/MM/yyyy").parse(book.getDueDate()).getTime() < System.currentTimeMillis()) {
                        System.out.println("BOOK IS OVERDUE PAY 50/- FEE");

                    } else {
                        System.out.println("BOOK RETURNED ON TIME");
                    }


                    bookList.add(book);
                    String SqlUpdate = "UPDATE BOOKS SET IS_BORROWED = ?,DUE_DATE = ? WHERE ISBN ="+book.getISBN();

                    try {
                        preparedStatement = connection.prepareStatement(SqlUpdate);
                        preparedStatement.setString(1,null);
                        preparedStatement.setString(2,null);
                        preparedStatement.execute();

                    }catch (SQLException exception){
                        System.out.println(exception.toString());
                    }




                } catch (ParseException e) {
                    System.out.println(e);
                }

            }

        } catch (SQLException exception) {
            System.out.println(exception);

        } finally {
            try {
                preparedStatement.close();
                resultSet.close();

            } catch (SQLException e) {
                System.out.println(e.toString());
            }
        }

        String booksAvailable = "";

        for (Book book : bookList) {
            booksAvailable += book.toString();
        }
        System.out.println(booksAvailable);

    }


    public void showBooks() {
        List<Book> bookList = new ArrayList<>();
        PreparedStatement preparedStatement = null;
        ResultSet resultSet = null;
        try {
            String SQLQuery = "SELECT * FROM BOOKS";
            preparedStatement = connection.prepareStatement(SQLQuery);
            resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                bookList.add(new Book(
                        resultSet.getInt("ISBN"),
                        resultSet.getString("NAME"),
                        resultSet.getString("AUTHOR"),
                        resultSet.getString("SUBJECT")));
            }

        } catch (SQLException e) {
            System.out.println(e.toString());

        } finally {
            try {
                preparedStatement.close();
                resultSet.close();

            } catch (SQLException e) {
                System.out.println(e.toString());
            }
        }
        String booksAvailable = String.format("%20s\t%20s\t%20s\t%20s", "NAME", "SUBJECT", "AUTHOR", "ISBN\n\n");
        for (Book book : bookList) {
            booksAvailable += book.toString();
        }
        System.out.println(booksAvailable);

    }

    public void addBook() {
        try {
            Book book = createBook();
            String SQLQuery = "INSERT INTO BOOKS(NAME ,AUTHOR,SUBJECT, ISBN) VALUES(?,?,?,?)";

            //USING AN SQL CONVENIENCE METHOD TO EXECUTE QUERIES CAN CHANGE IF YOU FIND SOMETHING BETTER
            PreparedStatement preparedStatement = connection.prepareStatement(SQLQuery);
            preparedStatement.setString(1, book.getName());
            preparedStatement.setString(2, book.getAuthor());
            preparedStatement.setString(3, book.getSubject());
            preparedStatement.setInt(4, book.getISBN());
            preparedStatement.execute();
            System.out.println("Book Added!");

        } catch (SQLException e) {
            System.out.println(e.toString());

        }
    }

    public void showOverdueBooks() {
        List<Book> bookList = new ArrayList<>();
        ResultSet resultSet = null;
        PreparedStatement preparedStatement = null;
        try {
            String SQLQuery = "SELECT * FROM BOOKS";
            preparedStatement = connection.prepareStatement(SQLQuery);
            resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                Book book = new Book(
                        resultSet.getInt("ISBN"),
                        resultSet.getString("NAME"),
                        resultSet.getString("AUTHOR"),
                        resultSet.getString("SUBJECT"));
                book.setIsBorrowed(resultSet.getInt("IS_BORROWED"));
                book.setDueDate(resultSet.getString("DUE_DATE"));

                try {
                    if (resultSet.getString("DUE_DATE") != null && new SimpleDateFormat("dd/MM/yyyy").parse(book.getDueDate()).getTime() < System.currentTimeMillis()) {
                        bookList.add(book);
                    }

                } catch (ParseException e) {
                    System.out.println(e);
                }
            }

        } catch (SQLException e) {


        }
        String booksAvailable = String.format("%20s\t%20s\t%20s\t%20s", "NAME", "SUBJECT", "AUTHOR", "ISBN\n\n");
        for (Book book : bookList) {
            booksAvailable += book.toString();
        }
        System.out.println(booksAvailable);
    }


    //helper functions down here
    private Book createBook() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("\nEnter ISBN : ");
        int ISBN = new Scanner(System.in).nextInt();
        System.out.print("\nEnter Book Name : ");
        String bookName = new Scanner(System.in).nextLine();
        System.out.print("\nEnter Author : ");
        String authorName = new Scanner(System.in).nextLine();
        System.out.print("\nEnter Subject : ");
        String subject = new Scanner(System.in).nextLine();

        return new Book(ISBN, bookName, subject, authorName);

    }


}