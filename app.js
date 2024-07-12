let browser = prompt("Please enter your browser name:");
browser = browser.toLowerCase();
if (browser === "edge")
    alert("You've got the Edge!");
else if (["chrome", "firefox", "safari", "opera"].includes(browser))
    alert('Okay we support these browsers too');
else
    alert('We hope that this page looks ok!');