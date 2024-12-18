import footerImg from "../assets/img/GPT-3.svg"

export const finalHeader = "Хотите Шагнуть в Будущее Раньше Других?";

export const finalButton = {
    href: "#",
    text: "Запросить ранний доступ"
};

export const finalFooterLeft = {
    image: {
        src: footerImg,
        alt: "gpt",
    },
    address: "ул. Профессора Поздеева, 13, к.Г, Пермь, Пермский край, 614013",
    rights: "Все права защищены",
};

const finalFooterRight = [
    {
        title: "Ссылки",
        items: [
            { href: "#", text: "Овероны" },
            { href: "#", text: "Соц. сети" },
            { href: "#", text: "Счетчики" },
            { href: "#", text: "Контакты" },
        ]
    },
    {
        title: "Компания",
        items: [
            { href: "#", text: "Условия использования" },
            { href: "#", text: "Перс. данные" },
            { href: "#", text: "Контакты" },
        ]
    },
    {
        title: "Контакты",
        items: [
            { text: "ул. Профессора Поздеева, 13, к.Г, Пермь" },
            { text: "+7 (342) 2-198-520" },
            { text: "info@pstu.ru" }
        ]
    }
];

export const finalData = {
    finalHeader,
    finalButton,
    finalFooterLeft,
    finalFooterRight,
};

export default finalData;