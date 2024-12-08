export const createEarlyAccessPictureTemplate = (src) => {
    return `
        <img src="${src}" />
    `;
};

export const createEarlyAccessRequestTemplate = (text) => {
    return `
        <p class="request">
            ${text}
        </p>
    `;
};

export const createEarlyAccessHeaderTemplate = (text) => {
    return `
        <h2>
            ${text}
        </h2>
    `;
};

export const createEarlyAccessDescriptionTemplate = (description) => {
    return `
        <p class="some_text">
            ${description}
        </p>
    `;
};

export const createEarlyAccessLinkTemplate = ({ href, text }) => {
    return `
        <a href=${href} class="early_access_link">
            ${text}
        </a>
    `;
};

export const earlyAccessTemplate = ({
    earlyAccessPicture,
    earlyAccessRequest,
    earlyAccessHeader,
    earlyAccessDescription,
    earlyAccessLink,
}) => {
    const pictureTemplate = createEarlyAccessPictureTemplate(earlyAccessPicture);
    const requestTemplate = createEarlyAccessRequestTemplate(earlyAccessRequest);
    const headerTemplate = createEarlyAccessHeaderTemplate(earlyAccessHeader);
    const descriptionTemplate = createEarlyAccessDescriptionTemplate(earlyAccessDescription);
    const linkTemplate = createEarlyAccessLinkTemplate(earlyAccessLink);

    const resultTemplate = `
        <div class = "left_early_access">
            ${pictureTemplate}
        </div>
        <div class = "right_early_access">
            ${requestTemplate}
            ${headerTemplate}
            ${descriptionTemplate}
            ${linkTemplate}
        </div>
    `;

    return resultTemplate;
};