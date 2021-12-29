use async_trait::async_trait;

use crate::model::{
    user::{NewUser, User},
    Id,
};

#[async_trait]
pub trait UserRepository {
    async fn find(&self, uid: &Id<User>) -> anyhow::Result<Option<User>>;
    async fn insert(&self, source: NewUser) -> anyhow::Result<()>;
}
