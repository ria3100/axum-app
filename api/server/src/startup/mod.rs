use crate::{
    module::Modules,
    routes::{
        current_user::current_user,
        health::{hc, hc_db},
    },
};
use axum::{routing::get, AddExtensionLayer, Router};
use dotenv::dotenv;
use std::{net::SocketAddr, sync::Arc};

pub async fn startup(modules: Arc<Modules>) {
    let hc_router = Router::new().route("/", get(hc)).route("/db", get(hc_db));
    let user_router = Router::new().route("/:id", get(current_user));
    // let users_router = Router::new();
    // .route("/", post(create_user))
    // // .route("/:id", get(user_view));

    let app = Router::new()
        .nest("/hc", hc_router)
        .nest("/current_user", user_router)
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
