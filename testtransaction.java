import java.util.Map;

public class TestTransactionProcessor {

    public static void main(String[] args) {
        // Test tokens and associated credit card numbers
        Map<String, String> testTokens = Map.of(
                "987654", "9876543210987654",
                "123456", "1234567890123456"
        );

        // Perform test transactions
        for (Map.Entry<String, String> entry : testTokens.entrySet()) {
            String token = entry.getKey();
            String cardNumber = entry.getValue();
            performTestTransaction(token, cardNumber);
        }
    }

    public static void performTestTransaction(String token, String cardNumber) {
        // Simulate a test transaction using the token and card number
        System.out.println("Performing test transaction with Token: " + token + "  Credit Card Number: " + cardNumber);
        // Implement your test transaction logic here
    }
}
