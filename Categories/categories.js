/* CATEGORIES  FUNCTIONALITY */
const categoryList = document.getElementById("category-list");

// Fetch data from the CSV file
fetch("/flavors.csv")
  .then((response) => response.text())
  .then((csvData) => {
    // Parse CSV to JSON
    const jsonData = Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true,
    }).data;

    const uniqueFlavors = [];

    jsonData.forEach((record) => {
      const flavor = record.Flavor;
      if (!uniqueFlavors.includes(flavor)) {
        uniqueFlavors.push(flavor);
      }
    });

    console.log("The flavors are:", uniqueFlavors);

    uniqueFlavors.forEach((flavor) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${flavor}`;
      categoryList.appendChild(listItem);
    });
  })
  .catch((error) => console.error("Error fetching or parsing data:", error));
