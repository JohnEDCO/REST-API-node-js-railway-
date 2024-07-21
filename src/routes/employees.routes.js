import { Router } from "express";
import { getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployee} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);
router.post("/employees", createEmployee);
router.post("/employee/:id", getEmployee);
router.patch("/employee/:id", updateEmployee);
router.delete("/employee/:id", deleteEmployee);

export default router;
