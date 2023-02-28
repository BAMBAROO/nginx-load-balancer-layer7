requires: 
- docker
- nginx
- nodejs

step 1: make a docker file "docker build -t nameimage .
step 2: make first container with "docker run -d -p 2222:8080 -e ENV="messi" -e PORT="2222" nameimage"
step 3: make second container with "docker run -d -p 3333:8080 -e ENV="ronaldo" -e PORT="3333" nameimage"
step 3: make third container with "docker run -d -p 4444:8080 -e ENV="batman" -e PORT="4444" nameimage"
step 3: make fourth container with "docker run -d -p 5555:8080 -e ENV="superman" -e PORT="5555" nameimage"
step 6: run the nginx on your pc with the configuration