export const createFinalHeaderTemplate = (text) => {
    return `
        <h1 class="final_header">
            ${text}
        </h1>
    `;
};

export const createFinalButtonTemplate = ({ href, text }) => {
    return `
        <a href="${href}">
            <button class="request_access_button">
                ${text}
            </button>
        </a>
    `;
};

export const createFinalFooterLeftImageTemplate = (src) => {
    return `
        <img src="${src}" />
    `;
};

export const createFinalFooterLeftAddressTemplate = (text) => {
    return `
        <p class="some_inf">
            ${text}
        </p>
    `;
};

export const createFinalFooterLeftRightsTemplate = (text) => {
    return `
        <p class ="some_inf">
            ${text}
        </p>
    `;
};

export const createFinalFooterRight = ({link, company, contacts}) => {
    return `
        <div class="footer_inf">
            <h3>Ссылки</h3>
            ${link.map(link => `<a href="${link.href}" class="footer_link">${link.text}</a>`).join('')}
        </div>
        <div class="footer_inf">
            <h3>Компания</h3>
            ${company.map(company => `<a href="${company.href}" class="footer_link">${company.text}</a>`).join('')}
        </div>
        <div class="footer_inf">
            <h3>Контакты</h3>
            ${contacts.map(contacts => `<p class="footer_inf">${contacts.text}</p>`).join('')}
        </div>
`;
};

export const finalTemplate = ({
    finalHeader,
    finalButton,
    finalFooterLeftImage,
    finalFooterLeftAddress,
    finalFooterLeftRights,
    finalFooterRight,
}) => {
    const headerTemplate = createFinalHeaderTemplate(finalHeader);
    const buttonTemplate = createFinalButtonTemplate(finalButton);
    const leftImageTemplate = createFinalFooterLeftImageTemplate(finalFooterLeftImage);
    const leftAddressTemplate = createFinalFooterLeftAddressTemplate(finalFooterLeftAddress);
    const leftRightsTemplate = createFinalFooterLeftRightsTemplate(finalFooterLeftRights);
    const footerRight = createFinalFooterRight(finalFooterRight);

    const resultTemplate = `
        ${headerTemplate}
        ${buttonTemplate}
        <div class="footer">
            <div class="footer_left">
                ${leftImageTemplate}
                ${leftAddressTemplate}
                ${leftRightsTemplate}
            </div>
            <div class="footer_right">
                ${footerRight}
            </div>
        </div>
    `;
    return resultTemplate;
};