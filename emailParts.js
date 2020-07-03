// Reverses a string.
function emailParts(string) {

  let userName = string.match(/^\w+/g).toString().toLowerCase();
  let domainName = string.match(/\b@\w+([.]*)\w*/g).toString().toLowerCase();

  let emailSplit = {};
  emailSplit["User Name"] = userName;
  emailSplit["Domain Name"] = domainName;
  return emailSplit;
}

//.toLowerCase()
