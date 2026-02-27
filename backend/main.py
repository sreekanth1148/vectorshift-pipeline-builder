from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()   # 👈 MUST COME BEFORE @app.post

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pipeline(BaseModel):
    nodes: List[dict]
    edges: List[dict]

@app.get("/")
def root():
    return {"status": "Backend running"}

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    nodes = pipeline.nodes
    edges = pipeline.edges

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build adjacency list
    graph = {}
    for node in nodes:
        graph[node["id"]] = []

    for edge in edges:
        source = edge.get("source")
        target = edge.get("target")
        if source in graph:
            graph[source].append(target)

    # DFS cycle detection
    visited = set()
    rec_stack = set()

    def dfs(node):
        if node in rec_stack:
            return True
        if node in visited:
            return False

        visited.add(node)
        rec_stack.add(node)

        for neighbor in graph.get(node, []):
            if dfs(neighbor):
                return True

        rec_stack.remove(node)
        return False

    is_cycle = False
    for node in graph:
        if dfs(node):
            is_cycle = True
            break

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": not is_cycle
    }