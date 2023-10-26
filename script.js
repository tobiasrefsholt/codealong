const model = {
    app: {
        page: "main",
    },
    fields: {
        year: null,
        model: null,
    },
    bikes: [
        {
            year: 2020,
            model: "DBS",
        },
        {
            year: 2022,
            model: "DBS",
        },
        {
            year: 2015,
            model: "DBS",
        }
    ],
}

// View

updateView();

function updateView() {
    let html = '';
    if (model.app.page == "main") html = getMainPageHTML();
    if (model.app.page == "addBike") html = getAddBikeHTML();
    document.getElementById("app").innerHTML = html;
}

function getMainPageHTML() {
    let html = ''
    for (let bike of model.bikes) {
        html += /* html */ `
            <li>${bike.model} - ${bike.year}</li>
        `;
    }
    return /* html */ `
        <ul>
            ${html}
        </ul>
        <button onclick="changePage('addBike')">Legg til</button>
    `;
}

function getAddBikeHTML() {
    return /* html */ `
        <h3>År</h3>
        <input type="text" oninput="model.fields.year = this.value" value="${model.fields.year || ''}">
        <h3>Modell</h3>
        <input type="text" oninput="model.fields.model = this.value" value="${model.fields.model || ''}">
        <p>
            <button onclick="saveBike()">Lagre</button>
            <button onclick="changePage('main')">Avbryt</button>
        </p>
    `;
}

// Controller

function changePage(page) {
    model.app.page = page;
    updateView();
}

function saveBike() {
    model.bikes.push({
        year: model.fields.year,
        model: model.fields.model,
    });
    model.fields.year = null;
    model.fields.model = null;
    model.app.page = "main";
    updateView();
}
