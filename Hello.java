import java.io.*;
import javax.servlet.*;



public class Hello extends HttpServlet{ 









public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{

response.getWriter().println("Hello");
}
}



