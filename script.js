document.getElementById("certificateSelect").addEventListener("change", function() {
    let selectedOption = this.options[this.selectedIndex];
    let selectedFile = selectedOption.value;
    let viewer = document.getElementById("certificateViewer");
    let image = document.getElementById("certificateImage");
    let downloadLink = document.getElementById("downloadLink");
    let title = document.getElementById("certificateTitle");
    let details = document.getElementById("certificateDetails");

    // Modal setup
    let modalImage = document.getElementById("modalImage");
    let modalDownloadLink = document.getElementById("modalDownloadLink");

    if (selectedFile) {
        image.src = selectedFile;
        downloadLink.href = selectedFile;
        downloadLink.style.display = "inline-block";

        // Modal setup
        modalImage.src = selectedFile;
        modalDownloadLink.href = selectedFile;

        let issuer = selectedOption.getAttribute("data-issuer") || "Ismeretlen kiadó";
        let date = selectedOption.getAttribute("data-date") || "N/A";
        let verification = selectedOption.getAttribute("data-verification") || "#";

        title.textContent = selectedOption.text;
        details.innerHTML = `Kiadó: ${issuer} <br> Kiadás dátuma: ${date} <br> <a href="${verification}" target="_blank">Ellenőrzés</a>`;

        // Show the modal
        image.addEventListener('click', function() {
            let myModal = new bootstrap.Modal(document.getElementById('certificateModal'));
            myModal.show();
        });
    } else {
        image.src = "";
        downloadLink.style.display = "none";
        title.textContent = "";
        details.innerHTML = "";
    }
});
