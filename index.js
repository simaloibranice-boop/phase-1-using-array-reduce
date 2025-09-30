// The array is provided for you
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Your code here
const totalBatteries = batteryBatches.reduce((sum, batch) => sum + batch, 0);
