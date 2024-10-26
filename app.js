function generateInvoice() {
    // Get input values
    const customerName = document.getElementById("customerName").value;
    const customerAddress = document.getElementById("customerAddress").value;
    const customerPhone = document.getElementById("customerPhone").value;
    const customerEmail = document.getElementById("customerEmail").value;
    const serviceTitle = document.getElementById("serviceTitle").value;
    const serviceDescription = document.getElementById("serviceDescription").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
  
    // Display values in the invoice
    document.getElementById("displayCustomerName").textContent = customerName || "-";
    document.getElementById("displayCustomerAddress").textContent = customerAddress || "-";
    document.getElementById("displayCustomerPhone").textContent = customerPhone || "-";
    document.getElementById("displayCustomerEmail").textContent = customerEmail || "-";
    document.getElementById("displayServiceTitle").textContent = serviceTitle || "-";
    document.getElementById("displayServiceDescription").textContent = serviceDescription || "-";
    document.getElementById("displayStartDate").textContent = startDate || "-";
    document.getElementById("displayEndDate").textContent = endDate || "-";
  }