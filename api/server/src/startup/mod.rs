use crate::{
    module::Modules,
    routes::{
        current_user::router as current_user_router, health::router as health_router,
        user::router as user_router,
    },
};
use axum::{http::Method, AddExtensionLayer, Router};
use dotenv::dotenv;
use std::{net::SocketAddr, sync::Arc};
use tower_http::cors::{CorsLayer, Origin};

pub async fn startup(modules: Arc<Modules>) {
    let cors = CorsLayer::new()
        .allow_origin(Origin::exact("http://localhost:3000".parse().unwrap()))
        .allow_methods(vec![Method::GET]);

    let app = Router::new()
        .nest("/hc", health_router())
        .nest("/current_user", current_user_router())
        .nest("/user", user_router())
        .layer(AddExtensionLayer::new(modules))
        .layer(cors);

    let addr = SocketAddr::from(([127, 0, 0, 1], 8080));

    tracing::info!("Server listening on {}", addr);

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap_or_else(|_| panic!("Server cannot launch!"))
}

pub fn init_app() {
    dotenv().ok();
    tracing_subscriber::fmt::init();
}
