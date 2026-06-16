
public class task1 {

    public static void main(String[] args) {

        int tempMin = 10, tempMax = 50;
        int humMin = 0, humMax = 100;

        int[] tempBoundaries = {tempMin, tempMin + 1, (tempMin + tempMax) / 2, tempMax - 1, tempMax};

        int[] humBoundaries = {humMin, humMin + 1, (humMin + humMax) / 2, humMax - 1, humMax};

        System.out.println("Boundary value tests:");
        for (int t : tempBoundaries) {
            for (int h : humBoundaries) {
                boolean valid = isValid(t, h, tempMin, tempMax, humMin, humMax);
                System.out.printf("T=%d H=%d -> %s\n", t, h, valid ? "VALID" : "INVALID");
            }
        }

        System.out.println("\nAdditional worst-case / edge checks:");
        int[] tempChecks = {tempMin - 1, tempMin, tempMax, tempMax + 1};
        int[] humChecks = {humMin - 1, humMin, humMax, humMax + 1};
        for (int t : tempChecks) {
            for (int h : humChecks) {
                boolean valid = isValid(t, h, tempMin, tempMax, humMin, humMax);
                System.out.printf("T=%d H=%d -> %s\n", t, h, valid ? "VALID" : "INVALID");
            }
        }
    }

    static boolean isValid(int temperature, int humidity, int tMin, int tMax, int hMin, int hMax) {
        return temperature >= tMin && temperature <= tMax && humidity >= hMin && humidity <= hMax;
    }

}
