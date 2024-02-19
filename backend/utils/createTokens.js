import jwt from 'jsonwebtoken';

const generateToken = (res, organizerId) => {
    console.log(organizerId);
    const token = jwt.sign(
        { id: organizerId },
        process.env.JWT_SECRET,
        { expiresIn: '90d' }
    );
        console.log(token);
    // Setting cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 90 * 24 * 60 * 60 * 1000 // 90 days
    });

    return token;
}


export default generateToken;