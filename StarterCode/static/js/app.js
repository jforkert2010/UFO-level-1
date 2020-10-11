var tbody = d3.select("tbody");


// Console.log the weather data from data.js
console.log(data);
//from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

data.forEach((UFOReport) => {
  var row = tbody.append("tr");
  Object.entries(UFOReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
// Complete the event handler function for the form
function runEnter() {
  /*var new_tbody = document.createElement('tbody');
  populate_with_new_rows(new_tbody);
  old_tbody.parentNode.replaceChild(new_tbody, old_tbody)*/
  // Prevent the page from refreshing
 d3.event.preventDefault();
 //document.getElementById(("UFOTable").style.display = "none");
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  
  console.log(filteredData);
  
  filteredData.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  /*row.forEach((r) => {
    row.filter(row => row.datetime == inputValue)
     //?(row.style.display = "row")
     //:(row.style.display = "none");*/
  });
  
};


  // BONUS: Calculate summary statistics for the age field of the filtered data

  /* First, create an array with just the age values
  var ages = filteredData.map(person => person.age);

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
  var mean = math.mean(ages);
  var median = math.median(ages);
  var mode = math.mode(ages);
  var variance = math.var(ages);
  var standardDeviation = math.std(ages);
-
  // Then, select the unordered list element by class name
  var list = d3.select(".summary");

  // remove any children from the list to
  list.html("");

  // append stats to the list
  list.append("li").text(`Mean: ${mean}`);
  list.append("li").text(`Median: ${median}`);
  list.append("li").text(`Mode: ${mode}`);
  list.append("li").text(`Variance: ${variance}`);
  list.append("li").text(`Standard Deviation: ${standardDeviation}`);*/



// YOUR CODE HERE!
