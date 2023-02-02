// const userServices = require('../services/userServices');

import {getUserService,createUserService} from '../services/userServices.js'
export const getUser = async (req,res) => {
    const users = await getUserService();
    return res.status(200).json({
        message : 'Users fetched succesfully',
        data : users,
    });
};
export const createUser = async(req,res) => {
    const user = await createUserService(req.body);
    return res.status(201).json({
        message : 'User created successfully',
        data : user,
    });
};
// module.exports ={
//     getUser,
//     createUser,
// };