const asyncHandler = require('express-async-handler');
const Data = require('./model')

const getData = asyncHandler(async(req,res)=>{
    try {
        const dataQuery = req.query;
    
        const data = await Data.find(dataQuery);

    res.status(200).json(data);
    } catch (error) {
        res.status(404);
      throw new Error('No data found');
    }
})

const setData = asyncHandler(async(req,res)=>{
    const {text} = req.body
    if(!text){
        res.status(400);
        throw new Error('Please add a task')
    }

    const newData = await Data.create({text})

    res.status(200).json(newData)
})

const updateData = asyncHandler(async(req, res) => {
    const updatedData = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
    if (!updatedData) {
        res.status(400);
        throw new Error('Data not found');
    }
    
    res.status(200).json(updatedData);
});

const deleteData = asyncHandler(async(req,res)=>{
    const deletedData  =await Data.findByIdAndDelete(req.params.id);

    if(!deletedData){
        res.status(400);
        throw new Error('Data not found')
    }

    res.status(200).json(deletedData)
})
module.exports = {getData,setData,updateData,deleteData}