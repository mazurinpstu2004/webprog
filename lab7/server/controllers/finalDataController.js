const isFinalDataValid = require("../validators/isFinalDataValid");

const {
    getFinalDataModel,
    postFinalDataModel,
} = require("../model/files/finalDataModel");

const getFinalData = (req, res, next) => {
    try {
        const data = getFinalDataModel();

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const postFinalData = (req, res, next) => {
    try {
        const data = req.body;

        isFinalDataValid(data);

        postFinalDataModel(JSON.stringify(data));
        res.status(200).json({
            message: "Данные успешно обновлены",
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

module.exports = { getFinalData, postFinalData }