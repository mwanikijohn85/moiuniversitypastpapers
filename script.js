const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const results = document.getElementById("results");

const units = [
    {
        code: "LMC 210",
        name: "Communication Theory"
    },
    {
        code: "LMC 211",
        name: "Introduction to Media Theories"
    }
];

searchBtn.addEventListener("click", () => {

    let search = searchBox.value.toLowerCase();

    let found = units.find(unit =>
        unit.code.toLowerCase().includes(search) ||
        unit.name.toLowerCase().includes(search)
    );

    if(found){
        results.innerHTML = `
            <div class="paper">
                <h2>${found.code}</h2>
                <p>${found.name}</p>
                <button>View Past Papers</button>
            </div>
        `;
    }
    else{
        results.innerHTML = `
            <div class="paper">
                <h2>No Results Found</h2>
                <p>Try another Unit Code or Unit Name.</p>
            </div>
        `;
    }

});