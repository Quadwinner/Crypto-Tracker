package dao;

import java.util.List;

import models.User;

public interface Dao {
	public int insertUser(User user);
	
	public User getUserById(int userId);
	
	public User getUserByUsername(String username);
	
	public int insertCurrency(String symbol);
	
	public int getCurrencyBySymbol(String symbol);
	
	public void insertCurrencyLink(int userId, int currencyId);
	
	public int getLinkByCurrency(String symbol, int userId);
	
	public void deleteCurrencyLink(int linkId);
	
	public List<String> getCurrenciesByUser(int userId);
}
