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
    Documentos: []
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

async function guardarDocumento(dbo,documento, query)
{
  const dbTableDocumentos = require("../db.json").prospectos.Documentos;
  const dbTableProspectos = require("../db.json").prospectos.nameTableProspectos;
  var filesrc = './public/files/'+ documento.originalname;

  var datosDocumento = 
  {
    _id: documento.originalname,
    ruta: filesrc
  }

  await dbo.collection(dbTableDocumentos).insertOne(datosDocumento)

  var prospecto = 
  {
    _id: parseInt(query.id)
  }

  var datosProspecto = 
  {
    $push: 
    {
      Documentos : 
      {
        id: documento.originalname,
        nombre: query.originalname
      }      
    }
  }

  await dbo.collection(dbTable).findOneAndUpdate(prospecto, datosProspecto)

}

module.exports = {
  obtenerProspecto: obtenerProspecto,
  darAltaProspecto: darAltaProspecto,
  actualizarProspecto: actualizarProspecto,
  obtenerProspectos: obtenerProspectos,
  guardarDocumento: guardarDocumento
}