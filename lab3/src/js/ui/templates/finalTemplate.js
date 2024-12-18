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

export const createFinalFooterLeftTemplate = ({ src, address, rights }) => {
    return `
        <img src="${src}" />
        <p class="some_inf">
            ${address}
        </p>
        <p class="some_inf">
            ${rights}
        </p>
    `
}

export const createFinalFooterRightTemplate = (data) => {
    return data.map(title => {
    const columnItems = title.items.map(item => {
        if (item.href) {
            return `<a href="${item.href}" class="footer_link">${item.text}</a>`;
        } else {
            return `<p class="footer_inf">${item.text}</p>`
        }}).join('');
    return `
        <div class="footer_inf">
            <h3>${title.title}</h3>
            ${columnItems}
        </div>
    `;
    }).join('');
};

export const finalTemplate = ({
    finalHeader,
    finalButton,
    finalFooterLeft,
    finalFooterRight,
}) => {
    const headerTemplate = createFinalHeaderTemplate(finalHeader);
    const buttonTemplate = createFinalButtonTemplate(finalButton);
    const footerLeftTemplate = createFinalFooterLeftTemplate(finalFooterLeft);
    const footerRightTemplate = createFinalFooterRightTemplate(finalFooterRight);

    const resultTemplate = `
        ${headerTemplate}
        ${buttonTemplate}
        <div class="footer">
            <div class="footer_left">
                ${footerLeftTemplate}
            </div>
            <div class="footer_right">
                ${footerRightTemplate}
            </div>
        </div>
    `;
    return resultTemplate;
};