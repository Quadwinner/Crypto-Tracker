package service;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controllers.Currencies;
import controllers.Users;

public class PostRequestHelper {

	public static void process(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		String uri = req.getRequestURI();
		if (uri.matches("/api/register")) {
			Users.register(req, res);
		} else if (uri.matches("/api/login")) {
			Users.login(req, res);
		} else if (uri.matches("/api/portfolio")) {
			Currencies.addCurrency(req, res);
		}
	}
}
