
// (function() {
//     console.log("hey")
//     document.querySelector("#createDocument").addEventListener("click", create);
// })();

document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelector("#createDocument").addEventListener("click", create);
    document.querySelector("#getInfo").addEventListener("click", getInfo);
    document.querySelector("#mkdir").addEventListener("click", mkdir);
    document.querySelector("#readFile").addEventListener("click", readFile);
    document.querySelector("#stat").addEventListener("click", stat);
    document.querySelector("#watch").addEventListener("click", watch);
});

Test = {}
Test.archive = {}
async function create() {
    Test.archive = await DatArchive.create({
        title: 'Fritter User: ' + name,
        description: 'User profile for the Fritter example app'
    })
    console.log("create returned" + JSON.stringify(Test.archive))
    document.querySelector("#createDocumentResponse").innerHTML = JSON.stringify(Test.archive)
}

async function getInfo() {
    if (typeof Test.archive.getInfo === "function") {
        let getInfo = await Test.archive.getInfo()
        console.log("getInfo returned" + JSON.stringify(getInfo))
        document.querySelector("#getInfoResponse").innerHTML = JSON.stringify(getInfo)
    } else {
        alert("Create the document first pleeeze.")
    }
}


async function readFile() {
    if (typeof Test.archive.readFile === "function") {
        // let url = Test.archive.url + "/dat.json"
        let url = Test.archive.url
        let filename = "/dat.json"
        try {
            let readFile = await Test.archive.readFile(url, filename)
            console.log("readFile returned" + JSON.stringify(readFile))
            document.querySelector("#readFileResponse").innerHTML = JSON.stringify(readFile)
        } catch (e) {
            console.log("Error reading " + url + " error: " + JSON.stringify(e))
        }
    } else {
        alert("Create the document first pleeeze.")
    }
}

async function mkdir() {
    if (typeof Test.archive.mkdir === "function") {
        try {
            let mkdir = await Test.archive.mkdir("hooty")
            console.log("mkdir returned" + JSON.stringify(mkdir))
            document.querySelector("#mkdirResponse").innerHTML = JSON.stringify(mkdir)
        } catch (e) {
            alert("error: " + e)
        }
    } else {
        alert("Create the document first pleeeze.")
    }
}

async function stat() {
    if (typeof Test.archive.stat === "function") {
        let stat = await Test.archive.stat("/hooty")
        console.log("stat returned" + JSON.stringify(stat))
        document.querySelector("#statResponse").innerHTML = JSON.stringify(stat)
    } else {
        alert("Create the document first pleeeze.")
    }
}

async function watch() {
    if (typeof Test.archive.watch === "function") {
        let watch = await Test.archive.watch()
        console.log("watch returned" + JSON.stringify(watch))
        document.querySelector("#watchResponse").innerHTML = JSON.stringify(watch)
    } else {
        alert("Create the document first pleeeze.")
    }
}
