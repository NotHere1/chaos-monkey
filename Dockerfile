FROM quramy/node-nightmare:latest
ENV WORK_DIR /opt/chaos-monkey
ENV DEBUG=nigthmare
WORKDIR $WORK_DIR
ADD . $WORK_DIR
RUN apt-get install parallel && npm install
COPY entrypoint /
RUN chmod +x /entrypoint
ENTRYPOINT ["/entrypoint"]
CMD parallel -j150% DEBUG=nightmare node app.js ::: 1 2