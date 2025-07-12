interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "New York",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 23,
  location: "Los Angeles",
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Function to render the table using vanilla JavaScript
function renderStudentsTable(students: Student[]) {
  // Create a table element
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";

  // Create the table header row
  const headerRow = document.createElement("tr");

  const headers = ["First Name", "Location"];
  headers.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.border = "1px solid black";
    th.style.padding = "8px";
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  // Append a row for each student
  students.forEach((student) => {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = "1px solid black";
    firstNameCell.style.padding = "8px";

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid black";
    locationCell.style.padding = "8px";

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    table.appendChild(row);
  });

  // Append the table to the body or another container
  document.body.appendChild(table);
}

// Call the function to render the table
renderStudentsTable(studentsList);
