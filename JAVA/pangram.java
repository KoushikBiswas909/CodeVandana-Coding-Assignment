import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine().toLowerCase();

        boolean isPangram = isPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }

        scanner.close();
    }

    public static boolean isPangram(String str) {
        
        boolean[] alphabetPresent = new boolean[26];

        
        for (char c : str.toCharArray()) {
            if (Character.isLetter(c)) {
                int index = c - 'a';
                alphabetPresent[index] = true;
            }
        }

        
        for (boolean present : alphabetPresent) {
            if (!present) {
                return false;
            }
        }

        return true;
    }
}
