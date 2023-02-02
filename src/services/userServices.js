const Users =[];
let currentId = 1 ;

export const getUserService = async() => {
    return Users;
};
export const createUserService = async(userDetails) => {
    const user = {id:currentId++, ...userDetails};
    Users.push(user);
    return user;
};
// module.exports = {
//     getUserService,
//     createUserService,
// };