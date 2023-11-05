import User from '../models/User.js'

export const createUser = async (req, res) => {
    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save()
        res.status(200).json({
            success: true,
            message: 'Successfully created',
            data   : savedUser
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to create'
        })
    }
}

// update
export const updateUser = async (req, res) => {
    const id = req.params.id

    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, {new: true})

        res.status(200).json({
            success: true,
            message: 'Successfully update',
            data   : updatedUser
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to update'
        })
    }
}

// delete
export const deleteUser = async (req, res) => {
    const id = req.params.id

    try {
        await User.findByIdAndDelete(id)

        res.status(200).json({
            success: true,
            message: 'Successfully delete',            
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete'
        })
    }
}

// getSingle
export const getSingleUser = async (req, res) => {
    const id = req.params.id

    try {
        const user = await User.findById(id)

        res.status(200).json({
            success: true,
            message: 'Successfully get User',
            data   : user
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Data not found'
        })
    }
}

// getAll
export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({})

        res.status(200).json({            
            success: true,
            message: 'Successfully get User',
            data   : users
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Data not found'
        })
    }
}