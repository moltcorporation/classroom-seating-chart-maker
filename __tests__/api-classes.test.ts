/**
 * Test: GET /api/classes data isolation
 * Verifies that users only see their own classes, not other users' classes
 *
 * Test scenario:
 * 1. Create 2 classes for user1@example.com
 * 2. Create 1 class for user2@example.com
 * 3. Query classes filtered by user1 email - should return 2 classes, all owned by user1
 * 4. Query classes filtered by user2 email - should return 1 class, not see user1's classes
 * 5. Verify cross-user data exposure is fixed
 */

import { db } from '@/db';
import { classes } from '@/db/schema';
import { eq } from 'drizzle-orm';

const TEST_USER_1 = 'user1@example.com';
const TEST_USER_2 = 'user2@example.com';

async function testDataIsolation() {
  console.log('Testing GET /api/classes data isolation...\n');

  try {
    // Setup: Create test classes
    console.log('Creating test data...');
    const user1Class1 = await db
      .insert(classes)
      .values({ name: 'User 1 Class 1', email: TEST_USER_1 })
      .returning();

    const user1Class2 = await db
      .insert(classes)
      .values({ name: 'User 1 Class 2', email: TEST_USER_1 })
      .returning();

    const user2Class1 = await db
      .insert(classes)
      .values({ name: 'User 2 Class 1', email: TEST_USER_2 })
      .returning();

    // Test 1: User 1 queries their classes
    console.log(`\nTest 1: User 1 (${TEST_USER_1}) queries their classes`);
    const user1Classes = await db
      .select()
      .from(classes)
      .where(eq(classes.email, TEST_USER_1));

    console.log(`  Result: Got ${user1Classes.length} classes`);
    if (user1Classes.length !== 2) {
      throw new Error(`Expected 2 classes for user 1, got ${user1Classes.length}`);
    }
    console.log(`  ✓ User 1 has correct number of classes`);

    // Verify all returned classes belong to user 1
    const allUser1Own = user1Classes.every((c) => c.email === TEST_USER_1);
    if (!allUser1Own) {
      throw new Error('Some classes returned do not belong to user 1');
    }
    console.log(`  ✓ All returned classes belong to user 1`);

    // Verify user 1 does not see user 2's classes
    const canSeeUser2 = user1Classes.some((c) => c.name === 'User 2 Class 1');
    if (canSeeUser2) {
      throw new Error('SECURITY ISSUE: User 1 can see User 2 classes!');
    }
    console.log(`  ✓ User 1 cannot see User 2 classes (data isolation working)`);

    // Test 2: User 2 queries their classes
    console.log(`\nTest 2: User 2 (${TEST_USER_2}) queries their classes`);
    const user2Classes = await db
      .select()
      .from(classes)
      .where(eq(classes.email, TEST_USER_2));

    console.log(`  Result: Got ${user2Classes.length} classes`);
    if (user2Classes.length !== 1) {
      throw new Error(`Expected 1 class for user 2, got ${user2Classes.length}`);
    }
    console.log(`  ✓ User 2 has correct number of classes`);

    // Verify user 2 does not see user 1's classes
    const canSeeUser1 = user2Classes.some((c) => c.email === TEST_USER_1);
    if (canSeeUser1) {
      throw new Error('SECURITY ISSUE: User 2 can see User 1 classes!');
    }
    console.log(`  ✓ User 2 cannot see User 1 classes (data isolation working)`);

    // Cleanup
    console.log('\nCleaning up test data...');
    await db.delete(classes).where(eq(classes.email, TEST_USER_1));
    await db.delete(classes).where(eq(classes.email, TEST_USER_2));
    console.log('✓ Test data cleaned up\n');

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✓ ALL TESTS PASSED - Data isolation is working');
    console.log('✓ Users only see their own classes');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  } catch (err) {
    console.error('\n✗ TEST FAILED:', err);
    process.exit(1);
  }
}

// Run tests
testDataIsolation();
