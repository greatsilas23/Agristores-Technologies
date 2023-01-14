import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
///Microservice -> Connects the code to the database
public class DbConnection {
    public static Connection connect(){
        Connection connection = null;
        try {
            Class.forName("org.sqlite.JDBC");
            String url = "jdbc:sqlite:Library.db";
            connection = DriverManager.getConnection(url);
            System.out.println("Connected");
            //TODO:CREATE TABLES IF THEY DONT EXIST//will do later

            String createBooksTableSql = "CREATE TABLE IF NOT EXISTS \"BOOKS\" (\"NAME\" TEXT, \"AUTHOR\" TEXT,\"SUBJECT\" TEXT, \"IS_BORROWED\" INTEGER, \"ISBN\" INTEGER,\"DUE_DATE\" TEXT);" ;
            PreparedStatement createBooksTablePs = connection.prepareStatement(createBooksTableSql);
            createBooksTablePs.execute();


        }catch (ClassNotFoundException| SQLException e){
            System.out.println(e+"");
        }
        return connection;
    }
}