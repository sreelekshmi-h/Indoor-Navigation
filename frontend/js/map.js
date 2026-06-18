const canvas = document.getElementById("mapCanvas");
const ctx = canvas.getContext("2d");

let graphData = null;

async function initMap() {

    graphData = await getGraph();

    // Populate dropdowns
    const startEl = document.getElementById("start");
    const endEl = document.getElementById("end");

    startEl.innerHTML = "";
    endEl.innerHTML = "";

    graphData.nodes.forEach(node => {
        const opt1 = new Option(node.id, node.id);
        const opt2 = new Option(node.id, node.id);
        startEl.appendChild(opt1);
        endEl.appendChild(opt2);
    });

    // Update header stats
    document.getElementById("statRooms").textContent = graphData.nodes.length;
    document.getElementById("statNodes").textContent = graphData.nodes.length;
    document.getElementById("statEdges").textContent = graphData.edges.length;

    drawGraph();
}

async function drawGraph() {

    if (!graphData) graphData = await getGraph();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Edges
    graphData.edges.forEach(edge => {

        const source = graphData.nodes.find(n => n.id === edge.source);
        const target = graphData.nodes.find(n => n.id === edge.target);

        ctx.beginPath();
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(target.x, target.y);
        ctx.strokeStyle = "#CBD5E1";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

    });

    // Nodes
    graphData.nodes.forEach(node => {

        ctx.beginPath();
        ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
        ctx.fillStyle = "#2563EB";
        ctx.fill();
        ctx.strokeStyle = "#1D4ED8";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "600 11px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node.id, node.x, node.y);

    });

}

initMap();