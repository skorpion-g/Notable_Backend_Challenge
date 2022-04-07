const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Create new appt to a doctor's calander
app.post('/apptList/:drid/:date', async (req, res) => {
    const { drid } = req.params;
    const { ptid } = req.body;
    const { date } = req.body;
    const { time } = req.body;
    const { first } = req.body;
    const { last } = req.body;
    const { kind } = req.body;
    if (helper(time) % 15 !== 0) {
        res.status(418).send({message: 'Time must be in intervals of 15 minutes!'})
    }
    let slots = [];
    let check = await app.get('/apptList/:drid/:date', (req, res) => {
        // ran out of time. Populate arr w/ res and count it to make sure it doesn't surpass three. Satisfying requirement of patient limit per time,
    })
});

app.post('/doctorList/submit', (req, res) => {
    const { drid } = req.body;
    const { first } = req.body;
    const { last } = req.body;

    res.send({
        doctor: `${last}, ${first} with ID of ${drid}`
    })
})

// Get list of all doctors
app.get('/doctorList/:drid', (req, res) => {
    console.log(res.body);
    res.send(res.body);
});

// Get list of specific doctor's list per date
app.get('/apptList/:drid/:date', (req, res) => {
    res.status(200)
});

// Delete specific appt with doctor at certain date
app.delete('./apptList/:drid/:ptid/:date', (req, res) => {
    res.status(200)
})

app.listen(port,() => console.log(`Server running on http://localhost:${port}`))

// Helper function to conv normal HHMMSS time into minutes to determine if in 15 min intervals.
let helper = (hhmmss) => {
    let conv = hhmmss.split(':');
    let s = 0;
    let m = 1;

    while (conv.length > 0) {
        s += m * parseInt(conv.pop(), 10);
    }
    return m;
}