// Online course registration system
// age between 18-60 for valid invalid
//password 6-12 characters for open close interval
//course type one of java , python , c++ for discrete partitions
//scholarship boolean

class Registration {

    private int age;
    private String password;
    private String course;
    private boolean scholarship;

    Registration(int age, String password, String course, boolean scholarship) {
        this.age = age;
        this.password = password;
        this.course = course;
        this.scholarship = scholarship;
    }

    boolean isValidAge(int min, int max) {
        return age >= min && age <= max;
    }

    boolean isValidPassword(int minLen, int maxLen) {
        int len = password == null ? 0 : password.length();
        return len >= minLen && len <= maxLen;
    }

    boolean isValidCourse(String[] allowed) {
        if (course == null) {
            return false;
        }
        for (String c : allowed) {
            if (c.equals(course)) {
                return true;
            }
        }
        return false;
    }

    boolean hasScholarship() {
        return scholarship;
    }
}

public class bonus {

    public static void main(String[] args) {
        int ageMin = 18, ageMax = 60;
        int passwordMin = 6, passwordMax = 12;
        String[] courseTypes = {"java", "python", "c++"};
        boolean scholarship = true;

        Registration reg = new Registration(25, "1234567", "java", scholarship);
        System.out.println("Age valid: " + reg.isValidAge(ageMin, ageMax));
        System.out.println("Password valid: " + reg.isValidPassword(passwordMin, passwordMax));
        System.out.println("Course valid: " + reg.isValidCourse(courseTypes));
        System.out.println("Scholarship: " + reg.hasScholarship());

    }
}
