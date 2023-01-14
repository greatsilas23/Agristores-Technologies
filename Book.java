//Module->Used to hold the data of the class
public class Book {
    private int ISBN;
    private String name;
    private String subject;
    private String author;
    private int isBorrowed;
    private String dueDate;

    public Book(int ISBN, String name, String subject, String author) {
        this.ISBN = ISBN;
        this.name = name;
        this.subject = subject;
        this.author = author;
        this.isBorrowed = 0;
        this.dueDate = "";
    }

    @Override
    public String toString() {
        return String.format("%20s\t%20s\t%20s\t%20d\n",name,author,subject,ISBN);

    }

    public int getISBN() {
        return ISBN;
    }

    public String getName() {
        return name;
    }

    public String getSubject() {
        return subject;
    }

    public String getAuthor() {
        return author;
    }

    public int getIsBorrowed() {
        return isBorrowed;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setIsBorrowed(int isBorrowed) {
        this.isBorrowed = isBorrowed;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }
}