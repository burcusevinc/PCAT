const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

//TEMPLATE ENGINE
//template engine olarak "ejs" kullanılacak.
//views içindeki .html uzantılı dosyalar .ejs uzantılı yapılır
app.set("view engine","ejs")


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
  //res.sendFile(path.resolve(__dirname,'temp/index.html'))

  res.render('index')
})

app.get('/about', (req,res) => {
  res.render('about')
})
app.get('/add', (req,res) => {
  res.render('add')
})

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
