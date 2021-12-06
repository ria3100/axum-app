mod handlers;

use crate::server::handlers::*;
use axum::{routing::get, Router};

#[tokio::main]
pub async fn run() {
    // // build our application with a single route
    let app = Router::new()
        .route("/", get(|| async { "Hello, World!" }))
        .route("/health", get(get_health));

    // run it with hyper on localhost:3000
    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
