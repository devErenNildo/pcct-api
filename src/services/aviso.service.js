import Warning from '../models/Warning.js';

const avisoServiceFindAll = () => Warning.find();

const avisoServiceCreate = (body) => Warning.create(body);

export { avisoServiceFindAll, avisoServiceCreate };