const
  express = require('express'),
  app = require('express'),
  PORT = 3000


app.get('/', (req, res) => {
  res.json({ message: "BOOM BANANA BOOM" })
})

app.listen(PORT, () => {
  console.log("It's Alive.")
})

