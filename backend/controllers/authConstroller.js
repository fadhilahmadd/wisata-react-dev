import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// usr regist
export const register = async (req, res) => {
    try {

        // hash pswd
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        })

        await newUser.save()
        res.status(200).json({
            success: true,
            message: 'Successfully created'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'failed to create'
        })
    }
}

// usr login
export const login = async (req, res) => {
    const email = req.body.email

    try {
        const user = await User.findOne({ email })

        // user tdk ada
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'user tidak ditemukan'
            })
        }

        // jika user ada dan cek passwordnya
        const checkCorrectPassword = await bcrypt.compare(
            req.body.password,
            user.password
        )

        // jika pswd salah
        if (!checkCorrectPassword) {
            return res.status(401).json({
                success: false,
                message: 'email atau password salah'
            })
        }
        const { password, role, ...rest } = user._doc

        // buat jwt token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '15d' }
        )

        // set token
        res.cookie('accessToken', token, {
            httpOnly: true,
            expires: token.expiresIn
        }).status(200).json({
            token,
            data: { ...rest },
            role
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Login gagal'
        })
    }
}