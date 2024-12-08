const isEarlyAccessRectangleDataValid = require("../validators/isEarlyAccessRectangleDataValid");

const {
    getEarlyAccessRectangleDataModel,
    postEarlyAccessRectangleDataModel,
} = require("../model/files/earlyAccessRectangleDataModel");

const getEarlyAccessRectangleData = (req, res, next) => {
    try {
        const data = getEarlyAccessRectangleDataModel();

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const postEarlyAccessRectangleData = (req, res, next) => {
    try {
        const data = req.body;

        isEarlyAccessRectangleDataValid(data);

        postEarlyAccessRectangleDataModel(JSON.stringify(data));
        res.status(200).json({
            message: "Данные успешно обновлены",
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

module.exports = { getEarlyAccessRectangleData, postEarlyAccessRectangleData };