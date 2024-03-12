const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('ap3DUp7Pri', uuidlib.v4());
	}

module.exports = generateId
