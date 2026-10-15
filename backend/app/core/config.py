from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Lê as configurações do .env."""

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    app_name: str = "InvestStart API"
    environment: str = "development"
    database_url: str = "sqlite:///./investstart.db"
    cors_origins: list[str] = ["http://localhost:5173"]
    cache_ttl_minutes: int = 15

    brapi_token: str | None = None
    coingecko_api_key: str | None = None


@lru_cache
def get_settings() -> Settings:
    return Settings()
