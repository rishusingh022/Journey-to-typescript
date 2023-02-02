const userServices = require('../services/userServices');

const getUser = async (req,res) => {
    const users = await userServices.getUserService();
    return res.status(200).json({
        message : 'Users fetched succesfully',
        data : users,
    });
};
const createUser = async(req,res) => {
    const user = await userServices.createUserService(req.body);
    return res.status(201).json({
        message : 'User created successfully',
        data : user,
    });
};
module.exports ={
    getUser,
    createUser,
};