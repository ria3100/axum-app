use axum::extract::Extension;
use diesel::PgConnection;

use diesel::prelude::*;

use super::super::usecases;
use crate::domains::posts::{Post, PostId, PostRepository};

// use diesel::r2d2::{ConnectionManager, Pool};

// use crate::{
//     config::constants::BEARER,
//     dto::{LoginInput, RegisterInput, TokenPayload},
//     error::{ApiResult, Error},
//     graphql::AppSchema,
//     model::User,
//     service::AuthService,
//     utils::{jwt, validate_payload},
// };

pub async fn get_health() -> &'static str {
    "OK"
}

pub async fn login() -> &'static str {
    let conn = PgConnection::establish("postgres://docker:docker@127.0.0.1/axum_db")
        .expect("Error connecting ");
    let post = Post::create(String::from("foo1"), String::from("bar1"));
    // validate_payload(&input)?;
    // let user = AuthService::sign_in(input, &pool)
    //     .await
    //     .map_err(|_| Error::WrongCredentials)?;
    usecases::posts::update_post(&post, conn);
    // usecases::posts::update_post(post: &Post, conn: PgConnection);

    "OK"
}
