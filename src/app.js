// // const {emailTemplate} = require('./js-foundation/01-template');
// // require('./js-foundation/02-destructuring');
// // const {getUserById} = require('./js-foundation/03-callbacks');
// const {getUserById} = require('./js-foundation/04-arrow');



// // console.log(emailTemplate);

// const id = 2;

// getUserById( id, ( error, user ) => {
    
//     if(error) throw new Error(error);

//     getUserById(1, (error, user2) => {
//         if(error) throw new Error(error);

//         console.log({
//             user,
//             user2
//         });
//     })
// });

// dependencias.
// const {getAge, getUUID} = require('./plugins');

// const {buildMakePerson} = require('./js-foundation/05-factory');



// const makePerson = buildMakePerson({getUUID, getAge});

// const obj = {name: 'monica', birthdate: '1994-07-03'};

// const monica = makePerson(obj);

// console.log({monica});

const getPokemonById = require('../src/js-foundation/06-promise');

// getPokemonById(3, (pokemon) =>{
//     console.log(pokemon);
// })

getPokemonById(4)
    .then((pokemon) => console.log({pokemon}))
    .catch( (error) => console.log(error))
    .finally( () => console.log('Finalmente'));