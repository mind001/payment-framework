import org.junit.Assert;
import org.junit.Test;

public class PaymentSystemTest {
  
  @Test
  public void testTransaction() {
    // Perform test transaction
    PaymentSystem paymentSystem = new PaymentSystem();
    boolean result = paymentSystem.processTransaction(100.0, "1234567890123456");
    
    // Verify transaction result
    Assert.assertTrue("Transaction failed", result);
  }
  
  @Test
  public void testDataConsistency() {
    // Check data consistency after test transactions
    PaymentSystem paymentSystem = new PaymentSystem();
    double accountBalance = paymentSystem.getAccountBalance("1234567890");
    
    // Verify account balance
    Assert.assertEquals("Account balance is incorrect", 500.0, accountBalance, 0.001);
  }
  
  @Test
  public void testErrorHandling() {
    // Perform test transaction with invalid token
    PaymentSystem paymentSystem = new PaymentSystem();
    boolean result = paymentSystem.processTransaction(100.0, "invalidToken");
    
    // Verify error handling
    Assert.assertFalse("Invalid token was accepted", result);
    Assert.assertEquals("Error message is incorrect", "Invalid token", paymentSystem.getErrorMessage());
  }
  
}
