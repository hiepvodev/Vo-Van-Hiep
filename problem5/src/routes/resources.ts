import { Request, Response, Router } from 'express';
import Resource from '../database/models/resource';

const router: Router = Router();

router.get('/',  async function (req: Request, res: Response, next): Promise<any> {
  try{
    const query: any = {};
    let limit        = 20;
    let offset       = 0;

    if (typeof req.query.limit !== 'undefined') {
      limit = parseInt(req.query.limit as string);
      query.limit = limit;
    }

    if (typeof req.query.offset !== 'undefined') {
      offset = parseInt(req.query.offset as string);
      query.offset = offset;
    }

    if(typeof req.query.search !== 'undefined') {
      query.where = {
        $or: [
          { title: { $like: `%${req.query.search}%` } },
          { description: { $like: `%${req.query.search}%` } }
        ]
      };
    }

    const [resources, resourcesCount] = await Promise.all([
      Resource.findAll(query),
      Resource.count({ where: query.where }),
    ]);

    return res.json({ resources, resourcesCount });
  }catch (error) {
   next(error);
  }
});

router.post('/',  function (req: Request, res: Response, next): Promise<any> {
  try{
    if(!req.body.title || req.body.description) throw new Error('Title and description must be provided')

    const resource = new Resource({title: req.body.title, description: req.body.description});

    return resource.save().then(function () {
      return res.json({resource});
    });
  } catch (error) {
    next(error)
  }
});

// // return a resource
router.get('/:id',  function (req: Request, res: Response, next): Promise<any> {
  try{
    const resource = Resource.findByPk(req.params.id);

    if(!resource) throw new Error('Resource not found')

    return resource
  } catch (error) {
    next(error)
  }
});

// // update article
router.put('/:id',  async function (req: Request, res: Response, next): Promise<void> {
  try{
    const resource = Resource.findByPk(req.params.id);

    if(!resource) throw new Error('Resource not found')

    await Resource.update({title: req.body.title, description: req.body.description}, {where: {id: req.params.id}})
  } catch (error) {
    next(error)
  }
});

// delete resource
router.delete('/:id',  async function (req: Request, res: Response, next): Promise<void> {
  try{
    const resource = Resource.findByPk(req.params.id);

    if(!resource) throw new Error('Resource not found')

    await Resource.destroy({where: { id: req.params.id }})
  } catch (error) {
    next(error)
  }
});

export const ResourcesRoutes: Router = router;
