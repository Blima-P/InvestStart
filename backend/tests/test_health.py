from fastapi.testclient import TestClient

from app import __version__
from app.main import app

client = TestClient(app)


def test_health_returns_ok():
    response = client.get("/api/health")

    assert response.status_code == 200
    body = response.json()
    assert body["status"] == "ok"
    assert body["version"] == __version__
    assert "timestamp" in body


def test_openapi_docs_available():
    response = client.get("/openapi.json")

    assert response.status_code == 200
    assert "Não é recomendação de investimento" in response.json()["info"]["description"]
