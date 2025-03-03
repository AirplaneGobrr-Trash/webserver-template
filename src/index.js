const { express, app, server, io } = require("./helpers/web")

app.get("/", (req, res)=>{
    res.render("home")
})

io.on("connection", (socket)=>{
    console.log(`User (${socket.id}) conencted`)
})

server.listen(3000, ()=>{
    console.log("Web server running on :3000")
})