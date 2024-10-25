const puppeteer = require('puppeteer')

const codeObj = require('./codes')

const loginLink = 'https://www.hackerrank.com/auth/login'
const email = 'hackerrank.arnav007@gmail.com'
const password = '2405@ArnavHackerRank'


let browserOpen = puppeteer.launch({
    headless: true,
    args: ['--start-maximised'],
    defaultViewport: null,
    args: ['--no-sandbox', '--disable-setuid-sandbox'] // Required flags for running Puppeteer on some cloud providers
})

let page

browserOpen.then(function (browserObj) {
    let browserOpenPromise = browserObj.newPage();
    return browserOpenPromise;
}).then(function (newTab) {
    page = newTab
    let hackerRankOpenPromise = newTab.goto(loginLink);
    return hackerRankOpenPromise;
}).then(function () {
    let emailIsEntered = page.type("input[type='text']", email, { delay: 50 });
    return emailIsEntered;
}).then(function () {
    let passwordIsEntered = page.type("input[type='password']", password, { delay: 50 });
    return passwordIsEntered;
}).then(function () {
    let loginButtonClicked = page.click("button[type='submit']", { delay: 50 });
    return loginButtonClicked;
}).then(function () {
    let clickOnAlgoPromise = waitAndClick('.topic-card a[data-attr1="algorithms"]', page);
    return clickOnAlgoPromise;
}).then(function () {
    let getToWarmUp = waitAndClick('input[value="warmup"]', page);
    return getToWarmUp;
}).then(function () {
    return new Promise(function (resolve) {
        setTimeout(resolve, 3000); // Pauses for 3 seconds
    });
})
    .then(function () {
        let allChallengesPromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled', { delay: 50 });
        return allChallengesPromise;
    }).then(function (questionsArr) {
        console.log('number of questions', questionsArr.length)
        let questionWillBeSolved = questionSolver(page, questionsArr[0], codeObj.answers[0]);
        return questionWillBeSolved;
    })
    .then(function () {
        let nextQuestion = nextProblem(page);
        return nextQuestion;
    })
    .then(function (questionsArr) {
        console.log('number of questions', questionsArr.length)
        let questionWillBeSolved = questionSolver(page, questionsArr[1], codeObj.answers[1]);
        return questionWillBeSolved;
    })
    .then(function () {
        let nextQuestion = nextProblem(page);
        return nextQuestion;
    })
    .then(function (questionsArr) {
        console.log('number of questions', questionsArr.length)
        let questionWillBeSolved = questionSolver(page, questionsArr[2], codeObj.answers[2]);
        return questionWillBeSolved;
    })
    .then(function () {
        let nextQuestion = nextProblem(page);
        return nextQuestion;
    })
    .then(function (questionsArr) {
        console.log('number of questions', questionsArr.length)
        let questionWillBeSolved = questionSolver(page, questionsArr[3], codeObj.answers[3]);
        return questionWillBeSolved;
    })
    .then(function () {
        let nextQuestion = nextProblem(page);
        return nextQuestion;
    })
    .then(function (questionsArr) {
        console.log('number of questions', questionsArr.length)
        let questionWillBeSolved = questionSolver(page, questionsArr[4], codeObj.answers[4]);
        return questionWillBeSolved;
    })
    .then(function () {
        let nextQuestion = nextProblem(page);
        return nextQuestion;
    })
    .then(function (questionsArr) {
        console.log('number of questions', questionsArr.length)
        let questionWillBeSolved = questionSolver(page, questionsArr[5], codeObj.answers[5]);
        return questionWillBeSolved;
    })
    .then(function () {
        let nextQuestion = nextProblem(page);
        return nextQuestion;
    })
    .then(function (questionsArr) {
        console.log('number of questions', questionsArr.length)
        let questionWillBeSolved = questionSolver(page, questionsArr[6], codeObj.answers[6]);
        return questionWillBeSolved;
    })
    .then(function () {
        let nextQuestion = nextProblem(page);
        return nextQuestion;
    })
    .then(function (questionsArr) {
        console.log('number of questions', questionsArr.length)
        let questionWillBeSolved = questionSolver(page, questionsArr[7], codeObj.answers[7]);
        return questionWillBeSolved;
    })
    .then(function () {
        let nextQuestion = nextProblem(page);
        return nextQuestion;
    })
    .then(function (questionsArr) {
        console.log('number of questions', questionsArr.length)
        let questionWillBeSolved = questionSolver(page, questionsArr[8], codeObj.answers[8]);
        return questionWillBeSolved;
    })

    

function waitAndClick(selector, cPage) {
    return new Promise(function (resolve, reject) {
        let waitForModelPromise = cPage.waitForSelector(selector, { visible: true })
        waitForModelPromise.then(function () {
            let clickModel = cPage.click(selector)
            return clickModel;
        }).then(function () {
            resolve()
        }).catch(function (err) {
            reject(err)
        })
    })
}

function questionSolver(page, question, answer) {
    return new Promise(function (resolve, reject) {
        let questionWillBeClicked = question.click()
        questionWillBeClicked
            .then(function () {
                let languageSelectorPressed = waitAndClick('div.css-1hwfws3', page, { delay: 250 })
                return languageSelectorPressed
            }).then(function () {
                let typeTheLanguage = page.type('div.css-1hwfws3', 'Java 15', { delay: 250 })
                return typeTheLanguage
            }).then(function () {
                let enterWillBePressed = page.keyboard.press("Enter")
                return enterWillBePressed
            }).then(function () {
                let editorInFocusPromise = waitAndClick('.monaco-editor.no-user-select.vs', page)
                return editorInFocusPromise
            }).then(function () {
                return waitAndClick('.checkbox-input', page)
            }).then(function () {
                return page.waitForSelector('textarea.custominput', page , { timeout: 60000 })
            }).then(function () {
                return page.type('textarea.custominput', answer, { delay: 10 })
            }).then(function () {
                let ctrlIsPressed = page.keyboard.down('Control')
                return ctrlIsPressed
            }).then(function () {
                let aIsPressed = page.keyboard.press('A', { delay: 100 })
                return aIsPressed
            }).then(function () {
                let xIsPressed = page.keyboard.press('X', { delay: 100 })
                return xIsPressed
            }).then(function () {
                let ctrlIsUnPressed = page.keyboard.up('Control')
                return ctrlIsUnPressed
            }).then(function () {
                let mainEditorInFocus = waitAndClick('.monaco-editor.no-user-select.vs', page)
                return mainEditorInFocus
            }).then(function () {
                let ctrlIsPressed = page.keyboard.down('Control')
                return ctrlIsPressed
            }).then(function () {
                let aIsPressed = page.keyboard.press('A', { delay: 100 })
                return aIsPressed
            }).then(function () {
                let vIsPressed = page.keyboard.press('V', { delay: 100 })
                return vIsPressed
            }).then(function () {
                let ctrlIsUnPressed = page.keyboard.up('Control')
                return ctrlIsUnPressed
            }).then(function () {
                return page.click('.hr-monaco__run-code', { delay: 100 })
            }).then(function () {
                return new Promise(function (resolve) {
                    setTimeout(resolve, 5000); // Pauses for 8 seconds
                });
            }).then(function () {
                return page.click('.hr-monaco-submit', { delay: 100 })
            }).then(function () {
                return new Promise(function (resolve) {
                    setTimeout(resolve, 10000);
                });
            }).then(function () {
                resolve()
            }).catch(function (err) {
                reject(err)
            })
    })
}

function nextProblem(page) {
    return page.click('.ui-icon-restore-size', { delay: 100 })
        .then(function () {
            return page.click('[href="/domains/algorithms/warmup"]', { delay: 100 });
        })
        .then(function () {
            return page.waitForSelector('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled', { timeout: 60000 });
        })
        .then(function () {
            return page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled', { delay: 3000 });
        });
}
