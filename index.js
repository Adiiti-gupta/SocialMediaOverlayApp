const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const upload = multer ({ dest: 'uploads/'});

app.post('/detect-product', upload.single('image'), (req, res) => {
  // Simulated response
  res.json({ product: 'Detected Product Example', price: '$99' });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});

const { exec } = require('child_process');

app.post('/detect-product', upload.single('image'), (req, res) => {
  exec(python3 ocr.py ${req.file.path}, (err, stdout) => {
    if (err) {
      return res.status(500).send(err.toString());
    }
    res.json({ product: stdout.trim() });
  });
});