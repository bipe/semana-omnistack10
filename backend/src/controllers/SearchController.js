const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
        //Buscar todos os devs num raio de 10km e 
        //Filtrar por tecnologias

        const { latitude, longitude, techs} = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                //operador logico do mongo - procurar por Operators no MongoDB manual
                $in: techsArray, //retorna devs cujas techs estejam IN techsarray (filtro da requisição)
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude], //nessa ordem
                    },
                    $maxDistance: 10000, //em metros, 10km
                },
            },
        });
        return response.json({ devs });
    }
}