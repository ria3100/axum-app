mod handlers;

use crate::domains::posts::PostRepository;
use axum::{routing::get, AddExtensionLayer, Router};
use diesel::prelude::*;
use diesel::r2d2::{ConnectionManager, Pool};
// use dotenv::dotenv;
// use std::env;

#[tokio::main]
pub async fn run() {
    // let manager =
    //     ConnectionManager::<PgConnection>::new("postgres://docker:docker@127.0.0.1/axum_db");
    // let pg_pool = Pool::builder()
    //     .build(manager)
    //     .expect("Failed to create pool");
    // let conn =
    //     PgConnection::establish("postgres://docker:docker@127.0.0.1/axum_db").expect(&format!(
    //         "Error connecting to {}",
    //         "postgres://docker:docker@127.0.0.1/axum_db"
    //     ));

    let conn = PgConnection::establish("postgres://docker:docker@127.0.0.1/axum_db")
        .expect(&format!("Error connecting to"));

    let app = Router::new()
        .route("/", get(|| async { "Hello, World!" }))
        .route("/health", get(handlers::get_health))
        .route("/login", get(handlers::login));
    // .layer(AddExtensionLayer::new(conn));
    // .layer(AddExtensionLayer::new(RequestContext::new()));

    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}

// #[derive(Clone)]
// pub struct RequestContext {
//     pool: Pool<ConnectionManager<PgConnection>>,
// }

// impl RequestContext {
//     pub fn new() -> RequestContext {
//         // dotenv().ok();
//         // let database_url = env::var("DATABASE_URL").expect("DATABASE_URL is not set");
//         let database_url = "postgres://docker:docker@127.0.0.1/axum_db";
//         let manager = ConnectionManager::<PgConnection>::new(database_url);
//         let pool = Pool::builder()
//             .build(manager)
//             .expect("Failed to create DB connection pool.");

//         RequestContext { pool }
//     }

//     pub fn document_repository(&self) -> impl PostRepository {
//         use crate::infrastructures::repository::posts::PostRepositoryImpl;

//         PostRepositoryImpl {
//             pool: Box::new(self.pool.to_owned()),
//         }
//     }
// }
