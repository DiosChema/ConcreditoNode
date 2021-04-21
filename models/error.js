function manejarRespuesta(error)
{
  var respuesta = {status : error, mensaje: ''}

  switch(error)
  {
    case 0:
      respuesta.mensaje = ""
      break
    case 1:
      respuesta.mensaje = "Error interno del sistema, si el error continua comuniquese con el equipo de desarrollado y reporte esta falla."
      break
    case 2:
      respuesta.mensaje = "Error al obtener la base de datos, si el error continua comuniquese con el equipo de desarrollado y reporte esta falla."
      break
    default:
      respuesta.mensaje = "Error en el sistema, si el error continua comuniquese con el equipo de desarrollado y reporte esta falla."
      break
  }

  return respuesta

}

module.exports = {
  manejarRespuesta: manejarRespuesta
}