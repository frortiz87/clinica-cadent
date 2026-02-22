function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([new Date(), data.nombre, data.correo, data.fecha, data.hora, data.mensaje]);
  return ContentService.createTextOutput(JSON.stringify({result: "ok"})).setMimeType(ContentService.MimeType.JSON);
}
