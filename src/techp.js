//randomizer function
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

var techpun = [
    {
        "NAME": "AML",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C",
            "1P"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "CRB",
        "QUAL": [
            "5O",
            "1P",
            "1S"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "GS",
        "QUAL": [
            "5O",
            "5C",
            "1P",
            "1S"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "JSM",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "JBL",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C",
            "1P",
            //"1S",
            "5O"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "JMA",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C",
            "5O"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "MPP",
        "QUAL": [
            "5O",
            "5C",
            "1P",
            "1S"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "RPR",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C",
            "5O"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "SSM",
        "QUAL": [
            "1P",
            "1S",
        ],
        "PREV": "",
        "CURRENT": ""
    }
];

export const techp = shuffle(techpun);