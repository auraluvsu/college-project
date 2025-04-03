import { Router, Request, Response } from "express";

const router = Router();

interface User {
    id: number;
    name: string;
}

let users: User[] = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
];

// Get all users
router.get("/", (req: Request, res: Response) => {
    res.json(users);
});

// Get a user by ID
router.get("/:id", (req: Request, res: Response) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
});

// Add a new user
router.post("/", (req: Request, res: Response) => {
    const newUser: User = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.status(201).json(newUser);
});

export default router;

