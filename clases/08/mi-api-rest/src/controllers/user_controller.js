import * as userService from '../services/user_service.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await userService.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createUser = async (req, res) => {
    try {
        const user = await userService.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};