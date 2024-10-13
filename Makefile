dev: docker-compose.yaml docker-compose.dev.yaml 
	docker compose -f docker-compose.yaml -f docker-compose.dev.yaml up
devd: docker-compose.yaml docker-compose.dev.yaml 
	docker compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d
prod: docker-compose.yaml 
	docker compose up -d
down:
	docker compose down
devbuild:
	docker compose -f docker-compose.yaml -f docker-compose.dev.yaml up --build
dbuild:
	docker compose build

