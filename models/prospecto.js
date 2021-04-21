async function obtenerProspecto(dbo,query){

  const dbTable = require("../db.json").prospectos.nameTableProspectos;

  var datosProspecto = 
  {
    _id: parseInt(query.id)
  }

  return await dbo.collection(dbTable).findOne(datosProspecto)

}

async function darAltaProspecto(dbo,query){

  const dbTable = require("../db.json").prospectos.nameTableProspectos;

  var datosProspecto = 
  {
    _id: query.consecutivo,
    Nombre: query.nombre,
    ApellidoP: query.apellidoP,
    ApellidoM: query.apellidoM,
    Calle: query.calle,
    Numero: parseInt(query.numero),
    Colonia: query.colonia,
    CodigoPostal: parseInt(query.codigoPostal),
    Telefono: parseInt(query.telefono),
    RFC: query.RFC,
    Estatus: 0,
    ObservacionRechazo: ""
  }

  await dbo.collection(dbTable).insertOne(datosProspecto)

}

async function actualizarProspecto(dbo,query){

  const dbTable = require("../db.json").prospectos.nameTableProspectos;

  var prospecto = 
  {
    _id: parseInt(query.id)
  }

  var datosProspecto = 
  {
    $set: 
    {
      Estatus: query.estatus,
      ObservacionRechazo: query.observacionRechazo
    }    
  }

  await dbo.collection(dbTable).findOneAndUpdate(prospecto, datosProspecto)

}

async function obtenerProspectos(dbo){

  const dbTable = require("../db.json").prospectos.nameTableProspectos;

  let fields = 
  {
    fields : 
    {
      Calle : 0,
      Numero : 0,
      Colonia : 0,
      CodigoPostal : 0,
      Telefono : 0,
      RFC : 0,
      ObservacionRechazo : 0
    }
  }

  return await dbo.collection(dbTable).find({}, fields).toArray()

}

module.exports = {
  obtenerProspecto: obtenerProspecto,
  darAltaProspecto: darAltaProspecto,
  actualizarProspecto: actualizarProspecto,
  obtenerProspectos: obtenerProspectos
}