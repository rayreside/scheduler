import { techp } from './techp';

//randomizer function
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

var techfun = [
    {
        "NAME": "Tech8",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C",
            "1P",
            "1S",
            "5O",
            "5C"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "Tech9",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C",
            "1P",
            "1S",
            "5O",
            "5C"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "Tech10",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C",
            "1P",
            "1S",
            "5O",
            "5C"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "Tech11",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C",
            "1P",
            "1S",
            "5O",
            "5C"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "Tech12",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C",
            "1P",
            "1S",
            "5O",
            "5C"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "Tech13",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C",
            "1P",
            "1S",
            "5O",
            "5C"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "Tech14",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C",
            "1P",
            "1S",
            "5O",
            "5C"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "Tech15",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C",
            "1P",
            "1S",
            "5O",
            "5C"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "Tech16",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C",
            "1P",
            "1S",
            "5O",
            "5C"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "Tech17",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C",
            "1P",
            "1S",
            "5O",
            "5C"
        ],
        "PREV": "",
        "CURRENT": ""
    }
];

const techf = shuffle(techfun);

export const techlist = techp.concat(techf);