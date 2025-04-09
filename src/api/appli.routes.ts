import express from 'express';
import {
  applicationCreate,
  applicationWork,
  applicationComplete,
  applicationReject,
  applicationGet,
  applicationRejectInWork,
} from './appli.controller';

const router = express.Router();

// Routes
router.get('/appli/get', applicationGet);

router.post('/appli/create', applicationCreate);
router.post('/appli/work', applicationWork);
router.post('/appli/complete', applicationComplete);
router.post('/appli/reject', applicationReject);
router.post('/appli/rejectinwork', applicationRejectInWork);

export default router;
