FROM --platform=$BUILDPLATFORM node:18.12-alpine3.16 AS builder
ENV CGO_ENABLED=0
WORKDIR /backend
COPY backend/package*.json .
RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm ci
COPY backend/. .

FROM --platform=$BUILDPLATFORM node:18.12-alpine3.16 AS client-builder
WORKDIR /ui
# cache packages in layer
COPY ui/package.json /ui/package.json
COPY ui/package-lock.json /ui/package-lock.json
RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm ci
# install
COPY ui /ui
RUN npm run build

FROM --platform=$BUILDPLATFORM node:18.12-alpine3.16
LABEL org.opencontainers.image.title="Digma Continuous Feedback" \
    org.opencontainers.image.description="Your code observability data" \
    org.opencontainers.image.vendor="Digma Inc." \
    com.docker.desktop.extension.api.version=">= 0.3.0" \
    com.docker.extension.screenshots="[{\"alt\": \"Discover code assets and their runtime behavior \", \"url\": \"https://media-public-1.s3.eu-west-1.amazonaws.com/extension_screenshot.png\"}]" \
    com.docker.extension.detailed-description="<h3>Continuous Feedback for Code Clarity</h3><p>Digma collects data from applications running inside your containers and analyzes their runtime behavior.</p>" \
    com.docker.extension.publisher-url="https://digma.ai" \
    com.docker.extension.additional-urls="[{\"alt\": \"Digma IntelliJ Plugin\", \"title\":\"Jetbrain IDEA Plugin\", \"url\": \"https://plugins.jetbrains.com/plugin/19470-digma-continuous-feedback\"}]" \
    com.docker.extension.changelog="<p>Extension changelog<ul><li>Updated 3rd party images versions</li><li>Fixed insight throttling issue</li></ul></p>" \
    com.docker.desktop.extension.icon="https://media-public-1.s3.eu-west-1.amazonaws.com/digma.svg" \
    com.docker.extension.categories="cloud-development,testing-tools"

COPY --from=builder /backend backend
COPY docker-compose.yaml .
COPY metadata.json .
COPY digma.svg .
COPY --from=client-builder /ui/build ui
CMD ["node", "backend/server.js", "/run/guest-services/backend.sock"]
