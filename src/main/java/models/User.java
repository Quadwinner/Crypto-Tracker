package models;

import java.util.List;

public class User {

	private int userId;
	private String username;
	private String password;
	private String email;
	private List<String> portfolio;
	
	public User() {
		super();
	}

	public User(int userId, String username, String password, String email, List<String> portfolio) {
		super();
		this.userId = userId;
		this.username = username;
		this.password = password;
		this.email = email;
		this.portfolio = portfolio;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<String> getPortfolio() {
		return portfolio;
	}

	public void setPortfolio(List<String> portfolio) {
		this.portfolio = portfolio;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", username=" + username + ", password=" + password + ", email=" + email
				+ ", portfolio=" + portfolio + "]";
	}
	
	
}
