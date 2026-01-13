const ctx = document.getElementById("myChart");

const data = {
  labels: [
    "Dia 01",
    "Dia 01",
    "Dia 02",
    "Dia 03",
    "Dia 04",
    "Dia 05",
    "Dia 06",
  ],
  datasets: [
    {
      label: "carros",
      data: [65, 59, 80, 81, 26, 55, 40],
      borderColor: "rgb(75, 192, 192)",
      fill: false,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
  },
};

new Chart(ctx, config);
window.addEventListener("resize", function () {
  chart.resize();
});
