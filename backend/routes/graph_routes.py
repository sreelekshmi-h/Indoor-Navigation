from flask import Blueprint, request, jsonify

from graph_manager import (
    load_graph,
    add_node,
    add_edge,
    delete_node,
    delete_edge
)

graph_bp = Blueprint(
    "graph",
    __name__
)


@graph_bp.route("/graph", methods=["GET"])
def get_graph():

    return jsonify(load_graph())


@graph_bp.route("/add_node", methods=["POST"])
def create_node():

    data = request.json

    node = {
        "id": data["id"],
        "x": data["x"],
        "y": data["y"]
    }

    add_node(node)

    return jsonify({
        "message": "Node added"
    })


@graph_bp.route("/add_edge", methods=["POST"])
def create_edge():

    data = request.json

    edge = {
        "source": data["source"],
        "target": data["target"],
        "weight": data["weight"]
    }

    add_edge(edge)

    return jsonify({
        "message": "Edge added"
    })


@graph_bp.route("/node", methods=["DELETE"])
def remove_node():

    node_id = request.json["id"]

    delete_node(node_id)

    return jsonify({
        "message": "Node deleted"
    })


@graph_bp.route("/edge", methods=["DELETE"])
def remove_edge():

    source = request.json["source"]
    target = request.json["target"]

    delete_edge(source, target)

    return jsonify({
        "message": "Edge deleted"
    })