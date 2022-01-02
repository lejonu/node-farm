const fs = require("fs")

// Blocking, synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8")
// console.log(textIn)

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`

// fs.writeFileSync("./txt/output.txt", textOut)
// console.log("File written")

// Non-Blocking, asynchronous way
try {
  fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
    if (err) return console.log(err)
    fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
      if (err) return console.log(err)
      fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
        if (err) return console.log(err)
        console.log(data1 + ":", data3)

        fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", err => {
          if (err) return console.log(err)
          console.log("Your file has been written")
        })
      })
    })
  })
} catch (error) {
  console.log(error)
}

console.log("Will read file")
