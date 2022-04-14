https://docs.docker.com/engine/install/ubuntu/

https://docs.docker.com/engine/install/linux-postinstall/


docker build . -t om-pwa


docker run -p 127.0.0.1:8080:8080/tcp -d pwa

docker ps

docker logs <container_id>

docker stop <container_id>

docker exec -it <container id> /bin/bash


docker images

docker image rm <repository>