import * as express from 'express';

import CatCtrl from './controllers/cat';
import Cat from './models/cat';

export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();

  // Cats
  router.route('/cats').get(catCtrl.getAll);
  router.route('/cats/count').get(catCtrl.count);
  router.route('/cat').post(catCtrl.insert);
  router.route('/cat/:id').get(catCtrl.get);
  router.route('/cat/:id').put(catCtrl.update);
  router.route('/cat/:id').delete(catCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
