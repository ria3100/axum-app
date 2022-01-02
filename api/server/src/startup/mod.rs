use crate::{
    module::Modules,
    routes::{
        current_user::router as current_user_router, health::router as health_router,
        user::router as user_router,
    },
};
use axum::{AddExtensionLayer, Router};
use dotenv::dotenv;
use std::{net::SocketAddr, sync::Arc};

pub async fn startup(modules: Arc<Modules>) {
    let app = Router::new()
        .nest("/hc", health_router())
        .nest("/current_user", current_user_router())
        .nest("/user", user_router())
        .layer(AddExtensionLayer::new(modules));

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
