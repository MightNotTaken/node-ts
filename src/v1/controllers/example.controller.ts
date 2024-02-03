import { Request, Response } from "express";
class ExampleController {
    public async func(req: Request, res: Response) {
        try {
            res.status(200).json({
                status: true
            })
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

const exampleController = new ExampleController();
export default exampleController;