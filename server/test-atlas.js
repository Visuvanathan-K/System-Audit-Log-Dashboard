const mongoose = require("mongoose");

const uri =
  "mongodb+srv://auditadmin:Vishwa3108@cluster0.ajrvgca.mongodb.net/system_audit_dashboard?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ Atlas Connected");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });