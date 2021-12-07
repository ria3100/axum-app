use crate::domains::posts::{Post, PostId, PostRepository};
use crate::infrastructures::repository::posts::PostRepositoryImpl;
use failure::Error;

use diesel::PgConnection;

// pub fn get_post_list(repository: impl PostRepository) -> Result<Vec<Post>, Error> {
//     repository.list()
// }

// pub fn get_post(repository: impl PostRepository, post_id: PostId) -> Result<Post, Error> {
//     repository.find_by_id(post_id)
// }

// pub fn post_post(repository: impl PostRepository, post: &Post) -> Result<(), Error> {
//     repository.insert(post)
// }

pub fn update_post(post: &Post, conn: PgConnection) -> Result<(), Error> {
    PostRepositoryImpl::update(post, conn)
}

// pub fn delete_post(repository: impl PostRepository, post_id: PostId) -> Result<(), Error> {
//     let post = repository.find_by_id(post_id)?;
//     repository.delete(&post)
// }