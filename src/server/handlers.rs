use axum::extract::Extension;
use diesel::PgConnection;

use diesel::r2d2::{ConnectionManager, Pool};

use crate::domains::posts::Post;
use crate::usecases;
use diesel;

pub async fn get_health() -> &'static str {
    "OK"
}

pub async fn login(
    Extension(pool): Extension<Pool<ConnectionManager<PgConnection>>>,
) -> &'static str {
    let pool = pool.clone();
    let conn = pool.get().unwrap();

    let post = Post::create(String::from("foo0"), String::from("bar0"));

    usecases::posts::update_post(&post, conn).unwrap();

    "OK"
}
