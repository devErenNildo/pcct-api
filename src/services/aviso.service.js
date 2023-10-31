import Warning from '../models/Warning.js';

const avisoServiceFindAll = () => Warning.find().sort({_id: -1}).populate('user');

const avisoServiceCreate = (body) => Warning.create(body);

export { avisoServiceFindAll, avisoServiceCreate };