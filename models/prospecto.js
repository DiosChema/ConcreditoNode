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

  var documentos

  var datosProspecto = 
  {
    _id: query.consecutivo,
    Nombre: query.Nombre,
    ApellidoP: query.ApellidoP,
    ApellidoM: query.ApellidoM,
    Calle: query.Calle,
    Numero: parseInt(query.Numero),
    Colonia: query.Colonia,
    CodigoPostal: parseInt(query.CodigoPostal),
    Telefono: parseInt(query.Telefono),
    RFC: query.RFC,
    Estatus: 0,
    ObservacionRechazo: "",
    Documentos: query.DocumentoObj
  }

  let respuesta = await dbo.collection(dbTable).insertOne(datosProspecto)

  return await respuesta.ops[0]

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