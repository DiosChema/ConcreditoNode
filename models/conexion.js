async function crearConexion(mongoClient) 
{
  const uri = require("../auth.json").token;
  const client = new mongoClient(uri);
  
  try 
  {
    await client.connect();
      
    return await client;
  } catch (e) {
    console.error(e);
    await client.close();
  }
}

async function conexionProspectos(client){

  const dbName = require("../db.json").prospectos.nameDB;

  var dboProspectos = await client.db(dbName);
  return await dboProspectos
}

module.exports = {
  crearConexion: crearConexion,
  conexionProspectos: conexionProspectos
}