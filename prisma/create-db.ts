// import { env } from 'process'
var pgtools = require("pgtools");
const { env } = require("process");


const config = {
  user: env.CLIQUESELL_DB_USER ?? 'postgres',
  host: env.CLIQUESELL_DB_HOST ?? 'localhost',
  password: env.CLIQUESELL_DB_PASSWORD ?? 'test',
  port: 5432
};

// export { }; // Nothing to export

console.log("Creating Database...")

pgtools.createdb(config, env.CLIQUESELL_DB_CATALOG ?? 'cliquesell_local', function (err, res) {
  if (err) {
    if (err.name = 'duplicate_database') {
     console.log("Database already exists") 
    }
    else {
      console.error(err);
      process.exit(-1);
    }
  }
  console.log(res);
});

