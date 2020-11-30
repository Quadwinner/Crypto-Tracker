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
		return 0;
	}

	@Override
	public User getUserById(int userId) {
		return null;
	}

	@Override
	public User getUserByUsername(String username) {
		return null;
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
