mod handlers;

use axum::{routing::get, AddExtensionLayer, Router};
use diesel::prelude::*;
use diesel::r2d2::{ConnectionManager, Pool};

#[tokio::main]
pub async fn run() {
    let manager =
        ConnectionManager::<PgConnection>::new("postgres://docker:docker@127.0.0.1/axum_db");
    let pool = Pool::builder().build(manager).unwrap();

    let app = Router::new()
        .route("/", get(|| async { "Hello, World!" }))
        .route("/health", get(handlers::get_health))
        .route("/login", get(handlers::login))
        .layer(AddExtensionLayer::new(pool));

    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
