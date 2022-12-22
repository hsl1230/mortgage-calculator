# syntax=docker/dockerfile:1
ARG node_version="18-alpine"
FROM node:${node_version}

ARG work_dir="mortgage-calculator"
RUN mkdir $work_dir
WORKDIR /${work_dir}
COPY . ./

RUN npm install express
ENV PORT=8081
ENTRYPOINT ["node", "server.js"]
EXPOSE ${PORT}
