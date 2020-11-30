package util;

import java.net.URI;
import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {
	private static Connection conn;
	
	public static Connection getConnection() {
		if (conn == null) {
			try {
				String username;
				String password;
				String dbUrl;
				if (System.getenv("DATABASE_URL") == null) {
					username = "postgres";
					password = "postgres";
					dbUrl = "jdbc:postgresql://localhost/postgres?currentSchema=cryptotracker";
				} else {
					URI dbUri = new URI(System.getenv("DATABASE_URL"));
					
					username = dbUri.getUserInfo().split(":")[0];
					password = dbUri.getUserInfo().split(":")[1];
					dbUrl = "jdbc:postgresql://" + dbUri.getHost() + dbUri.getPath();
				}
				conn = DriverManager.getConnection(dbUrl, username, password);
			} catch (URISyntaxException | SQLException e) {
				e.printStackTrace();
			}
		}
		return conn;
	}
}
