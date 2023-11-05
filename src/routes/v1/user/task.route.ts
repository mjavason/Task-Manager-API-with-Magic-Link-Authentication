import { Router } from 'express';
const router = Router();
import {
  processRequestBody,
  processRequestParams,
  processRequestQuery,
} from 'zod-express-middleware';
import { taskController } from '../../../controllers';
import { taskValidation } from '../../../validation';

router.get('/search', processRequestQuery(taskValidation.find.query), taskController.find);

router.get('/count', processRequestQuery(taskValidation.find.query), taskController.getCount);

router.get('/exists', processRequestQuery(taskValidation.find.query), taskController.exists);

router.get('/', taskController.getAll);

router.get('/:pagination', taskController.getAll);

router.post('/', processRequestBody(taskValidation.create.body), taskController.create);

router.patch('/:id', processRequestBody(taskValidation.update.body), taskController.update);

router.delete('/:id', processRequestParams(taskValidation.delete.params), taskController.delete);

export default router;
