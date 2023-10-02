/* FLAVORS  FUNCTIONALITY */
const flavorList = document.getElementById("flavor-list");

// Fetch data from the CSV file
fetch("/flavors.csv")
  .then((response) => response.text())
  .then((csvData) => {
    // Parse CSV to JSON
    const jsonData = Papa.parse(csvData, {
      header: true,
      skipEmptyLines: true,
    }).data;

    const uniqueCategories = [];

    jsonData.forEach((record) => {
      const category = record.Category;
      if (!uniqueCategories.includes(category)) {
        uniqueCategories.push(category);

        const categoryDiv = document.createElement("div");

        // Create an image element
        const categoryImage = document.createElement("img");
        categoryImage.src = `https://placehold.co/150`; // Adjust the image path based on your file structure
        categoryImage.alt = category;

        categoryDiv.appendChild(categoryImage);

        const categoryText = document.createElement("p");
        categoryText.textContent = category;

        categoryDiv.appendChild(categoryText);

        flavorList.appendChild(categoryDiv);
      }
    });
  })
  .catch((error) => console.error("Error fetching or parsing data:", error));
