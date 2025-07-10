const API_KEY = "AIzaSyAD3ZQbTPiW5NczM3BOcsPKC3HUzztjMSk";
const SHEET_ID = "1dzIRH_X2ly8LARcN-HwpqUIOY99pqrb0Cbu3pZ9I7wQ";
const SHEET_RANGE = "工作表1!A1:Z";

let originalData = []; // 全部資料（含標題列）
let filteredData = []; // 篩選後的資料（含標題列）

function logout() {
  sessionStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}

function loadSheetData() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(
    SHEET_RANGE
  )}?key=${API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const rows = res.values;
      if (!rows || rows.length === 0) return;

      originalData = rows;
      filteredData = rows;
      renderTable(filteredData);
    })
    .catch((err) => {
      console.error("載入資料失敗", err);
      document.getElementById("data-table").innerHTML =
        "<tr><td>資料載入失敗</td></tr>";
    });
}

function renderTable(data) {
  const table = document.getElementById("data-table");
  table.innerHTML = "";

  if (!data || data.length === 0) {
    table.innerHTML = "<caption>查無資料</caption>";
    return;
  }

  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  data.forEach((row, rowIndex) => {
    const tr = document.createElement("tr");

    row.forEach((cell) => {
      const el = document.createElement(rowIndex === 0 ? "th" : "td");
      el.textContent = cell;
      tr.appendChild(el);
    });

    if (rowIndex === 0) {
      thead.appendChild(tr);
    } else {
      tbody.appendChild(tr);
    }
  });

  table.appendChild(thead);
  table.appendChild(tbody);
}

function filterData() {
  const keyword = document.getElementById("search-input").value.toLowerCase();
  const revenueMin = parseFloat(document.getElementById("revenue-min").value);

  filteredData = originalData.filter((row, index) => {
    if (index === 0) return true; // 保留表頭

    const companyName = row[0]?.toLowerCase() || "";
    const entrepreneur = row[4]?.toLowerCase() || "";
    const revenue = parseFloat(row[2]) || 0;

    const matchKeyword =
      companyName.includes(keyword) || entrepreneur.includes(keyword);
    const matchRevenue = isNaN(revenueMin) || revenue >= revenueMin;

    return matchKeyword && matchRevenue;
  });

  renderTable(filteredData);
}

function exportToExcel() {
  const ws = XLSX.utils.aoa_to_sheet(filteredData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "篩選結果");
  XLSX.writeFile(wb, "創業家資料.xlsx");
}

// 綁定事件
window.onload = () => {
  loadSheetData();

  document.getElementById("filter-btn").addEventListener("click", filterData);
  document
    .getElementById("export-btn")
    .addEventListener("click", exportToExcel);

  document.getElementById("reset-btn").addEventListener("click", () => {
    // 清空輸入欄位
    document.getElementById("search-input").value = "";
    document.getElementById("revenue-min").value = "";

    // 回復成原始資料並重新顯示
    filteredData = originalData;
    renderTable(filteredData);
  });
};
