import logger from 'jet-logger';
import getMedicines from './getMedicines';
import Patient from './Patient';

const patient = new Patient(true,'niskie',true,true,false);


// ERROR: Error: Error on DecisionTable(Patients) : The operation must began with 
// the Fact's attribute, contain one operator, and end with "$param". Operation: "sugar >= $param AND pulse <= $param AND hyperthension == $ param"


(async () => {
  const p = (total: string) => logger.info('finish ' + total + '\n')
  let medicinesToTake = await getMedicines(patient);
  p(medicinesToTake);
})();
