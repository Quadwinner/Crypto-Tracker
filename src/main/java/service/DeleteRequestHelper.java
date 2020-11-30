package service;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import controllers.Currencies;

public class DeleteRequestHelper {

	public static void process(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		String uri = req.getRequestURI();
		if (uri.matches("/api/portfolio/(.*)")) {
			Currencies.deleteCurrency(req, res);
		}
	}
}
