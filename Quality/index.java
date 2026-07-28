
public class index {

    public void showMessage() {
        System.out.println("Welcomee message");
    }

    public double calculateAvarage(int mark1, int mark2, int mark3) {
        return (mark1 + mark2 + mark3) / 3.0;
    }

    public static void main(String[] args) {
        index obj = new index();
        obj.showMessage();
        System.out.println("Averag5e: " + obj.calculateAvarage(60, 80, 90));
    }
}
