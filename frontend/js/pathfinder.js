async function findRoute() {

    const start =
        document.getElementById(
            "start"
        ).value;

    const end =
        document.getElementById(
            "end"
        ).value;

    const result =
        await getShortestPath(
            start,
            end
        );

    document.getElementById(
        "result"
    ).innerHTML =
        "Distance: " +
        result.distance +
        "<br>" +
        result.path.join(
            " → "
        );

    drawGraph();

    ctx.strokeStyle = "red";
    ctx.lineWidth = 4;

    for(
        let i=0;
        i<result.path.length-1;
        i++
    ){

        const source =
            graphData.nodes.find(
                n =>
                n.id === result.path[i]
            );

        const target =
            graphData.nodes.find(
                n =>
                n.id ===
                result.path[i+1]
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
    }

    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
}