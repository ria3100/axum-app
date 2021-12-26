use crate::{
    module::Modules,
    routes::health::{hc, hc_db},
};
use axum::{routing::get, AddExtensionLayer, Router};
use dotenv::dotenv;
use std::{net::SocketAddr, sync::Arc};

pub async fn startup(modules: Arc<Modules>) {
    let hc_router = Router::new().route("/", get(hc)).route("/db", get(hc_db));
    // let stocks_router = Router::new();
    // // .route("/", post(create_stock))
    // // .route("/:id", get(stock_view));

    let app = Router::new()
        .nest("/hc", hc_router)
        // .nest("/stocks", stocks_router)
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
