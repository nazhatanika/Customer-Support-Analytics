docker compose up -d
docker compose ps
docker compose exec db psql -U tickets -d tickets -c "SELECT version();"
docker compose exec cache redis-cli ping