const { v4: uuidv4 } = require('uuid');

module.exports = {

    InsertData: (data) => {
        const AddData = `Insert into dammy.userdata (iddata,iduser,dept,blood,address) value ('${uuidv4()}','${data.iduser}','${data.dept}','${data.blood}','${data.address}')`
        return AddData
    }
}

