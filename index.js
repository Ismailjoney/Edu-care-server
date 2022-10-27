const express =require('express');
const app =express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
//get data
const courseCategories = require('./data/courseitem.json');
const course = require(`./data/course.json`);
 
 



//testing purpuse
app.get('/',(req, res) => {
    res.send('learning website')
})

 


//get categories nav
app.get('/coursecategories', (req,res) =>{
    res.send(courseCategories)
})

//courses 6 tar name er api aita dekhe hasis na tor jorno likhci
app.get('/course',(req,res) =>{
    res.send(course)
})
// specifice news 6 ta news er specifice id
app.get('/course/:id',(req,res)=>{
    id = req.params.id;
    const selectedCourse= course.find(c => c.id === id)
    console.log(selectedCourse)
    res.send(selectedCourse)
})


app.listen(port, () => {
    console.log(`running.....`)
})
