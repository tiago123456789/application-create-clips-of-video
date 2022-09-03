# What's the project?

The project is simple solution to create clips of video, like twich.tv and youtube.

# Instructions to run the project

- Clone project
- Create directory **storage/clips** case not exist in root the project.
- Execute command **npm install** to install modules.
- Execute command **docker-compose up -d** to run redis in container docker.
- Execute command **npm run start:dev** to run http server.
- Execute command **npm run job:dev** to run jobs to handler process generate clips of video.

# Technologies:

- Node.js
- Javascript
- Bull + redis
- Docker
- ffmpeg