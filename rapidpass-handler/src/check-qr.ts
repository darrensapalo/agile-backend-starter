import { app } from ".";
import { CheckQRCodeRequest, CheckQRCodeResponsePayload, DBCode, fetchGetCodes } from "./query";

// define a route handler for the default home page
app.post("/api/v1/check-qr", async (req, res) => {
  console.log("Checking QR code");



  const requestBody: CheckQRCodeRequest = req.body.input;

  const responseBody = await fetchGetCodes();

  // Uncomment to view a list of codes
  // console.log(JSON.stringify(responseBody, null, 2));
  
  const DBCodes = responseBody.data.codes;

  let response : CheckQRCodeResponsePayload = {
    is_valid: false,
    message: "This QR code is invalid!",
  };

  const isValid = (lookup: DBCode[], code: string): boolean => {
    const c = lookup.find(c => c.code === code)
    if (c === null || c === undefined) return false;
    return Boolean(c.is_valid);
  }

  if (isValid(DBCodes, requestBody.code)) {
    response = {
      is_valid: true,
      message: "Congratulations, this QR code is valid!",
    } as CheckQRCodeResponsePayload;
  }

  res.json(response);
});