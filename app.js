const express = require('express');
const path = require('path');

const app = express();


const myLoggler = (req,res,next) => {
  //request middleware: (req)
  console.log("Middleware log 1")
  //bir sonraki middleware'e ilerlemesi için yazılır
  //yani response alır. (res)
  next()
}

//MIDDLEWARE
//express.static -> middleware function
//public -> static dosyalar
app.use(express.static('public'))
app.use(myLoggler)

// app.get('/', (req,res) => {
//     const photo = {
//         id: 1,
//         name: "Photo Name",
//         description: "Photo description"
//       }
//       res.send(photo)
// })

app.get('/', (req,res) => {
  //path modulu kullanıldı
  //resolve:dosya yolunu çözmesi için
  res.sendFile(path.resolve(__dirname,'temp/index.html'))
})

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
