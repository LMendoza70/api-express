const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const usersquema=require('./src/routes/users')
const moliendasquema=require('./src/routes/molienda')
const presentacionsquema=require('./src/routes/presentacion')
const variedadsquema=require('./src/routes/variedad')

const app =express()
const port= process.env.port||3000

//midlewares
app.use(express.json())

//rutas
app.use('/api',usersquema)
app.use('/api',moliendasquema)
app.use('/api',presentacionsquema)
app.use('/api',variedadsquema)

app.get('/',(req,res)=>{
    res.json({"response":"esto es mmi primer servidor"})
})
//coneccion con la base de dato
mongoose.connect(process.env.mongouri)
.then(()=>console.log('conectado'))
.catch(error=>console.log(error))
app.listen(port,()=>{
    console.log('corriendo en el puerto '+port)
})
