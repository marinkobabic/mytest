console.log("Start bootmanager");
function checkForTag(tagName) {
    var element = document.getElementsByTagName(tagName);
    if (element.length > 0) {
        console.log("Tag <" + tagName + "> found in the document.");
    } else {
        console.log("Tag <" + tagName + "> NOT found in the document.");
    }
}

// Call the function to check for the "cv-finance-manager" tag
checkForTag("cv-finance-manager");
console.log("end bootmanager");
