import { Router } from 'express';
import { ResourcesRoutes } from './resources';


const router: Router = Router();


router.use('/resources', ResourcesRoutes);


export const MainRouter: Router = router;
