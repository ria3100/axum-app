use axum::extract::Extension;
use diesel::{
    r2d2::{ConnectionManager, Pool},
    PgConnection,
};

use crate::domains::posts::Post;
use crate::usecases;
use diesel;

pub async fn get_health() -> &'static str {
    "OK"
}

pub async fn login(
    Extension(pool): Extension<Pool<ConnectionManager<PgConnection>>>,
) -> &'static str {
    let post = Post::create(String::from("foo1"), String::from("bar1"));

    usecases::posts::update_post(&post, pool).unwrap();

    "OK"
}
