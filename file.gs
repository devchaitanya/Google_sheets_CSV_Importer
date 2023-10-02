function processCSVFile(csv, columns, sheetName, append, filters) {
  // Parse the CSV data
  var data = Utilities.parseCsv(csv);
  
  // Get the sheet to write the data to
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  
  // Select the specified columns from the CSV data
  var selectedData = [];
  var columnIndices = columns.split(',').map(function(column) {
    return parseInt(column) - 1;
  });
  for (var i = 0; i < data.length; i++) {
    var row = [];
    for (var j = 0; j < columnIndices.length; j++) {
      row.push(data[i][columnIndices[j]]);
    }
    selectedData.push(row);
  }
  
  // Append or overwrite the data in the sheet
  var updatedData = append ? sheet.getDataRange().getValues().concat(selectedData) : selectedData;
  sheet.clear();
  sheet.getRange(1, 1, updatedData.length, updatedData[0].length).setValues(updatedData);
  
  // Apply any filters to the data
  if (filters) {
    var filterCriteria = [];
    var filterPairs = filters.split(',');
    for (var i = 0; i < filterPairs.length; i++) {
      var pair = filterPairs[i].split('=');
      var columnIndex = parseInt(pair[0]) - 1;
      var filterValue = pair[1];
      if (filterValue.startsWith('!')) {
        filterCriteria.push(SpreadsheetApp.newFilterCriteria().whenTextDoesNotContain(filterValue.substring(1)).setHiddenValues(['']).build());
      } else {
        filterCriteria.push(SpreadsheetApp.newFilterCriteria().whenTextContains(filterValue).setHiddenValues(['']).build());
      }
      if (sheet.getFilter()) {
        sheet.getFilter().setColumnFilterCriteria(columnIndex + 1, filterCriteria[i]);
      } else {
        sheet.getRange(1, 1, updatedData.length, updatedData[0].length).createFilter().setColumnFilterCriteria(columnIndex + 1, filterCriteria[i]);
      }
    }
  } else {
    if (sheet.getFilter()) {
      sheet.getFilter().remove();
    }
  }
}
