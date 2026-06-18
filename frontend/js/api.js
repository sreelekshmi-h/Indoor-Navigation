const API_URL = "https://indoor-navigation-2.onrender.com";

async function getGraph() {

    const response =
        await fetch(`${API_URL}/graph`);

    return await response.json();
}

async function getShortestPath(
    start,
    end
) {

    const response =
        await fetch(
            `${API_URL}/shortest_path`,
            {
                method: "POST",
                headers: {
                    "Content-Type":
                    "application/json"
                },
                body: JSON.stringify({
                    start,
                    end
                })
            }
        );

    return await response.json();
}
