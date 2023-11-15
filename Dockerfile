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
    org.opencontainers.image.description="Java code runtime linter for complex applications" \
    org.opencontainers.image.vendor="Digma Inc." \
    com.docker.desktop.extension.api.version=">= 0.2.3" \
    com.docker.extension.screenshots="[{\"alt\": \"Discover code assets and their runtime behavior \", \"url\": \"https://media-public-1.s3.eu-west-1.amazonaws.com/extension_screenshot.png\"}]" \
    com.docker.extension.detailed-description="<h3>Continuous Feedback for Code</h3><a href="https://www.producthunt.com/posts/digma-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-digma&#0045;ai"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=416271&theme=light"  width="250" height="54" /></a><p>Digma collects data from applications running locally or inside your containers and lints their runtime behavior. It is able to find issues, code smells, performance degradations and provide more context to making risky changes.</p><p>The Digma IDE plugin is an <a href="https://digma.ai/blog/introducing-the-digma-jetbrains-plugin/">IntelliJ plugin</a> that provides detailed information in your code itself as <a href="https://digma.ai/blog/ci-cd-cf-the-devops-toolchains-missing-link/">Continuous Feedback</a> for developers who can explore hidden issues and design better applications. Digma provides tracing visualization using <a href="https://digma.ai/blog/jaeger-distributed-tracing-with-java-an-introduction/">Jaeger</a> and shows linting highlights, advanced insights and even live data.</p><p>Digma currently supports Java applications with additional coding languages to be added soon.</p>" \
    com.docker.extension.publisher-url="https://digma.ai" \
    com.docker.extension.additional-urls="[{\"alt\": \"Digma\", \"title\":\"Digma Runtime Linter\", \"url\": \"https://digma.ai\"},{\"alt\": \"Digma Slack Group\", \"title\":\" Continous Feedback Slack Channel\", \"url\": \"https://join.slack.com/t/continuous-feedback/shared_invite/zt-1hk5rbjow-yXOIxyyYOLSXpCZ4RXstgA\"},{\"alt\": \"Digma IntelliJ Plugin\", \"title\":\"Jetbrain IDEA Plugin\", \"url\": \"https://plugins.jetbrains.com/plugin/19470-digma-continuous-feedback\"}]" \
    com.docker.extension.changelog="<p>Extension changelog<ul><li>Bug fixes</li><li>Backend version bump to 0.2.171</li></ul></p>" \
    com.docker.desktop.extension.icon="https://media-public-1.s3.eu-west-1.amazonaws.com/digma.svg" \
    com.docker.extension.categories="cloud-development,testing-tools"

COPY --from=builder /backend backend
COPY docker-compose.yaml .
COPY metadata.json .
COPY digma.svg .
COPY --from=client-builder /ui/build ui
CMD ["node", "backend/server.js", "/run/guest-services/backend.sock"]
