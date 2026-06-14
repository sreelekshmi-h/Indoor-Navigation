import json
import os

GRAPH_FILE = "graph.json"


def load_graph():
    if not os.path.exists(GRAPH_FILE):
        return {"nodes": [], "edges": []}

    with open(GRAPH_FILE, "r") as f:
        return json.load(f)


def save_graph(graph):
    with open(GRAPH_FILE, "w") as f:
        json.dump(graph, f, indent=4)


def add_node(node):
    graph = load_graph()
    graph["nodes"].append(node)
    save_graph(graph)


def add_edge(edge):
    graph = load_graph()
    graph["edges"].append(edge)
    save_graph(graph)


def delete_node(node_id):
    graph = load_graph()

    graph["nodes"] = [
        node for node in graph["nodes"]
        if node["id"] != node_id
    ]

    graph["edges"] = [
        edge for edge in graph["edges"]
        if edge["source"] != node_id
        and edge["target"] != node_id
    ]

    save_graph(graph)


def delete_edge(source, target):
    graph = load_graph()

    graph["edges"] = [
        edge for edge in graph["edges"]
        if not (
            edge["source"] == source
            and edge["target"] == target
        )
    ]

    save_graph(graph)