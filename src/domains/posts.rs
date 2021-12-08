use super::Id;
use diesel::{
    r2d2::{ConnectionManager, Pool},
    PgConnection,
};
use failure::Error;

pub type PostId = Id<Post>;

#[derive(Debug, Clone)]
pub struct Post {
    pub id: PostId,
    pub title: String,
    pub body: String,
    // pub published: bool,
}

impl Post {
    pub fn create(title: String, body: String) -> Self {
        Self {
            id: Default::default(),
            title: title,
            body: body,
            // published: false,
        }
    }
}

pub trait PostRepository {
    // fn find_by_id(
    //     post_id: PostId,
    //     pool: Pool<ConnectionManager<PgConnection>>,
    // ) -> Result<Post, Error>;
    // fn list(pool: Pool<ConnectionManager<PgConnection>>) -> Result<Vec<Post>, Error>;
    fn insert(post: &Post, pool: Pool<ConnectionManager<PgConnection>>) -> Result<(), Error>;
    fn update(post: &Post, pool: Pool<ConnectionManager<PgConnection>>) -> Result<(), Error>;
    // fn delete(post: &Post, pool: Pool<ConnectionManager<PgConnection>>) -> Result<(), Error>;
}
