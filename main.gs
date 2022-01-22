function sendAll() { // sending sms
  sendSms("5104587177","YOU HAVE COVID");
  console.log("yu have covid");
  /*
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2; 
  var numRows = sheet.getLastRow() - 1; 
  var dataRange = sheet.getRange(startRow, 1, numRows, 2) 
  var data = dataRange.getValues();

  for (i in data) {
    var row = data[i];
    try {
      response_data = sendSms(row[0], row[1]);
      status = "sent";
    } catch(err) {
      Logger.log(err);
      status = "error";
    }
    sheet.getRange(startRow + Number(i), 3).setValue(status);
  }
  */
}
function sendSms(to, body) {
  var messages_url = "https://api.twilio.com/2010-04-01/Accounts/AC62e25862712ad207b166324a78fd5bf1/Messages.json";

  var payload = {
    "To": to,
    "Body" : body,
    "From" : "6205828940"
  };

  var options = {
    "method" : "post",
    "payload" : payload
  };

  options.headers = { 
    "Authorization" : "Basic " + Utilities.base64Encode("AC62e25862712ad207b166324a78fd5bf1:c0eae5afbe166fc1c75e1b9e95aa7917")
  };

  UrlFetchApp.fetch(messages_url, options);
}
