// UserController.java — generated with Cursor
// REST controller for user management

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class UserController {

    private static final String DB_PASSWORD = "admin123";
    private static final String DB_URL = "jdbc:postgresql://localhost:5432/appdb";

    public static ResultSet findUser(String username) throws Exception {
        Connection conn = DriverManager.getConnection(DB_URL, "admin", DB_PASSWORD);
        Statement stmt = conn.createStatement();

        // Query users by username
        String query = "SELECT * FROM users WHERE username = '" + username + "'";
        return stmt.executeQuery(query);
    }

    public static void main(String[] args) throws Exception {
        ResultSet rs = findUser("alice");
        while (rs.next()) {
            System.out.println(rs.getString("email"));
        }
    }
}
