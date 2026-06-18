async function findRoute() {

    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;

    const result = await getShortestPath(start, end);

    // Result display
    const resultEl = document.getElementById("result");
    const routePathEl = document.getElementById("routePath");
    const routeDistEl = document.getElementById("routeDistance");
    const routeTimeEl = document.getElementById("routeTime");

    const labels = result.path;
    routePathEl.innerHTML = labels.map((id, i) => {
        const isFirst = i === 0;
        const isLast = i === labels.length - 1;
        const color = isFirst ? "#2563EB" : isLast ? "#EF4444" : "#64748B";
        const weight = isFirst || isLast ? "500" : "400";
        return `<span style="color:${color};font-weight:${weight}">${id}</span>`;
    }).join(' <span style="color:#CBD5E1;margin:0 2px">→</span> ');

    routeDistEl.textContent = result.distance + " m";
    routeTimeEl.textContent = Math.max(1, Math.round(result.distance / 50)) + " min";
    resultEl.style.display = "block";

    // Redraw graph then highlight route
    await drawGraph();

    ctx.strokeStyle = "#EF4444";
    ctx.lineWidth = 3;
    ctx.setLineDash([]);

    for (let i = 0; i < result.path.length - 1; i++) {

        const source = graphData.nodes.find(n => n.id === result.path[i]);
        const target = graphData.nodes.find(n => n.id === result.path[i + 1]);

        ctx.beginPath();
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(target.x, target.y);
        ctx.stroke();

    }

    // Recolor route nodes red on top
    result.path.forEach(id => {
        const node = graphData.nodes.find(n => n.id === id);
        ctx.beginPath();
        ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
        ctx.fillStyle = "#EF4444";
        ctx.fill();
        ctx.strokeStyle = "#DC2626";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "600 11px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node.id, node.x, node.y);
    });

    ctx.strokeStyle = "#CBD5E1";
    ctx.lineWidth = 1.5;
}