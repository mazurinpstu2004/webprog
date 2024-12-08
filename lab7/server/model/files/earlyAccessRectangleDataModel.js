const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const filePath = join(__dirname, "..", "..", "db", "files", "earlyAccessRectangleData.json");

const getEarlyAccessRectangleDataModel = () => {
    try {
        const file = readFileSync(filePath, "utf-8");
        console.log(file);

        return JSON.parse(file);
    } catch (error) {
        console.log(error);
        throw new Error("Не получилось прочитать данные из файла");
    }
}

const postEarlyAccessRectangleDataModel = (data) => {
    try {
        writeFileSync(filePath, data);
    } catch (error) {
        console.log(error);
        throw new Error("Не получилось записать данные в файл");
    }
}

module.exports = { getEarlyAccessRectangleDataModel, postEarlyAccessRectangleDataModel }