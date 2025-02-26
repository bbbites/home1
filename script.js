document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners for live updates
    document.getElementById("foodItem").addEventListener("change", updateSummary);
    document.getElementById("extraItem").addEventListener("input", updateSummary);
    document.getElementById("quantity").addEventListener("change", updateSummary);
    document.getElementById("block").addEventListener("change", updateSummary);
    document.getElementById("location").addEventListener("input", updateSummary);
    document.getElementById("roomNo").addEventListener("input", updateSummary);
    document.getElementById("studentName").addEventListener("input", updateSummary);

    function updateSummary() {
        document.getElementById("summaryFood").textContent = document.getElementById("foodItem").value || "None";
        document.getElementById("summaryExtra").textContent = document.getElementById("extraItem").value || "None";
        document.getElementById("summaryQuantity").textContent = document.getElementById("quantity").value || "0";
        document.getElementById("summaryBlock").textContent = document.getElementById("block").value || "None";
        document.getElementById("summaryLocation").textContent = document.getElementById("location").value || "-";
        document.getElementById("summaryRoom").textContent = document.getElementById("roomNo").value || "-";
        document.getElementById("summaryName").textContent = document.getElementById("studentName").value || "-";
    }
});
