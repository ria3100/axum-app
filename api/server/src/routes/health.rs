use axum::{response::IntoResponse, routing::get, Router};

async fn health() -> impl IntoResponse {
    tracing::debug!("Access health check endpoint from user!");
    "Ok"
}

pub fn router() -> Router {
    Router::new().route("/", get(health))
}
