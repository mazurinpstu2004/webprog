export const createEarlyAccessRectangle = (id) => {
    return `
        <id = "${id}">
    `;
};

export const createEarlyAccessRectangleLowText = (text) => {
    return `
        <p class="low_text">
            ${text}
        </p>
    `;
};

export const createEarlyAccessRectangleMainText = (text) => {
    return `
        <p class="main_text">
            ${text}
        </p>
    `;
};

export const createEarlyAccessRectangleButton = ({ href, text }) => {
    return `
        <a href="${href}">
            <button class="start_button">
                ${text}
            </button>
        </a>
    `;
};

export const earlyAccessRectangleTemplate = ({
    earlyAccessRectangleLowtext,
    earlyAccessRectangleMainText,
    earlyAccessRectangleButton,
}) => {
    const rectangleLowTextTemplate = createEarlyAccessRectangleLowText(earlyAccessRectangleLowtext);
    const rectangleMainText = createEarlyAccessRectangleMainText(earlyAccessRectangleMainText);
    const rectangleButton = createEarlyAccessRectangleButton(earlyAccessRectangleButton);

    const resultTemplate = `
        <div id="rectangle">
            <div class="earn_access_text">
                ${rectangleLowTextTemplate}
                ${rectangleMainText}
            </div>
            ${rectangleButton}
        </div>
    `;
    return resultTemplate;
};