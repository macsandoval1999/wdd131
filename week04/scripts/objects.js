let aCourse = {
    // Description: Course object literal representing a single course that includes multiple sections. Here we have a a course representing "Dynamic Web Fundamentals". We then assign it some properties that stay the same for all sections of the course (course code, title, credits) and a sections property that is an array of section objects. Each section object has properties that are specific to that section (section number, enrollment term, instructor). This could be used in a course catalog or registration system that shows when enrollment is open for this course and who is teaching it.
    // Properties: code, title, credits, sections (array of section objects)
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        // 
        {
            sectionNumber: "001",
            enrollment: "Term 6",
            instructor: "John Doe"
        },
        {
            sectionNumber: "002",
            enrollment: "Term 6",
            instructor: "Jane Smith"
        }]
};

function setCourseInformation(course) {
    // Description: Updates the HTML element with the course code and title.
    // Parameters: course (object) - The course object containing code and title properties.
    // Returns: None
    // Process: This function first takes a course object as a parameter. It then selects the HTML element with the ID "courseName" and updates its innerHTML to display the course code and title in a formatted string. This allows the webpage to dynamically show the course information based on the provided course object.
    document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}`;
}

function sectionTemplate(section) {
    // Description: Generates an HTML table row for a given section object.
    // Parameters: section (object) - The section object containing sectionNumber, enrollment, and instructor properties.
    // Returns: A string representing an HTML table row with the section details.
    // Process: This function takes a section object as a parameter and returns a string that represents an HTML table row. The row contains three table data cells, each populated with the section's number, enrollment term, and instructor name. This string can then be used to dynamically generate a table of sections in the webpage.
    return `<tr>
                <td>${section.sectionNumber}</td>
                <td>${section.enrollment}</td>
                <td>${section.instructor}</td>
            </tr>`;
}

function renderSections(sections) {
    // Description: Renders the sections of a course into an HTML table body.
    // Parameters: sections (array) - An array of section objects to be rendered.
    // Returns: None
    // Process: This function takes an array of section objects as a parameter. It uses the map method to apply the sectionTemplate function to each section in the array, generating an array of HTML strings. These strings are then joined together into a single string and assigned to the innerHTML of the table body element with the ID "sections". This effectively populates the table with rows representing each section of the course.
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections tbody").innerHTML = html.join("");
}

setCourseInformation(aCourse); // Set the course information in the HTML
renderSections(aCourse.sections); // Render the sections in the HTML table
