async function getNextSequenceValue(dbo,sequenceName){

  const dbTable = require("../db.json").prospectos.secuencias.nameTableSecuencias;

  let result = await dbo.collection(dbTable).findOneAndUpdate(
    {_id: sequenceName},
    {
      $inc: {
      sequence_value:1
      }
    }
  )
  
  return await result.value.sequence_value
}

module.exports = {
  getNextSequenceValue: getNextSequenceValue
}