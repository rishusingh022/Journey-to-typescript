const Users =[];
let currentId = 1 ;
const getUserService = async() => {
    return Users;
};
const createUserService = async(userDetails) => {
    const user = {id:currentId++, ...userDetails};
    Users.push(user);
    return user;
};
module.exports = {
    getUserService,
    createUserService,
};