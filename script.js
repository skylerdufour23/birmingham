document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("ipsw-list");
            data.firmwares.forEach(fw => {
                const div = document.createElement("div");
                div.className = "fw-item";
                div.innerHTML = `<strong>${fw.version}</strong> - Build ${fw.build}`;
                list.appendChild(div);
            });
        });
        
    document.getElementById("btn-itunes").addEventListener("click", () => {
        alert("iTunesSetup script configuration generated successfully!");
    });
});
