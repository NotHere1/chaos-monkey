FROM quramy/node-nightmare:latest
ENV WORK_DIR /opt/chaos-monkey
ENV DEBUG=nigthmare
WORKDIR $WORK_DIR
ADD . $WORK_DIR
RUN npm install
COPY entrypoint /
RUN chmod +x /entrypoint
ENTRYPOINT ["/entrypoint"]
CMD DEBUG=nightmare node app.js