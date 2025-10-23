import * as userService from '../services/user_service.js';

export const createUser = async (req, res) => {
    const data = req.body;
    try {
        const user = await userService.createUser(data);
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getAllUsers = async (req, res) => {
    try {
        const users = await userService.readUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


export const getUserById = async (req, res) => {
    const { user_id } = req.params;
    try {
        const user = await userService.readUserById(user_id);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const updateUserById = async (req, res) => {
    const { user_id } = req.params;
    const updateData = req.body;
    try {
        const updatedUser = await userService.updateUser(user_id, updateData);
        if (!updatedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const deleteProductById = async (req, res) => {
    const { user_id } = req.params;
    try {
        const deletedUser = await userService.deleteUser(user_id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'Usuario no encontrado.' });
        }
        res.json(deletedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}