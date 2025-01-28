# MongoDB $inc Operator Error: Incorrect Increment Value

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The error arises from providing a string value instead of a numerical value to the `$inc` operator, which leads to unexpected behavior.

## Bug Description

The provided code snippet shows incorrect usage of the `$inc` operator in MongoDB. The `$inc` operator expects a numerical value to increment a field. If a string is provided, the update operation will fail to update the counter correctly. 

## Solution

The solution shows the correct way to use the `$inc` operator by providing a numerical value for the increment.  This ensures that the counter is updated correctly.