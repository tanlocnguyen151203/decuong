package 10;
import org.junit.Test;
import static org.junit.Assert.assertEquals;
public class CalculatorTest {
    
    public void testAddPass() {
        Calculator calculator = new Calculator();
        int result = calculator.add(3, 5);
        // Kết quả mong đợi là 8, nếu bằng nhau thì test pass
        assertEquals(8, result);
    }


    public void testAddFail() {
        Calculator calculator = new Calculator();
        int result = calculator.add(3, 5);
        // Kết quả mong đợi là 9 (sai), sẽ dẫn đến việc test fail
        assertEquals(9, result);
    }
}
