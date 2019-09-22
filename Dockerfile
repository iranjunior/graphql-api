FROM node

ENV HOME=/home/app
ENV PORT=4000
COPY . ${HOME}
WORKDIR ${HOME}
RUN yarn
# RUN npm install yarn --global
# RUN npm -v
# RUN npm dev
EXPOSE ${PORT}:${PORT}

# CMD [ "yarn" ]
CMD [ "yarn", "dev" ]
