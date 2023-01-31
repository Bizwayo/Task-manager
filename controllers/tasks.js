



const getAllTasks = (req,res) =>{
    res.send("all routes");
}

//app.post('/api/v1/tasks')
const createTask = (req,res)=>{
    res.send(req.body);
}

const getTask = (req,res)=>{
    res.send('get single task');
}

const updateTask = (req,res)=>{
    res.send('update task');
}

const deleteTask = (req,res)=>{
    res.send('delete task');
}
//app.get('/api/v1/tasks/:id')
//app.patch('/api/v1/tasks:id')
//app.delete('/api/v1/tasks/:id')

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}