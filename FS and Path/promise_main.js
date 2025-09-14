const fs = require("fs").promises;

async function run() {
  try {
    console.log("start");

    // Step 1: write file1
    await fs.writeFile("file1.txt", "Hello from file1");
    console.log("file1 written");

    // Step 2: read file1
    const data1 = await fs.readFile("file1.txt", "utf-8");
    console.log("file1 read:", data1);

    // Step 3: write file2
    await fs.writeFile("file2.txt", data1 + " + more data");
    console.log("file2 written");

    // Step 4: read file2
    const data2 = await fs.readFile("file2.txt", "utf-8");
    console.log("file2 read:", data2);

    // Step 5: write file3
    await fs.writeFile("file3.txt", data2 + " + final data");
    console.log("file3 written");

    // Step 6: read file3
    const data3 = await fs.readFile("file3.txt", "utf-8");
    console.log("file3 read:", data3);

    console.log("end");
  } catch (err) {
    console.error("Error:", err);
  }
}

run();
