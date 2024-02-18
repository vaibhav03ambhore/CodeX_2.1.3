import asyncHandler from "../middlewares/asyncHandler.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import Item from "../models/items.js";

const createItem = asyncHandler(async (req, res) => {
    const { name, category, detail, price } = req.body;

    if (!name || !category || !detail || !price) {
        console.log("Please fill all the details!");
        throw new Error("Please fill all the details!!");
    }

    const imageLocalPath = req.files?.image[0]?.path;
    if (!imageLocalPath) {
        console.log("Please provide the image local path");
        throw new Error("Please provide the image local path");
    }

    const uploadedImage = await uploadOnCloudinary(imageLocalPath);
    if (!uploadedImage) {
        console.log("Provide an image!!");
        throw new Error("Image missing!");
    }

    const newItem = new Item({
        name,
        category,
        image: uploadedImage.url || "", 
        detail,
        price,
        organizer: req.organizer._id 
    });

    try {
        await newItem.save();

        res.status(201).json({
            _id: newItem._id,
            name: newItem.name,
            category: newItem.category,
            image: newItem.image,
            detail: newItem.detail,
            price: newItem.price,
            organizer: newItem.organizer
        });
    } catch (error) {
        res.status(400);
        console.log("Invalid data");
        throw new Error("Invalid Data!");
    }
});

const getAllItems = asyncHandler(async (req, res) => {
    const items = await Item.find({});
    res.json(items);
});

export { getAllItems, createItem };
