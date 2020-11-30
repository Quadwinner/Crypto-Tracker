package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import models.User;

public class DaoImpl implements Dao {
	private Connection conn;
	
	public DaoImpl(Connection conn) {
		this.conn = conn;
	}
	
	@Override
	public int insertUser(User user) {
		int insertId = 0;
		String sql = "insert into users (username, password, email) values (?,?,?)";
		try {
			PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
			ps.setString(1, user.getUsername());
			ps.setString(2, user.getPassword());
			ps.setString(3, user.getEmail());
			ps.execute();
			ResultSet rs = ps.getGeneratedKeys();
			if (rs.next()) {
				insertId = rs.getInt(1);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return insertId;
	}

	@Override
	public User getUserById(int userId) {
		User user = new User();
		String sql = "select user_id, username, password, email from users where user_id = ?";
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, userId);
			ResultSet rs = ps.executeQuery();
			if (rs.next()) {
				user.setUserId(rs.getInt(1));
				user.setUsername(rs.getString(2));
				user.setPassword(rs.getString(3));
				user.setEmail(rs.getString(4));
				user.setPortfolio(getCurrenciesByUser(rs.getInt(1)));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return user;
	}

	@Override
	public User getUserByUsername(String username) {
		User user = new User();
		String sql = "select user_id, username, password, email from users where username = ?";
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, username);
			ResultSet rs = ps.executeQuery();
			if (rs.next()) {
				user.setUserId(rs.getInt(1));
				user.setUsername(rs.getString(2));
				user.setPassword(rs.getString(3));
				user.setEmail(rs.getString(4));
				user.setPortfolio(getCurrenciesByUser(rs.getInt(1)));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return user;
	}

	@Override
	public int insertCurrency(String symbol) {
		int insertId = 0;
		String sql = "insert into currencies (symbol) values (?)";
		try {
			PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
			ps.setString(1, symbol);
			ps.execute();
			ResultSet rs = ps.getGeneratedKeys();
			if (rs.next()) {
				insertId = rs.getInt(1);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return insertId;
	}

	@Override
	public int getCurrencyBySymbol(String symbol) {
		int currencyId = 0;
		String sql = "select currency_id from currencies where symbol = ?";
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, symbol);
			ResultSet rs = ps.executeQuery();
			if (rs.next()) {
				currencyId = rs.getInt(1);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return currencyId;
	}
	
	@Override
	public void insertCurrencyLink(int userId, int currencyId) {
		String sql = "insert into currency_links (user_id, currency_id) values (?,?)";
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, userId);
			ps.setInt(2, currencyId);
			ps.execute();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	@Override
	public int getLinkByCurrency(String symbol, int userId) {
		int linkId = 0;
		int currencyId = getCurrencyBySymbol(symbol);
		String sql = "select currency_link_id from currency_links where currency_id = ? and user_id = ?";
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, currencyId);
			ps.setInt(2, userId);
			ResultSet rs = ps.executeQuery();
			if (rs.next()) {
				linkId = rs.getInt(1);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return linkId;
	}
	
	@Override
	public void deleteCurrencyLink(int linkId) {
		String sql = "delete from currency_links where currency_link_id = ?";
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, linkId);
			ps.execute();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public List<String> getCurrenciesByUser(int userId) {
		List<String> currencies = new ArrayList<>();
		String sql = "select currencies.symbol from currencies inner join currency_links on currencies.currency_id = currency_links.currency_id where currency_links.user_id = ?";
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, userId);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				currencies.add(rs.getString(1));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return currencies;
	}

}
