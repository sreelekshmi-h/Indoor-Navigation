import requests

response = requests.post(
    "http://127.0.0.1:5000/shortest_path",
    json={
        "start": "room101",
        "end": "room204"
    }
)

print(response.json())