import java.util.Locale;

public class PhepToan {
    public static double tong(double a, double b) {
        double c = a + b;
        assert !Double.isNaN(c) : "Số nhập vào không phải là số";
        return c;
    }

    public static double hieu(double a, double b) {
        double c = a - b;
        return c;
    }

    public static double tich(double a, double b) {
        double c = a * b;
        return c;
    }

    public static double thuong(double a, double b) {
        assert b != 0 : "Không thể chia cho 0";
        double c = a / b;
        return c;
    }

    public static double canBacHai(double number) {
        assert number >= 0 : "Không thể tính căn bậc hai của số âm";
        return Math.sqrt(number);
    }

    public static void main(String[] args) {
        double soA = 200;
        double soB = 100;

        System.out.println(String.format(Locale.US, "Kết quả của phép cộng %.2f + %.2f là: %.2f", soA, soB, PhepToan.tong(soA, soB)));
        System.out.println(String.format(Locale.US, "Kết quả của phép trừ %.2f - %.2f là: %.2f", soA, soB, PhepToan.hieu(soA, soB)));
        System.out.println(String.format(Locale.US, "Kết quả của phép nhân %.2f * %.2f là: %.2f", soA, soB, PhepToan.tich(soA, soB)));
        System.out.println(String.format(Locale.US, "Kết quả của phép chia %.2f / %.2f là: %.2f", soA, soB, PhepToan.thuong(soA, soB)));
        System.out.println(String.format(Locale.US, "Kết quả của phép cân bậc hai của %.2f là: %.2f", soA, PhepToan.canBacHai(soA)));

        // Asserts for pass and fail cases
        assert PhepToan.tong(5, 7) == 12 : "Test case for tong passed"; // Pass case
        assert PhepToan.hieu(10, 5) == 5 : "Test case for hieu passed"; // Pass case
        assert PhepToan.tich(3, 4) == 12 : "Test case for tich passed"; // Pass case
        assert PhepToan.thuong(10, 2) == 5 : "Test case for thuong passed"; // Pass case
        assert PhepToan.canBacHai(16) == 4 : "Test case for canBacHai passed"; // Pass case

        // Fail cases
        assert PhepToan.tong(5, 7) == 11 : "Test case for tong failed"; // Fail case
        assert PhepToan.hieu(10, 5) == 3 : "Test case for hieu failed"; // Fail case
        assert PhepToan.tich(3, 4) == 15 : "Test case for tich failed"; // Fail case
        assert PhepToan.thuong(10, 2) == 3 : "Test case for thuong failed"; // Fail case
        assert PhepToan.canBacHai(16) == 3 : "Test case for canBacHai failed"; // Fail case
    }
}
