// const {getAge} = require('../plugins/get-age.plugin');
// const {getUUID} = require('../plugins/get-id.plugin');
// const {getAge, getUUID} = require('../plugins');

const buildMakePerson = ({getUUID, getAge}) => {

    return ({name, birthdate}) => {
        
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        }
    }

}

// const buildPerson =  ({name, birthdate}) => {
//     return {
//         id: getUUID(),
//         name: name,
//         birthdate: birthdate,
//         age: getAge(birthdate),
//     }
// }

// const obj = {name: 'Cristian', birthdate: '1991-10-10'};
// const cristian = buildPerson(obj);

// console.log(cristian);

module.exports = {
    buildMakePerson,
}