import { initializeDataSource } from './config/data-source';
import { exec } from 'child_process';

initializeDataSource()
  .then(() => {
    console.log('Data Source has been initialized!')
    exec(
      'npx typeorm migration:generate -n AddEmailToMerchant',
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error during migration generation: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Error during migration generation: ${stderr}`);
          return;
        }
        console.log(`Migration generated successfully: ${stdout}`);
      },
    );
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
