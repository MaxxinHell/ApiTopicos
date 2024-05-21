const express = require("express");
const cors = require("cors");



const app = express();


app. use(express.json());
app. use(cors());




app.listen(3000,()=>console.log("corriendo"));


const listaTareas = [];
var contador = 0;


app.get("/",(req,res)=>{
    res.json(listaTareas);
})


app.post("/",(req,res)=>{
    const tarea = req.body.tarea || null;
    if(tarea){
        const nuevaTarea ={
            id:contador++,
            tarea: tarea
        };
    
        listaTareas.push(nuevaTarea);
    
        res.json({message:"Tarea Agregada correctamente"});
    }else{
        res.status(500).json({message: "No se pudo encontrar en el metodo POST la tarea enviada"})
    }
});