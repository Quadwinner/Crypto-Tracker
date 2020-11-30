package controllers;

import java.io.IOException;
import java.sql.Connection;
import java.util.ArrayList;

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

public class Users {

	public static void Register(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		Connection conn = ConnectionFactory.getConnection();
		Dao dao = new DaoImpl(conn);
		ObjectMapper om = new ObjectMapper();
		JsonNode jsonNode = om.readTree(req.getReader());
		User user = new User(0, jsonNode.get("username").asText(), jsonNode.get("password").asText(), jsonNode.get("email").asText(), new ArrayList<>());
		int insertId = dao.insertUser(user);
		if (insertId > 0) {
			res.setStatus(200);
		} else {
			res.setStatus(400);
		}
	}
	
	public static void Login(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		Connection conn = ConnectionFactory.getConnection();
		Dao dao = new DaoImpl(conn);
		ObjectMapper om = new ObjectMapper();
		JsonNode jsonNode = om.readTree(req.getReader());
		HttpSession session = req.getSession();
		String username = jsonNode.get("username").asText();
		String password = jsonNode.get("password").asText();
		User user = dao.getUserByUsername(username);
		if (user.getUserId() == 0) {
			res.setStatus(400);
		} else if (!user.getPassword().equals(password)) {
			res.setStatus(400);
		} else {
			session.setAttribute("user", user);
			res.setStatus(200);
			res.getWriter().write(om.writeValueAsString(user));
		}
	}
	
	public static void Logout(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		HttpSession session = req.getSession(false);
		if (session == null) {
			res.setStatus(400);
		} else if (session.getAttribute("user") == null) {
			res.setStatus(400);
		} else {
			session.setAttribute("user", null);
			res.setStatus(200);
		}
	}
}
