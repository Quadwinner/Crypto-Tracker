package service;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controllers.Currencies;
import controllers.Users;

public class GetRequestHelper {

	public static void process(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		String uri = req.getRequestURI();
		if (uri.matches("/api/logout")) {
			Users.logout(req, res);
		} else if (uri.matches("/api/portfolio")) {
			Currencies.getPortfolio(req, res);
		} else {
			RequestDispatcher redir = req.getRequestDispatcher("/index.html");
			redir.forward(req, res);
		}
	}
}
