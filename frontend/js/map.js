const canvas =
    document.getElementById(
        "mapCanvas"
    );

const ctx =
    canvas.getContext("2d");

let graphData = null;

async function drawGraph() {

    graphData =
        await getGraph();

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    graphData.edges.forEach(edge => {

        const source =
            graphData.nodes.find(
                n => n.id === edge.source
            );

        const target =
            graphData.nodes.find(
                n => n.id === edge.target
            );

        ctx.beginPath();
        ctx.moveTo(
            source.x,
            source.y
        );

        ctx.lineTo(
            target.x,
            target.y
        );

        ctx.stroke();

    });

    graphData.nodes.forEach(node => {

        ctx.beginPath();

        ctx.arc(
            node.x,
            node.y,
            10,
            0,
            Math.PI * 2
        );

        ctx.fill();

        ctx.fillText(
            node.id,
            node.x + 10,
            node.y
        );

    });

}

drawGraph();