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
        "NAME": "JPR",
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
        "NAME": "JJ",
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
        "NAME": "JS",
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
        "NAME": "JV",
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
        "NAME": "KTP",
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
        "NAME": "M3",
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
        "NAME": "NM",
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
        "NAME": "TO",
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