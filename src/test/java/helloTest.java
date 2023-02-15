import com.example.ecoshopwebapp.HelloServlet;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class helloTest {

    @Test
    public void testHello() {
        HelloServlet app1 = new HelloServlet();
        app1.init();
        assertEquals(app1.getMessage(), "Hello World!");
    }
}