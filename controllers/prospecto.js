async function obtenerProspecto(query)
{

  let mongoClient = require("mongodb").MongoClient;
  let conexionModel = require('../models/conexion.js')
  let prospectoModel = require('../models/prospecto.js')
  let manejarRespuesta = require('../models/error.js')

  let client

  try
  {
    client = await conexionModel.crearConexion(mongoClient);
    let dboProspectos = await conexionModel.conexionProspectos(client)

    if(!dboProspectos)
    {
      return await manejarRespuesta.manejarRespuesta(2)
    }

    return await prospectoModel.obtenerProspecto(dboProspectos, query);
  }
  catch(e)
  {
    console.error(e);
    return await manejarRespuesta.manejarRespuesta(1)
  }
  finally
  {
    await client.close();  
  }

}

async function darAltaProspecto(query)
{

  let mongoClient = require("mongodb").MongoClient;
  let conexionModel = require('../models/conexion.js')
  let prospectoModel = require('../models/prospecto.js')
  let manejarRespuesta = require('../models/error.js')
  let generalModel = require('../models/general.js')

  let secuenciaName = require("../db.json").prospectos.secuencias.nameSecuenciaProspectos;
  let client

  try
  {
    client = await conexionModel.crearConexion(mongoClient);
    let dboProspectos = await conexionModel.conexionProspectos(client)

    if(!dboProspectos)
    {
      return await manejarRespuesta.manejarRespuesta(2)
    }

    query.consecutivo = await generalModel.getNextSequenceValue(dboProspectos,secuenciaName)
    return await prospectoModel.darAltaProspecto(dboProspectos, query);
  }
  catch(e)
  {
    console.error(e);
    return await manejarRespuesta.manejarRespuesta(1)
  }
  finally
  {
    await client.close();  
  }

}

async function actualizarProspecto(query)
{

  let mongoClient = require("mongodb").MongoClient;
  let conexionModel = require('../models/conexion.js')
  let prospectoModel = require('../models/prospecto.js')
  let manejarRespuesta = require('../models/error.js')

  let client

  try
  {
    client = await conexionModel.crearConexion(mongoClient);
    let dboProspectos = await conexionModel.conexionProspectos(client)

    if(!dboProspectos)
    {
      return await manejarRespuesta.manejarRespuesta(2)
    }

    await prospectoModel.actualizarProspecto(dboProspectos, query);

    return await manejarRespuesta.manejarRespuesta(0)
  }
  catch(e)
  {
    console.error(e);
    return await manejarRespuesta.manejarRespuesta(1)
  }
  finally
  {
    await client.close();  
  }

}

async function obtenerProspectos()
{

  let mongoClient = require("mongodb").MongoClient;
  let conexionModel = require('../models/conexion.js')
  let prospectoModel = require('../models/prospecto.js')
  let manejarRespuesta = require('../models/error.js')

  let client

  try
  {
    client = await conexionModel.crearConexion(mongoClient);
    let dboProspectos = await conexionModel.conexionProspectos(client)

    if(!dboProspectos)
    {
      return await manejarRespuesta.manejarRespuesta(2)
    }

    return await prospectoModel.obtenerProspectos(dboProspectos);
  }
  catch(e)
  {
    console.error(e);
    return await manejarRespuesta.manejarRespuesta(1)
  }
  finally
  {
    await client.close();  
  }

}

module.exports = {
  obtenerProspecto: obtenerProspecto,
  darAltaProspecto: darAltaProspecto,
  actualizarProspecto: actualizarProspecto,
  obtenerProspectos: obtenerProspectos
}