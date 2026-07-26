
import java.util.*;

public class q2 {

    public static void main(String[] args) {
        int attempt = 0;
        System.out.println("Enter 4 character ATM pin: ");

        Scanner sc = new Scanner(System.in);
        String pin = sc.nextLine();

        while (pin.length() != 4 && attempt < 3) {
            System.out.println("Invalid size lenght");
            attempt++;
            if (attempt < 3) {
                System.out.println("Enter atm pin again:");
                pin = sc.nextLine();
            } else {
                System.out.println("Attempt limit reached");
            }
        }

        if (pin.length() == 4) {

            int generatedNumber = ((int) pin.charAt(0) - 48) * 1000 + ((int) pin.charAt(1) - 48) * 100 + ((int) pin.charAt(2) - 48) * 10 + ((int) pin.charAt(3) - 48);

            System.out.println("genereted number :" + generatedNumber);
        }

    }
}
