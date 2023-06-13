import java.util.HashMap;
import java.util.Map;
import java.util.Random;

public class TestTokenGenerator {

    public static void main(String[] args) {
        // Test credit card data
        Map<String, Map<String, String>> testCreditCards = new HashMap<>();
        testCreditCards.put("1234567890123456", Map.of("expiry_date", "12/25", "cvv", "123"));
        testCreditCards.put("9876543210987654", Map.of("expiry_date", "06/24", "cvv", "456"));
        // Add more test credit card data as needed

        // Generate test tokens
        Map<String, String> testTokens = generateTestTokens(testCreditCards);

        // Print test tokens and associated credit card numbers
        for (Map.Entry<String, String> entry : testTokens.entrySet()) {
            String token = entry.getKey();
            String cardNumber = entry.getValue();
            System.out.println("Token: " + token + "  Credit Card Number: " + cardNumber);
        }
    }

    public static Map<String, String> generateTestTokens(Map<String, Map<String, String>> testCreditCards) {
        Map<String, String> testTokens = new HashMap<>();

        for (Map.Entry<String, Map<String, String>> entry : testCreditCards.entrySet()) {
            String cardNumber = entry.getKey();
            Map<String, String> cardData = entry.getValue();
            String token = tokenize(cardNumber, cardData);
            testTokens.put(token, cardNumber);
        }

        return testTokens;
    }

    public static String tokenize(String cardNumber, Map<String, String> cardData) {
        // Implement your tokenization method here
        // This is a simple example where the token is a random 6-digit number
        Random random = new Random();
        String token = String.format("%06d", random.nextInt(1000000));
        return token;
    }
}
