import asyncHandler from "../middlewares/asyncHandler.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
import Item from "../models/items.js";

const createItem = asyncHandler(async (req, res) => {
    // console.log(req.files);
    // console.log(req.body);
    const { name, category, detail, price,fixedIncrement,rules } = req.body;

    if (!name || !category || !detail || !price || !fixedIncrement ||!rules) {
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
        fixedIncrement,
        rules,
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
            fixedIncrement: newItem.fixedIncrement,
            rules: newItem.rules,
            organizer: newItem.organizer
        });
    } catch (error) {
        res.status(400);
        console.log("Invalid data");
        throw new Error("Invalid Data!");
    }
});

const getAllItems = asyncHandler(async (req, res) => {
    const {name}=req.query;
    const queryobject={};

    if(name){
        queryobject=name;
        console.log(queryobject);
    }
    const items = await Item.find(queryobject);
    res.json(items);
});

export { getAllItems, createItem };
