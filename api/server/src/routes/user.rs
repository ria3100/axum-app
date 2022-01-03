use std::sync::Arc;

use axum::{
    extract::{Extension, Path},
    http::StatusCode,
    response::IntoResponse,
    routing::get,
    Json, Router,
};
use tracing::error;

use crate::{
    model::user_view::JsonUserView,
    module::{Modules, ModulesExt},
};

#[tracing::instrument(skip(modules))]
async fn get_user(
    Path(screen_name): Path<String>,
    Extension(modules): Extension<Arc<Modules>>,
) -> Result<impl IntoResponse, StatusCode> {
    let res = modules
        .user_use_case()
        .find_by_screen_name(screen_name)
        .await;
    match res {
        Ok(user_view) => user_view
            .map(|user_view| {
                let json: JsonUserView = user_view.into();
                (StatusCode::OK, Json(json))
            })
            .ok_or_else(|| StatusCode::NOT_FOUND),
        Err(err) => {
            error!("Unexpected error: {:?}", err);
            Err(StatusCode::INTERNAL_SERVER_ERROR)
        }
    }
}

pub fn router() -> Router {
    Router::new().route("/:id", get(get_user))
}
