import heapq


def dijkstra(graph, start, end):

    adjacency = {}

    for node in graph["nodes"]:
        adjacency[node["id"]] = []

    for edge in graph["edges"]:

        source = edge["source"]
        target = edge["target"]
        weight = edge["weight"]

        adjacency[source].append((target, weight))
        adjacency[target].append((source, weight))

    distances = {
        node["id"]: float("inf")
        for node in graph["nodes"]
    }

    distances[start] = 0

    previous = {}

    pq = [(0, start)]

    while pq:

        current_distance, current_node = heapq.heappop(pq)

        if current_node == end:
            break

        if current_distance > distances[current_node]:
            continue

        for neighbor, weight in adjacency[current_node]:

            distance = current_distance + weight

            if distance < distances[neighbor]:

                distances[neighbor] = distance
                previous[neighbor] = current_node

                heapq.heappush(
                    pq,
                    (distance, neighbor)
                )

    path = []
    current = end

    while current in previous:

        path.insert(0, current)
        current = previous[current]

    if current == start:
        path.insert(0, start)

    return {
        "path": path,
        "distance": distances[end]
    }