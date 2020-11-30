package dao;

import java.util.List;

import models.User;

public interface Dao {
	public int insertUser(User user);
	
	public User getUserById(int userId);
	
	public User getUserByUsername(String username);
	
	public int insertCurrency(String symbol);
	
	public int getCurrencyBySymbol(String symbol);
	
	public List<String> getCurrenciesByUser(int userId);
}
