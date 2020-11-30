package controllers;

import java.io.IOException;
import java.sql.Connection;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import dao.Dao;
import dao.DaoImpl;
import models.User;
import util.ConnectionFactory;

public class Currencies {

	public static void getPortfolio(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		ObjectMapper om = new ObjectMapper();
		HttpSession session = req.getSession(false);
		if (session == null) {
			res.setStatus(400);
		} else {
			res.setStatus(200);
			res.getWriter().write(om.writeValueAsString(((User) session.getAttribute("user")).getPortfolio()));
		}
	}
	
	public static void addCurrency(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		Connection conn = ConnectionFactory.getConnection();
		Dao dao = new DaoImpl(conn);
		ObjectMapper om = new ObjectMapper();
		JsonNode jsonNode = om.readTree(req.getReader());
		HttpSession session = req.getSession(false);
		if (session == null) {
			res.setStatus(400);
		} else {
			User user = (User) session.getAttribute("user");
			String symbol = jsonNode.get("symbol").asText();
			if (user.getPortfolio().contains(symbol)) {
				res.setStatus(400);
			} else {
				res.setStatus(200);
				int currencyId = dao.getCurrencyBySymbol(symbol);
				if (currencyId == 0) {
					currencyId = dao.insertCurrency(symbol);
				}
				dao.insertCurrencyLink(user.getUserId(), currencyId);
				user.setPortfolio(dao.getCurrenciesByUser(user.getUserId()));
				session.setAttribute("user", user);
			}
		}
	}
	
	public static void deleteCurrency(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		Connection conn = ConnectionFactory.getConnection();
		Dao dao = new DaoImpl(conn);
		String symbol = req.getRequestURI().split("/")[3];
		HttpSession session = req.getSession(false);
		if (session == null) {
			res.setStatus(400);
		} else {
			User user = (User) session.getAttribute("user");
			if (!user.getPortfolio().contains(symbol)) {
				res.setStatus(400);
			} else {
				int linkId = dao.getLinkByCurrency(symbol, user.getUserId());
				dao.deleteCurrencyLink(linkId);
				user.setPortfolio(dao.getCurrenciesByUser(user.getUserId()));
				session.setAttribute("user", user);
			}
		}
	}
}
