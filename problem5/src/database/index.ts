// Import the Sequelize module from sequelize-typescript
import { Sequelize } from "sequelize-typescript";

// Create a new Sequelize instance with the connection configuration
const connection = new Sequelize({
  dialect: 'sqlite',
 storage: './database.sqlite'
});

// Export the connection object as the default module
export default connection;