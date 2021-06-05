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
        "NAME": "Tech1",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C",
            "1P",
            "1S"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "Tech2",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C",
            "1P",
            "1S"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "Tech3",
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
        "NAME": "Tech4",
        "QUAL": [
            "1P",
            "1S",
            "5O",
            "5C"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "Tech5",
        "QUAL": [
            "1P",
            "1S",
            "5O",
            "5C"
        ],
        "PREV": "",
        "CURRENT": ""
    },
    {
        "NAME": "Tech6",
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
        "NAME": "Tech7",
        "QUAL": [
            "2O",
            "2C",
            "4O",
            "4C",
            "5O"
        ],
        "PREV": "",
        "CURRENT": ""
    }
];

export const techp = shuffle(techpun);