FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1

WORKDIR /app

# Não roda como root dentro do container
RUN useradd --create-home --uid 1000 appuser

COPY pyproject.toml README.md ./
COPY app ./app
RUN pip install .

USER 1000

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
