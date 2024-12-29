# Unexpected Type Coercion in JavaScript Arithmetic

This repository demonstrates a common JavaScript bug caused by the language's loose typing system.  The `bar` function unexpectedly concatenates a string and number instead of adding them, highlighting the importance of type checking and strict comparisons in JavaScript.

## Bug Description

The issue stems from JavaScript's implicit type coercion. When you perform arithmetic on a number and a string, JavaScript implicitly converts the number to a string and then concatenates them.  This can result in unexpected and potentially erroneous results.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory containing `bug.js`.
3. Run the script using Node.js (e.g., `node bug.js`).

Observe the unexpected output due to type coercion.

## Solution

The `bugSolution.js` demonstrates how to explicitly check types and handle potential errors appropriately before performing arithmetic to resolve this issue.