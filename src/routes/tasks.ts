import { Request, Response, Router } from "express";
import Task from "../models/task";

const router = Router();

// router.get("/create", (req: Request, res: Response) => {
//   res.render("index");
// });

router
  .route("/create")
  .get((req: Request, res: Response) => {
    res.render("tasks/create"); //para visualizar algo
  })
  .post(async (req: Request, res: Response) => {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    await newTask.save();
    res.redirect("/tasks/list");
  });

router.route("/list").get(async (req: Request, res: Response) => {
  const tasks = await Task.find().lean();
  res.render("tasks/list", { tasks });
});

router.route("/delete/:id").get(async (req: Request, res: Response) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect("/tasks/list");
});

router
  .route("/edit/:id")
  .get(async (req: Request, res: Response) => {
    const task = await Task.findById(req.params.id).lean();
    res.render("tasks/edit", { task });
  })
  .post(async (req: Request, res: Response) => {
    const { title, description } = req.body;
    await Task.findByIdAndUpdate(req.params.id, { title, description });
    res.redirect("/tasks/list");
  });

export default router;
