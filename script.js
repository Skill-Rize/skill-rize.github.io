let questionseng = [
    [
        ["Choose the correct form of the verb in the sentence: He ______ to the store every day."],
        ["Choose the correct form of the verb: She _______ the book before the meeting started."]
    ],
    [["Choose the correctly punctuated sentence:"], ["Which sentence is considered grammatically correct?"]],
    [["Which sentence correctly uses a comma?"], ["Which sentence is considered grammatically correct?"]],
    [["Which sentence below is presented in passive voice?"], ["Which of the following below is a compound sentence?"]],
    [
        ["Which of the following sentences correctly uses a subject-verb agreement?"],
        ["Which of the following sentences is written in passive voice?"]
    ]
];
let questionsmath = [
    [["x-9="], ["x+12-5="]],
    [["x - 15 + 6="], ["3x + 12="]],
    [["4x - 16="], ["15x - 45="]],
    [["x - 15 + 6="], ["3x + 12="]],
    [["4x - 16="], ["15x - 45="]]
];
let questionsaeng = [
    [
        ["read", "reads", "had read", "is reading", 3],
        ["go", "goes", "gone", "going", 2]
    ],
    [
        [
            " I can’t believe it’s already December, the year has gone by so fast.",
            "I can’t believe it’s already December; the year has gone by so fast.",
            "I can’t believe it’s already December the year has gone by so fast.",
            "I can’t believe it’s already December the year, has gone by so fast.",
            2
        ],
        [
            "She can sings very well.",
            "She can sing very well.",
            "She can sung very well.",
            "She can singing very well.",
            2
        ]
    ],
    [
        [
            "I have a dog, cat, and rabbit.",
            "I have a dog cat and rabbit.",
            "I have a dog cat, and rabbit.",
            "I have a dog, cat and, rabbit.",
            1
        ],
        [
            "Their going to the concert tonight.",
            "They’re going to the concert tonight.",
            "There going to the concert tonight.",
            "Theyre going to the concert tonight.",
            2
        ]
    ],
    [
        ["The dog bit the man.", "The man bit the dog.", "The man was bitten by the dog.", "The dog bit quickly.", 3],
        [
            "She studied all night for the exam.",
            "She studied all night, and she passed the exam.",
            "She studied, passed the exam, and went home.",
            "She studied for the exam.",
            2
        ]
    ],
    [
        [
            "The team are playing well.",
            "The team is playing well.",
            "The teams is playing well.",
            "The team playing well.",
            3
        ],
        [
            "The dog chased the ball.",
            "The ball was chased by the dog.",
            "The dog is chasing the ball.",
            "The ball chases the dog.",
            2
        ]
    ]
];
let questionsamath = [
    [
        ["x+9", "x-19", "x-9", "x-1", 3],
        ["x+7", "x+17", "x+15", "x+5", 1]
    ],
    [
        ["x-9", "x-6", "x-21", "x+6", 1],
        ["3x+15", "3x+12", "3(x+4)", "3x-12", 2]
    ],
    [
        ["4x+16", "4x-20", "4(x-4)", "4x-11", 3],
        ["15(x-3)", "15x+41", "15x-50", "15x-41", 1]
    ],
    [
        ["x-9", "x-6", "x-21", "x+6", 1],
        ["3x+15", "3x+12", "3(x+4)", "3x-12", 2]
    ],
    [
        ["4x+16", "4x-20", "4(x-4)", "4x-11", 3],
        ["15(x-3)", "15x+41", "15x-50", "15x-41", 1]
    ]
];

let correct = 1;
let selected = 0;
let subject = "ela";
let prev_window = "";
let fin = 0;

function finish() {
    window.location.href = "practice.html";
}

function change_question(medallion, question) {
    console.log("aa");
    if (window.location.href.includes("skill-rize")) {
        console.log("a");
        localStorage.setItem("medallion", JSON.stringify(medallion));
        localStorage.setItem("question", JSON.stringify(question));
        localStorage.setItem("questionseng", JSON.stringify(questionseng));
        localStorage.setItem("questionsmath", JSON.stringify(questionsmath));
        localStorage.setItem("questionsaeng", JSON.stringify(questionsaeng));
        localStorage.setItem("questionsamath", JSON.stringify(questionsamath));
        localStorage.setItem("prev_window", JSON.stringify("/index.html"));
        window.location.href = "practice.html";

    }

    if (window.location.href.includes("practice")) {
        console.log("b");
        subject = JSON.parse(localStorage.getItem("subject"));
        prev_window = JSON.parse(localStorage.getItem("prev_window"));
        if (prev_window == "/index.html") {
            console.log("c");
            prev_window = "";
            localStorage.setItem("prev_window", JSON.stringify(prev_window));
            medallion = JSON.parse(localStorage.getItem("medallion"));
            question = JSON.parse(localStorage.getItem("question"));
            questionseng = JSON.parse(localStorage.getItem("questionseng"));
            questionsmath = JSON.parse(localStorage.getItem("questionsmath"));
            questionsamath = JSON.parse(localStorage.getItem("questionsamath"));
        }

        if (document.getElementById("button").style.zIndex == -3) {
            document.getElementById("a1").style.visibility = "visible";
            document.getElementById("a2").style.visibility = "visible";
            document.getElementById("a3").style.visibility = "visible";
            document.getElementById("a4").style.visibility = "visible";
            document.body.style.backgroundColor = "#3e3e3eff";
            document.getElementById("button").style.zIndex = 1;
        }

        if (question == 2) {
            document.getElementById("button").onclick = function () {
                finish();
            };
            document.getElementById("button").style.zIndex = 100;
        }

        if (subject == "ela") {
            console.log("d");
            document.getElementById("question_text").textContent = questionseng[medallion - 1][question - 1];
            document.getElementById("a1").textContent = questionsaeng[medallion - 1][question - 1][0];
            document.getElementById("a2").textContent = questionsaeng[medallion - 1][question - 1][1];
            document.getElementById("a3").textContent = questionsaeng[medallion - 1][question - 1][2];
            document.getElementById("a4").textContent = questionsaeng[medallion - 1][question - 1][3];
            correct = questionsaeng[medallion - 1][question - 1][4];
        } else if (subject == "math") {
            console.log("e");
            document.getElementById("question_text").textContent = questionsmath[medallion - 1][question - 1];
            document.getElementById("a1").textContent = questionsamath[medallion - 1][question - 1][0];
            document.getElementById("a2").textContent = questionsamath[medallion - 1][question - 1][1];
            document.getElementById("a3").textContent = questionsamath[medallion - 1][question - 1][2];
            document.getElementById("a4").textContent = questionsamath[medallion - 1][question - 1][3];
            correct = questionsamath[medallion - 1][question - 1][4];
        }
    }
}

function change_answer(answer) {
    selected = answer;
}

function submit() {
    console.log("submitted");
    if (selected == correct) {
        document.getElementById("question_text").textContent = "Correct!";
        document.body.style.backgroundColor = "#32a852";
        if (document.getElementById("progbarback").style.width == 100) {
            document.getElementById("button").textContent = "FINISH!";
        } else {
            document.getElementById("button").style.zIndex = -3;
        }
    } else {
        document.getElementById("question_text").textContent = "Wrong";
        document.body.style.backgroundColor = "#d92b25";
        if (document.getElementById("progbarback").style.width == 100) {
            document.getElementById("button").textContent = "FINISH!";
        } else {
            document.getElementById("button").style.zIndex = -3;
        }
    }
    document.getElementById("a1").style.visibility = "hidden";
    document.getElementById("a2").style.visibility = "hidden";
    document.getElementById("a3").style.visibility = "hidden";
    document.getElementById("a4").style.visibility = "hidden";
    console.log("submit done");
}
