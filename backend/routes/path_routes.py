from flask import Blueprint, request, jsonify

from graph_manager import load_graph
from dijkstra import dijkstra

path_bp = Blueprint(
    "path",
    __name__
)


@path_bp.route(
    "/shortest_path",
    methods=["POST"]
)
def shortest_path():

    data = request.json

    start = data["start"]
    end = data["end"]

    graph = load_graph()

    result = dijkstra(
        graph,
        start,
        end
    )

    return jsonify(result)