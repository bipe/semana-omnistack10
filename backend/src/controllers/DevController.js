const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const {findConnections, sendMessage} = require('../websocket');

//geralmente usamos apenas 5 funções
//index(mostrar lista), show(mostrar um), store(criar), update(editar) e destroy

module.exports = {

    async index(request, response) {
        const devs = await Dev.find(); //passível de fazer filtros dentro de find (como nome:'fulado')
        return response.json(devs);
    },

    async store(request, response){ //uso de async e await devido a resposta poder demorar (api externa)
        const { github_username, techs, latitude, longitude } = request.body;
    
        //aqui usando Let por ser VARIAVEL e nao constante - dentro da função ocorrerá sobreposição dos valores
        let dev = await Dev.findOne({ github_username }); //procura no DB se ja existe alguem com o mesmo user recebido
        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);  //quando se usa crase ao inves de aspas, podemos usar variaveis (template strings)
    
            const{ name = login, avatar_url, bio} = apiResponse.data;  //desestruturando resposta da api. Obs: name = login significa que, na falta de um nome, o login sera armazenado em name
        
            const techsArray = parseStringAsArray(techs);
        
            const location = { //type e coordinates sao os campos definidos em PointSchema
                type: 'Point',
                coordinates: [longitude, latitude], //nessa ordem, para o mongoDB
            };
        
             dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })

            //Filtrar as conexões que estao no raio de 10km e que o novo dev tenha pelo menos uma das techs buscadas

            const sendSocketMessageTo = findConnections(
                {latitude, longitude },
                techsArray,
            )
            
            sendMessage(sendSocketMessageTo, 'new-dev', dev);
        }

        return response.json(dev);
    },
};