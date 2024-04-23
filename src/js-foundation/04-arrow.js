const users = [
    {
        id: 1,
        name: 'Jonh Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    },
];

function getUserById(id, callback )
{

    // const user = users.find( (user) => {
    //     return user.id === id;
    // });

    // metodo mas abreviado
    const user = users.find( (user) => user.id === id);

    // if(!user){
    //     return callback(`User not found with id ${id}`);
    // }

    // return callback(null, user);

    (user) ? callback(null, user) : callback(`User not found with id ${id}`);
}

module.exports = {
    getUserById,
}