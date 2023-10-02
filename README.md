# CSV Importer for Google Sheets

## Overview

I created the CSV Importer for Google Sheets to allow users to easily import and filter CSV files without any performance issues. The solution consists of a Google Apps Script file (`file.gs`) that contains several functions related to importing CSV files into Google Sheets. The `onOpen()` function creates a custom menu in the Google Sheets UI that allows the user to launch the CSV importer. The `showSidebar()` function is called when the user clicks the "Import CSV" menu item, and it displays a sidebar containing an HTML form for importing CSV files.

The `processCSVFile()` function is the main function that processes the contents of a CSV file and writes the selected data to a sheet. It takes in several parameters, including the contents of the CSV file, the columns to select, the name of the sheet to write the data to, whether to append the data to the sheet or overwrite it, and any filters to apply to the data.

GitHub Copilot: I apologize for the oversight. Here's an updated set of instructions that includes the HTML part:

## Usage

To use the custom CSV importer for Google Sheets, follow these steps:

1. Open the Google Sheet where you want to import the CSV data.
2. Click on the "Extensions" menu and select "Apps Script".
3. In the script editor, create a new script file and copy the contents of `file.gs` into it.
4. Create a new HTML file in the script editor and copy the contents of `index.html` into it.
5. Save the script and HTML files and give them names.
6. Click on the "Run" menu and select "onOpen". This will create a custom menu in the Google Sheets UI that allows you to launch the CSV importer.
7. Click on the "Publish" menu and select "Deploy as web app".
8. In the "Deploy as web app" dialog, set the following options:
   - Project version: New
   - Execute the app as: Me
   - Who has access to the app: Anyone, even anonymous
9. Click on the "Deploy" button to deploy the web app.
10. In the "Current web app URL" section, copy the URL of the web app.
11. Close the "Deploy as web app" dialog and return to the Google Sheet.
12. Click on the "Import CSV" menu item in the Google Sheets UI.
13. In the sidebar that appears, paste the URL of the web app into the "Web app URL" field.
14. Drag and drop the CSV file you want to import.
15. Select the columns you want to import and apply any filters you want to use.
16. Choose whether to append the data to the existing data in the sheet or overwrite it.
17. Click the "Import" button to import the selected data into the sheet.


## Files

The solution consists of two files:

- `file.gs`: This is the Google Apps Script file that contains the functions related to importing CSV files into Google Sheets.
- `index.html`: This is the HTML file that contains the form for importing CSV files.

## Checklist

- [✓] My code's working just fine! 🥳
- [✓] I have recorded a video showing it working and embedded it in the README ▶️
- [✓] I have tested all the normal working cases 😎
- [✓] I have even solved some edge cases (brownie points) 💪
- [✓] I added my very planned-out approach to the problem at the end of this README 📜

## Developers 


1. I started by understanding the problem statement and requirements.
2. I researched the Google Apps Script documentation to understand how to interact with Google Sheets and parse CSV files.
3. I planned out the solution by breaking down the problem into smaller sub-problems and identifying the functions needed to solve each sub-problem.
4. I wrote the code for each function, testing as I went to ensure that each function worked as expected.
5. I integrated the functions into a cohesive solution and tested the solution with various CSV files to ensure that it worked as expected.
6. I refactored the code to improve readability and maintainability.
7. I documented the code and created a README file to explain how to use the solution.

To break down the problem into smaller sub-problems, I identified the following functions:

- `onOpen()`: This function creates a custom menu in the Google Sheets UI that allows the user to launch the CSV importer.
- `showSidebar()`: This function is called when the user clicks the "Import CSV" menu item, and it displays a sidebar containing an HTML form for importing CSV files.
- `processCSVFile()`: This function is the main function that processes the contents of a CSV file and writes the selected data to a sheet.
- `parseCsv()`: This function parses the CSV data using the `Utilities.parseCsv()` method.
- `selectColumns()`: This function selects the specified columns from the CSV data.
- `applyFilters()`: This function applies any filters to the data.

I then wrote the code for each function, testing as I went to ensure that each function worked as expected. I integrated the functions into a cohesive solution and tested the solution with various CSV files to ensure that it worked as expected. Finally, I refactored the code to improve readability and maintainability, documented the code, and created a README file to explain how to use the solution.


Video Link : https://drive.google.com/file/d/1agX9V4xL97SLWXkZk8oKJGw04r1jGWlV/view?usp=sharing

