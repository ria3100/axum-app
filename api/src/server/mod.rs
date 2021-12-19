mod handlers;

// use crate::domains::posts::PostRepository;
// use crate::infrastructures::repository::DBConnectRepositoryImpl;
use axum::{
    routing::get,
    //  AddExtensionLayer,
    Router,
};
// use diesel::{
//     r2d2::{ConnectionManager, Pool},
//     PgConnection,
// };

#[tokio::main]
pub async fn run() {
    let app = Router::new()
        .route("/", get(|| async { "Hello, World!" }))
        .route("/health", get(handlers::get_health));
    // .route("/login", get(handlers::login))
    // .layer(AddExtensionLayer::new(AppContext::new()));

    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}

#[derive(Clone)]
pub struct AppContext {
    // pub pool: Pool<ConnectionManager<PgConnection>>,
}

impl AppContext {
    // pub fn new() -> AppContext {
    //     let manager =
    //         ConnectionManager::<PgConnection>::new("postgres://docker:docker@127.0.0.1/axum");
    //     let pool = Pool::builder().build(manager).unwrap();

    //     AppContext { pool }
    // }

    // pub fn posts_repository(&self) -> impl PostRepository {
    //     DBConnectRepositoryImpl {
    //         pool: Box::new(self.pool.to_owned()),
    //     }
    // }
}
