# syntax=docker/dockerfile:1
ARG node_version="18-alpine"
FROM node:${node_version}

ARG work_dir="mortgage-calculator"
RUN mkdir $work_dir
WORKDIR /${work_dir}
COPY . ./

RUN npm install -g @angular/cli
RUN ["npm", "install"]
ENV PORT=4200
ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0"]
EXPOSE ${PORT}
