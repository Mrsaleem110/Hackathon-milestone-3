// Get refrences to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission 
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    // Collect Input value
    var objective = document.getElementById('objective').value;
    var name = document.getElementById('name').value;
    var FaterName = document.getElementById('FaterName').value;
    var phone = document.getElementById('phone').value;
    var cnic = document.getElementById('cnic').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content dynamically
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3><b>Personal Information</b></h3>\n<p><b>Objective:</b>".concat(objective, "</p>\n<p><b>Name:</b>").concat(name, "</p>\n<p><b>FatherName:</b>").concat(FaterName, "</p>\n<p><b>Contact:</b>").concat(phone, "</p>\n<p><b>Cnic:</b>").concat(cnic, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Address:</b>").concat(address, "</p>\n\n<h3><b>Education</b></h3>\n<p>").concat(education, "</p>\n\n<h3><b>Experience</b></h3>\n<p>").concat(experience, "</p>\n\n<h3><b>Skills</b></h3>\n<p>").concat(skills, "</p>\n");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
