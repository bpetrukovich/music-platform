dev: docker-compose.yaml docker-compose.dev.yaml 
	docker compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d
	docker compose attach api
prod: docker-compose.yaml 
	docker compose up -d
down:
	docker compose down
