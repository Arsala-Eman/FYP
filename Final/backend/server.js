const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect('mongodb://localhost:27017/claims_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Schema and Model
const claimSchema = new mongoose.Schema({
  patientName: String,
  fatherName: String,
  policyNo: String,
  beneId: String,
  claimId: String,
  provider: String,
  inscClaimAmtReimbursed: String,
  attendingPhysician: String,
  otherPhysician: String,
  admissionDt: String,
  doctorName: String,
  clmAdmitDiagnosisCode: String,
  deductibleAmtPaid: String,
  dischargeDt: String,
  diagnosisGroupCode: String,
  DiagnosisCode_1: String,
  DiagnosisCode_2: String,
  DiagnosisCode_3: String,
  DiagnosisCode_4: String,
  DiagnosisCode_5: String,
  DiagnosisCode_6: String,
  DiagnosisCode_7: String,
  DiagnosisCode_8: String,
  DiagnosisCode_9: String,
  DiagnosisCode_10: String,
  ClmProcedureCode_1: String,
  ClmProcedureCode_2: String,
  ClmProcedureCode_3: String,
  ClmProcedureCode_4: String,
  ClmProcedureCode_5: String,
  ClmProcedureCode_6: String,
});

const Claim = mongoose.model('Claim', claimSchema);

// API Route to Submit Data
app.post('/submit-claim', async (req, res) => {
  try {
    console.log('Received data:', req.body);
    const newClaim = new Claim(req.body);
    await newClaim.save();
    res.status(200).send({ message: 'Claim submitted successfully!' });
  } catch (error) {
    console.error('Error saving claim:', error);
    res.status(500).send({ message: 'Failed to submit claim', error });
  }
});

// Start the Server
const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
