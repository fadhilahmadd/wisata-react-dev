import Tour from '../models/Tour.js'

export const createTour = async (req, res) => {
    const newTour = new Tour(req.body)

    try {
        const savedTour = await newTour.save()
        res.status(200).json({
            success: true,
            message: 'Successfully created',
            data   : savedTour
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to create'
        })
    }
}

// update
export const updateTour = async (req, res) => {
    const id = req.params.id

    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, {new: true})

        res.status(200).json({
            success: true,
            message: 'Successfully update',
            data   : updatedTour
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to update'
        })
    }
}

// delete
export const deleteTour = async (req, res) => {
    const id = req.params.id

    try {
        await Tour.findByIdAndDelete(id)

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
export const getSingleTour = async (req, res) => {
    const id = req.params.id

    try {
        const tour = await Tour.findById(id)

        res.status(200).json({
            success: true,
            message: 'Successfully get tour',
            data   : tour
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Data not found'
        })
    }
}

// getAll
export const getAllTour = async (req, res) => {

    // pagination
    const page = parseInt(req.query.page)

    try {
        const tours = await Tour.find({}).skip(page * 8).limit(8)

        res.status(200).json({            
            success: true,
            count  : tours.length,
            message: 'Successfully get tour',
            data   : tours
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Data not found'
        })
    }
}

// search
export const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try {
        const tours = await Tour.find({city, distance:{$gte:distance}, maxGroupSize:{$gte:maxGroupSize}})

        res.status(200).json({            
            success: true,            
            message: 'Successfully get tour',
            data   : tours
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Data not found'
        })
    }
}

// get featured
export const getFeaturedTour = async (req, res) => {
    try {
        const tours = await Tour.find({featured:true}).limit(8)

        res.status(200).json({            
            success: true,            
            message: 'Successfully get tour',
            data   : tours
        })
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Data not found'
        })
    }
}

// get tour counts
export const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount()

        res.status(200).json({
            success: true,
            data   : tourCount
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'failed fetch data'
        })
    }
}