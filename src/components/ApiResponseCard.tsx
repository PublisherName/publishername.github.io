export function ApiResponseCard() {
  return (
    <div
      className="api-card"
      role="img"
      aria-label="Example API response: status 200, endpoint /api/projects, five projects, cached true"
    >
      <div className="api-card__header">
        <span className="api-card__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>GET /api/projects</span>
        <span className="api-card__status">200 OK</span>
      </div>
      <pre className="api-card__body">
        <code>{`{
  "status": 200,
  "endpoint": "/api/projects",
  "count": 5,
  "cached": true
}`}</code>
        <span className="api-card__caret" aria-hidden="true" />
      </pre>
    </div>
  );
}
