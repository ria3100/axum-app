use crate::domains::posts::Post;
use crate::server::AppContext;
use crate::usecases;
use axum::extract::Extension;

pub async fn get_health() -> &'static str {
    "OK"
}

pub async fn login(Extension(app_context): Extension<AppContext>) -> &'static str {
    let post = Post::create(String::from("foo3"), String::from("bar3"));

    usecases::posts::update_post(app_context.posts_repository(), &post).unwrap();

    "OK"
}
